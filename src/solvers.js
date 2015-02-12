/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n) {
  var board = new Board({n:n});
  var solution = [];
  var recurse = function(col) {
    for (var i = 0; i < n; i++) {
      board.togglePiece(i, col);
      if (!board.hasAnyRooksConflicts()) {
        if (col === n-1) {
          for (var j = 0; j < n;j++){
            solution.push(board.get(j))
          }
        }
        if (col < n-1) {
          recurse(col+1);
        }
      }
      if (solution.length > 0){
        return;
      }else{
        board.togglePiece(i, col);
      }
    }
  }
  recurse(0);
  if (!solution.length) return board.rows();
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 1; //fixmevar solutionCount = 1;
    for (var i = 1; i <= n; i++) {
       solutionCount *= i;
    }
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n:n});
  var solution = [];
  var recurse = function(col) {
    for (var row = 0; row < n; row++){
      board.togglePiece(row, col);
      if (!board.hasAnyQueensConflicts()){
        if (col === n-1){
          for (var i = 0; i < n; i++){
            solution.push(board.get(i));
          }
        }
        if (col < n-1) {
          recurse(col+1);
        }
      }
      if (solution.length > 0) return;
      else board.togglePiece(row, col);
    }
  }
  recurse(0);
  if (!solution.length) return board.rows();
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  if (n <= 1) return 1;
  var board = new Board({n:n});
  var count = 0;
  var recurse = function(col) {
    for (var i = 0; i < n; i++) {
      board.togglePiece(i, col);
      if (!board.hasAnyQueensConflicts()) {
        if (col === n-1) {
          count++;
        }
        if (col < n) {
          recurse(col+1);
        }
      }
     board.togglePiece(i, col);
    }
  }
  recurse(0);
  return count;
};
