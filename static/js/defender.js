const canvas = document.getElementById("defenderCanvas");
const ctx = canvas?.getContext("2d");

if (canvas) {
    let score = 0;
    const keys = {};
    let gameRunning = true;

    // Player stats
    const player = { x: 375, y: 450, w: 50, h: 20, speed: 7 };
    let bullets = [];
    
    // Weapon Overheat stats
    let shotsFired = 0;
    const maxShots = 20;
    let overheated = false;
    let overheatTimer = 0;

    // Invader stats
    let invaders = [];
    let invaderBullets = [];
    let invaderDirection = 1;
    let invaderSpeed = 1;

    function initInvaders() {
        invaders = [];
        for (let row = 0; row < 4; row++) {
            for (let col = 0; col < 10; col++) {
                invaders.push({
                    x: col * 60 + 50,
                    y: row * 50 + 50,
                    w: 40,
                    h: 30,
                    alive: true
                });
            }
        }
    }

    window.addEventListener("keydown", (e) => {
        if(["Space", "ArrowLeft", "ArrowRight"].includes(e.code)) e.preventDefault();
        
        // Single shot logic to prevent "holding down" infinite spray
        if(e.code === "Space" && gameRunning && !overheated) {
            fireBullet();
        }
        keys[e.key] = true;
    });
    window.addEventListener("keyup", (e) => keys[e.key] = false);

    function fireBullet() {
        bullets.push({ x: player.x + player.w/2 - 2, y: player.y, w: 4, h: 15, speed: 10 });
        shotsFired++;
        
        if (shotsFired >= maxShots) {
            overheated = true;
            overheatTimer = 60; // 60 frames = approx 1 second
        }
    }

    function invaderFire() {
        // Only live invaders can shoot
        const aliveInvaders = invaders.filter(inv => inv.alive);
        if (aliveInvaders.length > 0 && Math.random() < 0.02) { // 2% chance per frame
            const shooter = aliveInvaders[Math.floor(Math.random() * aliveInvaders.length)];
            invaderBullets.push({
                x: shooter.x + shooter.w/2,
                y: shooter.y + shooter.h,
                w: 6,
                h: 15,
                speed: 4
            });
        }
    }

    function update() {
        if (!gameRunning) return;

        // 1. Overheat Logic
        if (overheated) {
            overheatTimer--;
            if (overheatTimer <= 0) {
                overheated = false;
                shotsFired = 0;
            }
        }

        // 2. Player Movement
        if (keys["ArrowLeft"] && player.x > 0) player.x -= player.speed;
        if (keys["ArrowRight"] && player.x + player.w < canvas.width) player.x += player.speed;

        // 3. Player Bullets
        for (let i = bullets.length - 1; i >= 0; i--) {
            bullets[i].y -= bullets[i].speed;
            if (bullets[i].y < 0) bullets.splice(i, 1);
        }

        // 4. Invader Logic & Firing
        invaderFire();
        for (let i = invaderBullets.length - 1; i >= 0; i--) {
            invaderBullets[i].y += invaderBullets[i].speed;
            
            // Check if player is hit
            if (checkCollision(invaderBullets[i], player)) {
                gameRunning = false;
            }
            if (invaderBullets[i].y > canvas.height) invaderBullets.splice(i, 1);
        }

        // 5. Invader Grid Movement
        let edgeReached = false;
        invaders.forEach(inv => {
            if (!inv.alive) return;
            inv.x += invaderSpeed * invaderDirection;
            if (inv.x + inv.w > canvas.width || inv.x < 0) edgeReached = true;
        });

        if (edgeReached) {
            invaderDirection *= -1;
            invaders.forEach(inv => {
                inv.y += 20;
                if (inv.y + inv.h >= player.y) gameRunning = false;
            });
        }

        // 6. Bullet vs Invader Collision
        bullets.forEach((b, bIdx) => {
            invaders.forEach((inv) => {
                if (inv.alive && checkCollision(b, inv)) {
                    inv.alive = false;
                    bullets.splice(bIdx, 1);
                    score += 10;
                    document.getElementById("score").innerText = score;
                }
            });
        });

        if (invaders.every(inv => !inv.alive)) {
            invaderSpeed += 0.4;
            initInvaders();
        }

        draw();
        requestAnimationFrame(update);
    }

    function checkCollision(r1, r2) {
        return r1.x < r2.x + r2.w && r1.x + r1.w > r2.x && r1.y < r2.y + r2.h && r1.y + r1.h > r2.y;
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // --- DRAW WEAPON HEAT BAR ---
        ctx.fillStyle = "#333";
        ctx.fillRect(10, 10, 100, 10);
        ctx.fillStyle = overheated ? "#ff4d4d" : "#b3ff00";
        let heatWidth = (shotsFired / maxShots) * 100;
        ctx.fillRect(10, 10, heatWidth, 10);
        ctx.font = "10px monospace";
        ctx.fillText(overheated ? "OVERHEATED" : "GUN TEMP", 10, 30);

        // Draw Player
        ctx.shadowBlur = 15;
        ctx.shadowColor = "#b3ff00";
        ctx.fillStyle = "#b3ff00";
        ctx.fillRect(player.x + 15, player.y, 20, 20);
        ctx.fillRect(player.x, player.y + 10, 50, 10);

        // Player Lasers (Cyan)
        ctx.shadowColor = "#00f2ff";
        ctx.fillStyle = "#00f2ff";
        bullets.forEach(b => ctx.fillRect(b.x, b.y, b.w, b.h));

        // Invader Lasers (Red)
        ctx.shadowColor = "#ff4d4d";
        ctx.fillStyle = "#ff4d4d";
        invaderBullets.forEach(ib => ctx.fillRect(ib.x, ib.y, ib.w, ib.h));

        // Draw Invaders
        invaders.forEach(inv => {
            if (inv.alive) {
                ctx.shadowColor = "#ff00ff";
                ctx.fillStyle = "#ff00ff";
                ctx.fillRect(inv.x + 5, inv.y, 30, 20);
                ctx.fillRect(inv.x + 5, inv.y + 20, 5, 10);
                ctx.fillRect(inv.x + 20, inv.y + 20, 5, 10);
                ctx.fillRect(inv.x + 30, inv.y + 20, 5, 10);
                ctx.fillStyle = "#000";
                ctx.fillRect(inv.x + 10, inv.y + 5, 5, 5);
                ctx.fillRect(inv.x + 25, inv.y + 5, 5, 5);
            }
        });

        if (!gameRunning) {
            ctx.shadowBlur = 20;
            ctx.shadowColor = "#ff4d4d";
            ctx.fillStyle = "white";
            ctx.font = "40px monospace";
            ctx.textAlign = "center";
            ctx.fillText("SYSTEM COMPROMISED", canvas.width/2, canvas.height/2);
            ctx.font = "20px monospace";
            ctx.fillText("F5 TO REBOOT", canvas.width/2, canvas.height/2 + 50);
        }
    }

    initInvaders();
    update();
}