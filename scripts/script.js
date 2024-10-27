
function start_game(){
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
    game.addEventListener("mouseout",function(){
        alert("You should stay in the game!\nGame reloaded.")
        location.reload()
    })
}

var start = document.getElementById("start")
start.addEventListener('mouseover',start_game)
