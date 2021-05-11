var bgimg;
var canvas;
var tom,jerry;
var im,im1,im2,im3,im4,im5,im6;

function preload() {
    //load the images here
    bgimg = loadImage("images/garden.png")
   
    im =loadImage("images/cat1.png");
    im1 =loadImage("images/mouse1.png");
    im2 =loadAnimation("images/mouse2.png","images/mouse3.png");
    im3 =loadAnimation("images/cat2.png","images/cat3.png");
    im4 =loadImage("images/mouse4.png");
    im5 =loadImage("images/cat4.png");
    //im6 =loadAnimation("");


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(870,600);
    tom.addImage(im);
    tom.scale = 0.2;
    
    jerry = createSprite(200,600);
    jerry.addImage(im1);
    jerry.scale = 0.2;
}

function draw() {

    background(bgimg);
    //Write condition here to evalute if tom and jerry collide

if(tom.x - jerry.x < (tom.width - jerry.width)/2){
    tom.velocityX = 0;
    tom.x = 300;
    tom.addImage("tomlastImage",im5)
    tom.scale = 0.2;
    tom.changeImage("tomlastImage");
    jerry.addImage("jerrylastImage",im4);
    jerry.scale = 0.15;
    jerry.changeImage("jerrylastImage")
}



    drawSprites();

}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
      tom.velocityX = -5;
      tom.addAnimation("tomRunning",im3);
      tom.changeAnimation("tomRunning");

      jerry.addAnimation("jerryRunning",im2);
      jerry.frameDelay = 25;
      jerry.changeAnimation("jerryRunning");
  }
//   if(tom.position.x > 200){
// 	tom.changeImage("tomlastImage",im5);
//   }

}
