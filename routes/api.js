'use strict';

const SudokuSolver = require('../controllers/sudoku-solver.js');

module.exports = function (app) {

  let solver = new SudokuSolver();

  app.route('/api/check')
    .post((req, res) => {
      let { puzzle, coordinate, value } = req.body

      // Required field(s)
      if (!coordinate || !value || !puzzle) {
        res.json({ "error": "Required field(s) missing" })
        return
      }

      // puzzle must be 81 characters and not contain invalid chracters
      if (solver.validate(puzzle).error) {
        res.json(solver.validate(puzzle));
        return
      }

      // Invalid coordinate
      if (!/^([a-i]{1}[1-9]{1})$/i.test(coordinate)) {
        res.json({ "error": "Invalid coordinate" });
        return
      }

      // Invalid value
      if (!/^[1-9]{1}$/.test(value)) {
        res.json({ "error": "Invalid value" });
        return
      }

      // Sudoku Coordinate Validation
      let result = { "valid": true };
      let row = coordinate[0].toUpperCase()
      let column = coordinate[1]

      let isRow = solver.checkRowPlacement(puzzle, row, column, value)
      let isColumn = solver.checkColPlacement(puzzle, row, column, value)
      let isRegion = solver.checkRegionPlacement(puzzle, row, column, value)

      if (!isRow || !isColumn || !isRegion) {
        result = { "valid": false, "conflict": [] }
        !isRow && result.conflict.push("row")
        !isColumn && result.conflict.push("column")
        !isRegion && result.conflict.push("region")
      }

      res.json(result)

    });

  app.route('/api/solve')
    .post((req, res) => {
      let puzzle = req.body.puzzle
      if (!puzzle) {
        res.json({ "error": "Required field missing" });
        return
      };

      let solution = solver.solve(puzzle)
      if (!solution) {
        res.json({ "error": "Puzzle cannot be solved" });
        return
      };

      res.json(solution.error ? solution : { solution })
    });
};
