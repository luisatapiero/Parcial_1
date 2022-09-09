const URL = `http://${window.location.hostname}:5050`;
let socket = io(URL, { path: '/real-time' });

let direction;
let upB, downB, leftB, rightB;

function setup() {
    frameRate(16);
    createCanvas(windowWidth, windowHeight);
    direction = 0;
    newButton();
}

function draw() {
    background(0);
   /* ellipse(windowWidth / 2, windowHeight / 3, 50, 50);
    ellipse(windowWidth / 2, windowHeight / 1.5, 50, 50);
    ellipse(windowWidth / 1.5, windowHeight / 2, 50, 50);
    ellipse(windowWidth / 3, windowHeight / 2, 50, 50);*/

    /*movementButton('UP', (windowWidth / 2, windowHeight / 3));
    movementButton('DOWN', windowWidth / 2, windowHeight / 1.5);
    movementButton('RIGHT', windowWidth / 1.5, windowHeight / 2);
    movementButton('LEFT', windowWidth / 3, windowHeight / 2);*/
}



function newButton(){

  upB = createButton('UP');
  upB.position(windowWidth / 2, windowHeight / 3);
  upB.mousePressed(changeDir1);

  downB = createButton('DOWN');
  downB.position(windowWidth / 2, windowHeight / 1.5);
  downB.mousePressed(changeDir2);

  rightB = createButton('RIGTH');
  rightB.position(windowWidth / 1.5, windowHeight / 2);
  rightB.mousePressed(changeDir3);

  leftB = createButton('LEFT');
  leftB.position(windowWidth / 3, windowHeight / 2);
  leftB.mousePressed(changeDir4);
}

function changeDir1() {

    direction = 1;
    console.log(direction);

  }

  function changeDir2() {

    direction = 2;
    console.log(direction);

    
  }

  function changeDir3() {

    direction = 3;
    console.log(direction);

    
  }

  function changeDir4() {

    direction = 4;
    console.log(direction);

    
  }



/*___________________________________________

1) Create a function that includes the socket method to emit the directions
_____________________________________________ */

socket.emit('changePosition', (direction) =>{
    socket.send(direction);
})


