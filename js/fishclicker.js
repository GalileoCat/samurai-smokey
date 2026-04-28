let fish = 0;
let fishPerSec = 0;

// THE UPGRADE DATABASE: Easily add more tiers here later!
const upgrades = [
    { id: 1, cost: 50, bps: 1, elementId: "upgrade1", costId: "cost1" },
    { id: 2, cost: 250, bps: 5, elementId: "upgrade2", costId: "cost2" },
    { id: 3, cost: 1000, bps: 15, elementId: "upgrade3", costId: "cost3" },
    { id: 4, cost: 5000, bps: 50, elementId: "upgrade4", costId: "cost4" },
    { id: 5, cost: 25000, bps: 200, elementId: "upgrade5", costId: "cost5" },
    { id: 6, cost: 150000, bps: 1000, elementId: "upgrade6", costId: "cost6" },
    { id: 7, cost: 1000000, bps: 5000, elementId: "upgrade7", costId: "cost7" },
    { id: 8, cost: 10000000, bps: 25000, elementId: "upgrade8", costId: "cost8" }
];

document.addEventListener("DOMContentLoaded", () => {
    // 1. Hook up the Cat Button
    const catBtn = document.getElementById("cat-button");
    if(catBtn) catBtn.addEventListener("click", clickCat);

    // 2. Automatically hook up all upgrade buttons in the database
    upgrades.forEach(upg => {
        const btn = document.getElementById(upg.elementId);
        if (btn) btn.addEventListener("click", () => buyUpgrade(upg.id));
    });
    
    // 3. Start the Idle Game Loop
    setInterval(() => {
        if (fishPerSec > 0) {
            fish += fishPerSec;
            updateUI();
        }
    }, 1000);
});

// --- GAME LOGIC ---

function clickCat(e) {
    fish += 1;
    updateUI();

    // Trigger Cat Wiggle
    const catBtn = document.getElementById("cat-button");
    if (catBtn) {
        catBtn.classList.remove("clicked");
        void catBtn.offsetWidth; 
        catBtn.classList.add("clicked");
    }

    // Trigger Floating Text
    if (e && e.clientX !== undefined) {
        createFloatingText(e.clientX, e.clientY);
    }
}

function buyUpgrade(id) {
    // Find the upgrade the user clicked in our database
    const upg = upgrades.find(u => u.id === id);
    
    // If they have enough fish, process the transaction
    if (upg && fish >= upg.cost) {
        fish -= upg.cost;
        fishPerSec += upg.bps;
        upg.cost = Math.floor(upg.cost * 1.5); // Increase price by 50%
        updateUI();
    }
}

function updateUI() {
    const countEl = document.getElementById("fish-count");
    if (!countEl) return; 
    
    // Format numbers with commas so millions are readable
    countEl.innerText = Math.floor(fish).toLocaleString();
    document.getElementById("fish-sec").innerText = fishPerSec.toLocaleString() + " fish per second";

    // Automatically update all shop buttons
    upgrades.forEach(upg => {
        const costEl = document.getElementById(upg.costId);
        const btnEl = document.getElementById(upg.elementId);
        
        if (costEl) costEl.innerText = upg.cost.toLocaleString();
        if (btnEl) btnEl.className = (fish >= upg.cost) ? "shop-item" : "shop-item disabled";
    });
}

// --- ANIMATION LOGIC ---

function createFloatingText(x, y) {
    const popup = document.createElement("div");
    popup.classList.add("click-anim");
    popup.innerText = "+1 🐟";
    
    const randomX = x + (Math.random() - 0.5) * 40;
    const randomY = y - 20; 
    
    popup.style.left = `${randomX}px`;
    popup.style.top = `${randomY}px`;
    
    document.body.appendChild(popup);
    
    setTimeout(() => { popup.remove(); }, 1000);
}