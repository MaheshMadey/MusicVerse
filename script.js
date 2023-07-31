console.log("Welcome to Spotify");

//Intializing Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItem = document.getElementsByClassName('songItem');
let masterSongName = document.getElementById('masterSongName');




let songs = [
    {songName: "Where Are You Now", filePath: "songs/1.mp3", coverPath: "cover1.png"},
    {songName: "Yean Ennai Pirindhaai", filePath: "songs/2.mp3", coverPath: "cover2.png"},
    {songName: "Kabira", filePath: "songs/3.mp3", coverPath: "cover3.png"},
    {songName: "Peaky Blinders", filePath: "songs/4.mp3", coverPath: "cover4.png"},
    {songName: "Paris", filePath: "songs/5.mp3", coverPath: "cover5.png"},
    {songName: "Beach House", filePath: "songs/6.mp3", coverPath: "cover6.png"},
  
]

/*songs.forEach((element,i)=>{
    console.log(element.songName,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})*/

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    //    masterPlay.classList.remove('fa-solid fa-play-circle');
     //   masterPlay.classList.add('fa-solid fa-pause-circle');
    }
    else{
        audioElement.pause();
    //    masterPlay.classList.remove('fa-solid fa-pause-circle');
    //    masterPlay.classList.add('fa-solid fa-play-circle');
    }

})

audioElement.addEventListener('timeupdate',()=>{
   
     // Update Seekbar
     progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
     myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
/*
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('fa-solid songItemPlay fa-play')).forEach((element)=>{

    })
}*/

Array.from(document.getElementsByClassName('fa-solid songItemPlay fa-play')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        console.log(e.target.id);
        songIndex =  parseInt(e.target.id);
        console.log(songIndex);
 /*      makeAllPlays()
       e.target.classList.remove('fa-solid fa-play');
       e.target.classList.add('fa-solid fa-pause');*/
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=6){
        songIndex=0;
    }
    else{
        songIndex += 1;
    }
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -= 1;
    }
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
})