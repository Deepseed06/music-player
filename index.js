let progress = document.getElementById('progress');
let song = document.getElementById('song');
let ctrlIcon = document.getElementById('ctrlIcon');
let fwrdIcon = document.getElementById('fwrdIcon');
let timeElapsed = document.getElementById('time');
let currentTimeElapsed = document.getElementById('current');


song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime; 
}

function playPause(){
    if(ctrlIcon.classList.contains('fa-pause')){
        song.pause();
        ctrlIcon.classList.remove('fa-pause');
        ctrlIcon.classList.add('fa-play');
       
    }
    else{
        song.play()
        ctrlIcon.classList.remove('fa-play');
        ctrlIcon.classList.add('fa-pause');
        
    }



}
   
    
if(song.play()){
        ctrlIcon.classList.remove('fa-play');
        ctrlIcon.classList.add('fa-pause');
let time = song.duration;
       
        
    // setInterval(()=>{
        
    //     progress.value = song.currentTime;
    //     currentTimeElapsed.textContent = progress.value
    //     const minutes = Math.floor(time/60);
    //      let seconds = time % 60;
    //     seconds = seconds < 10? '0'+seconds : seconds;
    //     timeElapsed.textContent = `${minutes}:${seconds.toFixed(0)}`;
        
       
    // },1000);
}
progress.onchange = function(){
    song.currentTime = progress.value;
}
fwrdIcon.onclick = function(){

    progress.value = song.currentTime+20;
    song.currentTime = progress.value;
}
bckwrdIcon.onclick = function(){

    progress.value = song.currentTime-20;
    song.currentTime = progress.value;
}



