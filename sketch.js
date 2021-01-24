
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	treeimg = loadImage("Plucking mangoes/tree.png")
	boyimg = loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(1000, 650);

	engine = Engine.create();
	world = engine.world;

	gr = new ground();
	stones = new stone(100,460,25)
	mango1 = new mango(600,290,35)
	mango2 = new mango(825,325,35)
	mango3 = new mango(670,260,35)
	mango4 = new mango(730,200,35)
	mango5 = new mango(710,320,35)
	mango6 = new mango(780,250,35)
	mango7 = new mango(825,170,35)
	mango8 = new mango(880,260,35)
	mango9 = new mango(940,220,35)
	mango10= new mango(980,305,35)

	woo = new Throw(stones.body,{x:100,y:465})

	tree = createSprite(775,370)
	tree.addImage(treeimg)
	tree.scale = 0.4

	boy = createSprite(160,550)
	boy.addImage(boyimg)
	boy.scale = 0.12	

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  fill("black")
  textSize(20)

  
  drawSprites();

  stones.display();
  gr.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  woo.display();	

  detectCollision(stones,mango1)
  detectCollision(stones,mango2)
  detectCollision(stones,mango3)
  detectCollision(stones,mango4)
  detectCollision(stones,mango5)
  detectCollision(stones,mango6)
  detectCollision(stones,mango7)
  detectCollision(stones,mango8)
  detectCollision(stones,mango9)
  detectCollision(stones,mango10)

}
	function mouseDragged(){
		Matter.Body.setPosition(stones.body,{x:mouseX,y:mouseY})
	}
	function mouseReleased(){
		woo.fly()
	}	
	function detectCollision(sto,mang){
		mangopos = mang.body.position
		stopos = sto.body.position
		
		var distance = dist(stopos.x,stopos.y,mangopos.x,mangopos.y)
		if(distance<=mangopos.diametre+stopos.diametre)
		{
			Matter.Body.setStatic(mang.body,false)
		}
	}
	function keyPressed(){
		if(keyCode === 32){
			Matter.body.setPosition(stones.body,{x:100,y:	465})
			attach.pheko(stones.body)
		}
	}




