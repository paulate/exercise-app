import { writable } from 'svelte/store';


const initialWorkoutData = [{
		name: 'Forward Fold',
		duration: 2
}]

export const workoutData = writable(initialWorkoutData);

