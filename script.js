console.log("Welcome to spotify");
// initialize the variables //
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let mastersongName = document.getElementById('mastersongName');
let myprogressBar = document.getElementById('myprogressBar');
let gif = document.getElementById('gif');
let songs = [
    { songName: "Janji - Heroes Tonight (feat. Johnning) [NCS ReleaseIshq", filepath: "songs/1.mp3", coverpath: "covers/1.jpg" },
    { songName: "SalameIshq", filepath: "songs/2.mp3", coverpath: "covers/2.jpg" },
    { songName: "SalameIshq", filepath: "songs/3.mp3", coverpath: "covers/3.jpg" },
    { songName: "SalameIshq", filepath: "songs/4.mp3", coverpath: "covers/4.jpg" },
    { songName: "SalameIshq", filepath: "songs/5.mp3", coverpath: "covers/5.jpg" },
    { songName: "SalameIshq", filepath: "songs/6.mp3", coverpath: "covers/6.jpg" },
    { songName: "SalameIshq", filepath: "songs/7.mp3", coverpath: "covers/7.jpg" },
    { songName: "SalameIshq", filepath: "songs/8.mp3", coverpath: "covers/8.jpg" },
    { songName: "SalameIshq", filepath: "songs/9.mp3", coverpath: "covers/9.jpg" },
]
// audioElement.play();

//Handle Play.Pause click //
masterPlay.addEventListener('click', () => {
    if (audioElement.paused && audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    }

    else {
        
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;


    }

})

//Listen t Events //
audioElement.addEventListener('timeupdate', () => {
    // update seekbar //
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myprogressBar.value = progress;
})

myprogressBar.addEventListener('change', () => {
    audioElement.currentTime = myprogressBar.value * audioElement.duration / 100;
})

const MakeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        songIndex = parseInt(e.target.id);
        MakeAllPlays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterPlay.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })

})

document.getElementById('next').addEventListener('click', (e) => {
    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;

    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterPlay.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');




}); document.getElementById('previous').addEventListener('click', (e) => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;

    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.innerText = songs[songIndex].songName;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');




});