<script context="module">


  export var comboAudio = document.createElement('audio');
  comboAudio.src = "audio/combo.wav";
  var stopTime = 0 

  export function playSound(sample,startTime,sampleStopTime) {

    sample.currentTime = startTime; //this.getAttribute("data-start");
    stopTime = sampleStopTime;
    sample.play();
  }

  comboAudio.addEventListener('timeupdate', function() {
  
  if (this.currentTime > stopTime) {
    this.pause();
  }
}, false);


</script>


<!-- 
<button on:click={playSound(comboAudio,0,1)}>start</button>
<button on:click={playSound(comboAudio,1.1,2)}>si</button>
<button on:click={playSound(comboAudio,2.1,3)}>ei</button>
<button on:click={playSound(comboAudio,3.1,4)}>l</button>
<button on:click={playSound(comboAudio,4.1,5)}>r</button>
<button on:click={playSound(comboAudio,5,6)}>end</button> -->

