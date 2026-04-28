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

    .game-card:hover {
        transform: translateY(-8px);
        border-color: var(--accent);
    }

    .thumb-wrap { width: 100%; height: 180px; overflow: hidden; background: #000; border-bottom: 1px solid #222; }
    .thumb-wrap img { width: 100%; height: 100%; object-fit: cover; opacity: 0.7; transition: 0.3s; }
    .game-card:hover img { opacity: 1; }

    .card-meta { padding: 20px; }
    .card-meta h2 { margin: 0; font-size: 1.4rem; color: #fff; letter-spacing: 1px; text-transform: uppercase; }
    .card-meta p { color: #888; font-size: 0.9rem; margin: 8px 0 15px 0; line-height: 1.4; }
    
    /* THE FIX: Fixed play-tag to stop doubling */
    .play-tag {
        display: inline-block;
        padding: 8px 22px;
        border-radius: 20px;
        font-size: 0.75rem;
        font-weight: 800; /* Heavy weight prevents 'faux-bolding' glitches */
        letter-spacing: 1.5px;
        background: rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.1);
        color: #fff;
        text-transform: uppercase;
        pointer-events: none;
        
        /* Force single-layer rendering */
        transition: all 0.2s ease-in-out;
        transform: translateZ(0); 
        -webkit-font-smoothing: antialiased;
        text-shadow: none !important; 
    }

    /* Clean color swap without re-rendering the font */
    .game-card:hover .play-tag { 
        background: var(--accent) !important; 
        color: #000 !important; 
        border-color: var(--accent) !important;
        box-shadow: 0 0 15px var(--glow);
    }

    /* Theme Colors */
    .moon { --accent: #b3ff00; --glow: rgba(179, 255, 0, 0.4); }
    .breach { --accent: #ffb300; --glow: rgba(255, 179, 0, 0.4); }
    .fish { --accent: #2fb98f; --glow: rgba(47, 185, 143, 0.4); }
    .neon { --accent: #00e5ff; --glow: rgba(0, 229, 255, 0.4); }
    .def { --accent: #ff00ff; --glow: rgba(255, 0, 255, 0.4); }
</style>

<div class="arcade-container">
    <div style="text-align: center;">
        <h1 style="font-size: 3rem; color: #fff; text-shadow: 0 0 20px rgba(255,255,255,0.2); margin-bottom: 0;">ARCADE STATION</h1>
        <p style="color: #666; letter-spacing: 4px; margin-top: 10px;">SELECT PROJECT PROTOCOL</p>
    </div>hugo 
    <div class="arcade-grid">
        <a href="/play/moonbuggy/" class="game-card moon">
            <div class="thumb-wrap"><img src="/images/comicsicon/moonbuggy.png"></div>
            <div class="card-meta">
                <h2>Moon Buggy</h2>
                <p>One-button physics survival. Navigate the lunar surface.</p>
                <span class="play-tag">Launch</span>
            </div>
        </a>
        <a href="/play/breach/" class="game-card breach">
            <div class="thumb-wrap"><img src="/images/comicsicon/breach.png"></div>
            <div class="card-meta">
                <h2>System Breach</h2>
                <p>Terminal decryption protocol. Bypass the security layers.</p>
                <span class="play-tag">Decrypt</span>
            </div>
        </a>
        <a href="/play/fishclicker/" class="game-card fish">
            <div class="thumb-wrap"><img src="/images/comicsicon/feedcats.png"></div>
            <div class="card-meta">
                <h2>Fish Clicker</h2>
                <p>Automated feline nutrition. Feed the kitty, save the world.</p>
                <span class="play-tag">Feed</span>
            </div>
        </a>
        <a href="/play/neonrush/" class="game-card neon">
            <div class="thumb-wrap"><img src="/images/comicsicon/neonrush.png"></div>
            <div class="card-meta">
                <h2>Neon Rush</h2>
                <p>Avoid the system purge. High-velocity platforming sequence.</p>
                <span class="play-tag">Escape</span>
            </div>
        </a>
        <a href="/play/defender/" class="game-card def">
            <div class="thumb-wrap"><img src="/images/comicsicon/defender.png"></div>
            <div class="card-meta">
                <h2>Cyber Defender</h2>
                <p>Orbital threat elimination. Earn 5000 points for a reward.</p>
                <span class="play-tag">Defend</span>
            </div>
        </a>
    </div>
</div>