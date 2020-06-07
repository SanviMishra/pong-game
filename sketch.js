class Paddle {
  
  constructor(){
    this.width = 10;
    this.height = 70;
    this.xPosition = 0;
    this.yPosition= 0;
  }
  
  
  display(){
    rect(this.xPosition, this.yPosition, this.width, this.height);
  };
}
class Ball
{
  constructor(){
 this.radius=20;
    this.x=0;
      this.y=0;
  }
  print(){
    circle(this.x,this.y,this.radius);
  }
}
    
    
function setup(){
  createCanvas(400,400);
}

function draw() {
  //set background to white
  background("white");
  
  //player Paddle
  var playerPaddle = new Paddle();
  playerPaddle.xPosition = 390;
  playerPaddle.yPosition = mouseY;
  
  playerPaddle.display();
//   computer paddle
    var computerPaddle=new Paddle();
    computerPaddle.xPosition=10;
     computerPaddle.yPosition=200;
   computerPaddle.display();
  //draw the ball
  var ball=new Ball();
   ball.x=200;
   ball.y=200;
  ball.print();
}