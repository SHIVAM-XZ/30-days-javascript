// Task 1:
// Save a string to local storage
localStorage.setItem("myString", "Hello, World!");

// Retrieve the string from local storage
const retrievedString = localStorage.getItem("myString");

console.log(retrievedString);

// Task 2:
const myObject = {
  name: "John",
  age: 30,
  job: "Developer",
};

const jsonstring = JSON.stringify(myObject);
localStorage.setItem("myObject", jsonstring);
const retrievedstring = localStorage.getItem("myObject");
const retrievedobject = JSON.parse(retrievedstring);
console.log(retrievedobject);

// Task 3:
const form = document.getElementById('myform')
const inputName = document.getElementById('inputName')
const display = document.getElementById('displaySavedName')
form.addEventListener('submit',(e)=>{
  e.preventDefault()
  const name = inputName.value
  localStorage.setItem('userName',name)
  inputName.value=''
})
window.addEventListener('load',function(){
  const saveName = this.localStorage.getItem('userName')
  if(saveName){
    display.textContent= `Saved Name: ${saveName}`
  }
})

// Task 4:
// Function to remove an item from local storage
function removeItemFromLocalStorage(key) {
  // Check if the item exists in local storage
  if (localStorage.getItem(key) !== null) {
      // Remove the item
      localStorage.removeItem(key);
      console.log(`Item with key "${key}" has been removed from local storage.`);
  } else {
      console.log(`Item with key "${key}" does not exist in local storage.`);
  }
}

// Example usage
removeItemFromLocalStorage('yourItemKey');



// Task 5:
// Function to store a string value in session storage
function storeStringInSessionStorage(key, value) {
  sessionStorage.setItem(key, value);
  console.log(`Stored "${value}" with key "${key}" in session storage.`);
}

// Function to retrieve and log the string value from session storage
function retrieveStringFromSessionStorage(key) {
  const value = sessionStorage.getItem(key);
  if (value !== null) {
      console.log(`Retrieved value: "${value}" from session storage with key "${key}".`);
  } else {
      console.log(`No value found in session storage with key "${key}".`);
  }
}

// Example usage
storeStringInSessionStorage('exampleKey', 'Hello, World!');
retrieveStringFromSessionStorage('exampleKey');



// Task 6:
// Function to save an object to session storage
function saveObjectToSessionStorage(key, obj) {
  // Convert the object to a JSON string
  const jsonString = JSON.stringify(obj);
  // Save the JSON string to session storage
  sessionStorage.setItem(key, jsonString);
  console.log(`Object saved to session storage with key "${key}".`);
}

// Function to retrieve and log an object from session storage
function retrieveObjectFromSessionStorage(key) {
  // Get the JSON string from session storage
  const jsonString = sessionStorage.getItem(key);
  // Check if the item exists in session storage
  if (jsonString !== null) {
      // Parse the JSON string back into an object
      const obj = JSON.parse(jsonString);
      console.log(`Retrieved object from session storage with key "${key}":`, obj);
      return obj;
  } else {
      console.log(`No object found in session storage with key "${key}".`);
      return null;
  }
}

// Example usage
const exampleObject = { name: "John", age: 30, city: "New York" };
saveObjectToSessionStorage('exampleKey', exampleObject);
retrieveObjectFromSessionStorage('exampleKey');



// Task 7:
document.getElementById('form').addEventListener('submit',(event){
  event.preventDefault()
  const user = document.getElementById('name').value
  localStorage.setItem('lastName', user)
})
window.addEventListener('load', function(){
  const savedname = this.localStorage.getItem('lastName')
  if(savedname){
    document.getElementById('name').value = savedname
  }
})

// Task 8:
// Function to remove an item from session storage
function removeItemFromSessionStorage(key) {
  console.log(`Attempting to remove item with key "${key}" from session storage...`);

  // Check if the item exists in session storage
  if (sessionStorage.getItem(key) !== null) {
      // Remove the item
      sessionStorage.removeItem(key);
      console.log(`Item with key "${key}" has been removed from session storage.`);
  } else {
      console.log(`Item with key "${key}" does not exist in session storage.`);
  }

  console.log(`Finished attempting to remove item with key "${key}" from session storage.`);
}

// Example usage
removeItemFromSessionStorage('exampleKey');



// Task 9:
// Function to remove an item from session storage
function removeItemFromSessionStorage(key) {
  console.log(`Attempting to remove item with key "${key}" from session storage...`);

  // Check if the item exists in session storage
  if (sessionStorage.getItem(key) !== null) {
      // Remove the item
      sessionStorage.removeItem(key);
      console.log(`Item with key "${key}" has been removed from session storage.`);
  } else {
      console.log(`Item with key "${key}" does not exist in session storage.`);
  }

  console.log(`Finished attempting to remove item with key "${key}" from session storage.`);
}

// Example usage
removeItemFromSessionStorage('exampleKey');



// Task 10:
// Function to clear all data from both local storage and session storage
function clearAllStorages() {
  // Clear local storage
  localStorage.clear();
  console.log("Local storage cleared.");

  // Clear session storage
  sessionStorage.clear();
  console.log("Session storage cleared.");

  // Verify that both storages are empty
  if (localStorage.length === 0 && sessionStorage.length === 0) {
      console.log("Both local storage and session storage are empty.");
  } else {
      console.log("There was an error clearing the storages.");
  }
}

// Example usage
clearAllStorages();

