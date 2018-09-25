const request = require('supertest');
const expect = require('expect');
const app = require('./server').app;

describe('Server:', () => {

    describe('GET /', () => {
        it('should return hello world response', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page not found'
                    });
                })
                .end(function(err, res) {
                    if (err) return done(err);

                    done();
                });
        });
    });

    describe('GET /users', () => {
        // For user
        it('Should return my user object from an array', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Mahesh',
                        age: 29
                    });
                })
                .end(done);
        });
    });
});