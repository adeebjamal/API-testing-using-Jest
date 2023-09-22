const request = require('supertest');
const app = require('../server');

describe('GET /users', () => {
    it('should get all users', async () => {
        const response = await request(app).get('/users');

        expect(response.status).toBe(200);
        expect(response.body.users).toBeDefined();
        expect(response.body.users.length).toBeGreaterThan(0);
    });
});

describe('GET /users/:email', () => {
    it('should get a user by email', async () => {
        const userEmail = 'testuser@example.com'; // Existing user's email

        const response = await request(app).get(`/users/${userEmail}`);

        expect(response.status).toBe(200);
        expect(response.body.user).toBeDefined();
        expect(response.body.user.email).toBe(userEmail);
    });

    it('should return 204 if user is not found', async () => {
        const nonExistentEmail = 'nonexistent@example.com';

        const response = await request(app).get(`/users/${nonExistentEmail}`);

        expect(response.status).toBe(404);
        expect(response.body.message).toBe('User not found.');
    });
});