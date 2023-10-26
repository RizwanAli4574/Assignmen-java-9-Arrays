document.write("<h1>Rizwan ALi 116628 <br> Assignmen-java-9-Arrays</h1>")


// start Q No 1
// Declare an empty array using JS literal notation to store student names in future.

var studentName = []
studentName.push("Rizwan");
studentName.push("Ali");
console.log(studentName)


// start Q No 2
 // Declare an empty array using JS object notation to store student names in future.

var studentData = {
    studentNames1: []
  };
  studentData.studentNames1.push("irshad");
  studentData.studentNames1.push("usama");
  console.log(studentData)
  document.write("<h3>Q No 1 and 2 show answers in console </h3>")
  document.write("Declare an empty array using JS literal notation to store student names in future. <br> Declare an empty array using JS object notation to store student names in future.")
  document.write("<br>")


// start Q No 3
//   Declare and initialize a strings array.

  document.write("<h3>Q No 3 : Declare and initialize a strings array. </h3>")
  var stringArray = ["Hello", "World", "Example", "Array"];
  document.write("<ul>")
  for (var i = 0; i < stringArray.length; i++) {
    document.write("<li>" + stringArray[i] + "</li>")
  }
  document.write("</ul>")
  document.write("<br> ")


// start Q N 4
// Declare and initialize a numbers array.

document.write("<h3>Q No 4 : Declare and initialize a numbers array. </h3>")
var numbersArray = [1, 2, 3, 4, 5];
document.write("<ul>")
for (var i = 0; i < numbersArray.length; i++) {
  document.write("<li>" + numbersArray[i] + "</li>")
}
document.write("</ul>")
document.write("<br> ")


// start  Q No 5
// Declare and initialize a boolean array.

document.write("<h3>Q No 5 : Declare and initialize a boolean array. </h3>")
var booleanArray = [true, false, true, true, false];
document.write("<ul>")
for (var i = 0; i < booleanArray.length; i++) {
  document.write("<li>" + booleanArray[i] + "</li>")
}
document.write("</ul>")
document.write("<br> ")


// start Q No 6
// Declare and initialize a mixed array.

document.write("<h3>Q No 6 : Declare and initialize a boolean array. </h3>")
var mixedArray = [1, "Hello", true, 3.14, { key: "value" }];
document.write("<ul>");
for (var i = 0; i < mixedArray.length; i++) {
  document.write("<li>" + mixedArray[i] + "</li>");
}
document.write("</ul>");
document.write("<br> ")


// Start Q No 7
// Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:

document.write("<h3> Q No 7 : Educational Qualifications in Pakistan</h3>");
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<ul>");
for (var i = 0; i < qualifications.length; i++) {
  document.write("<li>" + qualifications[i] + "</li>");
}
document.write("</ul>");
document.write("<br> ")

// Start Q No 8
// Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students

// Define an array to store student names
var studentNames = ["Rizwan", "Ali", "Waqar"];

// Define an array to store scores of students
var studentScores = [420, 480, 390];

// Calculate percentages and store them in a new array
var percentages = [];
var totalMarks = 500;

for (var i = 0; i < studentScores.length; i++) {
  var percentage = (studentScores[i] / totalMarks) * 100;
  percentages.push(percentage);
}

// Display scores and percentages
document.write("<h3> Q No 8 : Student Scores and Percentages</h3>");
document.write("<table border='1'><tr><th>Name</th><th>Score</th><th>Percentage</th></tr>");

for (var i = 0; i < studentNames.length; i++) {
  document.write("<tr>");
  document.write("<td>" + studentNames[i] + "</td>");
  document.write("<td>" + studentScores[i] + "</td>");
  document.write("<td>" + percentages[i].toFixed(2) + "%</td>");
  document.write("</tr>");
}
document.write("</table>");
document.write("<br> ")

document.write("<h3> Q No 9 : Colors Game  </h3>");

// Initialize an array with color names
var colors = ["Red", "Green", "Yellow", "Orange" , "Blue" , "Purple"];

// Display the array elements in the browser
document.write("<b>Colors Names in orignal array: </b>" + "<br>" + "<br>" + colors);
document.write ("<br>")
document.write ("<br>")

// Ask the user what color to add to the beginning
var colorToAdd = prompt ("Enter a color to add to the beginning:")

// Add the user's input to the beginning of the array
colors.unshift(colorToAdd)

// Display the updated array in the browser
document.write("<b>Add color in beginning in array:</b> " + " " + colors + " "  );
document.write ("<br>")
document.write ("<br>")

// Ask the user what color to add to the end
var colorToAdd = prompt ("Enter a color to add to the end:")

// Add the user's input to the end of the array
colors.push(colorToAdd)

// Display the updated array in the browser
document.write("<b>Add color in end in array:</b> " + " " + colors + " "  );
document.write ("<br>")
document.write ("<br>")

// Add more 2 cololrs in the beginning of the array
colors.unshift("Navy Blue")
colors.unshift("Navy purple")

// Display the updated array in the browser
document.write("<b>Add 2 more color in beginning the array:</b> " + " " + colors + " "  );
document.write ("<br>")
document.write ("<br>")

// Delet first color in array
colors.shift()

// Display the updated array in the browser
document.write("<b> Delet fist color in beginning the array:</b> " + " " + colors + " "  );
document.write ("<br>")
document.write ("<br>")


// Delet last color in array
colors.pop()

