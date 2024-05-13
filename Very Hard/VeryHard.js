// Person constructor
class Person {
  constructor(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
  }

  // Method to exercise
  exercise() {
    console.log(`${this.name} says, "Running is fun! - said no one ever."`);
  }

  // Method to fetch job
  fetchJob() {
    console.log(`${this.name} is a ${this.job}.`);
  }
}

// Programmer constructor inheriting from Person
class Programmer extends Person {
  constructor(name, job, age, languages) {
    super(name, job, age);
    this.languages = languages;
    this.busy = true; // Default value`
  }

  // Method to complete task
  completeTask() {
    this.busy = false;
  }

  // Method to accept new task
  acceptNewTask() {
    this.busy = true;
  }

  // Method to offer new task
  offerNewTask() {
    if (this.busy) {
      console.log(`${this.name} can't accept any new tasks right now.`);
    } else {
      console.log(`${this.name} would love to take on a new responsibility.`);
    }
  }

  // Method to learn new language
  learnLanguage(language) {
    this.languages.push(language);
  }

  // Method to list languages
  listLanguages() {
    return this.languages.join(", ");
  }
}

// Test
const person1 = new Person("Harold", "Backend Engineer", 20);
const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
const c2 = new Programmer("Edwin", "janitor", 55, ["HTML", "SASS", "Ruby"]);
const c3 = new Programmer("Manny", "SysOps", 31, ["HTML", "CSS", "JS", "R"]);

c1.learnLanguage("CSS");
c2.learnLanguage("C++");
c3.learnLanguage("JAVA");

console.log(c1.listLanguages()); // Output: HTML, C#, LUA, CSS
console.log(c2.listLanguages()); // Output: HTML, SASS, Ruby, C++
console.log(c3.listLanguages()); // Output: HTML, CSS, JS, R, JAVA

console.log(person1);
console.log(c1);
console.log(c2);
console.log(c3);

person1.exercise();
person1.fetchJob();
