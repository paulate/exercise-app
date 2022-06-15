<script>
	import WorkoutList from './WorkoutList.svelte';
	import Dashboard from './Dashboard.svelte';

	// SFX
	//TODO: audio not working on ios

	let start = new Audio('audio/start.wav'); // buffers automatically when created
	let start_interval = new Audio('audio/start_interval.wav');
	let end_interval = new Audio('audio/end_interval.wav');
	let left_on = new Audio('audio/left_on.wav');
	let right_rest = new Audio('audio/right_rest.wav');

	
	// Workout data
	// todo: select workouts
	// todo: bug - sometimes resting shows 10/20 reps? 
	let workout = [];
	let workout002 = [{
		name:'Plank With Long Title',
		duration:5
	},{
		name:'Side Plank',
		duration:5,
		alternating:"reps",
	},{
		name:'Crunches',
		duration:5,
		reps:2
	},   ]
	let workout01 = [
		{
		name:'Plank Walk',
		duration:10,
		reps:8,
	},{
		name:'Side Plank',
		duration:10,
		reps:8,
	},{
		name:'Other Side Plank',
		duration:10,
		reps:8,
	},{
		name:'Upside Down Bugs',
		duration:8,
		reps:10,
		alternating:"reps"
	}]
	let workout00 = [{
		name:'Calf Stretch',
		duration:25,
		alternating:"reps",
	},
	{
		name:'Forward Fold',
		duration:30,
	},
	{
		name:'IT Band Stretch',
		duration:20,
		alternating:"reps",
	},
	{
		name:'Inner Thigh Stretch',
		duration:20,
		alternating:"reps",
	},
	{
		name:'Pretzel Stretch',
		duration:30,
		alternating:"reps",
	},
	{
		name:'Neck Stretch',
		duration:30,
	},{
		name:'Leg Hold Stretch',
		duration:20,
		reps:2,
		alternating:"reps",
	},{
		name:'Pigeon Stretch',
		duration:20,
		reps:2,
		alternating:"reps",
	},{
		name:'Leg Rocks 1',
		duration:5,
		reps:5,
		alternating:"reps",
	},{
		name:'Leg Rocks 2',
		duration:5,
		reps:5,
		alternating:"reps",
	},
]
	let workout0 = [{
		name: 'Get ur resistance bands',
		duration: 30,	
	},{
		name: 'Shoulder Blade Squeezes',
		duration: 5,
		rest: 2,
		reps: 10,
	},{
		name: 'Hang on top of Doorjamb',
		duration: 30,
	},{
		name: 'Hang on side of Doorjamb',
		duration:30,
		// switchSides: "alternating" or "interval"
		// TODO: SIDES
	},{
		name: 'Hang on other side of Doorjamb',
		duration: 30
		// TODO: SIDES
	},{
		name: 'Hand interlock stretch',
		duration: 15,
		//sides:2,
	},{
		name: 'Hand interlock out stretch',
		duration: 15,
		//sides:2,
	},{
		name: 'Get ready for some lying down stretches',
		duration: 10,
	},{
		name: 'Side lying thoracic rotation',
		duration: 5,
		rest: 5,
		reps: 5
		//TODO: reps but no rest (alternating?)	
		//TODO: sides
	}, {
		name: 'Side lying thoracic rotation other side',
		duration: 5,
		rest: 5,
		reps: 5
		//TODO: reps but no rest (alternating?)	
		//TODO: sides
	}, {
		name: 'Cat Cows',
		duration: 5,
		rest: 5,
		reps: 5
		//TODO: reps but no rest	
		//TODO: alternating
	}, {
		name: 'Ws',
		duration:4,
		rest: 2,
		reps: 20
		//TODO: reps but no rest	
		//TODO: alternating
	}, {
		name: 'Snow angels & Squats',
		duration:5,
		rest: 3,
		reps: 20
		//TODO: reps but no rest	
		//TODO: alternating
	} ]

	let workout1 = [ { //TODO: name workouts
		name: 'Get ur resistance band ready',
		duration:30,

	},{
		name: 'Pull in from elbow',
		duration:5,
		rest: 3,
		reps: 15
		//todo:sides
	},{ 
		name: 'Pull out from elbow',
		duration:5,
		rest: 3,
		reps: 15
	},{ 
		name: 'Pull in from elbow R',
		duration:5,
		rest: 3,
		reps: 15
		//todo:sides
	},{ 
		name: 'Pull out from elbow R',
		duration:5,
		rest: 3,
		reps: 15
	},

	]

	let workout2 = [
		{ 
		name: 'get ready - lay on ur mat',
		duration:30,
	},
		{ 
		name: 'Windshield Wipers',
		duration:60,
	}, {
		name: "Up dogs",
		duration: 30
	}, {
		name: "Bridges against the wall",
		duration: 10,
		rest: 3,
		reps:10
	}, {
		name: "clamshells w resistance bands",
		duration:7,
		rest: 3,
		reps:10
	},{
		name: "clamshells other side",
		duration:7,
		rest: 3,
		reps:10
	} 
	]

	let workout3 = [
		{
		name: "Ankle Circles",
		duration: 30,
		rest: 3,
		reps:2
		},{
		name: "Arch lifts",
		duration: 5,
		rest: 3,
		reps:10
		},{
		name: "Toe folds",
		duration: 20,
		rest: 3,
		reps:4
		},{
		name: "Heel lifts",
		duration: 5,
		rest: 3,
		reps:20
		},{
		name: "Get your resistance band ready",
		duration: 30
		},{
		name: "Resistance band: left",
		duration: 5,
		rest: 5,
		reps:20
		},{
		name: "Resistance band: right",
		duration: 5,
		rest: 5,
		reps:20
		}, {
		name: "Resistance band: left other foot",
		duration: 5,
		rest: 5,
		reps:20
		},{
		name: "Resistance band: right other foot",
		duration: 5,
		rest: 5,
		reps:20
		}, 

	]

	let restDuration = 3;

	// Current workout data, not sure why I need to make it an object, thought it was tidy
	$: currentWorkout = {
		// index: 0,
		// secondsRemaining: 0,
		// currentRep: 1,
		// side: "left",
		// isResting:false,
		// isTransitioning:false,
		// name: "",
		// nextName: "",
		// up next, total reps, name <-- all derived from workout
	}

	function replay(sound) {
		sound.pause();
		sound.currentTime = 0;
		return sound.play();
	}

	function startWorkout(wo){
		start.play();
		start = new Audio('audio/start.wav');
		// start_interval.muted = true;  
		// end_interval.muted = true;
		// left_on.muted = true;
		// right_rest.muted = true;
		start_interval.play();
		end_interval.play();
		left_on.play();
		right_rest.play();
		start_interval.pause();

		workout = wo;
		currentWorkout = {}
		currentWorkout.timerIndex=0;
		currentWorkout.restDuration = restDuration;
		currentWorkout.duration = 0;
		currentWorkout.index = 0;
		currentWorkout.rep = 1;
		currentWorkout.side = 0;
		currentWorkout.isTransitioning = true;
		currentWorkout.isResting = false;
		setTimer(restDuration);
	}

	let timer;
	function setTimer(seconds) {
		currentWorkout.duration = seconds;
		currentWorkout.secondsRemaining = seconds;
		currentWorkout.timerIndex ++;
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
			currentWorkout.side = workout[currentWorkout.index].alternating ? 1 : 0;
			
			
			let startPlayPromise = replay(start_interval);

			if (startPlayPromise !== undefined) {
			startPlayPromise.then(() => {
				// Start whatever you need to do only after playback
				// has begun.
				currentWorkout.name = "it's cool"

			}).catch(error => {
				if (error.name === "NotAllowedError") {
				currentWorkout.name = "error"
				} else {
					currentWorkout.name = "error1"
				// Handle a load or playback error
				}
			});
			}
			// start_interval = new Audio('audio/start_interval.wav');

			setTimer(workout[currentWorkout.index].duration);
		} else if (currentWorkout.isTransitioning == false) { // Just ended a rep or rest
			if ((workout[currentWorkout.index].reps) && 
			   (currentWorkout.rep < workout[currentWorkout.index].reps) &&
			   (currentWorkout.isResting == false)) { // we just finished one rep
					if (workout[currentWorkout.index].alternating == "reps"  && currentWorkout.side < 2) { //if there are reps and we alternate:rep...
						console.log ("just finished one rep, move to other side (alt:reps)")
						setTimer(workout[currentWorkout.index].duration);
						
						replay(left_on);
						// left_on = new Audio('audio/left_on.wav');
						currentWorkout.side++;
					}  else if (workout[currentWorkout.index].alternating == "reps"  && currentWorkout.side == 2) {
						console.log ("ok moved to other side?");


						setTimer(workout[currentWorkout.index].duration);
						
						left_on.play();
						// left_on = new Audio('audio/left_on.wav');

						currentWorkout.side = workout[currentWorkout.index].alternating ? 1 : 0;
						currentWorkout.rep ++;
					} else {
						console.log("just finished one rep, move to resting");
				   		setTimer(currentWorkout.restDuration);
						
						right_rest.play();
						// right_rest = new Audio('audio/right_rest.wav');

						currentWorkout.isResting = true;
					}
			} else if ((workout[currentWorkout.index].reps) && 
			   (currentWorkout.rep < workout[currentWorkout.index].reps) &&
			   (currentWorkout.isResting == true)) { // we just finished resting and have more reps
				console.log("just finished resting (or alternating rep) and have more reps");
					
					setTimer(workout[currentWorkout.index].duration);
					
					left_on.play();
					// left_on = new Audio('audio/left_on.wav');

					currentWorkout.isResting = false; 
					currentWorkout.side = workout[currentWorkout.index].alternating ? 1 : 0;
					currentWorkout.rep ++;
			}  else { 
				if (workout[currentWorkout.index].alternating == "reps" && currentWorkout.side < 2) { // no reps, but we alternate sides still. 
						console.log ("just finished one side, move to other side (alt:reps)")
						currentWorkout.duration = workout[currentWorkout.index].duration;
						setTimer(workout[currentWorkout.index].duration);
						
						left_on.play();
						// left_on = new Audio('audio/left_on.wav');

						currentWorkout.side++;
						
					} else {
					// we are done with reps and or the exercise
						console.log("done with reps or exercise");
						if (workout[currentWorkout.index+1]) { 
							currentWorkout.side = 0;
							currentWorkout.isTransitioning = true; 
							currentWorkout.index ++;
							
							end_interval.play();
							// end_interval = new Audio('audio/end_interval.wav');

							setTimer(restDuration);
						}
						else {
							currentWorkout.side = 0;
							currentWorkout.isFinished = true;
							start.play();
						}
					}
			}

		}
	
	}


