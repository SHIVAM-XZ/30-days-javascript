// Day 12- Error Handling

// Task1:
try {
  throw new Error("some  error occured");
} catch (error) {
  console.log(error);
}

// Task2:
const number = (a, b) => {
  div = a / b;
  try {
    if (b == 0) {
      throw new Error("denominator cannot be zero");
    } else {
      console.log(div);
    }
  } catch (error) {
    console.log(error);
  }
};
number(4, 0);

// Task3:
try {
  throw new ReferenceError("something went wrong");
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
} finally {
  console.group("thanks for using me");
}

// Task4:
class customerror extends Error {
  constructor(message) {
    super(message);
    this.name = "customerror";
  }
}
function message() {
  try {
    throw new customerror("something went wrong");
  } catch (error) {
    console.log(error);
  }
}
message();

// Task5:
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}
function user() {
  inputvalue = prompt("enter your username").trim();
  //   const inputelement = document.createElement("input");
  //   inputelement.type = "text";
  //   inputelement.value = "      shiov      ";
  //   document.body.appendChild(inputelement);
  //   const inputvalue = inputelement.value.trim();
  try {
    if (inputvalue == "") {
      throw new ValidationError("string should not be empty");
    } else {
      console.log(inputvalue);
    }
  } catch (error) {
    console.log(error);
  }
}
user();

// Task6:
function randompromise() {
  return new Promise((resolve, reject) => {
    const random = Math.random();
    setTimeout(() => {
      if (random > 0.5) {
        resolve(30);
      } else {
        reject("rejected");
      }
    }, 2000);
  });
}
randompromise()
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

// Task7:
function random() {
  return Math.random();
}
async function randommessage() {
  try {
    await new Promise((resolve, reject) => {
      if (random() > 0.5) {
        resolve(30);
      } else {
        reject(new Error("rejected"));
      }
    });
  } catch (error) {
    console.log(error.message);
  }
}
randommessage();

// Task8:
let url = fetch("https://api.nationalize.io");
url
  .then((response) => {
    if (!response.ok) {
      throw new Error("error in a url" + response.status);
    } else {
      return response.json();
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error.message);
  });

// Task9:
async function Fetchdata() {
  try {
    const response = await fetch("https://gittdcc.ccom");
    if (response.status < 200 || response.status >= 300) {
      throw new Error("data is not fetched");
    } else {
      const data = await response.json;
      console.log(data);
    }
  } catch (error) {
    console.log(error.message);
  }
}
Fetchdata();
