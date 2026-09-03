// program.js

const programDays = {
  PushA: "Push A",
  PullA: "Pull A",
  LowerA: "Lower A",
  PushB: "Push B",
  PullB: "Pull B",
  LowerB: "Lower B"
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

// ---------- Shared helpers (used by index.html, editor.html, analysis.html) ----------
// Centralized here so the three pages read/write/parse logged sessions the same way
// instead of each keeping its own copy.

const LOGS_KEY = 'hypertrophyLogs';

function getLogs() {
  return JSON.parse(localStorage.getItem(LOGS_KEY) || '[]');
}

function saveLogs(logs) {
  localStorage.setItem(LOGS_KEY, JSON.stringify(logs));
}

function clearLogs() {
  localStorage.removeItem(LOGS_KEY);
}

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

// Parses a plain 'YYYY-MM-DD' string as local midnight, avoiding the UTC
// off-by-one-day shift that `new Date('YYYY-MM-DD')` can produce.
function parseLocalDate(dateStr) {
  return new Date(`${dateStr}T00:00:00`);
}

function byDateDesc(a, b) {
  return new Date(b.date) - new Date(a.date);
}

// Highest number of logged sets across a session's exercises (for table column count).
function maxSetsLogged(session) {
  return Math.max(...session.log.map((ex) => ex.reps.length));
}

// Coerces a logged exercise entry's string fields (weight, reps) to numbers.
function parseLoggedExercise(foundEx) {
  return {
    weight: parseFloat(foundEx.weight),
    reps: (foundEx.reps || []).map((r) => parseInt(r)),
  };
}

function toggleGroup(contentId) {
  const el = document.getElementById(contentId);
  const header = document.querySelector(`[data-target="${contentId}"]`);
  const isOpen = el.style.display === 'block';
  el.style.display = isOpen ? 'none' : 'block';
  if (header) header.classList.toggle('open', !isOpen);
}