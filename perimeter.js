// Get side lengths from the user
const side1String = prompt("Enter the length of side 1:");
const side2String = prompt("Enter the length of side 2:");
const side3String = prompt("Enter the length of side 3:");

// Check if the inputs are valid numbers
if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
    alert("Please enter valid numbers for all sides.");
} else if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
    alert("Side lengths must be positive numbers.");
} else {
    // Calculate the perimeter
    const perimeter = side1 + side2 + side3;

    // Display the result
    console.log("The perimeter of the triangle is: " + perimeter);
}