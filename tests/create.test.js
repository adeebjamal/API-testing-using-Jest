const request = require('supertest');
const app = require('../server');

describe('POST /users', () => {
    it('should create a new user with valid input', async () => {
        const newUser = {
            name: 'Test User',
            email: 'testuser@example.com',
            password: 'securepassword',
            confirmPassword: 'securepassword',
        };

        const response = await request(app).post('/users').send(newUser);

        expect(response.status).toBe(201);
        expect(response.body.message).toBe('User added to the database.');
        expect(response.body.details.name).toBe(newUser.name);
        expect(response.body.details.email).toBe(newUser.email);
    });

    it('should return a 400 error for missing fields', async () => {
        const invalidUser = {
            email: 'testuser@example.com',
            password: 'securepassword',
            confirmPassword: 'securepassword',
        };

        const response = await request(app).post('/users').send(invalidUser);

        expect(response.status).toBe(400);
        expect(response.body.message).toBe('Please provide all the required fields. i.e name, email, and password.');
    });

    it('should return a 400 error for password mismatch', async () => {
        const mismatchedPasswordUser = {
            name: 'Test User',
            email: 'testuser@example.com',
            password: 'securepassword',
            confirmPassword: 'differentpassword',
        };

        const response = await request(app).post('/users').send(mismatchedPasswordUser);

        expect(response.status).toBe(400);
        expect(response.body.message).toBe("Passwords doesn't match.");
    });

    it('should return a 400 error for weak password', async () => {
        const weakPasswordUser = {
            name: 'Test User',
            email: 'testuser@example.com',
            password: 'weak',
            confirmPassword: 'weak',
        };

        const response = await request(app).post('/users').send(weakPasswordUser);

        expect(response.status).toBe(400);
        expect(response.body.message).toBe('Password is too weak.');
    });

    it('should return a 400 error for duplicate email', async () => {

        const duplicateUser = {
            name: 'Another User',
            email: 'testuser@example.com', // Duplicate email
            password: 'differentpassword',
            confirmPassword: 'differentpassword',
        };

        const response = await request(app).post('/users').send(duplicateUser);

        expect(response.status).toBe(400);
        expect(response.body.message).toBe('User with entered email already exists.');
    });
});