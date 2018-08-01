const app = require('./app');
const request = require('supertest');
const chai = require('chai');
const should = chai.should();

describe('Echo Route', function() {
  it('should say hello', function(done) {
    request(app)
      .get('/api/echo/abc')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        res.body.should.have.property('message').and.be.equal('Hello, abc!');
        done();
      });
  });
});
