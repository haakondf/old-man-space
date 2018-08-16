
$(document).keydown(function(event){
    console.log(event.which);
    
})

$(document).ready(function(){

    var player = {
        top: 700,
        left: 550
    };

    var missiles = [{top:700, left:550}];

    document.onkeydown = function(e) {

        if (e.keyCode === 37) {
            console.log("left");
            player.left = player.left -10;
            movePlayer()
        }
        else if (e.keyCode === 39){
            console.log("right");
            player.left = player.left + 10;
            movePlayer()
        }
        else if (e.keyCode === 32) {
            console.log("fire");
            missiles.push({
                left: player.left + 15,
                top: player.top 
            })
            console.log(missiles);
            drawMissiles()
            
        }
    }

    function movePlayer () {
        document.getElementById('player').style.left = player.left + "px";
    }
    function drawMissiles(){
        document.getElementById('missiles').innerHTML = "";
        for( var missile = 0; missile < missiles.length; missile = missile + 1){
            document.getElementById('missiles').innerHTML += `<div class="missile" style='left:${missiles[missile].left}px; top:${missiles[missile].top}px;'></div>`; 
            //use append instead maybe
            
            
        }
    }
})