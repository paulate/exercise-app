<script>
    export let clearWorkout;
    export let currentWorkout;
</script>
{JSON.stringify(currentWorkout)}
<button on:click={clearWorkout}> Close Workout </button>