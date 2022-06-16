<script>
import Timer from './Timer.svelte';
import { playSound, comboAudio } from './Audio.svelte';
import { testWorkout } from './workoutData.js';
import Dash1 from './Dash2.svelte';



const playStartSound = () => playSound(comboAudio,0,1);
const playStartIntervalSound = () => playSound(comboAudio,1.1,2);
const playEndIntervalSound = () => playSound(comboAudio,2.1,3);
const playLeftSound = () =>  playSound(comboAudio,3.1,4);
const playRightSound = () => playSound(comboAudio,4.1,5); 
const playEndSound = () => playSound(comboAudio,5,6); 

let timerPlay = false;
$: timerSeconds = 0;

const toggleTimer = () => {
    if (timerSeconds ==0) {
        console.log("start!");
        playStartSound();
    };
    timerPlay = !timerPlay;
};
const handleTickTimer = () => {
    if (timerSeconds >= compiledWorkout.totalDuration) {
        toggleTimer();
    } else {
    timerSeconds += 1;
    }
    let prevDataType = seek(compiledWorkout,timeElapsed).type
    let currDataType = seek(compiledWorkout,timeElapsed+1).type; //timeElapsed is 1 behind timerseconds here
    console.log(prevDataType, currDataType);
    if (currDataType != prevDataType) { 
        switch (currDataType) {
            case 'end':
                playEndSound();
                break;
            case 'rest': 
                playEndIntervalSound();
                break;
            case 'exercise': 
                playStartIntervalSound();
                break;
        }
    
        }
    };

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
            return {title: "You're done!", type:"end"}
        }
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        if ((item.startTime <= timeElapsed) && (timeElapsed < item.startTime+item.duration)){
           
            let title = item.name;
            let timeRemaining = item.startTime+item.duration - timeElapsed;
            let totalTimeRemaining = compiledWorkout.totalDuration - timeElapsed;
            let nextTitle = data[i+1] ? data[i+1].name : ""
            let currentData = {title: title, startTime: item.startTime, timeRemaining:timeRemaining, totalTimeRemaining:totalTimeRemaining, nextTitle:nextTitle, type: item.type}
            
            return currentData
        }
    }
}

function goNext() {
    let currentData = seek(compiledWorkout,timeElapsed)
    timerSeconds += currentData.timeRemaining;
}

function goPrev(){
    let currentData = seek(compiledWorkout,timeElapsed)
    if (timeElapsed == currentData.startTime && timeElapsed > 0) {
        currentData = seek(compiledWorkout,timeElapsed-1);
    } 
    timerSeconds = currentData.startTime;
}


// init
let compiledWorkout = compileWorkout(testWorkout);
$: timeElapsed = timerSeconds; //might be confusing but I'm distinguishing timeElapsed as to be used in display/render ("read only"), whereas timerSeconds is used to actually change the time (prev/next buttons affect timerSeconds).


</script>

Time Elapsed: {timeElapsed} {timeElapsed === 1 ? 'second' : 'seconds'}

<button on:click={toggleTimer}>{timerPlay ? 'Pause' : 'Start'}</button>
{#if timerPlay}
<Timer callback={handleTickTimer} />
{/if}

<button on:click={goNext}> 
    next
</button>
<button on:click={goPrev}> 
    prev
</button>

<p>
{JSON.stringify(seek(compiledWorkout,timeElapsed))}

</p>

<Dash1/>




