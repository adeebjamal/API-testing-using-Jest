const request = require('supertest');
const app = require('../server');
const USER = require("../Models/user");

describe('DELETE /users/:email', () => {
    const existingUserEmail = 'testuser@example.com';

    it('should delete an existing user by email', async () => {
        const response = await request(app).delete(`/users/${existingUserEmail}`);

        expect(response.status).toBe(200);
        expect(response.body.message).toBe('User deleted successfully.');

        // Optionally, you can check if the user is deleted from the database
        const deletedUser = await USER.findOne({ email: existingUserEmail });
        expect(deletedUser).toBeNull();
    });

    it('should return 404 if user is not found', async () => {
        const nonExistentUserEmail = 'nonexistent@example.com';

        const response = await request(app).delete(`/users/${nonExistentUserEmail}`);

        expect(response.status).toBe(404);
        expect(response.body.message).toBe('User not found.');
    });
});