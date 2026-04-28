let fish = 0;
let fishPerSec = 0;
let cost1 = 50;
let cost2 = 250;

document.addEventListener("DOMContentLoaded", () => {
    // Attach event listeners safely
    const catBtn = document.getElementById("cat-button");
    const upg1 = document.getElementById("upgrade1");
    const upg2 = document.getElementById("upgrade2");

    if(catBtn) catBtn.addEventListener("click", clickCat);
    if(upg1) upg1.addEventListener("click", () => buyUpgrade(1));
    if(upg2) upg2.addEventListener("click", () => buyUpgrade(2));
    
    setInterval(() => {
        if (fishPerSec > 0) {
            fish += fishPerSec;
            updateUI();
        }
    }, 1000);
});

function clickCat() {
    fish += 1;
    updateUI();
}

function buyUpgrade(type) {
    if (type === 1 && fish >= cost1) {
        fish -= cost1;
        fishPerSec += 1;
        cost1 = Math.floor(cost1 * 1.5);
    }
    else if (type === 2 && fish >= cost2) {
        fish -= cost2;
        fishPerSec += 5;
        cost2 = Math.floor(cost2 * 1.5);
    }
    updateUI();
}

function updateUI() {
    const countEl = document.getElementById("fish-count");
    if (!countEl) return; 
    
    countEl.innerText = Math.floor(fish);
    document.getElementById("fish-sec").innerText = fishPerSec + " fish per second";
    document.getElementById("cost1").innerText = cost1;
    document.getElementById("cost2").innerText = cost2;

    document.getElementById("upgrade1").className = (fish >= cost1) ? "shop-item" : "shop-item disabled";
    document.getElementById("upgrade2").className = (fish >= cost2) ? "shop-item" : "shop-item disabled";
}