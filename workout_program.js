// program.js

const programDays = {
  PushA: "Push A (chest, front delts, triceps)",
  PullA: "Pull A (lats, upper back, biceps)",
  LowerA: "Lower A (quad dominant)",
  PushB: "Push B (chest, side delts, triceps)",
  PullB: "Pull B (upper-back thickness, arms)",
  LowerB: "Lower B (posterior-chain bias)"
};

const program = {
    PushA: [
      { name: "Barbell bench press", sets: [4,4,4,3], reps: ["6-8","6-8","6-8","6-8"] },
      { name: "Incline dumbbell press", sets: [3,3,3,2], reps: ["8-10","8-10","8-10","8-10"] },
      { name: "Standing overhead press", sets: [3,3,3,2], reps: ["6-8","6-8","6-8","6-8"] },
      { name: "Machine chest fly", sets: [3,4,5,2], reps: ["10-12","10-12","10-12","10-12"] },
      { name: "Cable lateral raise", sets: [3,4,5,2], reps: ["12-15","12-15","12-15","12-15"] },
      { name: "Overhead rope triceps ext.", sets: [3,3,3,2], reps: ["12-15","12-15","12-15","12-15"] },
    ],
    PullA: [
      { name: "Weighted pull-ups", sets: [4,4,4,3], reps: ["6-8","6-8","6-8","6-8"] },
      { name: "Chest-supported row", sets: [3,3,3,2], reps: ["8-10","8-10","8-10","8-10"] },
      { name: "Meadows row", sets: [3,3,3,2], reps: ["10-12","10-12","10-12","10-12"] },
      { name: "Straight-arm pulldown", sets: [3,4,5,2], reps: ["12-15","12-15","12-15","12-15"] },
      { name: "Seated incline curl", sets: [3,3,3,2], reps: ["10-12","10-12","10-12","10-12"] },
      { name: "EZ-bar preacher curl", sets: [2,3,4,1], reps: ["12-15","12-15","12-15","12-15"] },
    ],
    LowerA: [
      { name: "High-bar back squat", sets: [4,4,4,3], reps: ["8-10","8-10","8-10","8-10"] },
      { name: "Romanian deadlift", sets: [3,3,3,2], reps: ["8-10","8-10","8-10","8-10"] },
      { name: "Leg press (feet low-narrow)", sets: [3,4,5,2], reps: ["12-15","12-15","12-15","12-15"] },
      { name: "Leg extension (slow eccentric)", sets: [3,4,5,2], reps: ["12-15","12-15","12-15","12-15"] },
      { name: "Seated calf raise", sets: [3,3,3,2], reps: ["10-12","10-12","10-12","10-12"] },
    ],
    PushB: [
      { name: "Smith incline press", sets: [4,4,4,3], reps: ["10-12","10-12","10-12","10-12"] },
      { name: "Dumbbell shoulder press", sets: [3,3,3,2], reps: ["10-12","10-12","10-12","10-12"] },
      { name: "Cable cross-over", sets: [3,4,5,2], reps: ["12-15","12-15","12-15","12-15"] },
      { name: "Seated lateral raise", sets: [3,4,5,2], reps: ["15-20","15-20","15-20","15-20"] },
      { name: "Dip machine", sets: [3,3,3,2], reps: ["12-15","12-15","12-15","12-15"] },
      { name: "Single-arm cable kick-back", sets: [3,3,3,2], reps: ["15-20","15-20","15-20","15-20"] },
    ],
    PullB: [
      { name: "Barbell row (reverse grip)", sets: [4,4,4,3], reps: ["8-10","8-10","8-10","8-10"] },
      { name: "Lat pulldown (close neutral)", sets: [3,3,3,2], reps: ["12","12","12","12"] },
      { name: "Cable face pull", sets: [3,4,5,2], reps: ["15","15","15","15"] },
      { name: "Dumbbell rear-delt swing", sets: [2,2,2,1], reps: ["20","20","20","20"] },
      { name: "Hammer curl", sets: [3,3,3,2], reps: ["8-10","8-10","8-10","8-10"] },
      { name: "Incline dumbbell curl", sets: [3,4,5,2], reps: ["12-15","12-15","12-15","12-15"] },
    ],
    LowerB: [
      { name: "Conventional deadlift", sets: [3,3,3,2], reps: ["6-8","6-8","6-8","6-8"] },
      { name: "Front squat", sets: [3,3,3,2], reps: ["8-10","8-10","8-10","8-10"] },
      { name: "Hip thrust", sets: [3,3,3,2], reps: ["10-12","10-12","10-12","10-12"] },
      { name: "Seated leg curl", sets: [3,4,5,2], reps: ["10-12","10-12","10-12","10-12"] },
      { name: "Leg-press calf raise", sets: [4,5,6,3], reps: ["12-15","12-15","12-15","12-15"] },
    ],
  };