function timerSlide(node, {
	delay = 0,
	duration = 400
	}) {

	return {
		delay,
		duration,
		css: t => `width: ${t * 100}`
	};
}
</script>


<WorkoutList/>
<button on:click={() => startWorkout(workout002)}> Start Workout Demo </button>
<button on:click={() => startWorkout(workout01)}> Start Core Exercises</button>

<button on:click={() => startWorkout(workout00)}> Start Morning Stretch </button>
<!-- 
<button on:click={() => startWorkout(workout0)}> Start Workout 1 </button>
<button on:click={() => startWorkout(workout1)}> Start Workout 2 </button>
<button on:click={() => startWorkout(workout2)}> Start Workout 3 </button>
<button on:click={() => startWorkout(workout3)}> Start Workout 4 </button> -->

<!-- 1- (currentWorkout.secondsRemaining/currentWorkout.duration) -->

<Dashboard 
	getReadyBG={(currentWorkout.index == 0 && currentWorkout.isTransitioning == true)}
	rightBG={(currentWorkout.side % 2 == 0 && currentWorkout.side != 0)}
	leftBG={(currentWorkout.side % 2 == 1 && currentWorkout.side != 0)}

	
	hasNext = {(currentWorkout.index == 0 && currentWorkout.isTransitioning == true) || workout[currentWorkout.index+1]}
	>
	
	<svelte:fragment slot="name">
		{#if (currentWorkout.index == 0 && currentWorkout.isTransitioning == true)} 
			Get Ready! 
		{:else if (currentWorkout.isFinished == true)}
			You're done!
		{:else if (currentWorkout.index >= 0 && currentWorkout.isTransitioning == false)}
			<span style="font-size:{workout[currentWorkout.index].name.length > 14 ? 360/(24*workout[currentWorkout.index].name.length): 1}em;">{currentWorkout.name ? currentWorkout.name : workout[currentWorkout.index].name}</span>
			
	    {:else if (currentWorkout.index > 0 && currentWorkout.isTransitioning == true)}
			<span style="font-size:.5em;">Next up: {workout[currentWorkout.index].name}</span>
		{/if} 
	</svelte:fragment>

	<svelte:fragment slot="left">
		{#if (currentWorkout.side % 2 == 1 && currentWorkout.side != 0)}
			<img alt="left" src="./img/armR1.gif" width="60%"/>
		{/if} 
	</svelte:fragment>
	<svelte:fragment slot="right">
		{#if (currentWorkout.side % 2 == 0 && currentWorkout.side != 0)}
			<img alt="right" src="./img/armL.gif" width="60%"/>
		{/if}
	</svelte:fragment>

	<svelte:fragment slot="reps"> 
		{#if (currentWorkout.index >= 0 && currentWorkout.isTransitioning == false)} 
			{#if !(currentWorkout.isFinished) && (workout[currentWorkout.index].reps)}
				{currentWorkout.rep}/{workout[currentWorkout.index].reps}
			{/if}
		{/if}
	</svelte:fragment>

	<svelte:fragment slot="go-rest"> 
		{#if (currentWorkout.index >= 0)} 
			{#if ((currentWorkout.isTransitioning == false))}
				{#if currentWorkout.isResting} 
					<img alt="rest" src="./img/dog_rest.gif" width="60%"/>
				{:else if currentWorkout.isFinished} 
					<img alt="finished" src="./img/finished.gif" width="100%" style="margin-top:-2.5em"/>
				{:else}
					<img alt="go!" src="./img/dog_work.gif" width="60%" style="margin-top:-1.2em"/>
				{/if}
			{:else} 
				<img alt="rest" src="./img/dog_rest.gif" width="60%" style="margin-top:.5em"/>

			{/if}
		{/if}
	</svelte:fragment>
	<svelte:fragment slot="timeBG"> 	
		{#if (currentWorkout.timerIndex)}
		{#key currentWorkout.timerIndex}<div class="timeBG" id="{currentWorkout.timerIndex}" in:timerSlide={{duration:currentWorkout.duration*1000}}></div>{/key}
		{/if}
	</svelte:fragment>
	<svelte:fragment slot="timer">{currentWorkout.secondsRemaining ? currentWorkout.secondsRemaining : "" }</svelte:fragment>
	<svelte:fragment slot="next">
		{#if (currentWorkout.index == 0 && currentWorkout.isTransitioning == true)} 
			{workout[currentWorkout.index+1].name}
		{:else}
			{ workout[currentWorkout.index+1] ? workout[currentWorkout.index+1].name : "" }
		{/if}		
	</svelte:fragment>

	
</Dashboard>

<style>
	.timeBG {
        position:absolute;
		width:100%;
        height:100%;
        background:#ffffffbf;
        align-self:flex-start;
        z-index:0;
    }
</style>