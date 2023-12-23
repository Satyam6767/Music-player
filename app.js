// let playBtn = document.getElementById('play-btn')
// let progress = document.getElementById('progress')
//   let songList = document.getElementById('song-list')
  
  

//   let songs = [
//       {
//           name: 'song1',
//           id: 1
//       },
//       {
//           name: 'song2',
//           id: 2
//       },
//       {
//         name: 'song3',
//         id: 3
//       },
//       {
//         name: 'song4',
//         id: 4
//       }
//   ]


//   let audio = new Audio("./assets/song1.mp3");

//   for(let song of songs){
//       let li = document.createElement('li');
//       li.innerText = song.name;
//       li.setAttribute('id', song.id);
//       li.classList.add('song-item');
//       songList.append(li);

//   }



//  playBtn.addEventListener('click', ()=>{
//      audio.paused ? audio.play() : audio.pause();
//      if(playBtn.children[0].classList.contains('fa-play')){
//          playBtn.children[0].classList.remove('fa-play')
//          playBtn.children[0].classList.add('fa-pause')
//      }
//      else
//      {
//         playBtn.children[0].classList.remove('fa-pause')
//          playBtn.children[0].classList.add('fa-play')
         
//      }
//  })




//  //Progress

//  audio.addEventListener('timeupdate', function(){
//     let currentProgress = audio.currentTime * 100 /  audio.duration
//     progress.value = currentProgress;
//  })


//  //drag

//  progress.addEventListener('change', function(){
//     let updatedTime = audio.duration * progress.value / 100;
//     audio.currentTime = updatedTime;
//  })



//  songList.addEventListener('click' , function(event){
//     let songId = event.target.getAttribute('id');
//     audio.src = `./assets/song${songId}.mp3`;
//     audio.currentTime = 0;
//     audio.play();
//     playBtn.children[0].classList.add('fa-pause');
//     playBtn.children[0].classList.remove('fa-play');
// })


// ---------------------------------------------------------------------


let playBtn = document.getElementById('play-btn');
let progress = document.getElementById('progress');
let songList = document.getElementById('song-list');
let audio = new Audio("./assets/song1.mp3");
let currentSongIndex = 0;

let songs = [
    {
        name: 'song1',
        id: 1
    },
    {
        name: 'song2',
        id: 2
    },
    {
        name: 'song3',
        id: 3
    },
    {
        name: 'song4',
        id: 4
    },
    {
        name: 'song5',
        id: 5
    },
    {
        name: 'song6',
        id: 6
    }
];

// ... (your code for creating the song list)

for(let song of songs){
          let li = document.createElement('li');
          li.innerText = song.name;
          li.setAttribute('id', song.id);
          li.classList.add('song-item');
          songList.append(li);
    
      }

playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }

    updatePlayButton();
});

audio.addEventListener('timeupdate', function () {
    let currentProgress = (audio.currentTime / audio.duration) * 100;
    progress.value = currentProgress;
});

progress.addEventListener('input', function () {
    let updatedTime = (audio.duration * progress.value) / 100;
    audio.currentTime = updatedTime;
});

songList.addEventListener('click', function (event) {
    let songId = event.target.getAttribute('id');
    playSong(songId);
});

function playSong(songId) {
    audio.src = `./assets/song${songId}.mp3`;
    audio.currentTime = 0;
    audio.play();
    updatePlayButton();
}

function updatePlayButton() {
    if (audio.paused) {
        playBtn.children[0].classList.remove('fa-pause');
        playBtn.children[0].classList.add('fa-play');
    } else {
        playBtn.children[0].classList.remove('fa-play');
        playBtn.children[0].classList.add('fa-pause');
    }
}

// Add event listeners for backward and forward buttons
document.getElementById('backward-btn').addEventListener('click', function () {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong(songs[currentSongIndex].id);
});

document.getElementById('forward-btn').addEventListener('click', function () {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong(songs[currentSongIndex].id);
});

