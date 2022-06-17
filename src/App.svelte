<script>
    import Workout from './Workout.svelte';
    import WoList from './WoList.svelte';

    let currentWorkout = [];
    let clearWorkout = () => currentWorkout = [];
    let setWorkout = function (workout) {
        currentWorkout = workout;
        
    }
</script>

{#if currentWorkout.length > 0}
<Workout {clearWorkout} {currentWorkout} />
{:else}
<WoList {setWorkout} />
{/if}