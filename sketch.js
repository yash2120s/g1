//Create variables here
var search;


function preload()
{
	//load images here
 bg = loadImage("bg.png")
}

function setup() {
 
	createCanvas(300,600);

  back =  createSprite(150,150,50,10)
back.addImage(bg)
back.scale = 0.5

  input = createInput("Type to search");
 button = createButton('Search');

  input.position(400,300,100,50);
  button.position(450,330,100,50);

}


function draw() {  
background("white")
  
if(keyIsDown(ENTER)){
  serch = input.value()
  var google = "https://www.google.com/search?q="+serch
  open(google)

}
  
button.mousePressed(()=>{
 
  serch = input.value();
  var google = "https://www.google.com/search?q="+serch
  open(google)
})
//input.display();
drawSprites();


}
