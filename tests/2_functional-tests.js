const chai = require("chai");
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server');
const tests = require("./tests2");

chai.use(chaiHttp);

suite('Functional Tests', function () {
  suite('/api/solve', () => {
    test('Solve a puzzle with missing puzzle string', (done) => {
       chai.request(server)
         .keepOpen()
         .post('/api/solve')
         .send(tests[0][0])
         .end((err, res) => {
           assert.equal(res.status, 200);
           assert.equal(res.body.solution, tests[0][1]);
           done();
         });
     });
  
    test('Solve a puzzle with missing puzzle string', (done) => {
      chai.request(server)
        .keepOpen()
        .post('/api/solve')
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.deepEqual(res.body, tests[1][0]);
          done();
        });
    });

    test('Solve a puzzle with invalid characters', (done) => {
      chai.request(server)
        .keepOpen()
        .post('/api/solve')
        .send(tests[2][0])
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.deepEqual(res.body, tests[2][1]);
          done();
        });
    });

    test('Solve a puzzle with incorrect length', (done) => {
      chai.request(server)
        .keepOpen()
        .post('/api/solve')
        .send(tests[3][0])
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.deepEqual(res.body, tests[3][1]);
          done();
        });
    });

    test('Solve a puzzle that cannot be solved', (done) => {
      chai.request(server)
        .keepOpen()
        .post('/api/solve')
        .send(tests[4][0])
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.deepEqual(res.body, tests[4][1]);
          done();
        });
    });
  });

  suite('/api/check', () => {
    test('Check a puzzle placement with all fields', (done) => {
      chai.request(server)
        .keepOpen()
        .post('/api/check')
        .send(tests[5][0])
        .end((err, res) => {
          assert.equal(res.status, 200)
          assert.deepEqual(res.body, tests[5][1])
          assert.isTrue(true);
          done();
        });
    });

    test('Check a puzzle placement with single placement conflict', (done) => {
      chai.request(server)
        .keepOpen()
        .post('/api/check')
        .send(tests[6][0])
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.deepEqual(res.body, tests[6][1]);
          done();
        });
    });

    test('Check a puzzle placement with multiple placement conflicts',  (done) => {
      chai.request(server)
        .keepOpen()
        .post('/api/check')
        .send(tests[7][0])
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.deepEqual(res.body, tests[7][1]);
          done();
        });
    });

    test('Check a puzzle placement with all placement conflicts', (done) => {
      chai.request(server)
        .keepOpen()
        .post('/api/check')
        .send(tests[8][0])
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.deepEqual(res.body, tests[8][1]);
          done();
        });
    });

    test('Check a puzzle placement with missing required fields', (done) => {
      chai.request(server)
        .keepOpen()
        .post('/api/check')
        .send(tests[9][0])
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.deepEqual(res.body, tests[9][1]);
          done();
        });
    });
    
    test('Check a puzzle placement with invalid characters', (done) => {
      chai.request(server)
        .keepOpen()
        .post('/api/check')
        .send(tests[10][0])
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.deepEqual(res.body, tests[10][1]);
          done();
        });
    });

    test('Check a puzzle placement with incorrect length', (done) => {
      chai.request(server)
        .keepOpen()
        .post('/api/check')
        .send(tests[11][0])
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.deepEqual(res.body, tests[11][1]);
          done();
        });
    });

    test('Check a puzzle placement with invalid placement coordinate', (done) => {
      chai.request(server)
        .keepOpen()
        .post('/api/check')
        .send(tests[12][0])
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.deepEqual(res.body, tests[12][1]);
          done();
        });
    });

    test('Check a puzzle placement with invalid placement value', (done) => {
      chai.request(server)
        .keepOpen()
        .post('/api/check')
        .send(tests[13][0])
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.deepEqual(res.body, tests[13][1]);
          done();
        });
    });
    
  });
});

