---
title: "The Arcade"
---

<style>
    .arcade-container { max-width: 1100px; margin: 0 auto; padding: 20px; font-family: 'Segoe UI', sans-serif; }
    .arcade-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px; margin-top: 40px; }
    
    .game-card {
        background: rgba(20, 20, 20, 0.8);
        border: 1px solid #333;
        border-radius: 12px;
        overflow: hidden;
        transition: transform 0.3s ease, border-color 0.3s ease;
        text-decoration: none !important;
        display: flex;
        flex-direction: column;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    }

    .game-card:hover { transform: translateY(-8px); border-color: var(--accent); }

    .thumb-wrap { width: 100%; height: 180px; overflow: hidden; background: #000; border-bottom: 1px solid #222; }
    .thumb-wrap img { width: 100%; height: 100%; object-fit: cover; opacity: 0.7; transition: 0.3s; }
    .game-card:hover img { opacity: 1; }

    .card-meta { padding: 20px; }
    .card-meta h2 { margin: 10px 0 0 0; font-size: 1.4rem; color: #fff; letter-spacing: 1px; text-transform: uppercase; }
    .card-meta p { color: #888; font-size: 0.9rem; margin: 8px 0 15px 0; line-height: 1.4; }
    
    /* Mobile Status Badges */
    .mobile-status {
        display: inline-block;
        font-size: 0.65rem;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 1px;
        padding: 2px 10px;
        border-radius: 4px;
        font-family: monospace;
    }
    .status-ok { background: rgba(179, 255, 0, 0.1); color: #b3ff00; border: 1px solid #b3ff00; }
    .status-no { background: rgba(255, 45, 85, 0.1); color: #ff2d55; border: 1px solid #ff2d55; }

    .play-tag {
        display: inline-block;
        padding: 8px 22px;
        border-radius: 20px;
        font-size: 0.75rem;
        font-weight: 800;
        letter-spacing: 1.5px;
        background: rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.1);
        color: #fff;
        text-transform: uppercase;
    }

    .game-card:hover .play-tag { 
        background: var(--accent); 
        color: #000; 
        box-shadow: 0 0 15px var(--glow);
    }

    .moon { --accent: #b3ff00; --glow: rgba(179, 255, 0, 0.4); }
    .breach { --accent: #ffb300; --glow: rgba(255, 179, 0, 0.4); }
    .fish { --accent: #2fb98f; --glow: rgba(47, 185, 143, 0.4); }
    .neon { --accent: #00e5ff; --glow: rgba(0, 229, 255, 0.4); }
    .def { --accent: #ff00ff; --glow: rgba(255, 0, 255, 0.4); }
</style>

<div class="arcade-container">
    <div style="text-align: center;">
        <h1 style="font-size: 3rem; color: #fff; text-shadow: 0 0 20px rgba(255,255,255,0.2); margin-bottom: 0;">ARCADE STATION</h1>
        <p style="color: #666; letter-spacing: 4px; margin-top: 10px;">SELECT GAME TO PLAY</p>
        <p style="color: #444; font-family: monospace; font-size: 0.8rem; letter-spacing: 1px; margin-top: 5px;">Mobile support coming soon for most of the games.</p>
    </div>
    <div class="arcade-grid">
        <a href="/play/moonbuggy/" class="game-card moon">
            <div class="thumb-wrap"><img src="/images/comicsicon/moonbuggy.png"></div>
            <div class="card-meta">
                <span class="mobile-status status-ok">Mobile Friendly</span>
                <h2>Moon Buggy</h2>
                <p>One-button survival. Navigate the lunar surface.</p>
                <span class="play-tag">Launch</span>
            </div>
        </a>
        <a href="/play/breach/" class="game-card breach">
            <div class="thumb-wrap"><img src="/images/comicsicon/breach.png"></div>
            <div class="card-meta">
                <span class="mobile-status status-no">Not Mobile Friendly</span>
                <h2>System Breach</h2>
                <p>Bypass the security layers.</p>
                <span class="play-tag">Decrypt</span>
            </div>
        </a>
        <a href="/play/fishclicker/" class="game-card fish">
            <div class="thumb-wrap"><img src="/images/comicsicon/feedcats.png"></div>
            <div class="card-meta">
                <span class="mobile-status status-no">Not Mobile Friendly</span>
                <h2>Fish Clicker</h2>
                <p>Feed the kitty, save the world.</p>
                <span class="play-tag">Feed</span>
            </div>
        </a>
        <a href="/play/neonrush/" class="game-card neon">
            <div class="thumb-wrap"><img src="/images/comicsicon/neonrush.png"></div>
            <div class="card-meta">
                <span class="mobile-status status-no">Not Mobile Friendly</span>
                <h2>Neon Rush</h2>
                <p>Avoid the system purge.</p>
                <span class="play-tag">Escape</span>
            </div>
        </a>
        <a href="/play/neongrid/" class="game-card neon">
            <div class="thumb-wrap"><img src="/images/comicsicon/neongrid.png"></div>
            <div class="card-meta">
                <span class="mobile-status status-no">Not Mobile Friendly</span>
                <h2>Neon Grid</h2>
                <p>Standardize the data blocks.</p>
                <span class="play-tag">Initialize</span>
            </div>
        </a>
        <a href="/play/defender/" class="game-card def">
            <div class="thumb-wrap"><img src="/images/comicsicon/defender.png"></div>
            <div class="card-meta">
                <span class="mobile-status status-no">Not Mobile Friendly</span>
                <h2>Cyber Defender</h2>
                <p>You vs Aliens.</p>
                <span class="play-tag">Defend</span>
            </div>
        </a>
    </div>
</div>