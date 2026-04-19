const output = document.getElementById("output");

function display(text) {
  output.innerHTML += text + "<br>";
}
display("<strong>--- Question 1 ---</strong>");

//QUESTION 1
let score = 85;
let grade;

// Use switch with true (common trick for ranges)
switch (true) {
  case (score >= 90 && score <= 100):
    grade = "A";
    break;
  case (score >= 80 && score <= 89):
    grade = "B";
    break;
  case (score >= 70 && score <= 79):
    grade = "C";
    break;
  case (score >= 60 && score <= 69):
    grade = "D";
    break;
  default:
    grade = "F";
}

display("Grade: " + grade);


// Ternary operator for pass/fail
let result = score >= 60 ? "Passed" : "Failed";
display("Result: " + result);

display("<strong>--- Question 2 ---</strong>");
//QUESTION 2
// Convert string to number
let str = "25";
let num = Number(str);

display("Converted number: " + num);

// Test truthy & falsy values
let values = [0, "", "hello", null, undefined, NaN];

for (let i = 0; i < values.length; i++) {
  if (values[i]) {
    display(values[i] + " is TRUTHY");
  } else {
    display(values[i] + " is FALSY");
  }
}

display("<strong>--- Question 3 ---</strong>");
//QUESTION 3
function greetingBot(name, isMorning) {
  return isMorning
    ? `Good morning, ${name}!`
    : `Hello, ${name}!`;
}

// Test the function
display(greetingBot("Dimpho", true));
display(greetingBot("Alex", false));

display("<strong>--- Question 4 ---</strong>");
//QUESTION 4

let post = {
  username: "dimpho_dev",
  caption: "Learning JavaScript ",
  likes: 10,
  comments: ["Nice!", "Keep going!", ""],

  addLike: function () {
    this.likes++;
  }
};

// Increase likes
post.addLike();
display("Likes: " + post.likes);

// Destructuring
let { username, caption } = post;

display("Username: " + username);
display("Caption: " + caption);

display("<strong>--- Question 5 ---</strong>");
// QUESTION 5
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combined = [...arr1, ...arr2];

display("Combined Array: " + combined.join(", "));

for (let i = 1; i <= 5; i++) {
  let row = "";

  // spaces
  for (let j = 1; j <= 5 - i; j++) {
    row += "   ";
  }

  // stars
  for (let k = 1; k <= i; k++) {
    row += "*    ";
  }

  display(row.replace(/ /g, "&nbsp;"));
}

let count = 10;

while (count >= 1) {
  console.log(count);
  count--;
}