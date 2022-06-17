<script>
    export let title;
    export let timeRemaining;
    export let isPlaying;
    export let isEnded;
    export let rep;
    export let reps;
</script>


<div id="contentUI" class:paused={!(isPlaying || isEnded)} class:isEnded>
    <div class="title">{title}</div>
    <div class="numFont reps">
        
        {#if (reps > 0)} 
            {rep} / {reps}
        {/if}
    </div>
    <div class="numFont timeContent">{timeRemaining}</div> 
</div>


<style>
#contentUI {
        border-radius: 10px;
        border-width: 4px 6px 6px 4px;
        border-style: solid;
        border-color: #000000;
        margin-left:1em;
        margin-right:1em;
        display:flex;
        flex-direction:column;
        align-items:center;
        padding-top:4em;
        padding-bottom:6em;
        margin-top:-6em;    
}
.title {
    font-size:2.7em;
}
.reps {
    font-size:1.3em;
    height:1em;
}
.timeContent {
    font-size: 5.5em;
    margin-top:-.2em;
    margin-bottom:-.3em;
    
}
</style>