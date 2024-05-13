function createPizzaSharingUI() {
  const displayElement = document.getElementById("pizzaDiv");

  // Create input field for totalSlices
  const slicesInput = document.createElement("input");
  slicesInput.type = "number";
  slicesInput.placeholder = "Total Slices";
  displayElement.appendChild(slicesInput);

  // Create input field for totalPeople
  const peopleInput = document.createElement("input");
  peopleInput.type = "number";
  peopleInput.placeholder = "Total People";
  displayElement.appendChild(peopleInput);

  // Create button
  const button = document.createElement("button");
  button.textContent = "Share Pizza";

  // Add event listener to the button to calculate and display slices per person
  button.addEventListener("click", function() {
    const totalSlices = parseFloat(slicesInput.value);
    const totalPeople = parseFloat(peopleInput.value);
    if (!isNaN(totalSlices) && !isNaN(totalPeople) && totalPeople !== 0) {
      const slicesPerPerson = totalSlices / totalPeople;
      const result = `Each person gets ${slicesPerPerson.toFixed(2)} slices of pizza; from our ${totalSlices} slice pizza`;
      displayElement.innerText = result;
    } else {
      displayElement.innerText = "Please enter valid numbers for Total Slices and Total People (Total People should not be zero).";
    }
  });

  // Append button to the specified display element
  displayElement.appendChild(button);
}

// Example usage:
createPizzaSharingUI();
