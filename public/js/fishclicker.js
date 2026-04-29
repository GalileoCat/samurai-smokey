document.addEventListener('DOMContentLoaded', () => {
    // --- 1. GAME STATE (REBALANCED ECONOMY) ---
    let fish = 0;
    let fishPerSec = 0;
    
    // Costs lowered dramatically for a faster, more fun early game
    const upgrades = [
        { id: 1, baseCost: 15, cps: 1, count: 0 },
        { id: 2, baseCost: 100, cps: 5, count: 0 },
        { id: 3, baseCost: 500, cps: 15, count: 0 },
        { id: 4, baseCost: 3000, cps: 50, count: 0 },
        { id: 5, baseCost: 10000, cps: 200, count: 0 },
        { id: 6, baseCost: 50000, cps: 1000, count: 0 },
        { id: 7, baseCost: 250000, cps: 5000, count: 0 },
        { id: 8, baseCost: 1000000, cps: 25000, count: 0 }
    ];

    // --- 2. LOAD SAVE DATA ---
    const savedData = localStorage.getItem('galileocat_fishclicker');
    if (savedData) {
        const parsed = JSON.parse(savedData);
        fish = parsed.fish || 0;
        if (parsed.upgrades) {
            parsed.upgrades.forEach((savedUpg, index) => {
                if (upgrades[index]) upgrades[index].count = savedUpg.count;
            });
        }
    }

    // --- 3. DOM ELEMENTS ---
    const uiFish = document.getElementById('fish-count');
    const uiFishSec = document.getElementById('fish-sec');
    const catBtn = document.getElementById('cat-button');
    const bubbleContainer = document.getElementById('bubble-container');
    const gameContainer = document.querySelector('.clicker-container'); // NEW: Target for Screen Shake

    // --- 4. CORE ENGINE ---
    // Active clicking now gives you 20% of your CPS (up from 10%) so clicking stays strong!
    function getClickPower() { return 1 + Math.floor(fishPerSec * 0.2); }
    function getCost(upgrade) { return Math.floor(upgrade.baseCost * Math.pow(1.15, upgrade.count)); }

    function calculateCPS() {
        let total = 0;
        upgrades.forEach(u => { total += u.cps * u.count; });
        fishPerSec = total;
        uiFishSec.innerText = `${fishPerSec.toLocaleString()} fish per second`;
        updateCatFace();
    }

    // DYNAMIC CAT EXPRESSIONS (Lowered thresholds so you see them faster!)
    function updateCatFace() {
        if (fishPerSec < 5) catBtn.innerText = "(=^w^=)";
        else if (fishPerSec < 25) catBtn.innerText = "(=✧w✧=)";
        else if (fishPerSec < 100) catBtn.innerText = "(=✪w✪=)";
        else catBtn.innerText = "(=𖦹w𖦹=)";
    }

    function updateUI() {
        uiFish.innerText = Math.floor(fish).toLocaleString();
        upgrades.forEach(u => {
            const btn = document.getElementById(`upgrade${u.id}`);
            const costSpan = document.getElementById(`cost${u.id}`);
            if (!btn || !costSpan) return;
            
            const cost = getCost(u);
            costSpan.innerText = cost.toLocaleString();
            
            let nameElement = btn.querySelector('h3');
            if (u.count > 0) {
                let baseName = nameElement.innerText.split(' (')[0];
                nameElement.innerText = `${baseName} (${u.count})`;
            }

            if (fish >= cost) btn.classList.remove('disabled');
            else btn.classList.add('disabled');
        });
    }

    // Main Game Loops
    setInterval(() => {
        const data = { fish: fish, upgrades: upgrades.map(u => ({ id: u.id, count: u.count })) };
        localStorage.setItem('galileocat_fishclicker', JSON.stringify(data));
    }, 5000);

    setInterval(() => {
        fish += fishPerSec / 10;
        updateUI();
    }, 100);

    // --- 5. VISUAL EFFECTS ENGINE ---
    
    // Ambient Bubbles
    setInterval(() => {
        let bubble = document.createElement('div');
        bubble.classList.add('bg-bubble');
        let size = Math.random() * 40 + 10;
        bubble.style.width = size + 'px';
        bubble.style.height = size + 'px';
        bubble.style.left = Math.random() * 100 + 'vw';
        bubble.style.animationDuration = (Math.random() * 5 + 5) + 's';
        if(bubbleContainer) bubbleContainer.appendChild(bubble);
        setTimeout(() => bubble.remove(), 10000);
    }, 800);

    // Physics Particle Engine
    let particles = [];
    function spawnFishParticles(x, y) {
        for (let i = 0; i < 4; i++) {
            let p = document.createElement('div');
            p.innerText = '🐟';
            p.style.position = 'fixed';
            p.style.left = x + 'px';
            p.style.top = y + 'px';
            p.style.pointerEvents = 'none';
            p.style.fontSize = (Math.random() * 15 + 15) + 'px';
            p.style.zIndex = 9999;
            document.body.appendChild(p);
            
            particles.push({
                element: p, x: x, y: y,
                vx: (Math.random() - 0.5) * 15,
                vy: (Math.random() - 1) * 15,
                life: 1.0
            });
        }
    }

    function animateParticles() {
        for (let i = particles.length - 1; i >= 0; i--) {
            let p = particles[i];
            p.vy += 0.5; // Gravity
            p.x += p.vx; p.y += p.vy; p.life -= 0.02;
            
            p.element.style.transform = `translate(${p.x - parseFloat(p.element.style.left)}px, ${p.y - parseFloat(p.element.style.top)}px) rotate(${p.vx * 10}deg)`;
            p.element.style.opacity = p.life;

            if (p.life <= 0) { p.element.remove(); particles.splice(i, 1); }
        }
        requestAnimationFrame(animateParticles);
    }
    requestAnimationFrame(animateParticles);

    // Floating text
    function createFloatingText(x, y, amount) {
        const floatText = document.createElement('div');
        floatText.classList.add('click-anim');
        floatText.innerText = `+${amount.toLocaleString()}`; 
        const randomOffsetX = (Math.random() - 0.5) * 60;
        floatText.style.left = `${x + randomOffsetX}px`;
        floatText.style.top = `${y - 30}px`;
        document.body.appendChild(floatText);
        setTimeout(() => floatText.remove(), 1000);
    }

    // FIXED: Target the container, not the body, and force reflow
    function screenShake() {
        if (!gameContainer) return;
        gameContainer.style.animation = 'none';
        void gameContainer.offsetWidth; // Force reflow
        gameContainer.style.animation = 'shakeScreen 0.2s cubic-bezier(.36,.07,.19,.97) both';
    }

    // --- 6. INTERACTIONS ---
    
    upgrades.forEach(u => {
        const btn = document.getElementById(`upgrade${u.id}`);
        if (btn) {
            btn.addEventListener('click', () => {
                const cost = getCost(u);
                if (fish >= cost) {
                    fish -= cost;
                    u.count++;
                    screenShake(); // Will now aggressively shake the box!
                    calculateCPS();
                    updateUI();
                }
            });
        }
    });

    catBtn.addEventListener('click', (e) => {
        const power = getClickPower();
        fish += power;
        updateUI();

        // FIXED: Fool-proof wiggle animation trigger
        catBtn.style.animation = 'none';
        void catBtn.offsetWidth; 
        catBtn.style.animation = 'catWiggle 0.15s ease-in-out';

        createFloatingText(e.clientX, e.clientY, power);
        spawnFishParticles(e.clientX, e.clientY);
    });

    // Initialize
    calculateCPS();
    updateUI();
});