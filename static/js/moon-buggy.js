const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// --- GAME STATE VARIABLES ---
let player = { x: 50, y: 150, width: 24, height: 16, dy: 0, jumpForce: 10, grounded: false };
let obstacles = [];
let score = 0;
let gravity = 0.6;
let gameActive = true;
let speedMultiplier = 1; // Slowly increases difficulty over time

// Spawn Control Variables
let spawnTimer = 0;
let nextSpawnAt = 60; 

// --- BACKGROUND ASSETS (Parallax Stars) ---
let stars = [];
for (let i = 0; i < 50; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * 170, // Keep stars above the ground
        size: Math.random() * 2,
        speed: (Math.random() * 0.5) + 0.1
    });
}

// --- MAIN RENDER LOOP ---
function draw() {
    if (!gameActive) return;

    // 1. Clear & Draw Deep Space Background
    ctx.fillStyle = '#050505';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 2. Draw Parallax Starfield
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.shadowBlur = 0; // Reset shadow for stars
    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        star.x -= star.speed * speedMultiplier;
        if (star.x < 0) star.x = canvas.width; // Wrap around
    });

    // 3. Draw Lunar Surface (Neon Glow)
    ctx.strokeStyle = '#2fb98f';
    ctx.lineWidth = 3;
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#2fb98f';
    ctx.beginPath();
    ctx.moveTo(0, 170);
    ctx.lineTo(canvas.width, 170);
    ctx.stroke();
    
    // Scanline effect under the crust
    ctx.fillStyle = 'rgba(47, 185, 143, 0.1)';
    ctx.fillRect(0, 172, canvas.width, canvas.height - 172);

    // 4. Player Logic & Drawing (The Rover)
    if (!player.grounded) {
        player.dy += gravity;
        player.y += player.dy;
    }

    if (player.y > 150) { // 170 ground - 20 player height rough offset
        player.y = 150;
        player.dy = 0;
        player.grounded = true;
    }

    // Draw Rover Body
    ctx.fillStyle = '#ffffff';
    ctx.shadowBlur = 10;
    ctx.shadowColor = '#ffffff';
    ctx.fillRect(player.x, player.y, player.width, player.height);
    
    // Draw Rover Wheels
    ctx.fillStyle = '#ff4d4d';
    ctx.shadowBlur = 5;
    ctx.shadowColor = '#ff4d4d';
    ctx.beginPath();
    ctx.arc(player.x + 4, player.y + player.height + 2, 4, 0, Math.PI * 2); // Left wheel
    ctx.arc(player.x + player.width - 4, player.y + player.height + 2, 4, 0, Math.PI * 2); // Right wheel
    ctx.fill();

    // 5. Obstacle Logic (Red Glowing Monoliths)
    ctx.fillStyle = '#ff4d4d';
    ctx.shadowBlur = 20;
    ctx.shadowColor = '#ff4d4d';
    
    obstacles.forEach((obs, index) => {
        obs.x -= 5 * speedMultiplier;
        
        // Draw spiked monolith
        ctx.beginPath();
        ctx.moveTo(obs.x, 170);
        ctx.lineTo(obs.x + 7.5, 170 - obs.height);
        ctx.lineTo(obs.x + 15, 170);
        ctx.fill();
        
        // Collision Detection (Adjusted for triangle hitbox)
        if (
            player.x < obs.x + 10 && 
            player.x + player.width > obs.x + 5 && 
            player.y + player.height > 170 - obs.height
        ) {
            triggerGameOver();
        }

        if (obs.x < -20) {
            obstacles.splice(index, 1);
        }
    });

    // 6. Procedural Generation
    spawnTimer++;
    if (spawnTimer > nextSpawnAt) {
        if (Math.random() < 0.03) {
            // Randomize height slightly for visual variety
            obstacles.push({ x: canvas.width, height: Math.floor(Math.random() * 15) + 15 });
            spawnTimer = 0;
            nextSpawnAt = Math.floor(Math.random() * 60) + 30; 
        }
    }

    // 7. HUD & Progression
    score++;
    if (score % 500 === 0) speedMultiplier += 0.1; // Game speeds up!

    ctx.fillStyle = '#fff';
    ctx.shadowBlur = 0;
    ctx.font = "bold 14px 'Courier New', monospace";
    ctx.fillText("DISTANCE: " + score + "M", 15, 30);
    ctx.fillText("SPEED: " + speedMultiplier.toFixed(1) + "X", 15, 50);

    requestAnimationFrame(draw);
}

// --- GAME OVER SEQUENCE ---
function triggerGameOver() {
    gameActive = false;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#ff4d4d';
    ctx.shadowBlur = 10;
    ctx.shadowColor = '#ff4d4d';
    ctx.textAlign = 'center';
    
    ctx.font = "bold 30px 'Courier New', monospace";
    ctx.fillText("SYSTEM FAILURE", canvas.width / 2, canvas.height / 2 - 10);
    
    ctx.fillStyle = '#fff';
    ctx.shadowBlur = 0;
    ctx.font = "14px 'Courier New', monospace";
    ctx.fillText("FINAL DISTANCE: " + score + "M", canvas.width / 2, canvas.height / 2 + 20);
    ctx.fillText("[ TAP OR SPACE TO REBOOT ]", canvas.width / 2, canvas.height / 2 + 50);
    
    ctx.textAlign = 'left'; // Reset for next run
}

function resetGame() {
    player.y = 150;
    player.dy = 0;
    obstacles = [];
    score = 0;
    speedMultiplier = 1;
    gameActive = true;
    draw();
}

// --- CONTROLS ---
window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        if (!gameActive) {
            resetGame();
        } else if (player.grounded) {
            player.dy = -player.jumpForce;
            player.grounded = false;
        }
    }
});

window.addEventListener('touchstart', (e) => {
    if (!gameActive) {
        resetGame();
    } else if (player.grounded) {
        player.dy = -player.jumpForce;
        player.grounded = false;
    }
    
    if (e.target === canvas) e.preventDefault();
}, { passive: false });

// Start the engine
draw();

