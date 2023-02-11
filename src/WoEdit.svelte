<script>
    export let clearWorkout, currentWorkout, workoutIndex;
    import {workoutData} from './workoutData.js';

    let editWorkout = function (currentWorkout, workoutIndex) {
        //workoutIndex is optional - if it's undefined, we're adding a new workout
        workoutData.update((workoutData) => {
            if (typeof workoutIndex  === 'undefined') {
                workoutData[workoutData.length] = currentWorkout;
            } else {
                workoutData[workoutIndex] = currentWorkout;
            }
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

  <SubmitForm {schema} value={currentWorkout} on:submit={() => editWorkout(currentWorkout,workoutIndex)} />



