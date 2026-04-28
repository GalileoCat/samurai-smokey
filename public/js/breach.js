const dictionary = ["GHOST", "NINJA", "BLADE", "CYBER", "SMOKE", "PROXY", "VIRUS", "DEBUG", "CRACK", "PANIC", "STEALTH", "LOGIC", "NEXUS", "QUERY"];
let words = [];
let targetWord = "";
let attempts = 4;
let gameOver = false;

document.addEventListener("DOMContentLoaded", initGame);

function initGame() {
    const shuffled = dictionary.sort(() => 0.5 - Math.random());
    words = shuffled.slice(0, 8);
    targetWord = words[Math.floor(Math.random() * words.length)];
    
    const board = document.getElementById("word-board");
    if (!board) return;
    board.innerHTML = "";
    
    for(let i=0; i<12; i++) {
        let row = "0x" + Math.floor(Math.random()*10000).toString(16).toUpperCase() + " ";
        for(let j=0; j<12; j++) {
            if (Math.random() > 0.85 && words.length > 0) {
                let w = words.pop();
                // Removed inline onclick, added a class instead
                row += `<span class="hack-word">${w}</span>`;
            } else {
                const chars = "!@#$%^&*()_+{}|:<>?~";
                row += chars.charAt(Math.floor(Math.random() * chars.length));
            }
        }
        board.innerHTML += row + "<br>";
    }
}

// Listen for clicks on anything with the 'hack-word' class
document.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('hack-word')) {
        guessWord(e.target.innerText);
    }
});

function guessWord(guess) {
    if (gameOver) return;
    
    // Notice we target 'log-entries' now so we don't overwrite the tutorial
    const log = document.getElementById("log-entries");
    const termLogContainer = document.getElementById("game-log"); 
    const terminal = document.getElementById("main-terminal");
    const board = document.getElementById("word-board");
    let matches = 0;
    
    for (let i = 0; i < guess.length; i++) {
        if (guess[i] === targetWord[i]) matches++;
    }
    
    log.innerHTML += `> ${guess}<br>> Entry denied (${matches}/${targetWord.length} correct)<br>`;
    termLogContainer.scrollTop = termLogContainer.scrollHeight; // Auto-scroll to bottom
    
    // --- WIN CONDITION ---
    if (guess === targetWord) {
        log.innerHTML += `<span style="color:#b3ff00; font-weight:bold;">> EXACT MATCH!<br>> ACCESS GRANTED.</span><br>`;
        
        // Trigger Success Animations
        terminal.classList.add("anim-success");
        board.innerHTML = `<div style="text-align: center; margin-top: 50px; font-size: 1.5rem; color: #b3ff00;">
            <div style="font-size: 4rem; margin-bottom: 20px;">✓</div>
            [ SYSTEM UNLOCKED ]<br>
            <span style="font-size: 0.8rem; color: #aaa;">Data decrypted successfully.</span>
        </div>`;
        
        gameOver = true;
        return;
    }
    
    attempts--;
    document.getElementById("attempts").innerText = attempts;
    
    // --- LOSE CONDITION ---
    if (attempts <= 0) {
        log.innerHTML += `<span style="color:#ff4d4d; font-weight:bold;">> TERMINAL LOCKED.<br>> PLEASE CONTACT ADMINISTRATOR.</span><br>`;
        
        // Trigger Fail Animations (Shake + Red Pulse)
        terminal.classList.add("anim-shake", "anim-fail");
        
        // Replace board with giant Lockout warning
        board.innerHTML = `<div style="text-align: center; margin-top: 50px; font-size: 1.5rem; color: #ff4d4d;">
            <div style="font-size: 4rem; margin-bottom: 20px;">✕</div>
            [ SYSTEM LOCKED ]<br>
            <span style="font-size: 0.8rem; color: #aaa;">Unauthorized access detected.</span>
        </div>`;
        
        gameOver = true;
    }
}