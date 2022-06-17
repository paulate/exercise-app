<script>
    export let setWorkout;
    import {workoutData} from './workoutData.js';
 
</script>

{#each workoutData as { name, data }, i}
		<button on:click={() => setWorkout(data)}>{name}</button>
{/each}
