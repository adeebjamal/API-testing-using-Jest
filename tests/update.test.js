const request = require('supertest');
const app = require('../server');
const USER = require("../Models/user");

describe('PUT /users/:id', () => {
    let existingUserId = '';

    it('should update user data with valid input', async () => {
        const user = await USER.findOne();
        existingUserId = user._id;
        const updatedUserData = {
            name: 'Updated User',
            email: 'updateduser@example.com',
            password: 'updatedpassword',
        };

        const response = await request(app).put(`/users/${existingUserId}`).send(updatedUserData);

        expect(response.status).toBe(200);
        expect(response.body.message).toBe('User updated successfully.');
        expect(response.body.details.name).toBe(updatedUserData.name);
        expect(response.body.details.email).toBe(updatedUserData.email);
    });

    it('should return 404 if user is not found', async () => {
        const nonExistentUserId = '650db88616695a66b865a635';

        const response = await request(app).put(`/users/${nonExistentUserId}`)
            .send({
                name: 'Updated User',
                email: 'updateduser@example.com',
                password: 'updatedpassword',
            });

        expect(response.status).toBe(404);
        expect(response.body.message).toBe('User not found.');
    });
});

describe('PATCH /users/:id', () => {
    let existingUserId = '';

    it('should partially update user data with valid input', async () => {
        const user = await USER.findOne();
        existingUserId = user._id;
        const partialUserData = {
            name: 'Updated Name',
            email: 'updatedemail@example.com',
        };

        const response = await request(app).patch(`/users/${existingUserId}`).send(partialUserData);

        expect(response.status).toBe(200);
        expect(response.body.message).toBe('User updated successfully.');
        expect(response.body.details.name).toBe(partialUserData.name);
        expect(response.body.details.email).toBe(partialUserData.email);
    });

    it('should return 404 if user is not found', async () => {
        const nonExistentUserId = '650db88616695a66b865a635';

        const response = await request(app).patch(`/users/${nonExistentUserId}`)
            .send({
                name: 'Updated Name',
                email: 'updatedemail@example.com',
            });

        expect(response.status).toBe(404);
        expect(response.body.message).toBe('User not found.');
    });
});