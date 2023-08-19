class SudokuSolver {
  replaceNum(puzzleString, num, index) {
    let firstPart = puzzleString.substr(0, index);
    let lastPart = puzzleString.substr(index + 1);

    let newString = firstPart + num + lastPart;
    return newString;
  }
  
  solver(puzzleString, startPoint=0) {
      if (startPoint == 81) return true
      
      if(puzzleString[0][startPoint] !== ".") {
        return this.solver(puzzleString, startPoint+1)
      }
      const rowNames = {
        A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6, H: 7, I: 8
      }
      let column = startPoint % 9 + 1
      let row = Object.keys(rowNames)[Math.floor(startPoint / 9)]
  
      for (let value = 1; value < 10; value++) {
        // placement control
        let isCorrect = this.checkRowPlacement(puzzleString[0], row, column, value) && this.checkColPlacement(puzzleString[0], row, column, value) && this.checkRegionPlacement(puzzleString[0], row, column, value)
        
        if (isCorrect) {
          puzzleString[0] = this.replaceNum(puzzleString[0], value, startPoint)
          
          if (this.solver(puzzleString, startPoint+1)) {
            return true
          }
        }      
        puzzleString[0] = this.replaceNum(puzzleString[0], ".", startPoint)
      }
    return false  
  }

  validate(puzzleString) {
    if (puzzleString.length != 81) return { error: 'Expected puzzle to be 81 characters long'}
    if (/[^1-9.]+/.test(puzzleString)) return { error: 'Invalid characters in puzzle' }
    return true
  }

  checkRowPlacement(puzzleString, row, column, value) {
    const rowNames = {
      A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6, H: 7, I: 8
    }
    let rows = puzzleString.match(/.{9}/g)
    for (let i = 0; i < 9; i++) {
      if (column-1 == i) continue;
      if (rows[rowNames[row]][i] == value) return false
    }
    return true
  }

  checkColPlacement(puzzleString, row, column, value) {
    const rowNames = {
      A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6, H: 7, I: 8
    }
    let rows = puzzleString.match(/.{9}/g);

    for (let i = 0; i < 9; i++) {
      if (rowNames[row] == i) continue;
      if (rows[i][column - 1] == value) return false
    }
    return true
  }

  checkRegionPlacement(puzzleString, row, column, value) {
    const rowNames = {
      A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6, H: 7, I: 8
    }
    let rows = puzzleString.match(/.{9}/g);
    let rowAreas;
    let columnAreas;

    for (let i = 0; i < 9; i = i + 3) {
      if (i <= rowNames[row] && rowNames[row] <= i + 2) {
        rowAreas = [i, i + 1, i + 2]
      }

      if (i <= column - 1 && column - 1 <= i + 2) {
        columnAreas = [i, i + 1, i + 2]
      }
    }

    for (let r of rowAreas) {
      for (let c of columnAreas) {
        if (r == rowNames[row] && c == column-1) continue;
        if (rows[r][c] == value) return false
      }
    }

    return true
  }

  solve(puzzleString) {
    
    if (/[^\d\.]+/.test(puzzleString)) {
      return { error: 'Invalid characters in puzzle'};
    };
    
    if (this.validate(puzzleString).error) {
      return this.validate(puzzleString);
    };

    let result = [puzzleString]
    
    let start = performance.now()
    if(!this.solver(result)) {
      return false
    }
    let finish = performance.now() - start  // performance test
    console.log(finish)
    
    return result[0]
  };
}
  

module.exports = SudokuSolver;

