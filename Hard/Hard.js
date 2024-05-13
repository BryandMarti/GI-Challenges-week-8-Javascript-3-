function createPatient(name, ssn) {   // Private object with properties
  const PII = {
    name: name,
    ssn: ssn
  };

  function getName() {   // Public function to get the name
    return PII.name;
  }

  function getSSN() {
    return undefined; // Not accessible
  }

  return {              // Return an object with public functions only
    getName: getName,
    getSSN: getSSN
  };
}

const patient2 = createPatient("John", 123456789);
console.log(patient2.name); 
// Undefined (not accessible)
console.log(patient2.ssn); 
// Undefined (not accessible)
console.log(patient2.getName()); 
// John

