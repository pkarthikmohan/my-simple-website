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
    let userInput = document.getElementById("user-input").value;
    let chatBox = document.getElementById("chat-box");

    if (userInput.trim() === "") return;

    // Display user message
    chatBox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;

    // Free chatbot API
    try {
        let response = await fetch("https://api.simsimi.vn/v2/simtalk", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: userInput, lc: "en" }) // "en" for English
        });

        let data = await response.json();
        chatBox.innerHTML += `<p><strong>Bot:</strong> ${data.message || "I don't understand."}</p>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    } catch (error) {
        chatBox.innerHTML += `<p><strong>Bot:</strong> Sorry, something went wrong.</p>`;
    }

    // Clear input field
    document.getElementById("user-input").value = "";
}

// Allow pressing Enter to send message
function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}
