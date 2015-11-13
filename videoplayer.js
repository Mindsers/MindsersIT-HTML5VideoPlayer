$(document).ready(function(){
	var playpauseButton = $('#playpause');
	var rewindButton = $('#rewind');
	var forwardButton = $('#forward');
	var soundmuteButton = $('#soundmute');

	var video = $('.player video');
	var videoDOM = video.get(0);

	// Play et pause sur la vidéo
	playpauseButton.click(function(){
		if(videoDOM.paused == true){
			videoDOM.play();
			playpauseButton.children('img').attr('src', 'pause.png');
		}else {
			videoDOM.pause();
			playpauseButton.children('img').attr('src', 'play.png');
		}

		return false;
	});

	// Enlever et remettre le son de la vidéo
	soundmuteButton.click(function(){
		if(videoDOM.muted == true){
			videoDOM.muted = false;
			soundmuteButton.children('img').attr('src', 'speaker.png');
		}else{
			videoDOM.muted = true;
			soundmuteButton.children('img').attr('src', 'mute.png');
		}

		return false;
	});
});