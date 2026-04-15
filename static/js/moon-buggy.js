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
let nextSpawnAt = 60; 

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
        ctx.fillRect(obs.x, 150, 15, 20);
        
        if (
            player.x < obs.x + 15 && 
            player.x + player.width > obs.x && 
            player.y + player.height > 150
        ) {
            gameActive = false;
            alert("Collision! You hit a block. Score: " + score);
            location.reload(); 
        }

        if (obs.x < -20) {
            obstacles.splice(index, 1);
        }
    });

    // 4. Procedural Generation
    spawnTimer++;
    if (spawnTimer > nextSpawnAt) {
        if (Math.random() < 0.02) {
            obstacles.push({ x: 600 });
            spawnTimer = 0;
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

// 6. Desktop Controls (Spacebar)
window.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && player.grounded) {
        player.dy = -player.jumpForce;
        player.grounded = false;
    }
});

// 6a. Mobile Touch Controls (Screen Tap)
window.addEventListener('touchstart', (e) => {
    if (gameActive && player.grounded) {
        player.dy = -player.jumpForce;
        player.grounded = false;
    }
    
    // Check if the tap is on the canvas to prevent scrolling/zooming
    if (gameActive && e.target === canvas) {
        e.preventDefault();
    }
}, { passive: false });

draw();