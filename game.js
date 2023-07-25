
var arr=["red","blue","green","yellow"];
var arr1=[];
var clicked=[];
var start=false;
var level=0;


$(document).keypress(function(){
if(!start){
  $("#level-title").text("Level "+level);
  nextSequence();
  start=true;
  }
});

function checkAnswer(currentlevel){
 if(arr1[currentlevel]===clicked[currentlevel]){
   console.log("success");
   if(arr1.length===clicked.length){
     setTimeout(function(){
      nextSequence();
     },1000);
   }
 }
 else{
   console.log("wrong");
   playsound("wrong");
   $("body").addClass("game-over");
   setTimeout(function(){
     $("body").removeClass("game-over");
   },200);
   $("#level-title").text("Game over, press any key to restart");
   startover();
 }
}

function nextSequence() {
  clicked=[];
  level++;
  $("#level-title").text("Level "+level);
  var rnum=Math.floor(Math.random()*4);
  var color=arr[rnum];
  arr1.push(color);
  $("#"+color).fadeOut(100).fadeIn(100);
}

function animatepress(currentcolor){
$(currentcolor).addClass("pressed");
setTimeout(function () {
  $(currentcolor).removeClass("pressed");},100);
}
function playsound(name){
  var audio=new Audio("sounds/"+name+".mp3");
  audio.play();
}
function startover(){
   arr1=[];
   level=0;
   start=false;
}


$(".btn").click(function(){
  var bt=this.id;
  clicked.push(bt);
  animatepress(this);
  playsound(bt);

  checkAnswer(clicked.length-1);

});
