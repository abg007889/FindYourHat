const hat = '@', hole = 'O', land = '░', path = '+';
let end = false;

/* For test matrix
const map = [
  ['00', '01', '02', '03', '04'],
  ['10', '11', '12', '13', '14'],
  ['20', '21', '22', '23', '24'],
  ['30', '31', '32', '33', '34'],
  ['40', '41', '42', '43', '44']
];*/

/* Another generate map method
let map = [
  [land, hole, hole, hole, land, land, land, land, land, land],
  [land, hole, hole, hole, land, land, land, land, land, land],
  [land, hole, hole, hole, land, land, land, land, land, land],
  [land, hole, hole, hole, land, land, land, land, land, land],
  [land, hole, hole, hole, land, land, land, land, land, land],
  [land, hole, hole, hole, land, land, land, land, land, land],
  [land, hole, hole, hole, land, land, land, land, land, land],
  [land, hole, hole, hole, land, land, land, land, land, land],
  [land, hole, hole, hole, land, land, land, land, land, land],
  [land, hole, hole, hole, land, land, land, land, land, land]
];
for (let i = 0; i < 100; i++) {
  let r = Math.floor((Math.random() * 10));
  let d = Math.floor((Math.random() * 10));
  let o = Math.floor((Math.random() * 10));
  let m = Math.floor((Math.random() * 10));
  let temp = map[r][d];
  map[r][d] = map[o][m];
  map[o][m] = temp;
}
map[0][0] = path;*/

/* Class for random hat
class RandomField {
  constructor(range) {
    this.x = Math.floor(Math.random() * 10);
    this.y = Math.floor(Math.random() * 10);
    while (this.x < range) {
      this.x = Math.floor(Math.random() * 10);
    }
    while (this.y < range) {
      this.y = Math.floor(Math.random() * 10);
    }
  }
}
const handomField = new RandomField(7);*/

/* Same as below
let map = [
  ['+', '░', '░', '░', '░', '░', '░', '░', '░', '░'],
  ['░', '░', '░', '░', '░', '░', '░', '░', '░', '░'],
  ['░', '░', '░', '░', '░', '░', '░', '░', '░', '░'],
  ['░', '░', '░', '░', '░', '░', '░', '░', '░', '░'],
  ['░', '░', '░', '░', '░', '░', '░', '░', '░', '░'],
  ['░', '░', '░', '░', '░', '░', '░', '░', '░', '░'],
  ['░', '░', '░', '░', '░', '░', '░', '░', '░', '░'],
  ['░', '░', '░', '░', '░', '░', '░', '░', '░', '░'],
  ['░', '░', '░', '░', '░', '░', '░', '░', '░', '░'],
  ['░', '░', '░', '░', '░', '░', '░', '░', '░', '░']
];*/
// Generate 5x5 land matrix
let map = [];
for (let i = 0; i < 10; i++) {
  let mapY = [];
  for (let j = 0; j < 10; j++) {
    mapY[j] = land;
  }
  map.push(mapY);
}
//console.log(map);

// Random number to hole field
let holeArr = [];
for (let i = 0; i < 10; i++) {
  let holeY = [];
  for (let j = 0; j < 10; j++) {
    holeY[j] = Math.floor(Math.random() * 10);
  }
  holeArr.push(holeY);
}
//console.log(holeArr);

for (let i = 1; i < 10; i++) {3
  for (let j = 1; j < 10; j++) {
    if (holeArr[i][j] > 7) map[i][j] = hole;
  }
}

let block = false;
// Generate random hat
let hatX = Math.floor(Math.random() * 10);
let hatY = Math.floor(Math.random() * 10);
while (map[hatX - 1] == hole && map[hatX + 1] == hole && map[hatX][hatY - 1] == hole && map[hatX][hatY + 1] == hole) {
  hatX = Math.floor(Math.random() * 10);
  hatY = Math.floor(Math.random() * 10);
}

map[hatX][hatY] = hat;
//console.log(map);

// Join array to string
function mapLoad() {
  for (let i = 0; i < 10; i++) {
    console.log(map[i].join(''));
  }
}

// Initialize state
let x = Math.floor(Math.random() * 10);
let y = Math.floor(Math.random() * 10);
map[x][y] = path;
mapLoad();
let input = prompt("Press Enter to start");
// Game loop
while (!end) {
  mapLoad();
  input = prompt("Choose direction(wasd)").toLowerCase();
  direction(input);
  //console.log(map[x][y]);
}

// Direction and check win or lose
function direction(input) {
  if (input !== "a" && input !== "d" && input !== "w" && input !== "s") {
    console.log("You decide to go on a random direction.");
    let random = Math.floor((Math.random() * 4));
    if (random === 0) input = "a";
    else if (random === 1) input = "d";
    else if (random === 2) input = "w";
    else input = "s";
  }
  if (input === "a") {
    if (y != 0) {
      y -= 1;
      if (map[x][y] === hat) {
        console.log("You find your hat!!!");
        end = true;
      } else if (map[x][y] === hole) {
        console.log("you fall into the hole, you die!");
        end = true;
      }
      map[x][y] = path;
    }
    else
      console.log("There is a wall that is block your way.");
  }
  else if (input === "d") {
    if (y < 9) {
      y += 1;
      if (map[x][y] === hat) {
        console.log("You find your hat!!!");
        end = true;
      } else if (map[x][y] === hole) {
        console.log("you fall into the hole, you die!");
        end = true;
      }
      map[x][y] = path;
    }
    else
      console.log("There is a wall that is block your way.");
  }
  else if (input === "w") {
    if (x != 0) {
      x -= 1;
      if (map[x][y] === hat) {
        console.log("You find your hat!!!");
        end = true;
      } else if (map[x][y] === hole) {
        console.log("you fall into the hole, you die!");
        end = true;
      }
      map[x][y] = path;
    }
    else
      console.log("There is a wall that is block your way.");
  }
  else if (input === "s") {
    if (x < 9) {
      x += 1;
      if (map[x][y] === hat) {
        console.log("You find your hat!!!");
        end = true;
      } else if (map[x][y] === hole) {
        console.log("you fall into the hole, you die!");
        end = true;
      }
      map[x][y] = path;
    }
    else
      console.log("There is a wall that is block your way.");
  }
}