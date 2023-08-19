const chai = require('chai');
const assert = chai.assert;
const tests = require("./tests1");

const Solver = require('../controllers/sudoku-solver.js');
let solver = new Solver()

suite('Unit Tests', () => {
  suite('Puzzle Validation', () => {
    test('a valid puzzle string of 81 characters', () => {
      assert.isTrue(solver.validate(tests[0]))
    });

    test('Logic handles a puzzle string with invalid characters (not 1-9 or .)', () => {
      assert.deepEqual(solver.validate(tests[1][0]), tests[1][1])
    });

    test('Logic handles a puzzle string that is not 81 characters in length', () => {
      assert.deepEqual(solver.validate(tests[2][0]), tests[2][1])
    });
  });

  suite('Placement Validation', () => {
    test('Logic handles a valid row placement', () => {
      assert.isTrue(solver.checkRowPlacement(...tests[3]))
    });

    test('Logic handles a invalid row placement', () => {
      assert.isFalse(solver.checkRowPlacement(...tests[4]))
    });

    test('Logic handles a valid column placement', () => {
      assert.isTrue(solver.checkColPlacement(...tests[5]))
    });

    test('Logic handles a invalid column placement', () => {
      assert.isFalse(solver.checkColPlacement(...tests[6]))
    });

    test('Logic handles a valid region (3x3 grid) placement', () => {
      assert.isTrue(solver.checkRegionPlacement(...tests[7]))
    });

    test('Logic handles a invalid region (3x3 grid) placement', () => {
      assert.isFalse(solver.checkRegionPlacement(...tests[8]))
    });
  });

  suite('Solver Validation', () => {
    test('Valid puzzle strings pass the solver', () => {
      assert.isTrue(solver.solver(tests[9]))
    });

    test('Invalid puzzle strings fail the solver', () => {
      assert.isFalse(solver.solver(tests[10]))
    });

    test('Solver returns the expected solution for an incomplete puzzle', () => {
      assert.equal(solver.solve(tests[11][0]), tests[11][1])
    });
  });
});
