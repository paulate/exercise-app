<script>
	import WorkoutList from './WorkoutList.svelte';
	import Dashboard from './Dashboard.svelte';

	let workout = [{
		name: 'Get Stretchy',
		duration: 3
	},{
		name: 'Forward Fold',
		duration: 5
	}]
	let restDuration = 3;

	$: currentWorkout = {
		// index: 0,
		// secondsRemaining: 0,
		// currentRep: 1,
		// side: "left",
		// isResting:false,
		// isTransitioning:false,
		// name: "",
		// nextName: "",
	}
		// up next, total reps, name
		
	function startWorkout(){
		currentWorkout = {}
		currentWorkout.index = 0;
		currentWorkout.isTransitioning = true;
		setTimer(restDuration);
		// loadWorkoutData(workout);
	}
	function loadWorkoutData(workoutData){ 
		// let i = currentWorkout.index; 
		// currentWorkout.name = workoutData[i].name 
		// currentWorkout.secondsRemaining = workoutData[i].duration
	}

	let timer;
	function setTimer(seconds) {
		currentWorkout.secondsRemaining = seconds;
		timer = setInterval( function(){
					currentWorkout.secondsRemaining -= 1;
					if (currentWorkout.secondsRemaining == 0) {
						clearInterval(timer);
						advanceWorkout();
					}
				}, 1000);
	}

	function advanceWorkout() {
		if (currentWorkout.isTransitioning == true) {
			currentWorkout.isTransitioning = false;
			setTimer(workout[currentWorkout.index].duration);
		} else if (currentWorkout.isTransitioning == false) {
			if (workout[currentWorkout.index+1]) {
				currentWorkout.isTransitioning = true; 
				currentWorkout.index ++;
				setTimer(restDuration);
			}
			else {
				currentWorkout.isFinished = true;
			}
		}
	
	}
</script>


<WorkoutList/>
<button on:click={() => startWorkout()}> Start Workout </button>



<Dashboard>
	
	<svelte:fragment slot="name">
		{#if (currentWorkout.index == 0 && currentWorkout.isTransitioning == true)} 
			Get Ready! 
		{:else if (currentWorkout.isFinished == true)}
			You're done!
		{:else if (currentWorkout.index >= 0 && currentWorkout.isTransitioning == false)}
			{workout[currentWorkout.index].name}
	    {:else if (currentWorkout.index > 0 && currentWorkout.isTransitioning == true)}
			rest

		{/if} 
	</svelte:fragment>
	<svelte:fragment slot="timer">{currentWorkout.secondsRemaining ? currentWorkout.secondsRemaining : 0 }</svelte:fragment>

	
</Dashboard>

<!-- <script>
	let workout = [{
		name: 'Get Stretchy',
		duration: 3
	},{
		name: 'Forward Fold',
		duration: 5
	}]

	let workoutIndex = 0;
	let resting = false;
	let countdown = 0;
	let restTime = 3;
	let name, secondsRemaining

	



	function runWorkout() {
		if (workout[workoutIndex]) {
			name = workout[workoutIndex].name;
			secondsRemaining = workout[workoutIndex].duration;
			countdown = setInterval(function(){
			if (secondsRemaining > 1) {
				secondsRemaining -= 1;
			} else {
				if (resting == false) {
					resting = true;
					secondsRemaining = restTime; 
				} else {
					clearInterval(countdown);
					resting = false;
					secondsRemaining = 0;
					workoutIndex++;
					runWorkout();
				}
			}
			}, 1000);
		} else {
			name = "done";
		}
	}
</script>

	<button on:click={() => runWorkout()}> Start Workout </button>
	 

	<p>{name ? name : ""}</p>
	<p>{secondsRemaining} </p> -->

	<!-- {seconds === 1 ? 'second' : 'seconds'} -->


 <!-- 
{ 
	name: "Side Plank",
	duration: {'on': 10, 'rest': 3},
	repeat: 8,
	sides: 2
}, 
{
	name: 'Forward Fold',
	duration: 20
}
-->