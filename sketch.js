var database;
var canvas;
var backgroundImg;
var gameState=0;
var playerCount;
var form,player,game;
var allPlayers;
var distance=0;
var cars,car1,car2,car3,car4;
var carImg1,carImg2,carImg3,carImg4;
var ground,track;
var pista1,pista2,pista3;
var conoImg,cono;
var choqueS;
var fushS;
var turbo=3;
var cambio=0;
function preload(){
fushS=loadSound("js/fush.mp3");
choqueS=loadSound("js/choque.mp3");
pista1=loadImage("js/pista 1.jpg");
pista2=loadImage("js/pista 2.jpg");
pista3=loadImage("js/pista 3.png");
conoImg=loadImage("js/cono2.png");
carImg1=loadImage("js/car1.png");
carImg2=loadImage("js/car2.png");
carImg3=loadImage("js/car3.png");
carImg4=loadImage("js/car4.png");
ground=loadImage("js/ground.png");
track=loadImage("js/track.png");
}


function setup(){
    canvas=createCanvas(displayWidth-20,displayHeight-30);
   database=firebase.database();
   game=new Game();
   game.getState();
   game.start();
}

function draw(){
if (playerCount==4){
game.update(1);


}
    
    if (gameState==1){
       clear();
       game.play();
    }
    if (gameState==3){
       clear();
       cono.destroyEach();
       game.pista2();
       game.update(3);
      
       //database.ref("CarsAtEnd").on("value",(data)=>{cambio=data.val();});
       if(cambio==4){
        // Player.updateCarsAtEnd(0);
         //player.distance=0;
        
       }
    }
    if (gameState==2){
      game.end();
    }
}
//drawSprites();

