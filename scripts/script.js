
function start_game(){
    
    var end = document.getElementById("end")
    end.addEventListener('mouseover',function(){
        location.reload()
        alert("You Win!\nGame reloaded.")
        })
    boundaries_EventListener()
    game_EventListener()
    
}

function boundaries_EventListener(){
    var boundaries = document.querySelectorAll(".boundary")
    
    for(let i=0;i<boundaries.length;i++){
        boundaries[i].addEventListener("mouseover",function(){
            location.reload()
            alert("You Lose!\nGame reloaded.")
            })
    }
}

function game_EventListener(){
    var game = document.getElementById("game")
    game.addEventListener("mouseleave",function(){
        location.reload()
        alert("Stay in the game section!\nGame reloaded.")
        })
}

var start = document.getElementById("start")
start.addEventListener('mouseover',start_game)
