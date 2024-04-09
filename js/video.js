var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

//initilizing the video
video = document.getElementById("player1");
video.autoplay = false;
video.loop = false;

// creating play button for the video
document.getElementById("play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	updateVolumeInfo();
});

// creating pause button
document.getElementById("pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

//creating slow down function
document.getElementById("slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate -= 0.1;
	console.log("New Speed: " + video.playbackRate);
});

// creating speed up function
document.getElementById("faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate += 0.1;
	console.log("New Speed: " + video.playbackRate);
});

// skip ahead function
document.getElementById("skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	if (video.currentTime + 10 < video.duration) {
		video.currentTime += 10;
	} else {
		video.currentTime = 0;
	}
	console.log("Current Time: " + video.currentTime);
});

// mute button
var muteButton = document.getElementById("mute");
muteButton.addEventListener("click", function() {
	console.log("Mute/Unmute Video");
	video.muted = !video.muted;
	muteButton.textContent = video.muted ? "Unmute" : "Mute";
});

// volume
var volumeSlider = document.getElementById("slider");
volumeSlider.addEventListener("input", function() {
	console.log("Volume Changed");
	video.volume = volumeSlider.value / 100;
	updateVolumeInfo();
});

// Styled
document.getElementById("vintage").addEventListener("click", function() {
	console.log("Old School Style");
	video.classList.add("oldSchool");
});

// Original
document.getElementById("orig").addEventListener("click", function() {
	console.log("Original Style");
	video.classList.remove("oldSchool");
});

function updateVolumeInfo() {
	document.getElementById("volume").textContent = Math.round(video.volume * 100) + "%";
};
