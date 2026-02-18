function calculate() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let op = document.getElementById("operation").value;
    let result = 0;
    let resBox = document.getElementById("resultBox");
    let display = document.getElementById("calcResult");

    if (isNaN(n1) || isNaN(n2)) {
        display.innerText = "Please enter valid numbers!";
        resBox.style.backgroundColor = "yellow";
        return;
    }
    
    // Calculation Logic
    if (op === "add") {
        result = n1 + n2;
    } else if (op === "subtract") {
        result = n1 - n2;
    } else if (op === "multiply") {
        result = n1 * n2;
    } else if (op === "divide") {
        // Validation: Division by zero
        if (n2 === 0) {
            display.innerText = "Error: Cannot divide by zero!";
            resBox.style.backgroundColor = "orange";
            return;
        }
        result = n1 / n2;
    }

    // Display Result
    display.innerText = result;

    // Bonus: Background color based on value
    if (result > 0) {
        resBox.style.backgroundColor = "lightgreen"; // Positive
    } else if (result < 0) {
        resBox.style.backgroundColor = "salmon"; // Negative
    } else {
        resBox.style.backgroundColor = "white"; // Zero
    }
}