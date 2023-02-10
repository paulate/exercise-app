<script>
    import Workout from './Workout.svelte';
    import WoList from './WoList.svelte';
    import WoEdit from './WoEdit.svelte';

    let currentWorkout = {};
    let workoutIndex = 0;

    let clearWorkout = () => currentWorkout = [];
    let setWorkout = function (workout) {
        currentWorkout = workout;  
        screenState = "workout";    
    }
    let editWorkout = function (workout, index) {
        workoutIndex = index;
        currentWorkout = workout;  
        screenState = "edit";    
    }
    let screenState = "list"; // list, edit, workout (but we currently don't use list) 
</script>

{#if (currentWorkout.name && (screenState == "workout")) }
<Workout {clearWorkout} {currentWorkout} />
{:else if (currentWorkout.name && (screenState == "edit"))}
<WoEdit {clearWorkout} {currentWorkout} {workoutIndex} /> 
{:else}
<WoList {setWorkout} {editWorkout}  />

{/if}