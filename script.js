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
async function sendMessage() {
    let userInput = document.getElementById("user-input").value.trim();
    let chatBox = document.getElementById("chat-box");

    if (userInput === "") return; // Prevent empty messages

    // Display user message
    chatBox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;

    try {
        // Use a working chatbot API (replace if needed)
        let response = await fetch(`https://api.monkedev.com/fun/chat?msg=${encodeURIComponent(userInput)}`);
        let data = await response.json();

        chatBox.innerHTML += `<p><strong>Bot:</strong> ${data.response}</p>`;
    } catch (error) {
        chatBox.innerHTML += `<p><strong>Bot:</strong> Sorry, something went wrong.</p>`;
    }

    // Clear input field
    document.getElementById("user-input").value = "";
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll
}

// Allow pressing "Enter" to send message
function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

