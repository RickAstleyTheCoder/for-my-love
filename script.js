/**
 * OUR GRACEFUL JOURNEY - Logic
 * This script handles the "app-like" transitions and the interactive elements.
 */

// 1. Navigation Logic
// This makes the screens slide/fade without the browser refreshing.
function nextPage(pageId) {
    // Select all sections in the app
    const sections = document.querySelectorAll('section');
    
    // Remove the 'active' class from everyone to hide them
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Find the section we want to show and make it 'active'
    const targetSection = document.getElementById(pageId);
    if (targetSection) {
        targetSection.classList.add('active');
        
        // Optional: Scroll to the top of the new section
        window.scrollTo(0, 0);
    }
}

// 2. The Content Library (Personalize these!)
const loveNotes = [
    "I thank God every day for the way you reflect His kindness. 🦦",
    "Like otters holding hands, I’m so glad we are drifting through life together.",
    "'He who finds a wife finds a good thing and obtains favor from the Lord.' — Proverbs 18:22",
    "You are my favorite blessing and my best friend. 🦆✨",
    "I love how our 'cord of three strands' gets stronger every day.",
    "May our love always be a testimony of His grace and faithfulness.",
    "Watching you grow in your faith is the most beautiful thing I've ever seen.",
    "I'm 'otterly' in love with you, today and every day!"
];

// 3. Interactive Blessing Generator
let lastIndex = -1;

function showNewNote() {
    const displayElement = document.getElementById('note-display');
    
    // Step A: Fade the text out slightly for a smooth transition
    displayElement.style.opacity = 0;
    
    // Wait 400ms (matching our CSS transition) before changing the text
    setTimeout(() => {
        let randomIndex;
        
        // Ensure we don't show the same note twice in a row
        do {
            randomIndex = Math.floor(Math.random() * loveNotes.length);
        } while (randomIndex === lastIndex);
        
        lastIndex = randomIndex;
        
        // Update the text
        displayElement.innerText = loveNotes[randomIndex];
        
        // Step B: Fade the text back in
        displayElement.style.opacity = 1;
    }, 400);
}

// 4. Initial Setup
// Ensure the first note is ready when she enters the "Garden"
window.onload = () => {
    const displayElement = document.getElementById('note-display');
    if(displayElement) {
        displayElement.innerText = "Tap the duck to see a blessing...";
    }
};