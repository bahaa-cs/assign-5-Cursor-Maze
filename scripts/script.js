
function testing(){
    var end = document.getElementById("end")
    end.addEventListener('mouseover',function(){
        alert("You Win")
        location.reload()})
    boundaries_EventListener()
}

var start = document.getElementById("start")
start.addEventListener('mouseover',testing)

function boundaries_EventListener(){
    var boundaries = document.querySelectorAll(".boundary")
    
    for(let i=0;i<boundaries.length;i++){
        boundaries[i].addEventListener("mouseover",function(){
            alert("You Lose")
            location.reload()})
    }
}
