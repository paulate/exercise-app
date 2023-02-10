<script>
    export let clearWorkout, currentWorkout, workoutIndex;
    import {workoutData} from './workoutData.js';

    console.log((currentWorkout));
    let editWorkout = function (currentWorkout, workoutIndex) {
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
</script>
<textarea id="name" bind:value={currentWorkout.name}></textarea>
{#each currentWorkout.data as {name, duration}, i}
    <div class="exercise">
        <input type="text" bind:value={currentWorkout.data[i].name} />
        <input type="number" bind:value={currentWorkout.data[i].duration} />
        <input type="number" bind:value={currentWorkout.data[i].reps} />
        <input type="text" bind:value={currentWorkout.data[i].alternating} />
    </div>
{/each}
<!-- take data from inputs and generate a JSON workout object -->


<button on:click={() => editWorkout(currentWorkout,workoutIndex)}> Save </button>