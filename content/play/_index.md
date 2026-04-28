---
title: "The Arcade"
---

<style>
    .arcade-container { max-width: 1100px; margin: 0 auto; padding: 20px; font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
    .arcade-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px; margin-top: 40px; }
    
    .game-card {
        background: rgba(20, 20, 20, 0.8);
        border: 1px solid #333;
        border-radius: 12px;
        overflow: hidden;
        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        text-decoration: none !important;
        display: flex;
        flex-direction: column;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    }

    .game-card:hover {
        transform: translateY(-10px);
        border-color: var(--accent);
        box-shadow: 0 15px 40px rgba(0,0,0,0.8), 0 0 20px var(--glow);
    }

    .thumb-wrap { width: 100%; height: 180px; overflow: hidden; background: #000; border-bottom: 1px solid #222; }
    .thumb-wrap img { width: 100%; height: 100%; object-fit: cover; opacity: 0.7; transition: 0.3s; }
    .game-card:hover img { opacity: 1; transform: scale(1.05); }

    .card-meta { padding: 20px; }
    .card-meta h2 { margin: 0; font-size: 1.4rem; color: #fff; letter-spacing: 1px; text-transform: uppercase; }
    .card-meta p { color: #888; font-size: 0.9rem; margin: 8px 0 15px 0; line-height: 1.4; }
    
    .play-tag {
        display: inline-block;
        padding: 5px 15px;
        border-radius: 20px;
        font-size: 0.7rem;
        font-weight: bold;
        letter-spacing: 1px;
        background: rgba(255,255,255,0.1);
        color: #fff;
        transition: 0.3s;
    }
    .game-card:hover .play-tag { background: var(--accent); color: #000; }

    /* Theme Colors */
    .moon { --accent: #b3ff00; --glow: rgba(179, 255, 0, 0.2); }
    .breach { --accent: #ffb300; --glow: rgba(255, 179, 0, 0.2); }
    .fish { --accent: #2fb98f; --glow: rgba(47, 185, 143, 0.2); }
    .neon { --accent: #00e5ff; --glow: rgba(0, 229, 255, 0.2); }
    .def { --accent: #ff00ff; --glow: rgba(255, 0, 255, 0.2); }
</style>

<div class="arcade-container">
    <div style="text-align: center;">
        <h1 style="font-size: 3rem; color: #fff; text-shadow: 0 0 20px rgba(255,255,255,0.2);">ARCADE STATION</h1>
        <p style="color: #666; letter-spacing: 4px;">SELECT PROJECT PROTOCOL</p>
    </div>
    <div class="arcade-grid">
        <a href="/play/moonbuggy/" class="game-card moon">
            <div class="thumb-wrap"><img src="/images/comicsicon/moonbuggy.png"></div>
            <div class="card-meta">
                <h2>Moon Buggy</h2>
                <p>Lunar buggy.</p>
                <span class="play-tag">Play</span>
            </div>
        </a>
        <a href="/play/breach/" class="game-card breach">
            <div class="thumb-wrap"><img src="/images/comicsicon/breach.png"></div>
            <div class="card-meta">
                <h2>System Breach</h2>
                <p>Decrypt the security layers.</p>
                <span class="play-tag">Play</span>
            </div>
        </a>
        <a href="/play/fishclicker/" class="game-card fish">
            <div class="thumb-wrap"><img src="/images/comicsicon/feedcats.png"></div>
            <div class="card-meta">
                <h2>Fish Clicker</h2>
                <p>Feed the kitty.</p>
                <span class="play-tag">Play</span>
            </div>
        </a>
        <a href="/play/neonrush/" class="game-card neon">
            <div class="thumb-wrap"><img src="/images/comicsicon/neonrush.png"></div>
            <div class="card-meta">
                <h2>Neon Rush</h2>
                <p>Avoid the system purge.</p>
                <span class="play-tag">play</span>
            </div>
        </a>
        <a href="/play/defender/" class="game-card def">
            <div class="thumb-wrap"><img src="/images/comicsicon/defender.png"></div>
            <div class="card-meta">
                <h2>Cyber Defender</h2>
                <p>You vs Aliens</p>
                <span class="play-tag">Play</span>
            </div>
        </a>
    </div>
</div>