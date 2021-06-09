<script>
	import WorkoutList from './WorkoutList.svelte';
	import Dashboard from './Dashboard.svelte';
	let start = new Audio('audio/start.wav'); // buffers automatically when created
	let start_interval = new Audio('audio/start_interval.wav');
	let end_interval = new Audio('audio/end_interval.wav');
	let left_on = new Audio('audio/left_on.wav');
	let right_rest = new Audio('audio/right_rest.wav');
	// SFX: Seconds, end 
	let workout = [{
		name: 'Shoulder Blade Squeezes',
		duration: 5,
		rest: 2,
		reps: 3,
	},{
		name: 'Hang on top of Doorjamb',
		duration: 15,
		rest: 3, 
		reps: 2
	},{
		name: 'Hang on side of Doorjamb',
		duration: 15,
		rest: 3, 
		reps: 2
		// TODO: SIDES
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
		start.play();
		currentWorkout = {}
		currentWorkout.index = 0;
		currentWorkout.rep = 1;
		currentWorkout.isTransitioning = true;
		currentWorkout.isResting = false;
		setTimer(restDuration);
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
		if (currentWorkout.isTransitioning == true) { // End the Rest Transition
			currentWorkout.isTransitioning = false;
			currentWorkout.rep = 1;
			start_interval.play();
			setTimer(workout[currentWorkout.index].duration);
		} else if (currentWorkout.isTransitioning == false) { // Just ended a rep or rest
			
			if ((workout[currentWorkout.index].reps) && 
			   (currentWorkout.rep < workout[currentWorkout.index].reps) &&
			   (currentWorkout.isResting == false)) { // we just finished one rep
			   		setTimer(workout[currentWorkout.index].rest);
					right_rest.play();
					currentWorkout.isResting = true;
			} else if ((workout[currentWorkout.index].reps) && 
			   (currentWorkout.rep < workout[currentWorkout.index].reps) &&
			   (currentWorkout.isResting == true)) { // we just finished resting and have more reps
					setTimer(workout[currentWorkout.index].duration);
					left_on.play();
					currentWorkout.isResting = false; 
					currentWorkout.rep ++;
			}  else { // we are done with reps and or the exercise

				if (workout[currentWorkout.index+1]) { 
					currentWorkout.isTransitioning = true; 
					currentWorkout.index ++;
					end_interval.play();
					setTimer(restDuration);
				}
				else {
					currentWorkout.isFinished = true;
					start.play();
				}
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
	<svelte:fragment slot="reps"> 
		{#if (currentWorkout.index >= 0)} 
			{#if (workout[currentWorkout.index].reps)}
				{currentWorkout.rep} / {workout[currentWorkout.index].reps}
			{/if}
		{/if}
	</svelte:fragment>
	<svelte:fragment slot="go-rest"> 
		{#if (currentWorkout.index >= 0)} 
			{#if (workout[currentWorkout.index].reps && (currentWorkout.isTransitioning == false))}
				{#if currentWorkout.isResting} 
					rest
				{:else}
					go!
				{/if}
			{/if}
		{/if}
	</svelte:fragment>
	<svelte:fragment slot="timer">{currentWorkout.secondsRemaining ? currentWorkout.secondsRemaining : 0 }</svelte:fragment>
	<svelte:fragment slot="next">
		{#if (currentWorkout.index == 0 && currentWorkout.isTransitioning == true)} 
			{workout[currentWorkout.index].name}
		{:else}
			{ workout[currentWorkout.index+1] ? workout[currentWorkout.index+1].name : "" }
		{/if}		
	</svelte:fragment>

	
</Dashboard>