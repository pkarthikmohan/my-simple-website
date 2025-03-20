function showMessage() {
    let message = document.getElementById("message");
    message.textContent = "Hello! Thanks for clicking the button!";
    
    // Add animation effect
    message.style.opacity = "0";
    setTimeout(() => {
        message.style.opacity = "1";
    }, 100);
}
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function toggleText() {
    let text = document.getElementById("hiddenText");
    text.style.display = text.style.display === "none" ? "block" : "none";
}

document.getElementById("hoverText").addEventListener("mouseover", function() {
    this.textContent = "You hovered over me!";
});

document.getElementById("hoverText").addEventListener("mouseout", function() {
    this.textContent = "Hover over me!";
});

function updateClock() {
    let now = new Date();
    let timeString = now.toLocaleTimeString();
    document.getElementById("clock").textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();
const responses = {
    "hello": "Hi there! How can I help you?",
    "how are you": "I'm just a bot, but I'm doing great! How about you?",
    "what is your name": "I'm a simple AI chatbot!",
    "bye": "Goodbye! Have a great day!",
    "default": "I'm not sure how to respond to that. Try asking something else!"
};

function sendMessage() {
    let userInput = document.getElementById("user-input").value.toLowerCase();
    let chatBox = document.getElementById("chat-box");

    if (userInput.trim() === "") return;

    // Display user message
    chatBox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;

    // Get bot response
    let botResponse = responses[userInput] || responses["default"];

    setTimeout(() => {
        chatBox.innerHTML += `<p><strong>Bot:</strong> ${botResponse}</p>`;
        chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to latest message
    }, 500);

    // Clear input
    document.getElementById("user-input").value = "";
}

// Allow sending message by pressing Enter
function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}
