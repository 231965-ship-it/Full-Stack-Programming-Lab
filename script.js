// Task 1: Store each answer in separate variables
const ans1 = "Islamabad";
const ans2 = 10;
const ans3 = "Yes";
const ans4 = "Mars";
const ans5 = 100;

function checkQuiz() {
    let score = 0;

    // Get all user inputs
    let u1 = document.getElementById("q1").value.trim();
    let u2 = parseInt(document.getElementById("q2").value);
    let u3 = document.getElementById("q3").value.trim();
    let u4 = document.getElementById("q4").value.trim();
    let u5 = parseInt(document.getElementById("q5").value);

    // Check each answer individually (Conditional Statements)
    if (u1.toLowerCase() === ans1.toLowerCase()) score++;
    if (u2 === ans2) score++;
    if (u3.toLowerCase() === ans3.toLowerCase()) score++;
    if (u4.toLowerCase() === ans4.toLowerCase()) score++;
    if (u5 === ans5) score++;

    // Display result using DOM Manipulation
    document.getElementById("scoreDisplay").innerText = "Total Score: " + score + "/5";

    // Score-based conditional messages
    let msg = "";
    if (score === 5) {
        msg = "Perfect! You are a genius!";
    } else if (score >= 3) {
        msg = "Well done! You passed the quiz. ";
    } else {
        msg = "Better luck next time! Keep practicing. ";
    }
    
    document.getElementById("feedbackMessage").innerText = msg;
}

// Reset Function to clear inputs and results
function resetQuiz() {
    // Clear all inputs
    for (let i = 1; i <= 5; i++) {
        document.getElementById("q" + i).value = "";
    }
    // Clear display areas
    document.getElementById("scoreDisplay").innerText = "";
    document.getElementById("feedbackMessage").innerText = "";
}