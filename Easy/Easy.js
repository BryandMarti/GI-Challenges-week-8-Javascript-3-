function exerciseOfTheDay() {
  let exerciseName = "None";

  return function(exercise) {
    if (exercise) {
      exerciseName = exercise;
    }
    console.log("Today's exercise: " + exerciseName);
  };
}

// Example usage:
const exercise = exerciseOfTheDay();

console.log(exercise("Running")); 
console.log(exercise("Swimming"));
console.log(exercise("Dancing")); 
console.log(exercise("Fencing")); 
