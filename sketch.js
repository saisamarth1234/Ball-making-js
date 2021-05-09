var img,ball;
var engine,world,ball2;
function preload()
{
   img=loadImage("ball.png")}

function setup()
{
   createCanvas(800,400);
   ball=createSprite(200,200,10,10);
   ball.addImage("b",img);


   engine=Matter.Engine.create();
   world=engine.world;

   ball2=new Ball(400,400);
}

function draw()
{
  background(0);
  drawSprites();

  ball2.display();
}
