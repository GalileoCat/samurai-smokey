document.addEventListener('DOMContentLoaded', () => {
    // --- 1. GAME STATE ---
    let fish = 0;
    let fishPerSec = 0;
    let lastSavedTime = null; // Used for offline progress
    
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
        lastSavedTime = parsed.lastSaved || null;
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

    // MILESTONES: Doubles production at 10, 25, 50, 100, 200
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

    function updateCatFace() {
        if (fishPerSec < 5) catBtn.innerText = "(=^w^=)";               
        else if (fishPerSec < 15) catBtn.innerText = "(=^.^=)";         
        else if (fishPerSec < 30) catBtn.innerText = "(=✧w✧=)";         
        else if (fishPerSec < 60) catBtn.innerText = "(=☆w☆=)";         
        else if (fishPerSec < 100) catBtn.innerText = "(=✪w✪=)";        
        else if (fishPerSec < 200) catBtn.innerText = "(=◎w◎=)";        
        else if (fishPerSec < 350) catBtn.innerText = "(=OωO=)";        
        else if (fishPerSec < 500) catBtn.innerText = "(=𖦹w𖦹=)";        
        else if (fishPerSec < 750) catBtn.innerText = "(=@w@=)";        
        else if (fishPerSec < 1000) catBtn.innerText = "(=◉ω◉=)";       
        else if (fishPerSec < 1500) catBtn.innerText = "(=ꙨωꙨ=)";       
        else if (fishPerSec < 2500) catBtn.innerText = "(=♥ω♥=)";       
        else if (fishPerSec < 4000) catBtn.innerText = "(=💖ω💖=)";     
        else if (fishPerSec < 7000) catBtn.innerText = "(=💎ω💎=)";     
        else if (fishPerSec < 10000) catBtn.innerText = "(=💲w💲=)";    
        else if (fishPerSec < 15000) catBtn.innerText = "(=💰ω💰=)";    
        else if (fishPerSec < 25000) catBtn.innerText = "(=📈ω📈=)";    
        else if (fishPerSec < 40000) catBtn.innerText = "(ↀДↀ)";        
        else if (fishPerSec < 60000) catBtn.innerText = "(=⚙️ω⚙️=)";      
        else if (fishPerSec < 90000) catBtn.innerText = "( ⓛ ω ⓛ *)";  
        else if (fishPerSec < 150000) catBtn.innerText = "(=☢️ω☢️=)";    
        else if (fishPerSec < 250000) catBtn.innerText = "(=☣️ω☣️=)";    
        else if (fishPerSec < 400000) catBtn.innerText = "(=🔥ω🔥=)";   
        else if (fishPerSec < 600000) catBtn.innerText = "(=☄️ω☄️=)";    
        else if (fishPerSec < 1000000) catBtn.innerText = "[=◓ω◓=]";    
        else if (fishPerSec < 1500000) catBtn.innerText = "[=🤖ω🤖=]";  
        else if (fishPerSec < 2500000) catBtn.innerText = "(=⚡ω⚡=)";   
        else if (fishPerSec < 4000000) catBtn.innerText = "(=🌀ω🌀=)";   
        else if (fishPerSec < 7000000) catBtn.innerText = "(=👁️ ω 👁️=)"; 
        else if (fishPerSec < 12000000) catBtn.innerText = "(=🦑ω🦑=)"; 
        else if (fishPerSec < 25000000) catBtn.innerText = "(=🛸ω🛸=)"; 
        else if (fishPerSec < 50000000) catBtn.innerText = "(=🌌ω🌌=)"; 
        else if (fishPerSec < 100000000) catBtn.innerText = "(=🪐ω🪐=)";
        else if (fishPerSec < 250000000) catBtn.innerText = "(=⟁ω⟁=)";  
        else if (fishPerSec < 500000000) catBtn.innerText = "(=👁️‍🗨️ω👁️‍🗨️=)";
        else if (fishPerSec < 750000000) catBtn.innerText = "(=⏳ω⏳=)"; 
        else if (fishPerSec < 1000000000) catBtn.innerText = "(=∅ω∅=)"; 
        else if (fishPerSec < 2500000000) catBtn.innerText = "(=🧬ω🧬=)";
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
                // TIER PROGRESSION VISUALS
                let stars = "";
                let isMaxTier = false;

                if (u.count >= 10) stars = " ⭐";
                if (u.count >= 25) stars = " ⭐⭐";
                if (u.count >= 50) stars = " ⭐⭐⭐";
                if (u.count >= 100) stars = " ⭐⭐⭐⭐";
                if (u.count >= 200) {
                    stars = " 🌟🌟🌟🌟🌟";
                    isMaxTier = true;
                }

                nameElement.innerText = u.count > 0 ? `${u.name} (${u.count})${stars}` : u.name;
                costSpan.innerText = formatNumber(cost);
                
                if (fish >= cost) {
                    btn.classList.remove('disabled');
                    btn.style.opacity = '1';
                } else {
                    btn.classList.add('disabled');
                    btn.style.opacity = '0.5';
                }

                // APPLY PREMIUM "MAX TIER" STYLING
                if (isMaxTier) {
                    btn.style.borderColor = '#ffcc00';
                    btn.style.boxShadow = '0 0 15px rgba(255, 204, 0, 0.4), inset 0 0 10px rgba(255, 204, 0, 0.1)';
                    btn.style.background = 'rgba(60, 45, 0, 0.6)'; // Rich dark gold tint
                    nameElement.style.color = '#ffcc00'; // Make title gold too
                    nameElement.style.textShadow = '0 0 5px #ffcc00';
                }

            } else {
                nameElement.innerText = "???";
                costSpan.innerText = "???";
                btn.classList.add('disabled');
                btn.style.opacity = '0.2'; 
            }
        });
    }

    // Save Game every 5 seconds, now including a timestamp
    setInterval(() => {
        const data = { 
            fish: fish, 
            lastSaved: Date.now(),
            upgrades: upgrades.map(u => ({ id: u.id, count: u.count })) 
        };
        localStorage.setItem('galileocat_fishclicker', JSON.stringify(data));
    }, 5000);

    // Main Game Loop
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

    // Modified to accept a raw string so it can handle Crits and Milestones
    function createFloatingText(x, y, textString, isSpecial = false) {
        const floatText = document.createElement('div');
        floatText.classList.add('click-anim');
        
        if (isSpecial) {
            floatText.innerText = textString;
            floatText.style.color = '#ffcc00';
            floatText.style.fontSize = '2rem';
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

    // --- 6. GOLDEN KITTY EVENT ---
    function queueGoldenKitty() {
        const delay = Math.random() * 120000 + 60000; 
        setTimeout(spawnGoldenKitty, delay);
    }

    function spawnGoldenKitty() {
        const kitty = document.createElement('div');
        kitty.innerText = '✨😺✨';
        kitty.style.position = 'fixed';
        kitty.style.left = (Math.random() * (window.innerWidth - 100) + 50) + 'px';
        kitty.style.top = (Math.random() * (window.innerHeight - 100) + 50) + 'px';
        kitty.style.fontSize = '4rem';
        kitty.style.cursor = 'pointer';
        kitty.style.zIndex = '10000';
        kitty.style.filter = 'drop-shadow(0 0 20px #ffcc00)';
        kitty.style.animation = 'catWiggle 0.5s infinite'; 
        kitty.style.userSelect = 'none';
        kitty.style.transition = 'opacity 0.5s';

        document.body.appendChild(kitty);

        let clicked = false;

        kitty.onclick = (e) => {
            clicked = true;
            kitty.remove();
            
            // NERFED: Grants 30 Seconds worth of Fish (or 100 minimum)
            let reward = Math.max(100, fishPerSec * 30);
            fish += reward;
            
            screenShake();
            createFloatingText(e.clientX, e.clientY, `LUCKY! +${formatNumber(reward)}`, true);
            spawnFishParticles(e.clientX, e.clientY);
            spawnFishParticles(e.clientX, e.clientY); // Double explosion!
            
            updateUI();
        };

        setTimeout(() => {
            if (!clicked && kitty.parentNode) {
                kitty.style.opacity = '0';
                setTimeout(() => kitty.remove(), 500);
            }
            queueGoldenKitty(); 
        }, 4000);
    }
    
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
                    
                    // MILESTONE LEVEL UP POPUP
                    if (newMulti > oldMulti) {
                        let popupStars = "⭐";
                        if (u.count === 25) popupStars = "⭐⭐";
                        if (u.count === 50) popupStars = "⭐⭐⭐";
                        if (u.count === 100) popupStars = "⭐⭐⭐⭐";
                        if (u.count === 200) popupStars = "🌟 MAX TIER 🌟";

                        createFloatingText(e.clientX, e.clientY, `${u.name} LEVEL UP! ${popupStars}`, true);
                        screenShake();
                    } else {
                        if(gameContainer) {
                            gameContainer.style.animation = 'none';
                            void gameContainer.offsetWidth; 
                            gameContainer.style.animation = 'shakeScreen 0.1s cubic-bezier(.36,.07,.19,.97) both';
                        }
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

    // --- 9. INITIALIZATION & OFFLINE PROGRESS ---
    calculateCPS();
    updateUI();

    if (lastSavedTime && fishPerSec > 0) {
        let secondsOffline = Math.floor((Date.now() - lastSavedTime) / 1000);
        if (secondsOffline > 60) {
            let offlineEarnings = secondsOffline * fishPerSec;
            fish += offlineEarnings;
            updateUI();
            
            setTimeout(() => {
                alert(`Welcome back! While you were sleeping, your cats caught ${formatNumber(offlineEarnings)} fish!`);
            }, 500);
        }
    }
});