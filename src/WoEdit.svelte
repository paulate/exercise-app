<script>
    export let clearWorkout, currentWorkout, workoutIndex, updateURL;
    import {workoutData} from './workoutData.js';
    // import CustomFormArray from "./CustomFormArray.svelte";

    // let components = {
    //     "customFormArray": CustomFormArray
    // }; 
    // ^ if using don't forget to add it to the SubmitForm component
    
    let editWorkout = function (currentWorkout, workoutIndex) {
        //workoutIndex is optional - if it's undefined, we're adding a new workout
        workoutData.update((workoutData) => {
            if (typeof workoutIndex  === 'undefined') {
                workoutData[workoutData.length] = currentWorkout;
            } else {
                workoutData[workoutIndex] = currentWorkout;
            }
            updateURL(workoutData);
            return workoutData;
        });
        clearWorkout();
    }

    import { SubmitForm } from '@restspace/svelte-schema-form';
    import './editForm.css';
  
    let schema = {
        type: "object",
        properties: {
            "name": { "type": "string" },
            "rest": { "type": "number"},
            "data": {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        "name": { "type": "string" },
                        "duration": { "type": "number" },
                        "reps": { "type": "number" },
                        "alternating": { "type": "string" }
                    }
                }
            }
        }
    };
  
    const submit = (e) => {
        console.log(JSON.stringify(e.detail.value, undefined, 2));
    }
</script>
<main>    
<div id="top">
        <div id="topBar">
        <div><span class="numFont">0:00 total</span></div>
        <div><span on:click={clearWorkout} class="x">X</span></div>
    </div>
</div>
  <SubmitForm {schema} value={currentWorkout} on:submit={() => editWorkout(currentWorkout,workoutIndex)} />

</main>


<style>
    #top {
        width:100%;
    
        position:absolute;
        top:0;
        z-index:1;
    }
    
    #topBar{
        position:relative;
        z-index:2;
        display:flex;
        flex-direction:row;
        height:20px;
        justify-content: space-between;
        mix-blend-mode:difference;
        background-color: #000000;
        color:#fff;
    }
    
    main {
        position:relative;
  
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
        position:fixed;
        z-index:3;
        bottom:0;
        margin:.5em;
        width:1.5em; 
        height: 1.5em;
        right:0;
    
    }
    
    .share {
        position:fixed;
        z-index:3;
        bottom:0;
        margin:.5em;
        width:1.5em;
        height: 1.5em;
        left:0;
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

