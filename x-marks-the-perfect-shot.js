const finalPosition = function (moves) {
  let x = 0
  let y = 0

  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === 'north') {
      y++;
    } else if (moves[i] === 'south') {
      y--;
    } else if (moves[i] === 'west') {
      x--;
    } else if (moves[i] === 'east') {
      x++; 
    }
  }
  return [x, y];
}

/*
north = y+1
south = y-1
west = x-1
east = x+1
*/

//If we called the function with the following arguments.

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']

console.log(finalPosition(moves));

//The finalPosition function should return the array:
//[-1, 4]