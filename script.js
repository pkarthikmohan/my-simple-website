
async function sendMessage() {
    let userInput = document.getElementById("user-input").value.trim();
    let chatBox = document.getElementById("chat-box");

    if (userInput === "") return; // Prevent empty messages

    // Display user message
    chatBox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;

    try {
        // ✅ Working chatbot API (Use a different one)
        let response = await fetch(`https://api.simsimi.vn/v2/simtalk`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: userInput, lc: "en" }) // "en" for English
        });

        let data = await response.json();

        chatBox.innerHTML += `<p><strong>Bot:</strong> ${data.message || "I don't understand."}</p>`;
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
