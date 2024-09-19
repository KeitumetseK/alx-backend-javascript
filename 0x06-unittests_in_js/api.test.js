const supertest = require('supertest');
const { expect } = require('chai');
const app = require('./api');

describe('Cart page', () => {
  it('Correct status code when :id is a number', (done) => {
    supertest(app)
      .get('/cart/12')
      .expect(200)
      .end((err, res) => {
        expect(res.text).to.equal('Payment methods for cart 12');
        done();
      });
  });

  it('Correct status code when :id is NOT a number', (done) => {
    supertest(app)
      .get('/cart/hello')
      .expect(404, done);
  });
});

