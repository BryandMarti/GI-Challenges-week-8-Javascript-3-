function sharePizza(totalSlices, totalPeople) {
  const slicesPerPerson = totalSlices / totalPeople;
  return `Each person gets ${slicesPerPerson.toFixed(2)} slices of pizza; from our ${totalSlices} slice pizza`;
}

// Example usage:
console.log(sharePizza(8, 2));
console.log(sharePizza(8, 3)); 
console.log(sharePizza(21, 20));
console.log(sharePizza(10, 3));
