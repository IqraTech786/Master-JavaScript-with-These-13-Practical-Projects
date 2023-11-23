let myArray = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

// Function to display the array
function displayArray() {
  const arrayDisplayElement = document.getElementById('arrayDisplay');
  arrayDisplayElement.textContent = myArray.join(', ');
}

// Function to perform array shift
function performShift() {
  myArray.shift();
  displayArray();
}

// Function to perform array unshift
function performUnshift() {
  const newItem = prompt("Enter item to unshift:");
  if (newItem !== null) {
    myArray.unshift(newItem);
    displayArray();
  }
}

// Function to perform array pop
function performPop() {
  myArray.pop();
  displayArray();
}

// Function to perform array remove at index
function performRemoveAtIndex() {
  const removeAtIndexElement = document.getElementById('removeAtIndex');
  const indexToRemove = parseInt(removeAtIndexElement.value);

  if (!isNaN(indexToRemove) && indexToRemove >= 0 && indexToRemove < myArray.length) {
    myArray.splice(indexToRemove, 1);
    displayArray();
    removeAtIndexElement.value = ""; // Reset the input after removal
  } else {
    alert("Invalid index. Please enter a valid index.");
  }
}

// Initial display
displayArray();