// Display the updated array in the browser
document.write("<b> Delet last color in beginning the array:</b> " + " " + colors + " "  );
document.write ("<br>")
document.write ("<br>")

// Ask the user at which index to add a color
var indexToAdd = parseInt(prompt("Enter the index to add a color:"));

// Ensure that the index is within the valid range
if (indexToAdd >= 0 && indexToAdd <= colors.length) {
  // Ask the user for the color name
  var colorToAddAtIndex = prompt("Enter a color to add at index " + indexToAdd + ":");

  // Add the color at the specified index
  colors.splice(indexToAdd, 0, colorToAddAtIndex);

  // Display the updated array
  document.write(" <b> Add color in your choce index number </b> " + colors + "<br>");
} else {
  document.write("Invalid index. Please enter a valid index within the range of 0 to " + colors.length + ".<br>");
}
document.write ("<br>")

// Ask the user at which index to delete color(s)
var indexToDelete = parseInt(prompt("Enter the index to delete color(s):"));

// Ensure that the index is within the valid range
if (indexToDelete >= 0 && indexToDelete < colors.length) {
  // Ask the user how many colors to delete
  var deleteCount = parseInt(prompt("Enter how many colors to delete:"));

  // Check if the deleteCount is within the valid range
  if (deleteCount > 0 && deleteCount <= colors.length - indexToDelete) {
    // Remove the specified number of colors from the user-defined position/index
    colors.splice(indexToDelete, deleteCount);

    // Display the updated array
    document.write(" <b> Delet color in your choce index number </b>" + colors + "<br>");
  } else {
    document.write("Invalid delete count. Please enter a valid number of colors to delete.<br>");
  }
} 
else {
  document.write("Invalid index. Please enter a valid index within the range of 0 to " + (colors.length - 1) + ".<br>");
}


document.write("<h3> Q No 10 : Student Scores and sort score</h3>");
// Define an array to store student scores
var studentScores = [88, 72, 95, 64, 81, 90, 78, 93, 86, 75];

// Display the original scores
document.write ("<ul>")
document.write("<li>" + "Original student Scores: " + studentScores + "<br>" + "<br>" +  "</li>");
document.write ("</ul>")

// Sort the array in ascending order using the sort() method
studentScores.sort(function(a, b) {
  return a - b;
});

// Display the sorted scores
document.write ("<ul>")
document.write("<li>" +  "Sorted Scores: " + studentScores +  "</li>");
document.write ("</ul>")
document.write("<br>")

document.write("<h3> Q No 11 : add select cities</h3>");
// Initialize an array with city names
let cities = ["islamabad", "Lahore", "Karachi", "Multan", "Peshawer"];

// Initialize an empty array for selected cities
let selectedCities = [];

// Copy 3 array elements from the cities array to the selectedCities array
selectedCities = cities.slice(2, 5);

document.write ("<ul>")
document.write("<li>" +  selectedCities +  "</li>");
document.write ("</ul>")
// Display the selected cities
document.write("<br> ")

document.write("<h3> Q No 12 : Array to string </h3>");

var arr = ["This", "is", "my", "cat"];

// Join the array elements with an empty string
var singleString = arr.join(' ');

// Output: "This is my cat"
document.write ("<ul>")
document.write("<li>" +  singleString +  "</li>");
document.write ("</ul>")
document.write ("<br>")

document.write("<h3> Q No 13 : (FIFO-First In First Out) </h3>");
// Initialize an empty array to create a FIFO queue
var fifoQueue = [];

// Add values to the end of the queue (enqueue)
fifoQueue.unshift("Keybord");
fifoQueue.unshift("Mouse");
fifoQueue.unshift("CPU");

// Access and remove values from the beginning of the queue (dequeue)
var firstValue = fifoQueue.shift();
var secondValue = fifoQueue.shift();
var thirdValue = fifoQueue.shift();

// Print the values in the order they were stored
document.write("<ul>")
document.write("<li>" + firstValue + "</li>" + "<br>");
document.write("<li>" + secondValue + "</li>" + "<br>");
document.write("<li>" + thirdValue + "</li>" + "<br>");
document.write("</ul>")
document.write ("<br>")

document.write("<h3> Q No 13 : (Last In-First Out) </h3>");
// Initialize an empty array to create a LIFO stack
var lifoStack = [];

// Add values to the end of the stack (push)
lifoStack.push("Cat");
lifoStack.push("Rat");
lifoStack.push("Bat");


// Access and remove values from the end of the stack (shift)
var thirdValue = lifoStack.shift();
var secondValue = lifoStack.shift();
var firstValue = lifoStack.shift();

// Print the values in reverse order
document.write("<ul>")
document.write("<li>" + firstValue + "</li>" + "<br>");
document.write("<li>" + secondValue + "</li>" + "<br>");
document.write("<li>" + thirdValue + "</li>" + "<br>");
document.write("</ul>")
document.write ("<br>")

document.write("<h3> Q No 14 : phone manufacturers </h3>");

// Array of phone manufacturers
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Begin generating the HTML code for the dropdown/select menu
var htmlCode = '<select id="manufacturerSelect">';
for (var i = 0; i < phoneManufacturers.length; i++) {
  htmlCode += '<option value="' + phoneManufacturers[i] + '">' + phoneManufacturers[i] + '</option>';
}
htmlCode += '</select>';

// Use document.write to display the dropdown/select menu
document.write(htmlCode);
document.write ("<br>")

