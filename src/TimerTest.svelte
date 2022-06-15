<script>
import Timer from './Timer.svelte';

let timerPlay = false;
$: timerSeconds = 0;

const toggleTimer = () => (timerPlay = !timerPlay);
const handleTickTimer = () => (timerSeconds += 1);



import { testWorkout } from './workoutData.js';

function compileWorkout(workoutData) {
    let compiledWorkout = {workoutData:[],totalDuration:0};
    addExercise(compiledWorkout,{type:"intro", name:"Get Ready!", duration:3});
    for (let i = 0; i<workoutData.length; i++){ 
        let exercise = workoutData[i];
        addExercise(compiledWorkout,{type:"exercise",...exercise}); 
        if (workoutData[i+1]){
            addExercise(compiledWorkout,{type:"rest", name: "rest", duration:3});
        } 
    }
    return compiledWorkout;
}

function addExercise(compiledData,exercise){
    
    compiledData.workoutData.push({startTime:compiledData.totalDuration,...exercise});
    compiledData.totalDuration += exercise.duration;
}

function seek(compiledWorkout, timeElapsed) {
    let data = compiledWorkout.workoutData;
    if (timeElapsed >= compiledWorkout.totalDuration){
            console.log("timeElapsed is greater than total workout duration")
            return {title: "You're done!"}
        }
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        if ((item.startTime <= timeElapsed) && (timeElapsed < item.startTime+item.duration)){
           
            let title = item.name;
            let timeRemaining = item.startTime+item.duration - timeElapsed;
            let totalTimeRemaining = compiledWorkout.totalDuration - timeElapsed;
            let nextTitle = data[i+1] ? data[i+1].name : ""
            let currentData = {title: title, startTime: item.startTime, timeRemaining:timeRemaining, totalTimeRemaining:totalTimeRemaining, nextTitle:nextTitle}
            
            return currentData
        }
    }
}

function goNext() {
    let currentData = seek(compiledWorkout,timeElapsed)
    timeElapsed += currentData.timeRemaining;
}

function goPrev(){
    let currentData = seek(compiledWorkout,timeElapsed)
    if (timeElapsed == currentData.startTime && timeElapsed > 0) {
        currentData = seek(compiledWorkout,timeElapsed-1);
    } 
    timeElapsed = currentData.startTime;
}


// init
let compiledWorkout = compileWorkout(testWorkout);
$: timeElapsed = timerSeconds;
function incrementCount() {
		timeElapsed += 1;
	}
function decrement() {
    timeElapsed -=1;
}


</script>


<button on:click={incrementCount}>
	Time Elapsed: {timeElapsed} {timeElapsed === 1 ? 'second' : 'seconds'}
</button>
<button on:click={decrement}>
	-
</button>
<button on:click={goNext}> 
    next
</button>
<button on:click={goPrev}> 
    prev
</button>

<p>
{JSON.stringify(seek(compiledWorkout,timeElapsed))}
</p>


<div>
	<button on:click={toggleTimer}>{timerPlay ? 'Pause' : 'Play'} Timer</button>
	<p>
		Timer: 
		{timerSeconds} {timerSeconds === 1 ? 'second' : 'seconds'}
	</p>
	{#if timerPlay}
	<Timer callback={handleTickTimer} />
	{/if}
</div>