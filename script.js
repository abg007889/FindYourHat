let arrImg = ["img/wall.png", "img/road.png", "img/walk.png", "img/hat.png", "img/dot.png", "img/hole.png", "img/quest.png"];
let end = false, map = [], x, y;
document.addEventListener("keydown", direction);
var txt = document.getElementById('text');

// After win or lose
function newGame() {
  let conti = confirm("Start a new game?");
  if (conti) {
    map = [];
    let mapChild = document.querySelector(".map");
    while (mapChild.firstChild) {
      mapChild.removeChild(mapChild.firstChild);
    }
    GenerateMap();
    end = false;
  }
  else {
    txt.innerHTML = "Thanks for playing";
    alert("Thanks for playing");
  }
}

// Generate the map
function GenerateMap() {
  txt.innerHTML = "";
  for (let i = 0; i < 10; i++) {
    let mapY = [];
    for (let j = 0; j < 10; j++) {
      mapY[j] = 'road';
    }
    map.push(mapY);
  }

  // Random number to wall and hole field
  let fieldArr = [];
  for (let i = 0; i < 10; i++) {
    let fieldY = [];
    for (let j = 0; j < 10; j++) {
      fieldY[j] = Math.floor(Math.random() * 10);
    }
    fieldArr.push(fieldY);
  }

  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      if (fieldArr[i][j] > 8) map[i][j] = 'wall';
      if (fieldArr[i][j] < 1) map[i][j] = 'hole';
    }
  }

  // Random hat
  let hatX = Math.floor(Math.random() * 10);
  let hatY = Math.floor(Math.random() * 10);
  /*while (map[hatX - 1] == 'wall' && map[hatX + 1] == 'wall' && map[hatX][hatY - 1] == 'wall' && map[hatX][hatY + 1] == 'wall' && map[hatX - 1] == 'hole' && map[hatX + 1] == 'hole' && map[hatX][hatY - 1] == 'hole' && map[hatX][hatY + 1] == 'hole') {
    hatX = Math.floor(Math.random() * 10);
    hatY = Math.floor(Math.random() * 10);
  }*/
  map[hatX][hatY] = 'hat';

  // Initialize state
  x = Math.floor(Math.random() * 10);
  y = Math.floor(Math.random() * 10);
  map[x][y] = 'player';

  // Generate the map to html class ".map"
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map.length; j++) {
      if (map[i][j] === 'wall')
        $(".map").append(`<img id='${i}${j}' src=${arrImg[0]} alt='wall' width='50' height='50'>`);
      if (map[i][j] === 'road')
        $(".map").append(`<img id='${i}${j}' src=${arrImg[1]} alt='road' width='50' height='50'>`);
      if (map[i][j] === 'player')
        $(".map").append(`<img id='${i}${j}' src=${arrImg[2]} alt='player' width='50' height='50'>`);
      if (map[i][j] === 'hat' || map[i][j] === 'hole')
        $(".map").append(`<img id='${i}${j}' src=${arrImg[6]} alt='quest' width='50' height='50'>`);
    }
    $(".map").append("<br/>");
  }
}

GenerateMap();
//console.log(map[x][y]);
// Direction and check win or lose
function direction(e) {
  if (end) e.keydown(newGame());  // it will start newGame function if win or lose
  if (e.code === 'KeyA') {
    if (y != 0) {
      y -= 1;
      //console.log(map[x][y]);
      if (map[x][y] === 'hat') {
        txt.innerHTML = "You find your hat!!!";
        document.getElementById(`${x}${y}`).src = arrImg[3];
        end = true;
      } else if (map[x][y] === 'hole') {
        txt.innerHTML = "You fall into the hole, you die!";
        map[x][y + 1] = 'path';
        document.getElementById(`${x}${y + 1}`).src = arrImg[4];
        document.getElementById(`${x}${y}`).src = arrImg[5];
        end = true;
      } else if (map[x][y] === 'wall') {
        y += 1;
        txt.innerHTML = "There is a wall that is block your way.";
      } else {
        map[x][y + 1] = 'path';
        document.getElementById(`${x}${y + 1}`).src = arrImg[4];
        document.getElementById(`${x}${y}`).src = arrImg[2];
        map[x][y] = 'player';
      }
    }
    else
      txt.innerHTML = "There is a wall that is block your way.";
  }
  else if (e.code === 'KeyD') {
    if (y < 9) {
      y += 1;
      //console.log(map[x][y]);
      if (map[x][y] === 'hat') {
        txt.innerHTML = "You find your hat!!!";
        document.getElementById(`${x}${y}`).src = arrImg[3];
        end = true;
      } else if (map[x][y] === 'hole') {
        txt.innerHTML = "You fall into the hole, you die!";
        map[x][y - 1] = 'path';
        document.getElementById(`${x}${y - 1}`).src = arrImg[4];
        document.getElementById(`${x}${y}`).src = arrImg[5];
        end = true;
      } else if (map[x][y] === 'wall') {
        y -= 1;
        txt.innerHTML = "There is a wall that is block your way.";
      } else {
        map[x][y - 1] = 'path';
        document.getElementById(`${x}${y - 1}`).src = arrImg[4];
        document.getElementById(`${x}${y}`).src = arrImg[2];
        map[x][y] = 'player';
      }
    }
    else
      txt.innerHTML = "There is a wall that is block your way.";
  }
  else if (e.code === 'KeyW') {
    if (x != 0) {
      x -= 1;
      //console.log(map[x][y]);
      if (map[x][y] === 'hat') {
        txt.innerHTML = "You find your hat!!!";
        document.getElementById(`${x}${y}`).src = arrImg[3];
        end = true;
      } else if (map[x][y] === 'hole') {
        txt.innerHTML = "You fall into the hole, you die!";
        map[x + 1][y] = 'path';
        document.getElementById(`${x + 1}${y}`).src = arrImg[4];
        document.getElementById(`${x}${y}`).src = arrImg[5];
        end = true;
      } else if (map[x][y] === 'wall') {
        x += 1;
        txt.innerHTML = "There is a wall that is block your way.";
      } else {
        map[x + 1][y] = 'path';
        document.getElementById(`${x + 1}${y}`).src = arrImg[4];
        document.getElementById(`${x}${y}`).src = arrImg[2];
        map[x][y] = 'player';
      }
    }
    else
      txt.innerHTML = "There is a wall that is block your way.";
  }
  else if (e.code === 'KeyS') {
    if (x < 9) {
      x += 1;
      //console.log(map[x][y]);
      if (map[x][y] === 'hat') {
        txt.innerHTML = "You find your hat!!!";
        document.getElementById(`${x}${y}`).src = arrImg[3];
        end = true;
      } else if (map[x][y] === 'hole') {
        txt.innerHTML = "You fall into the hole, you die!";
        map[x - 1][y] = 'path';
        document.getElementById(`${x - 1}${y}`).src = arrImg[4];
        document.getElementById(`${x}${y}`).src = arrImg[5];
        end = true;
      } else if (map[x][y] === 'wall') {
        x -= 1;
        txt.innerHTML = "There is a wall that is block your way.";
      } else {
        map[x - 1][y] = 'path';
        document.getElementById(`${x - 1}${y}`).src = arrImg[4];
        document.getElementById(`${x}${y}`).src = arrImg[2];
        map[x][y] = 'player';
      }
    }
    else
      txt.innerHTML = "There is a wall that is block your way.";
  }
}