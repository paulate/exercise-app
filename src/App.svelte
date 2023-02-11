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

    let updateURL = function(workoutData) {
        let currentUrl = new URL(window.location.href);
        let hash = btoa(JSON.stringify(workoutData));
        currentUrl.hash = hash;
        window.history.replaceState({}, '', currentUrl.href);
        return currentUrl;
    }

</script>

{#if (currentWorkout.name && (screenState == "workout")) }
<Workout {clearWorkout} {currentWorkout} />
{:else if (currentWorkout.name && (screenState == "edit"))}
<WoEdit {clearWorkout} {currentWorkout} {workoutIndex} {updateURL} /> 
{:else}
<WoList {setWorkout} {editWorkout} {updateURL} />

{/if}