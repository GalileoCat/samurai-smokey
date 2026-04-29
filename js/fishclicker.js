document.addEventListener('DOMContentLoaded', () => {
    // --- 1. GAME STATE (WITH NAMES ADDED!) ---
    let fish = 0;
    let fishPerSec = 0;
    
    const upgrades = [
        { id: 1, name: "Auto-Feeder", baseCost: 15, cps: 1, count: 0 },
        { id: 2, name: "Premium Salmon", baseCost: 100, cps: 5, count: 0 },
        { id: 3, name: "Tuna Pyramid", baseCost: 500, cps: 15, count: 0 },
        { id: 4, name: "Sushi Chef Cat", baseCost: 3000, cps: 50, count: 0 },
        { id: 5, name: "Fishing Trawler", baseCost: 10000, cps: 200, count: 0 },
        { id: 6, name: "Deep Sea Sub", baseCost: 50000, cps: 1000, count: 0 },
        { id: 7, name: "Orbital Cannon", baseCost: 250000, cps: 5000, count: 0 },
        { id: 8, name: "Cosmic Leviathan", baseCost: 1000000, cps: 25000, count: 0 }
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
    const gameContainer = document.querySelector('.clicker-container');

    // --- 4. CORE ENGINE & PSYCHOLOGY HOOKS ---

    // Number Formatter (e.g. 1,500,000 -> 1.50M)
    function formatNumber(num) {
        if (num >= 1000000000) return (num / 1000000000).toFixed(2) + 'B';
        if (num >= 1000000) return (num / 1000000).toFixed(2) + 'M';
        if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
        return Math.floor(num).toString();
    }

    function getClickPower() { return 1 + Math.floor(fishPerSec * 0.2); }
    function getCost(upgrade) { return Math.floor(upgrade.baseCost * Math.pow(1.15, upgrade.count)); }

    function calculateCPS() {
        let total = 0;
        upgrades.forEach(u => { total += u.cps * u.count; });
        fishPerSec = total;
        uiFishSec.innerText = `${formatNumber(fishPerSec)} fish per second`;
        updateCatFace();
    }

    function updateCatFace() {
        if (fishPerSec < 5) catBtn.innerText = "(=^w^=)";
        else if (fishPerSec < 25) catBtn.innerText = "(=✧w✧=)";
        else if (fishPerSec < 100) catBtn.innerText = "(=✪w✪=)";
        else catBtn.innerText = "(=𖦹w𖦹=)";
    }

    function updateUI() {
        uiFish.innerText = formatNumber(fish);
        
        upgrades.forEach(u => {
            const btn = document.getElementById(`upgrade${u.id}`);
            const costSpan = document.getElementById(`cost${u.id}`);
            if (!btn || !costSpan) return;
            
            const cost = getCost(u);
            let nameElement = btn.querySelector('h3');

            // CURIOSITY GAP LOGIC: Reveal if they have 50% of base cost OR already own one
            if (fish >= u.baseCost * 0.5 || u.count > 0) {
                nameElement.innerText = u.count > 0 ? `${u.name} (${u.count})` : u.name;
                costSpan.innerText = formatNumber(cost);
                
                // Color formatting based on affordability
                if (fish >= cost) {
                    btn.classList.remove('disabled');
                    btn.style.opacity = '1';
                } else {
                    btn.classList.add('disabled');
                    btn.style.opacity = '0.5';
                }
            } else {
                // Obscure late-game items
                nameElement.innerText = "???";
                costSpan.innerText = "???";
                btn.classList.add('disabled');
                btn.style.opacity = '0.2'; // Make it very dark
            }
        });
    }

    // Save Game every 5 seconds
    setInterval(() => {
        const data = { fish: fish, upgrades: upgrades.map(u => ({ id: u.id, count: u.count })) };
        localStorage.setItem('galileocat_fishclicker', JSON.stringify(data));
    }, 5000);

    // Main Game Loop (10 ticks a second)
    setInterval(() => {
        fish += fishPerSec / 10;
        updateUI();
    }, 100);

    // --- 5. VISUAL EFFECTS ENGINE ---
    
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

    // UPDATED: Floating text now handles CRITS
    function createFloatingText(x, y, amount, isCrit = false) {
        const floatText = document.createElement('div');
        floatText.classList.add('click-anim');
        
        if (isCrit) {
            floatText.innerText = `CRIT! +${formatNumber(amount)}`;
            floatText.style.color = '#ffcc00';
            floatText.style.fontSize = '2.5rem';
            floatText.style.textShadow = '0 0 20px #ffcc00';
        } else {
            floatText.innerText = `+${formatNumber(amount)}`; 
        }

        const randomOffsetX = (Math.random() - 0.5) * 60;
        floatText.style.left = `${x + randomOffsetX}px`;
        floatText.style.top = `${y - 30}px`;
        document.body.appendChild(floatText);
        setTimeout(() => floatText.remove(), 1000);
    }

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
                    screenShake(); 
                    calculateCPS();
                    updateUI();
                }
            });
        }
    });

    catBtn.addEventListener('click', (e) => {
        let power = getClickPower();
        let isCrit = Math.random() < 0.05; // 5% chance for a massive hit
        
        if (isCrit) {
            power *= 10;
            screenShake(); // Always shake on a crit
        }
        
        fish += power;
        updateUI();

        catBtn.style.animation = 'none';
        void catBtn.offsetWidth; 
        catBtn.style.animation = 'catWiggle 0.15s ease-in-out';

        createFloatingText(e.clientX, e.clientY, power, isCrit);
        spawnFishParticles(e.clientX, e.clientY);
    });

    // Initialize
    calculateCPS();
    updateUI();

    // --- 7. RESET SAVE LOGIC ---
    const resetBtn = document.getElementById('reset-save');
    if (resetBtn) {
        resetBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Stop the link from jumping the page
            
            // Ask for confirmation so they don't click it by accident
            if (confirm("CRITICAL WARNING: This will permanently delete your entire fish empire. Are you sure?")) {
                localStorage.removeItem('galileocat_fishclicker'); // Delete the save file
                location.reload(); // Refresh the page to reset everything to 0
            }
        });
    }
});


