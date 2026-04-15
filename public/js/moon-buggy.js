const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game State Variables
let player = { x: 50, y: 150, width: 20, height: 20, dy: 0, jumpForce: 10, grounded: false };
let obstacles = [];
let score = 0;
let gravity = 0.6;
let gameActive = true;

// Spawn Control Variables (The "Jitter" Logic)
let spawnTimer = 0;
let nextSpawnAt = 60; // Initial delay before the first potential spawn

function draw() {
    if (!gameActive) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 1. Draw "Moon" Surface
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, 170);
    ctx.lineTo(600, 170);
    ctx.stroke();

    // 2. Player Logic & Drawing
    ctx.fillStyle = '#fff';
    ctx.fillRect(player.x, player.y, player.width, player.height);

    if (!player.grounded) {
        player.dy += gravity;
        player.y += player.dy;
    }

    if (player.y > 150) {
        player.y = 150;
        player.dy = 0;
        player.grounded = true;
    }

    // 3. Obstacle Logic (Blocks)
    ctx.fillStyle = '#ff4d4d';
    obstacles.forEach((obs, index) => {
        obs.x -= 5;
        
        // Draw the block (15x20)
        ctx.fillRect(obs.x, 150, 15, 20);
        
        // Collision Detection
        if (
            player.x < obs.x + 15 && 
            player.x + player.width > obs.x && 
            player.y + player.height > 150
        ) {
            gameActive = false;
            alert("Collision! You hit a block. Score: " + score);
            location.reload(); 
        }

        // Cleanup blocks that leave the screen
        if (obs.x < -20) {
            obstacles.splice(index, 1);
        }
    });

    // 4. Procedural Generation with Variable Cooldown
    spawnTimer++;
    if (spawnTimer > nextSpawnAt) {
        // 2% chance per frame once the cooldown is met
        if (Math.random() < 0.02) {
            obstacles.push({ x: 600 });
            
            // Reset timer
            spawnTimer = 0;
            
            // Set a NEW random cooldown for the next block
            // This creates a gap of 40 to 120 frames (approx 0.6 to 2 seconds)
            nextSpawnAt = Math.floor(Math.random() * 80) + 40; 
        }
    }

    // 5. HUD
    score++;
    ctx.fillStyle = '#fff';
    ctx.font = "16px 'Courier New'";
    ctx.fillText("Distance: " + score + "m", 10, 25);

    requestAnimationFrame(draw);
}

// 6. Controls
window.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && player.grounded) {
        player.dy = -player.jumpForce;
        player.grounded = false;
    }
});

draw();