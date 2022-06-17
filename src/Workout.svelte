<script>
export let clearWorkout;
export let currentWorkout;

import Timer from './Timer.svelte';
import { playSound, comboAudio } from './Audio.svelte';

import TimerUI from './TimerUI.svelte';
import SideUI from './SideUI.svelte';
import ContentUI from './ContentUI.svelte';
import ControlsUI from './ControlsUI.svelte';
import DogUI from './DogUI.svelte';
import NextUI from './NextUI.svelte';

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
    if (currDataType != prevDataType) { 
        switch (currDataType) {
            case 'end':
                playEndSound();
                break;
            case 'rest': 
                playEndIntervalSound();
                break;
            case 'exercise': 
                if (prevDataType == 'exercise-rest') {
                    playLeftSound();
                } else {
                    playStartIntervalSound();
                }
                break;
            case 'exercise-left': 
                if (prevDataType == 'exercise-right') {
                    playLeftSound();
                } else {
                    playStartIntervalSound();
                }
                break;
            case 'exercise-right': 
                playRightSound();
            case 'exercise-rest': 
                playRightSound();
        }
    
        }
    };

function compileWorkout(workoutData) {
    let compiledWorkout = {workoutData:[],totalDuration:0};
    addExercise(compiledWorkout,{type:"intro", name:"Get Ready!", duration:3, nextName:workoutData[0].name});
    
    for (let i = 0; i<workoutData.length; i++){ 
        let exercise = workoutData[i]; 
        let reps = exercise.reps ? exercise.reps : 1;
        exercise.nextName = workoutData[i+1] ? workoutData[i+1].name: "";
    
        for (let rep = 1; rep <= reps; rep++) {
            // add rep: rep and totalReps: exercise.reps 
            exercise.rep = rep;
            if (exercise.alternating == "reps") { //if exercise has alternating reps, add a left and right. 
                addExercise(compiledWorkout,{side:"left",type:"exercise-left",...exercise}); 
                addExercise(compiledWorkout,{side:"right",type:"exercise-right",...exercise}); 
            } else {
                addExercise(compiledWorkout,{type:"exercise",...exercise}); 
                if (rep < reps) {
                    addExercise(compiledWorkout,{type:"exercise-rest",name:"Rest",nextName:exercise.nextName,rep:rep,reps:reps,duration:3})
                };
            }

        }

        if (workoutData[i+1]){
            addExercise(compiledWorkout,{type:"rest", name: "Rest", duration:3, nextName:workoutData[i+1].name});
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
            return {title: "You're done!", timeRemaining:0, nextTitle:"", type:"end", startTime:compiledWorkout.totalDuration, totalTimeRemaining:0}
        }
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        if ((item.startTime <= timeElapsed) && (timeElapsed < item.startTime+item.duration)){
            let currentData = {}
            if (item.side) {
                currentData.side = item.side;
            }
            currentData.title = item.name;
            currentData.timeRemaining = item.startTime+item.duration - timeElapsed;
            currentData.totalTimeRemaining = compiledWorkout.totalDuration - timeElapsed;
            currentData.nextTitle = item.nextName;
            currentData.startTime = item.startTime;
            currentData.type = item.type;       
            currentData.rep = item.rep ? item.rep : 0;
            currentData.reps = item.reps ? item.reps : 0;     
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

function prettifyTime(seconds) {
    var minutesOut = Math.floor((seconds % 3600) / 60);
    var secondsOut = Math.floor(seconds % 60);

    if (minutesOut < 10) {minutesOut = "0"+minutesOut;}
    if (secondsOut < 10) {secondsOut = "0"+secondsOut;}
    return minutesOut+':'+secondsOut;
}

// init
$: compiledWorkout = compileWorkout(currentWorkout);
$: timeElapsed = timerSeconds; //might be confusing but I'm distinguishing timeElapsed as to be used in display/render ("read only"), whereas timerSeconds is used to actually change the time (prev/next buttons affect timerSeconds).

$: console.log(compiledWorkout);

</script>

{#if timerPlay}
    <Timer callback={handleTickTimer} />
{/if}

<main> 
    <div id="top">
        <TimerUI 
            timeElapsed={prettifyTime(timeElapsed)} 
            timeRemaining={prettifyTime(seek(compiledWorkout,timeElapsed).totalTimeRemaining)} 
            percentComplete={(timeElapsed)/(compiledWorkout.totalDuration-1)*100}
            isPlaying = {timerPlay} 
            isEnded = {seek(compiledWorkout,timeElapsed).type == "end"}
            {clearWorkout}
            />
        {#if (seek(compiledWorkout, timeElapsed).side)}
            <SideUI side={seek(compiledWorkout, timeElapsed).side}/>  
        {/if}
    </div>
    <ContentUI 
        title={seek(compiledWorkout,timeElapsed).title}
        timeRemaining={prettifyTime(seek(compiledWorkout,timeElapsed).timeRemaining)}
        isPlaying = {timerPlay} 
        isEnded = {seek(compiledWorkout,timeElapsed).type == "end"}
        rep = {seek(compiledWorkout,timeElapsed).rep }
        reps = {seek(compiledWorkout,timeElapsed).reps}
        /> 
    
    <ControlsUI {goNext} {goPrev} {toggleTimer} isPlaying = {timerPlay} isEnded= {seek(compiledWorkout,timeElapsed).type != "end"}/>
    
    <div id="bottom">
        <DogUI dogType={seek(compiledWorkout,timeElapsed).type} />
        <NextUI isPlaying = {timerPlay} isEnded = {seek(compiledWorkout,timeElapsed).type == "end"} nextTitle={seek(compiledWorkout,timeElapsed).nextTitle} />
    </div>
</main>

<style>
    #top, #bottom {
        position:absolute;
        width:100%;
        display:flex; 
        flex-direction:column;
    }
    #top {
        top:0;
    }
    #bottom {
        bottom:0;
    }

    main {
        position:relative;
        width: 100vw;
		height: 100vh;
        font-family:'terminal_grotesque', sans-serif;
        font-size:18px;
        display:flex;
        flex-direction:column;
        background:#fff;
        justify-content:center;
    }

</style>




