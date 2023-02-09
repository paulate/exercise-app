// Data structure:  Array of objects, each object is a workout
// Each workout object has a name and an array of objects, each object is an exercise
// Each exercise object has a name and a duration, optional: reps and alternating

export const workoutData = [
   {
    name:"Core Workout", data:[
        {
            name: 'Sun Salutations',
            duration: 15,
        },{
            name: 'Plank Walk',
            duration: 10,
            reps:8,
        },{
            name: 'Sun Salutations',
            duration: 15,
        },{
            name: 'Side Plank',
            duration:10,
            reps:8
        },{
            name: 'Sun Salutations',
            duration: 15,
        },{
            name: 'Other Side Plank',
            duration:10,
            reps:8
        },{
            name: 'Upside Down Bugs',
            duration:8,
            alternating:"reps",
            reps:10
        },{
        name: 'Bicycles',
        duration: 60,
        rest:10,
        reps:5}
    ]
    },{name:"HIT Run", data:[
        {name:'warm up', duration:180},
        {name:'sprint', duration:60, reps:8,rest:60},
        {name:'warm down', duration:180}
    ]}
    ,
    {
        name:"Wrist Trigger Point", 
        rest:10, 
        data:[
            {
            name: 'Trigger Arm Flex/Extend Palm Up',
            duration: 5,
            alternating:"reps",
            reps:5
            },
            {  name: 'Trigger Arm Flex/Extend Palm Down',
            duration: 5,
            alternating:"reps",
            reps:5
            },
]}, {
    name:"Wrist Stretch",
    data: [{name:'Forearm Flex Stretch',
    duration:30,
    alternating:"reps",
    reps:2
},
{name:'Forearm Extend Stretch',
    duration:30,
    alternating:"reps",
    reps:2
},
{
    name: 'Thumb stretch',
    duration: 30,
    alternating:"reps",
    reps:2
},]
}
,{name:"Morning Stretch", data:[{
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
}]}

]