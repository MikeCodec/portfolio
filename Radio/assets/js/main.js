const player = document.getElementById('player');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const load = document.getElementById('loading');

play.style.display = "block";
pause.style.display = "none";
load.style.display = "none";

//player.play();

player.addEventListener('playing', function(){
    play.style.display = "none";
    pause.style.display = "block";
    load.style.display = "none";
});

player.addEventListener('waiting', function(){
    play.style.display = "none";
    pause.style.display = "none";
    load.style.display = "block";
});

play.addEventListener('click', function(e){
    e.preventDefault();
    player.play();

    play.style.display = "none";
    pause.style.display = "block";
    load.style.display = "none";
});

pause.addEventListener('click', function(e){
    e.preventDefault();
    player.pause();        

    play.style.display = "block";
    pause.style.display = "none";
    load.style.display = "none";
})