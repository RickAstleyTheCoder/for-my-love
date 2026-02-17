/**
 * OUR GRACEFUL JOURNEY - Logic
 * This script handles the "app-like" transitions and the interactive elements.
 */

// 1. Navigation Controller
function nextPage(pageId) {
    document.querySelectorAll('section').forEach(sec => {
        sec.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

// 2. Your Content List
const blessings = [
    "I thank God every day for the way you reflect His kindness. ✨",
    "Like otters holding hands, I’m so glad we are drifting through life together. 🦦❤️🦦",
    "You are my favorite answered prayer, Clarisse.",
    "'...I found him whom my soul loves...' - Song of Songs 3:4",
    "I love our 'otterly' amazing life in Christ.",
    "Watching you walk with the Lord is my greatest inspiration.",
    "Thank you for being my partner in faith and my best friend.",
    "'He who finds a wife finds a good thing And obtains favor from Yahweh.' - Prov 18:22",
    "Thank you for being the Border Collie to my Malinois—always loyal and bright.",
    "May our love always be a testimony of His grace. ✨"
];

let currentNoteIndex = 0;

// 3. Interaction Logic
function showNewNote() {
    const display = document.getElementById('note-display');
    
    // If we've shown all notes, go to the final collage
    if (currentNoteIndex >= blessings.length) {
        nextPage('finale');
        return;
    }

    // Fade out text, change it, then fade back in
    display.style.opacity = 0;
    
    setTimeout(() => {
        display.innerText = blessings[currentNoteIndex];
        display.style.opacity = 1;
        currentNoteIndex++;
    }, 500);
}

// 4. Initial Setup
// Ensure the first note is ready when she enters the "Garden"
window.onload = () => {
    const displayElement = document.getElementById('note-display');
    if(displayElement) {
        displayElement.innerText = "Tap the duck to see a blessing...";
    }
}


function resetAndGoHome() {
    // 1. Reset the counter so the blessings start from the beginning
    currentNoteIndex = 0;
    
    // 2. Reset the display text to the original prompt
    const display = document.getElementById('note-display');
    if (display) {
        display.innerText = "Tap the otters for a blessing...";
    }
    
    // 3. Go back to the home section
    nextPage('home');
};
