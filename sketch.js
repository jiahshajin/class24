var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


 var dustbin
 var dustbin1
 var dustbin2
 var paper
  
function preload()
{
	
}

function setup() {
	createCanvas(1600, 300);
	 rectMode(CENTER)
  
	groundSprite=createSprite(width/2, height-15, width,10 );
	groundSprite.shapeColor=color(230,230,0)

	engine = Engine.create();
	world = engine.world;

	//Create a ground
  ground= Bodies.rectangle(width/2,260,width,10,{isStatic:true});
   World.add(world,ground);

	Engine.run(engine);

   dustbin= new Dustbin(1100,230,20,90);
   dustbin1=new Dustbin(1190,270,170,20);
   dustbin2=new Dustbin(1280,230,20,90);
   paper= new Paper();
    
}


function draw() {
  
  background(0);
    

  
  drawSprites();

  dustbin.display()
  dustbin1.display()
  dustbin2.display()
 paper.display()
   
  
  


}

 function keyPressed(){
    if (keyCode=== UP_ARROW){

      Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
      

    }
 }

