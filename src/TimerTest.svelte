<script>
import { testWorkout } from './workoutData.js';

let timeElapsed = 0;
function incrementCount() {
		timeElapsed += 1;
	}
function decrement() {
    timeElapsed -=1;

}
// use a var timeElapsed = any number and workout data, I can determine
// total length of workout
// which exercise I am in 
// what rep i am in 
// how many seconds I have left of the current rep

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
            console.log(item);
           
            let title = item.name;
            let timeRemaining = item.startTime+item.duration - timeElapsed;
            let totalTimeRemaining = compiledWorkout.totalDuration - timeElapsed;
            let nextTitle = data[i+1] ? data[i+1].name : ""
            let currentData = {title: title, timeRemaining:timeRemaining, totalTimeRemaining:totalTimeRemaining, nextTitle:nextTitle}
            return currentData
        }
    }
}

let compiledWorkout = compileWorkout(testWorkout);


</script>


<button on:click={incrementCount}>
	Time Elapsed: {timeElapsed} {timeElapsed === 1 ? 'second' : 'seconds'}
</button>
<button on:click={decrement}>
	-
</button>
<button> 
    next
</button>
<button> 
    prev
</button>

<p>
{JSON.stringify(seek(compiledWorkout,timeElapsed))}
</p>