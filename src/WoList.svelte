<script>
    export let setWorkout;
    import {workoutData} from './workoutData.js';
 
</script>
<main> 
    <div id="top">
        <div id="topBar"></div>
        <img src="img/dog_wo.png" alt="WO Dog"/>
    </div>
    
        {#each workoutData as { name, data }, i}
        <div class="workout-buttons">
                <button class="workout" on:click={() => setWorkout(workoutData[i])}>{name}</button><button class="edit disabled"><img alt="edit" src="img/edit.svg"></button>
        </div>
        {/each}
    
    <button class="add disabled">+</button>
</main>
<style>
#top {
    width:100%;

    position:absolute;
    top:0;
    z-index:1;
}

#topBar{
    width:100%;
    height:20px;
    background-color: #000000;
}

main {
    position:relative;
    width: 100vw;
    height: 100vh;
    font-family:'terminal_grotesque', sans-serif;
    font-size:18px;
    display:flex;
    flex-direction:column;
    background:#fff;
    justify-content:center;
    gap:2em;

    
    }

.edit {
    /* font-size:18px; */
    width:1em;
    height:1em;
}
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
    margin:0;
}

.disabled {
    background:rgba(0, 0, 0, 0.1) ;

}
.add {
    position:absolute;
    z-index:3;
    bottom:0;
    margin:.5em;
    width:1.5em; 
    height: 1.5em;
    right:0;

}
.workout {
    width:280px;
    height:60px;
    font-size:24px;
}
.workout-buttons {
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items: center;
    gap:.5em;
    position:relative;
    z-index:2;
}
</style>