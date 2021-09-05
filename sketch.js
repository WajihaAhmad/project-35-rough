var dog
var happyDog
var database
var foodS 
var foodStock
function preload()
{
  dog1= loadImage("sprites/dogImg.png");
  dog2= loadImage("sprites/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250,40,40)
  dog.addImage(dog1)
  foodStock=database.ref('Food');
  foodstock.on("value,readStock");
}

function draw() {  
  drawSprites();
  background(46,139,87)
  text("Press UP_ARROW Key To Feed Drago Milk!")
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dog2) 
  }
  
  drawSprites();

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}




