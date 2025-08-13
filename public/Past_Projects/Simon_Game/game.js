var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var level = 0;

var started = false;

function startOver(){
    started = false;
    level = 0;
    gamePattern = [];
}

function checkAnswer(currentLevel){
 if
 (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
    
    if(userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
    }
    
    
    
 }else{
    $("#level-title").text("Game Over, Push Any Key To Restart")
    
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    }, 200);

    var wrongAudio = new Audio("sounds/wrong.mp3");
    wrongAudio.play();

    startOver();
    
 }
}

function nextSequence() {
    
    userClickedPattern = [];

    level++;

    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours [randomNumber];
    gamePattern.push(randomChosenColour);  

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);    
    
};


$(".btn").on("click", function(){
    
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
        
    playSound(userChosenColour);
    
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
});


function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
};


function animatePress(currentColour){

    $("#" + currentColour).addClass("pressed");

    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}


$(document).keydown(function(){
    if(!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
        
    }  

})

