const canvas = document.getElementById("gameCanvas");
const ctx = canvas?.getContext("2d");

if (canvas) {
    // --- GAME STATE ---
    let sector = 1;
    let dataScore = 0;
    const gravity = 0.6;
    const keys = {};

    // --- GAME OBJECTS ---
    const player = { 
        x: 20, y: 350, w: 20, h: 20, 
        dx: 0, dy: 0, 
        speed: 5, jumpPower: -11, 
        grounded: false,
        jumps: 0, 
        maxJumps: 2 
    };
    
    let platforms = [];
    let hazards = [];
    let cores = [];
    // Shifted portal slightly left (730 instead of 750) so glow is visible
    let portal = { x: 730, y: 320, w: 40, h: 60 };
    let purgeWall = { x: -80, speed: 0.8 };

    // --- CONTROLS ---
    window.addEventListener("keydown", (e) => {
        if(["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
            e.preventDefault();
        }
        keys[e.key] = true;

        if (e.key === " ") {
            if (player.grounded) {
                player.dy = player.jumpPower;
                player.grounded = false;
                player.jumps = 1;
            } else if (player.jumps < player.maxJumps) {
                player.dy = player.jumpPower; 
                player.jumps++;
            }
        }
    });
    window.addEventListener("keyup", (e) => keys[e.key] = false);

    // --- PROCEDURAL LEVEL GENERATOR ---
    function generateLevel() {
        platforms = [{ x: 0, y: 380, w: 800, h: 20 }]; 
        hazards = [];
        cores = [];

        purgeWall.x = -80; 
        purgeWall.speed = Math.min(0.8 + (sector * 0.15), 3.0); 

        let numPlatforms = 4 + Math.floor(sector / 2);
        if (numPlatforms > 10) numPlatforms = 10;

        for(let i = 0; i < numPlatforms; i++) {
            let px = 100 + (Math.random() * 550);
            let py = 100 + (Math.random() * 200);
            let pw = 70 + (Math.random() * 50); 
            platforms.push({ x: px, y: py, w: pw, h: 15 });

            if (Math.random() > 0.5) {
                cores.push({ x: px + pw - 20, y: py - 20, w: 10, h: 10 });
            }

            let hazardChance = Math.max(0.8 - (sector * 0.05), 0.3);
            if (Math.random() > hazardChance) {
                hazards.push({ x: px + 5, y: py - 15, w: 20, h: 15 });
            }
        }

        for (let i = 0; i < Math.min(sector, 5); i++) {
            hazards.push({ x: 200 + Math.random() * 400, y: 365, w: 30, h: 15 });
        }

        player.x = 20;
        player.y = 350;
        player.dx = 0;
        player.dy = 0;
    }

    function checkCollision(rect1, rect2) {
        return rect1.x < rect2.x + rect2.w &&
               rect1.x + rect1.w > rect2.x &&
               rect1.y < rect2.y + rect2.h &&
               rect1.y + rect1.h > rect2.y;
    }

    function gameOver() {
        sector = 1;
        dataScore = 0;
        updateUI();
        generateLevel();
    }

    function updateUI() {
        document.getElementById("score").innerText = sector;
        document.getElementById("data-score").innerText = dataScore;
    }

    function update() {
        if (keys["ArrowLeft"]) player.dx = -player.speed;
        else if (keys["ArrowRight"]) player.dx = player.speed;
        else player.dx = 0;

        player.x += player.dx;
        player.dy += gravity;
        player.y += player.dy;
        player.grounded = false;

        for (let p of platforms) {
            if (checkCollision(player, p)) {
                if (player.dy > 0 && player.y + player.h - player.dy <= p.y) {
                    player.grounded = true;
                    player.jumps = 0; 
                    player.dy = 0;
                    player.y = p.y - player.h;
                }
            }
        }

        if (player.x < 0) player.x = 0;
        if (player.x + player.w > canvas.width) player.x = canvas.width - player.w; 
        if (player.y > canvas.height) gameOver(); 

        for (let h of hazards) {
            if (checkCollision(player, h)) gameOver();
        }

        for (let i = cores.length - 1; i >= 0; i--) {
            if (checkCollision(player, cores[i])) {
                cores.splice(i, 1); 
                dataScore += 10;
                updateUI();
            }
        }

        if (checkCollision(player, portal)) {
            sector++;
            updateUI();
            generateLevel();
        }

        purgeWall.x += purgeWall.speed;
        if (player.x + (player.w / 2) < purgeWall.x) {
            gameOver();
        }

        draw();
        requestAnimationFrame(update);
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 1. Draw Purge Wall (Left Danger)
        let redGrad = ctx.createLinearGradient(purgeWall.x - 50, 0, purgeWall.x, 0);
        redGrad.addColorStop(0, "rgba(255, 0, 85, 0)");
        redGrad.addColorStop(1, "rgba(255, 0, 85, 0.4)");
        ctx.fillStyle = redGrad;
        ctx.fillRect(0, 0, purgeWall.x, canvas.height);
        
        ctx.strokeStyle = "#ff0055";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(purgeWall.x, 0);
        ctx.lineTo(purgeWall.x, canvas.height);
        ctx.stroke();

        // 2. Draw GOAL GLOW (The Blue Wall on the Right)
        let blueGrad = ctx.createLinearGradient(750, 0, 800, 0);
        blueGrad.addColorStop(0, "rgba(0, 242, 255, 0)");
        blueGrad.addColorStop(1, "rgba(0, 242, 255, 0.2)");
        ctx.fillStyle = blueGrad;
        ctx.fillRect(750, 0, 50, canvas.height);

        ctx.strokeStyle = "#00f2ff";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(798, 0);
        ctx.lineTo(798, canvas.height);
        ctx.stroke();

        // 3. Draw Exit Portal (Beacon)
        ctx.save();
        let pulse = (Math.sin(Date.now() / 300) + 1) / 2;
        let portalGlow = ctx.createRadialGradient(
            portal.x + portal.w / 2, portal.y + portal.h / 2, 5, 
            portal.x + portal.w / 2, portal.y + portal.h / 2, 80
        );
        portalGlow.addColorStop(0, `rgba(255, 0, 255, ${0.2 + (pulse * 0.3)})`); 
        portalGlow.addColorStop(1, "rgba(255, 0, 255, 0)");
        ctx.fillStyle = portalGlow;
        ctx.fillRect(portal.x - 100, portal.y - 100, 300, 300);

        ctx.shadowBlur = 20 + (pulse * 10);
        ctx.shadowColor = "#ff00ff";
        ctx.fillStyle = "#ff00ff";
        ctx.fillRect(portal.x, portal.y, portal.w, portal.h);
        ctx.restore();

        // 4. Draw Player (Cyber-Runner)
        ctx.shadowBlur = 15;
        ctx.shadowColor = "#00e5ff";
        ctx.fillStyle = "#fff";
        ctx.fillRect(player.x, player.y, player.w, player.h);
        ctx.fillStyle = "#00e5ff";
        ctx.fillRect(player.x + 12, player.y + 4, 8, 4);
        ctx.globalAlpha = 0.3;
        ctx.fillRect(player.x - 5, player.y + 2, 5, 16);
        ctx.globalAlpha = 1.0;

        // 5. Draw Hazards (Plasma Spikes)
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#ff2d55";
        ctx.fillStyle = "#ff2d55";
        for (let h of hazards) {
            ctx.beginPath();
            ctx.moveTo(h.x, h.y + h.h);
            ctx.lineTo(h.x + h.w / 2, h.y);
            ctx.lineTo(h.x + h.w, h.y + h.h);
            ctx.fill();
        }

        // 6. Draw Cores (Rotating Data Bits)
        ctx.shadowColor = "#ffb300";
        ctx.fillStyle = "#ffb300";
        for (let c of cores) {
            ctx.save();
            ctx.translate(c.x + 5, c.y + 5);
            ctx.rotate(Date.now() / 500);
            ctx.fillRect(-5, -5, 10, 10);
            ctx.restore();
        }

        // 7. Draw Platforms
        ctx.shadowBlur = 5;
        ctx.shadowColor = "#00f2ff";
        for (let p of platforms) {
            ctx.fillStyle = "#00f2ff";
            ctx.fillRect(p.x, p.y, p.w, 4);
            ctx.globalAlpha = 0.1;
            ctx.fillRect(p.x, p.y + 4, p.w, p.h - 4);
            ctx.globalAlpha = 1.0;
        }
    }

    updateUI();
    generateLevel();
    update();
}