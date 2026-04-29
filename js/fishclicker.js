document.addEventListener('DOMContentLoaded', () => {
    // --- 1. GAME STATE ---
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

    function formatNumber(num) {
        if (num >= 1000000000) return (num / 1000000000).toFixed(2) + 'B';
        if (num >= 1000000) return (num / 1000000).toFixed(2) + 'M';
        if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
        return Math.floor(num).toString();
    }

    function getClickPower() { return 1 + Math.floor(fishPerSec * 0.2); }
    function getCost(upgrade) { return Math.floor(upgrade.baseCost * Math.pow(1.15, upgrade.count)); }

    // MILESTONES LOGIC: Doubles production at 10, 25, 50, 100, 200
    function getMultiplier(count) {
        let multi = 1;
        if (count >= 10) multi *= 2;
        if (count >= 25) multi *= 2;
        if (count >= 50) multi *= 2;
        if (count >= 100) multi *= 2;
        if (count >= 200) multi *= 2;
        return multi;
    }

    function calculateCPS() {
        let total = 0;
        upgrades.forEach(u => { 
            let multi = getMultiplier(u.count);
            total += u.cps * u.count * multi; 
        });
        fishPerSec = total;
        uiFishSec.innerText = `${formatNumber(fishPerSec)} fish per second`;
        updateCatFace();
    }

    // Expanded Cat Faces for massive progression
    function updateCatFace() {
        if (fishPerSec < 5) catBtn.innerText = "(=^w^=)";
        else if (fishPerSec < 25) catBtn.innerText = "(=✧w✧=)";
        else if (fishPerSec < 100) catBtn.innerText = "(=✪w✪=)";
        else if (fishPerSec < 500) catBtn.innerText = "(=𖦹w𖦹=)";
        else if (fishPerSec < 5000) catBtn.innerText = "(=♥ω♥=)";
        else if (fishPerSec < 50000) catBtn.innerText = "(ↀДↀ)";
        else if (fishPerSec < 500000) catBtn.innerText = "(=🔥ω🔥=)";
        else if (fishPerSec < 5000000) catBtn.innerText = "(=⚡ω⚡=)";
        else if (fishPerSec < 50000000) catBtn.innerText = "(=🌌ω🌌=)";
        else catBtn.innerText = "(=♾️ω♾️=)";
    }

    function updateUI() {
        uiFish.innerText = formatNumber(fish);
        
        upgrades.forEach(u => {
            const btn = document.getElementById(`upgrade${u.id}`);
            const costSpan = document.getElementById(`cost${u.id}`);
            if (!btn || !costSpan) return;
            
            const cost = getCost(u);
            let nameElement = btn.querySelector('h3');

            if (fish >= u.baseCost * 0.5 || u.count > 0) {
                let multi = getMultiplier(u.count);
                // If it has a multiplier, show a star so they know it's boosted!
                let starStr = multi > 1 ? ' ⭐' : '';
                nameElement.innerText = u.count > 0 ? `${u.name} (${u.count})${starStr}` : u.name;
                costSpan.innerText = formatNumber(cost);
                
                if (fish >= cost) {
                    btn.classList.remove('disabled');
                    btn.style.opacity = '1';
                } else {
                    btn.classList.add('disabled');
                    btn.style.opacity = '0.5';
                }
            } else {
                nameElement.innerText = "???";
                costSpan.innerText = "???";
                btn.classList.add('disabled');
                btn.style.opacity = '0.2';
            }
        });
    }

    setInterval(() => {
        const data = { fish: fish, upgrades: upgrades.map(u => ({ id: u.id, count: u.count })) };
        localStorage.setItem('galileocat_fishclicker', JSON.stringify(data));
    }, 5000);

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

    function createFloatingText(x, y, textString, isSpecial = false) {
        const floatText = document.createElement('div');
        floatText.classList.add('click-anim');
        
        if (isSpecial) {
            floatText.innerText = textString;
            floatText.style.color = '#ffcc00';
            floatText.style.fontSize = '2.5rem';
            floatText.style.textShadow = '0 0 20px #ffcc00';
            floatText.style.zIndex = '10000';
        } else {
            floatText.innerText = textString; 
        }

        const randomOffsetX = (Math.random() - 0.5) * 60;
        floatText.style.left = `${x + randomOffsetX}px`;
        floatText.style.top = `${y - 30}px`;
        document.body.appendChild(floatText);
        setTimeout(() => floatText.remove(), 1500);
    }

    function screenShake() {
        if (!gameContainer) return;
        gameContainer.style.animation = 'none';
        void gameContainer.offsetWidth; // Force reflow
        gameContainer.style.animation = 'shakeScreen 0.2s cubic-bezier(.36,.07,.19,.97) both';
    }

    // --- 6. GOLDEN KITTY EVENT (THE SNITCH) ---
    function queueGoldenKitty() {
        // Spawns randomly between 1 to 3 minutes
        const delay = Math.random() * 120000 + 60000; 
        setTimeout(spawnGoldenKitty, delay);
    }

    function spawnGoldenKitty() {
        const kitty = document.createElement('div');
        kitty.innerText = '✨😺✨';
        kitty.style.position = 'fixed';
        // Keep it away from the absolute edges
        kitty.style.left = (Math.random() * (window.innerWidth - 100) + 50) + 'px';
        kitty.style.top = (Math.random() * (window.innerHeight - 100) + 50) + 'px';
        kitty.style.fontSize = '4rem';
        kitty.style.cursor = 'pointer';
        kitty.style.zIndex = '10000';
        kitty.style.filter = 'drop-shadow(0 0 20px #ffcc00)';
        kitty.style.animation = 'catWiggle 0.5s infinite'; // Uses your existing wiggle
        kitty.style.userSelect = 'none';
        kitty.style.transition = 'opacity 0.5s';

        document.body.appendChild(kitty);

        let clicked = false;

        kitty.onclick = (e) => {
            clicked = true;
            kitty.remove();
            
            // Reward: 5 Minutes worth of Fish (or 500 minimum if early game)
            let reward = Math.max(500, fishPerSec * 300);
            fish += reward;
            
            screenShake();
            createFloatingText(e.clientX, e.clientY, `LUCKY! +${formatNumber(reward)}`, true);
            spawnFishParticles(e.clientX, e.clientY);
            spawnFishParticles(e.clientX, e.clientY); // Double blast!
            
            updateUI();
        };

        // Disappears after exactly 4 seconds
        setTimeout(() => {
            if (!clicked && kitty.parentNode) {
                kitty.style.opacity = '0';
                setTimeout(() => kitty.remove(), 500);
            }
            queueGoldenKitty(); // Start the timer for the next one
        }, 4000);
    }

    // Start the Golden Kitty loop
    queueGoldenKitty();

    // --- 7. INTERACTIONS ---
    
    upgrades.forEach(u => {
        const btn = document.getElementById(`upgrade${u.id}`);
        if (btn) {
            btn.addEventListener('click', (e) => {
                const cost = getCost(u);
                if (fish >= cost) {
                    fish -= cost;
                    let oldMulti = getMultiplier(u.count);
                    u.count++;
                    let newMulti = getMultiplier(u.count);
                    
                    // MILESTONE POPUP!
                    if (newMulti > oldMulti) {
                        createFloatingText(e.clientX, e.clientY, `${u.name} x2 MULTIPLIER!`, true);
                        screenShake();
                    } else {
                        // Regular upgrade
                        gameContainer.style.animation = 'none';
                        void gameContainer.offsetWidth; 
                        gameContainer.style.animation = 'shakeScreen 0.1s cubic-bezier(.36,.07,.19,.97) both';
                    }

                    calculateCPS();
                    updateUI();
                }
            });
        }
    });

    catBtn.addEventListener('click', (e) => {
        let power = getClickPower();
        let isCrit = Math.random() < 0.05; 
        
        if (isCrit) {
            power *= 10;
            screenShake(); 
        }
        
        fish += power;
        updateUI();

        catBtn.style.animation = 'none';
        void catBtn.offsetWidth; 
        catBtn.style.animation = 'catWiggle 0.15s ease-in-out';

        createFloatingText(e.clientX, e.clientY, isCrit ? `CRIT! +${formatNumber(power)}` : `+${formatNumber(power)}`, isCrit);
        spawnFishParticles(e.clientX, e.clientY);
    });

    // --- 8. RESET SAVE LOGIC ---
    const resetBtn = document.getElementById('reset-save');
    if (resetBtn) {
        resetBtn.addEventListener('click', (e) => {
            e.preventDefault(); 
            if (confirm("CRITICAL WARNING: This will permanently delete your entire fish empire. Are you sure?")) {
                localStorage.removeItem('galileocat_fishclicker'); 
                location.reload(); 
            }
        });
    }

    // Initialize
    calculateCPS();
    updateUI();
});