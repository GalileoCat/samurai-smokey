const canvas = document.getElementById("gridCanvas");
const ctx = canvas?.getContext("2d");

if (canvas) {
    const ROW = 22;
    const COL = 12;
    const SQ = 30;
    
    // 1. GLOBAL STATE
    let gameActive = true; 
    let score = 0;
    let lines = 0;
    let dropStart = Date.now();
    let shakeTime = 0; // Moved to the top for safety!

    const COLORS = {
        VACANT: "#050505",
        I: "#00f2ff", O: "#ffb300", T: "#ff00ff",
        S: "#ff2d55", Z: "#b3ff00", J: "#0055ff", L: "#ffffff"
    };

    let grid = [];
    for(let r = 0; r < ROW; r++){
        grid[r] = new Array(COL).fill(COLORS.VACANT);
    }

    const PIECES = [
        [[[1,1,1,1]], COLORS.I],
        [[[1,1],[1,1]], COLORS.O],
        [[[0,1,0],[1,1,1]], COLORS.T],
        [[[1,1,0],[0,1,1]], COLORS.S],
        [[[0,1,1],[1,1,0]], COLORS.Z],
        [[[1,0,0],[1,1,1]], COLORS.J],
        [[[0,0,1],[1,1,1]], COLORS.L]
    ];

    // --- PARTICLE SYSTEM ---
    let particles = [];

    function createParticles(x, y, color) {
        for (let i = 0; i < 8; i++) {
            particles.push({
                x: x,
                y: y,
                xv: (Math.random() - 0.5) * 10,
                yv: (Math.random() - 0.5) * 10,
                life: 30,
                color: color
            });
        }
    }

    function updateParticles() {
        for (let i = particles.length - 1; i >= 0; i--) {
            let p = particles[i];
            p.x += p.xv;
            p.y += p.yv;
            p.life--;
            if (p.life <= 0) particles.splice(i, 1);
        }
    }

    function drawParticles() {
        particles.forEach(p => {
            ctx.globalAlpha = p.life / 30;
            ctx.fillStyle = p.color;
            ctx.fillRect(p.x, p.y, 4, 4);
        });
        ctx.globalAlpha = 1.0;
    }

    // 2. DRAWING FUNCTIONS
    function drawSquare(x, y, color, isGhost = false){
        ctx.save();
        ctx.translate(x * SQ, y * SQ);
        if (color === COLORS.VACANT) {
            ctx.strokeStyle = "#111";
            ctx.lineWidth = 1;
            ctx.strokeRect(0, 0, SQ, SQ);
        } else {
            if (isGhost) {
                ctx.globalAlpha = 0.2;
                ctx.strokeStyle = color;
                ctx.lineWidth = 2;
                ctx.strokeRect(2, 2, SQ - 4, SQ - 4);
            } else {
                ctx.shadowBlur = 10;
                ctx.shadowColor = color;
                ctx.fillStyle = color;
                ctx.fillRect(2, 2, SQ - 4, SQ - 4);
                ctx.globalAlpha = 0.4;
                ctx.fillStyle = "#fff";
                ctx.fillRect(4, 4, SQ - 8, 4); 
                ctx.fillStyle = "#000";
                ctx.fillRect(4, SQ - 8, SQ - 8, 4);
            }
        }
        ctx.restore();
    }

    function drawGrid(){
        for(let r = 0; r < ROW; r++){
            for(let c = 0; c < COL; c++){
                drawSquare(c, r, grid[r][c]);
            }
        }
    }

    // 3. PIECE CLASS
    class Piece {
        constructor(tetromino, color) {
            this.tetromino = tetromino;
            this.color = color;
            this.activeRotation = 0;
            this.x = 4;
            this.y = -2;
        }

        fill(color, isGhost = false, ghostY = null) {
            const shape = this.tetromino[this.activeRotation];
            const drawY = isGhost ? ghostY : this.y;
            for(let r = 0; r < shape.length; r++){
                for(let c = 0; c < shape[r].length; c++){
                    if(shape[r][c]){
                        drawSquare(this.x + c, drawY + r, color, isGhost);
                    }
                }
            }
        }

        drawGhost() {
            let ghostY = this.y;
            while (!this.collision(0, 1, this.tetromino[this.activeRotation], ghostY)) {
                ghostY++;
            }
            this.fill(this.color, true, ghostY);
        }

        moveDown() {
            if(!this.collision(0, 1, this.tetromino[this.activeRotation])){
                this.y++;
            } else {
                this.lock();
                if (gameActive) newPiece();
            }
        }

        collision(x, y, piece, customY = null) {
            let testY = customY !== null ? customY : this.y;
            for(let r = 0; r < piece.length; r++){
                for(let c = 0; c < piece[r].length; c++){
                    if(!piece[r][c]) continue;
                    let newX = this.x + c + x;
                    let newY = testY + r + y;
                    if(newX < 0 || newX >= COL || newY >= ROW) return true;
                    if(newY < 0) continue;
                    if(grid[newY][newX] !== COLORS.VACANT) return true;
                }
            }
            return false;
        }

        lock() {
            const shape = this.tetromino[this.activeRotation];
            shakeTime = 5; // Small shake on every lock

            for (let r = 0; r < shape.length; r++) {
                for (let c = 0; c < shape[r].length; c++) {
                    if (!shape[r][c]) continue;
                    if (this.y + r < 0) {
                        showGameOver();
                        return;
                    }
                    grid[this.y + r][this.x + c] = this.color;
                }
            }

            // Line clearing with particles
            for (let r = 0; r < ROW; r++) {
                if (grid[r].every(sq => sq !== COLORS.VACANT)) {
                    // Spawn particles for the whole row
                    for (let c = 0; c < COL; c++) {
                        createParticles(c * SQ + SQ/2, r * SQ + SQ/2, grid[r][c]);
                    }
                    
                    grid.splice(r, 1);
                    grid.unshift(new Array(COL).fill(COLORS.VACANT));
                    lines++;
                    score += 100;
                    shakeTime = 15; // Bigger shake for clearing lines
                }
            }
            document.getElementById("score").innerText = score;
            document.getElementById("lines").innerText = lines;
        }
    }

    // 4. GAME OVER LOGIC
    function showGameOver() {
        gameActive = false;
        const overlay = document.getElementById("gameOverOverlay");
        if (overlay) {
            document.getElementById("finalScore").innerText = "FINAL LOAD: " + score;
            overlay.style.display = "flex";
            overlay.onclick = () => { rebootSystem(); };
        }
    }

    function rebootSystem() {
        if (gameActive) return;
        for(let r = 0; r < ROW; r++) { grid[r].fill(COLORS.VACANT); }
        score = 0;
        lines = 0;
        document.getElementById("score").innerText = "0";
        document.getElementById("lines").innerText = "0";
        
        const overlay = document.getElementById("gameOverOverlay");
        if (overlay) overlay.style.display = "none";
        
        gameActive = true;
        newPiece();
        drop(); 
    }

    // 5. ENGINE FUNCTIONS
    function rotateShape(matrix) {
        return matrix[0].map((_, i) => matrix.map(row => row[i]).reverse());
    }

    function newPiece() {
        let r = Math.floor(Math.random() * PIECES.length);
        let baseShape = PIECES[r][0];
        let rotations = [baseShape];
        for(let i=0; i<3; i++) rotations.push(rotateShape(rotations[i]));
        p = new Piece(rotations, PIECES[r][1]);
    }

    let p;
    newPiece();

    function drop() {
        if (!gameActive) return;

        ctx.save();
        if (shakeTime > 0) {
            ctx.translate((Math.random() - 0.5) * 5, (Math.random() - 0.5) * 5);
            shakeTime--;
        }

        ctx.clearRect(-10, -10, canvas.width + 20, canvas.height + 20);
        drawGrid();
        updateParticles();
        drawParticles();

        let now = Date.now();
        if (now - dropStart > 500) {
            p.moveDown();
            dropStart = now;
        }

        p.drawGhost();
        p.fill(p.color);
        ctx.restore();
        requestAnimationFrame(drop);
    }

    // 6. INPUTS (Keyboard & Mobile Swipe)
    document.addEventListener("keydown", (e) => {
        if (!gameActive) return;

        if(["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
            e.preventDefault();
        }

        if(e.key === "ArrowLeft" && !p.collision(-1, 0, p.tetromino[p.activeRotation])) p.x--;
        if(e.key === "ArrowRight" && !p.collision(1, 0, p.tetromino[p.activeRotation])) p.x++;
        if(e.key === "ArrowDown") p.moveDown();
        if(e.key === "ArrowUp") {
            let nextPattern = p.tetromino[(p.activeRotation + 1) % 4];
            if(!p.collision(0, 0, nextPattern)) p.activeRotation = (p.activeRotation + 1) % 4;
        }
        if (e.key === " ") { 
            while (!p.collision(0, 1, p.tetromino[p.activeRotation])) { p.y++; }
            shakeTime = 10; 
            p.lock();
            if (gameActive) newPiece();
        }
    });

    let touchStartX = 0;
    let touchStartY = 0;

    canvas.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    }, {passive: false});

    canvas.addEventListener("touchend", (e) => {
        if (!gameActive) return;

        let touchEndX = e.changedTouches[0].clientX;
        let touchEndY = e.changedTouches[0].clientY;

        let dx = touchEndX - touchStartX;
        let dy = touchEndY - touchStartY;

        if (Math.abs(dx) < 10 && Math.abs(dy) < 10) {
            // Tap = Rotate
            let nextPattern = p.tetromino[(p.activeRotation + 1) % 4];
            if(!p.collision(0, 0, nextPattern)) p.activeRotation = (p.activeRotation + 1) % 4;
        } else if (Math.abs(dx) > Math.abs(dy)) {
            // Swipe Horizontal = Move
            if (dx > 30 && !p.collision(1, 0, p.tetromino[p.activeRotation])) p.x++;
            else if (dx < -30 && !p.collision(-1, 0, p.tetromino[p.activeRotation])) p.x--;
        } else if (dy > 30) {
            // Swipe Down = Hard Drop
            while(!p.collision(0, 1, p.tetromino[p.activeRotation])) { p.y++; }
            shakeTime = 10;
            p.lock();
            if (gameActive) newPiece();
        }
    }, {passive: false});

    drop();
}