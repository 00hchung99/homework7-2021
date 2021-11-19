var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	console.log(video.currentTime)
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
	console.log(video.currentTime)
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Old video speed is " + video.playbackRate);
	video.playbackRate = video.playbackRate - 0.050;
	console.log("New video speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Old video speed is " + video.playbackRate);
	video.playbackRate = video.playbackRate + 0.050;
	console.log("New video speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Current video location is " + video.currentTime);
	video.currentTime += 15;
});

video.addEventListener('ended', function(){
	video.currentTime = 0;
	console.log("Going back to the beginning");
	console.log("Current video location is " + video.currentTime);
	video.play();
})

document.querySelector("#mute").addEventListener("click", function(){
	console.log("Muted " + video.muted);
	if (video.muted === false) {
		video.muted = true;
	}
	else {
		video.muted = false;
	}
	if(mute.innerText === "Mute"){
        mute.innerText = "Unmute";
    }else{
        mute.innerText= "Mute";
    }
	});

document.querySelector('#slider').addEventListener('change',function(){
    video.volume = this.value / 100;
	console.log("The video volume is " + video.volume);
});

document.querySelector("#vintage").addEventListener("click", function(){
	console.log("Video will be vintage style");
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function(){
	console.log("Video will be original style");
	video.classList.remove("oldSchool")
})