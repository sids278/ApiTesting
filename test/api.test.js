const supertest = require('supertest');
const app = require('../app.js'); // Replace with the correct path to your app.js file
const { expect } = require('chai');

const request = supertest(app);

describe('API Tests', () => {
    it('should return a 200 status code for a GET request', (done) => {
        request.get('/get')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });

    // Add more test cases as needed
});
