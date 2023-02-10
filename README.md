# workout app 
Design stretching, exercise routines and then use them

# run locally
 HOST=0.0.0.0 npm run dev   

## TODOS
Feb 2023 

[ ] Have workouts saved to URL /#base64workoutdata 
[ ] Add an alert when you press the share button that it copied URL to clipboard
---
[x] Add Custom Rest time to exercise (will alternate between rep and rest) e.g. {name:... reps:... rest:... }
[x] Change background color for exercise (green), left(green)/right(blue). 
[x] 14 letters / resize name based on length of name. (fixed with current UI just centering stacked text) 
[x] Favicon and title. 

---
[x] learn about the webaudio api https://developer.mozilla.org/en-US/docs/Games/Techniques/Audio_for_Web_Games
[x] bugs: audio not working in iOS, safari. 
[x] pause/play
[x] skip/back
[x] background UI timer
[x] finished graphics
[x] Design UI graphics
[x] Make routine picker/put workout data in a different place
 
## Nice to haves
[ ] routine editor (yaml?)
    - not yaml, maybe a gui for easily typing in workouts/form
    - and a button to just edit the JSON directly in a textfield (e.g. codemirror) cuz that might be desirable sometimes 
    - made gui mockup in Figma
    - umm so like anyone on the internet can edit? or save to local storage? what if i want to edit on my computer to have it show up on my phone? save to local storage + be able to copy and paste json? 


[x] Add rest time in between exercises e.g. {rest:10}
[ ] lock rotation? 
[nah] Get "sides" working: switchSides: "interval" 

[x] prevent screen from turning off? - does not turn off if intervals have audio and are shorter than time off screen
[x] time elapsed/time remaining
[x] top UI timer (?)
[NO] Learn svelte native? 
[x] Get it on iOS 
## Feb 8 2023
- Now I can take a hash from a URL and turn it into json data for a workout. 
[x] In WoList, if there's a hash then use that as workoutData. Otherwise, use the .js file. 
[x] Add share button and share default workout if no new workout. 
[x] create the ability to add workouts to editableworkoutdata. 
Current issue before I got too tired: I think instead of use:readhash I can use $ and mark "editableWorkoutData" as reactive. No, I can't, I need to read the hash in order to change editableWorkoutData and then I also need to use on:changehash to make sure the page reloads when I change the hash. But next steps are still to use $ to make editableWorkoutData reactive to when I add a new workout. 
[x] okay i think $: doesn't quite work the way I need it to. Try using stores.
[x] make a lil window open up when you press + and make a new workout with a json object 
[ ] make a fuckin json schema editor for the edit page :< 

## Jun 17 
- major refactor and refresh! with pause and prev/next. 
## May 23
- Finished background UI timer
## May 9
 - Just started implementing "sides" (alternating or interval) 
 