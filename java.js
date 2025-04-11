// Function to show the apology form
function showApologyForm() {
    document.getElementById('apology-form').classList.remove('hidden');
}

// Function to reveal the heart section (apology surprise)
function showHeart() {
    document.getElementById('heart-section').classList.remove('hidden');
}

// Function to reveal the heartfelt love message
function revealLoveMessage() {
    document.getElementById('love-message').classList.remove('hidden');
}

// Function for the "Try Harder" button
function tryHarder() {
    // Log the selection to the console
    console.log("The user clicked 'Try Harder' 😅");

    // Show feedback message on the webpage
    displayFeedback("You clicked 'Try Harder'! 😅 I'm trying my best!");

    // Optional: Send an alert
    alert("I'm going to work my hardest to be the best boyfriend ever! 😅💪 I'll make it up to you in every way I can! ❤️");
}

// Function for the "I forgive you" button
function showForgiveness() {
    // Log the selection to the console
    console.log("The user clicked 'I forgive you' ❤️");

    // Show feedback message on the webpage
    displayFeedback("You clicked 'I forgive you'! ❤️ You're amazing!");

    // Optional: Send an alert
    alert("Thank you for forgiving me! ❤️ I'm truly grateful!");
}

// Function to display the feedback on the webpage
function displayFeedback(message) {
    // Create a new div element for feedback
    const feedbackDiv = document.createElement('div');
    feedbackDiv.classList.add('feedback');
    feedbackDiv.textContent = message;

    // Add the feedback to the page (append it to the body or a specific section)
    document.body.appendChild(feedbackDiv);

    // Hide the feedback after a short time (e.g., 3 seconds)
    setTimeout(() => {
        feedbackDiv.style.display = 'none';
    }, 3000);  // 3000 milliseconds = 3 seconds
}
