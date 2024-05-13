function exerciseOfTheDay() {
  const input = document.getElementById('inputValue');
  let inputValue = input.value.trim(); 
  
  //data validation
  function isValidExercise(exercise) {
    // Check if exercise is not empty and not just whitespace
    return exercise.trim() !== "";
  }

  function display(exercise) {
    if (isValidExercise(exercise)) {
      inputValue = exercise;

      const challengeDisplay = document.getElementById("easyJS");
      const hElement = document.createElement('h1');
      hElement.textContent = `Today's exercise: ${inputValue}`;
      challengeDisplay.appendChild(hElement);

      console.log("Today's exercise: " + inputValue);
    } else {
      console.log("Please enter a valid exercise.");
    }
  }

  display(inputValue);
}
