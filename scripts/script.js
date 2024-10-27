
function testing(){
    var end = document.getElementById("end")
    end.addEventListener('mouseover',function(){alert("You Win")})
}

var start = document.getElementById("start")
start.addEventListener('mouseover',testing)

