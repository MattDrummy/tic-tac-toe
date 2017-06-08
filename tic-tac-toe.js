function determineWinner(board) {

  function allValuesTheSame(array) {
    for (var i = 1; i < array.length; i++) {
      if (array[i] === array[0]) {
        return true;
      }
    }
    return false;
  }

  var test = [];
  test.push(board[0]);
  test.push(board[1]);
  test.push(board[2]);
  test.push([board[0][0], board[1][0], board[2][0]]);
  test.push([board[0][1], board[1][1], board[2][1]]);
  test.push([board[0][2], board[1][2], board[2][2]]);
  test.push([board[0][0], board[1][1], board[2][2]]);
  test.push([board[0][2], board[1][1], board[2][0]]);


  for (var i = 0; i < test.length; i++) {
    if (allValuesTheSame(test[i])) {
      if (i <= 2) {
        return "Horizontal win: " + test[i][0];
      } else if (i <= 5) {
        return "Vertical win: " + test[i][0];
      } else {
        return "Diagonal win: " + test[i][0];
      }
    }
  }
}
var gameBoard1 = [
  ["o", "o", "x"],
  ["x", "o", "o"],
  ["x", "x", "o"]
] // winner “o”

var gameBoard2 = [
  ["x", "o", "o"],
  ["x", "x", "o"],
  ["o", "x", "x"]
] // winner “x”

var gameBoard3 = [
  ["x", "x", "x"],
  ["o", "x", "o"],
  ["o", "x", "o"]
] // winner “x”

console.log(determineWinner(gameBoard1));
console.log(determineWinner(gameBoard2));
console.log(determineWinner(gameBoard3));
