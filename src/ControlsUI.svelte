<script>
    export let goPrev;
    export let goNext;
    export let toggleTimer;
    export let isPlaying;
    export let isEnded;
</script>
<div id="controlsUI" class:isNotEnded={!isEnded}>
    
    <button on:click={goPrev} class="prev">&lt;</button>
    <button on:click={toggleTimer}  class="play">
        {#if isPlaying}<img alt="pause" src="img/pause.svg"/>
        {:else}<img alt="play" src="img/play.svg"/>
        {/if}
    </button>
    <button on:click={goNext} class="next">&gt;</button>
    
</div>


<style>

button {
    border-radius: 10px;
    border-width: 4px 6px 6px 4px;
    border-style: solid;
    border-color: #000000;
    background-color:#FFC46B;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    font-size:2.1em;
    font-weight:bold;
}

button:active {
    border-width: 6px 4px 4px 6px;
    background-color:#FFC46B;

}
.play { 
    width:1.5em;
    height:1.5em;
}

.prev, .next {
    width:1em;
    height:1em;
}

#controlsUI {
    margin-top:-2em;
    display:flex;
    flex-direction:row;
    justify-content: space-around;
    align-items:center;
    position:relative;
    width:100%;
    
}
.isNotEnded {
    z-index:3;
}
@media screen and (min-width: 500px) {
        #controlsUI {
            width:500px;
        }
    }
</style>