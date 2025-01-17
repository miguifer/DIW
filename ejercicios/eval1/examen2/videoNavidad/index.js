//get the video
var video = document.getElementById("myVideo");
//getthebuttom
var btn = document.getElementById("myBtn");

//get button sound
var soundBtn = document.getElementById("soundBtn");
var soundImg = document.getElementById("soundImg");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

function soundMute() {
  if (video.muted) {
    video.muted = false;
    soundImg.src = "sound.png";
    soundImg.alt = "Sound on";
  } else {
    video.muted = true;
    soundImg.src = "mute.png";
    soundImg.alt = "Sound off";
  }
}

var videoTittle = document.getElementById("videoTittle");

var showTime = 0;

video.addEventListener("timeupdate", function () {
  if (video.currentTime >= showTime && video.currentTime < showTime + 5) {
    videoTittle.style.display = "block";
  } else {
    videoTittle.style.display = "none";
  }
});
