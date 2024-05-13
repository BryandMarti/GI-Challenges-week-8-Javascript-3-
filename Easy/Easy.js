function exerciseOfTheDay() {
  let exerciseName = "None";
  const input = document.getElementById('inputValue');
  let inputValue = input.value;
  

  return function(exercise) {
    if (exercise) {
      exerciseName = exercise;
    }
    console.log("Today's exercise: " + exerciseName);
  };
  
  const challengeDisplay = document.getElementById("easyJS") ;
  const hElement = document.createElement('h1');
  challengeDisplay,appendChild(hElement);
  hElement.innerHTML = `
  Today's exercise: ${exerciseName}
  `

}


const exercise = exerciseOfTheDay() ;

console.log(exercise("Running")); 
console.log(exercise("Swimming"));
console.log(exercise("Dancing")); 
console.log(exercise("Fencing")); 


