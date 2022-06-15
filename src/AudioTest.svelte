<script>
  	let timer;
    let currentWorkout = {duration:0,secondsRemaining:0}; //help, this doesn't seem right - want to instantiate when it actually needs to happen, not before function
    
	function setTimer(seconds) {
		currentWorkout.duration = seconds;
		currentWorkout.secondsRemaining = seconds;
		timer = setInterval( function(){
					currentWorkout.secondsRemaining -= 1;
        console.log(currentWorkout.secondsRemaining);
					if (currentWorkout.secondsRemaining == 0) {
						clearInterval(timer);
						playSound(countdownAudio,13,15)
					}
				}, 1000);
	}
  
  var countdownAudio = document.createElement('audio');
  countdownAudio.src = "http://jPlayer.org/tmp/countdown.mp3";
  var stopTime = 0;
	let count = 0;
  
  var defaultAudio = document.createElement('audio');
  defaultAudio.src = "audio/Default.wav"

  function playSound(sample,startTime,stopTime) {
    autoPause(sample,stopTime);
    sample.currentTime = startTime; //this.getAttribute("data-start");
    sample.play();
  }

  function autoPause(sample,stopTime) {
    sample.addEventListener('timeupdate', function() {
    if (this.currentTime > stopTime) {
    this.pause();
  }
}, false);
  }


	function incrementCount() {
		count += 1;
	}
</script>
<button on:click={playSound(countdownAudio,14,15)}  data-start="14" data-stop="15">2</button>
<button on:click={function() {playSound(defaultAudio,0,2); setTimer(3)}}  data-start="14" data-stop="15">default</button>


<button on:click={incrementCount}>
	Clicked {count} {count === 1 ? 'time' : 'times'}
</button>

