<script>
    export let timeElapsed;
    export let timeRemaining;
    export let percentComplete;
    export let isPlaying;
    export let isEnded;
    export let clearWorkout;


</script>
<div id="timerUI">
    <div><span class="numFont">{timeElapsed}</span></div>
    <div><span class="numFont">{timeRemaining}</span><span on:click={clearWorkout} class="x">X</span></div>
</div>
<div class="timerBar" class:paused={!(isPlaying || isEnded)} style="width:{percentComplete}%"></div>

<style>


#timerUI {
    position:relative;
    z-index:2;
    display:flex;
    flex-direction:row;
    height:20px;
    justify-content: space-between;
    mix-blend-mode:difference;
}

.timerBar {
    position:absolute;
    z-index:1;
    background:black;
    height:20px;
    border-radius: 0 5px 5px 0;
    transition: width 1.05s linear 0s; 
}
  
#timerUI div {
    color:white;
    mix-blend-mode: difference;
    display:flex;
    flex-direction:row;
    gap: 4px;
}

.x {
    padding:1px;
    font-weight:bold;
    
}
</style>