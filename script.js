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
