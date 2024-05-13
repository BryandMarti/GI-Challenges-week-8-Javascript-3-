function createPatient(name, ssn, displayElementId) {
  // Create PII object within a closure
  const PII = (function() {
    // Private properties
    const data = {
      name: name,
      ssn: ssn
    };

    // Public function to get the name
    function getName() {
      return data.name;
    }

    // Public function to get the SSN (not accessible)
    function getSSN() {
      return data.ssn.replace(/./g, '*'); // Hide SSN
    }

    // Return an object with public methods
    return {
      getName: getName,
      getSSN: getSSN
    };
  })();

  // Create input field
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Enter Name";

  // Create button
  const button = document.createElement("button");
  button.textContent = "Get Details";

  button.addEventListener("click", function() {
    // Get entered name from the input field
    const enteredName = input.value.trim();
    // Get SSN from the PII object
    const ssn = PII.getSSN();
    // Display entered name and SSN
    alert("Entered Name: " + enteredName + "\nSSN: " + ssn);
  });

  // Get the display element
  const displayElement = document.getElementById(displayElementId);

  // Append input field and button to the display element
  displayElement.appendChild(input);
  displayElement.appendChild(button);

  // Return the PII object with only the getName and getSSN methods accessible
  return PII;
}

<<<<<<< Updated upstream
const patient2 = createPatient("John", 123456789);
console.log(patient2.name); 
// Undefined (not accessible)
console.log(patient2.ssn); 
// Undefined (not accessible)
console.log(patient2.getName()); 
// John
=======
// Create a patient object and input field/button in the 'displayChallenge' div
const patient2 = createPatient("John", "123-45-6789", "displayChallenge");
>>>>>>> Stashed changes

