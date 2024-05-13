// Person class
class Person {
  constructor(name, job, age) {
    Object.assign(this, { name, job, age });
  }

  exercise() {
    console.log(`${this.name} says, "Running is fun! - said no one ever."`);
  }

  fetchJob() {
    console.log(`${this.name} is a ${this.job}.`);
  }
}

// Programmer class inheriting from Person
class Programmer extends Person {
  constructor(name, job, age, languages) {
    super(name, job, age);
    this.languages = languages;
    this.busy = true;
  }

  completeTask() { this.busy = false; }
  acceptNewTask() { this.busy = true; }

  offerNewTask() {
    console.log(`${this.name} ${this.busy ? "can't accept any new tasks right now." : "would love to take on a new responsibility."}`);
  }

  learnLanguage(language) { this.languages.push(language); }
  listLanguages() { return this.languages.join(", "); }
  isBusy() { return this.busy ? "Busy" : "Available"; }
}

// Create people
const people = [
  new Programmer("Harold", "Backend Engineer", 20),
  new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]),
  new Programmer("Edwin", "Janitor", 55, ["HTML", "SASS", "Ruby"]),
  new Programmer("Manny", "SysOps", 31, ["HTML", "CSS", "JS", "R"])
];

// Function to find person by name
const findPerson = name => people.find(person => person.name === name);

// Function to create input field and button
const createInputAndButton = () => {
  const displayElement = document.getElementById('displayChallenge');
  const nameInput = document.createElement("input");
  const button = document.createElement("button");
  const infoDiv = document.createElement("div");

  nameInput.type = "text";
  nameInput.placeholder = "Enter Name";
  button.textContent = "Display Info";

  button.addEventListener("click", () => {
    const enteredName = nameInput.value.trim();
    const person = findPerson(enteredName);
    infoDiv.innerHTML = person ? `
    <p>Name: ${person.name},</p>
    <p>Job: ${person.job}, </p>
    <p>Age: ${person.age}, </p>
    <p>Languages: ${person.listLanguages()},</p> 
    <p>Availability: ${person.isBusy()}</p>` : "Person not found!";
  });

  [nameInput, button, infoDiv].forEach(element => displayElement.appendChild(element));
};

// Call function to create input field and button
createInputAndButton();
