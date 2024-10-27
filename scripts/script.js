
function start_game(){
    game_EventListener()
    var end = document.getElementById("end")
    end.addEventListener('mouseover',function(){
        alert("You Win")
        location.reload()})
    boundaries_EventListener()
    
}

function boundaries_EventListener(){
    var boundaries = document.querySelectorAll(".boundary")
    
    for(let i=0;i<boundaries.length;i++){
        boundaries[i].addEventListener("mouseover",function(){
            alert("You Lose")
            location.reload()})
    }
}

function game_EventListener(){
    var game = document.getElementById("game")
    game.addEventListener("mouseleave",function(){
        alert("Stay in the game section!\nGame reloaded.")
        location.reload()
    })
}

var start = document.getElementById("start")
start.addEventListener('mouseover',start_game)
