---
title: " "
---

<style>
    /* 1. LAYOUT & THEME */
    .studio-viewport {
        max-width: 1100px;
        margin: 0 auto;
        font-family: 'Segoe UI', Roboto, sans-serif;
        color: #fff;
        padding: 40px 20px;
        position: relative;
    }

    .studio-header { text-align: center; padding: 60px 0; }
    .studio-header h1 {
        font-family: 'Georgia', serif;
        font-size: 4rem;
        font-style: italic;
        background: linear-gradient(to right, #9d50bb, #2fb98f);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin: 0;
    }

    .status-badge {
        display: inline-block;
        margin-top: 20px;
        padding: 8px 20px;
        border-radius: 30px;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid #2fb98f;
        color: #2fb98f;
        font-weight: bold;
    }

    /* 2. GRID & CARDS */
    .art-catalog {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 30px;
        margin: 40px 0;
    }

    .art-card {
        background: rgba(20, 20, 25, 0.85);
        border: 1px solid rgba(255, 255, 255, 0.1);
        padding: 20px;
        transition: all 0.4s ease;
        display: flex;
        flex-direction: column;
        border-radius: 12px;
        backdrop-filter: blur(5px);
    }

    .art-card:hover {
        transform: translateY(-10px);
        border-color: #9d50bb;
        box-shadow: 0 15px 40px rgba(157, 80, 187, 0.2);
    }

    /* IMAGE PLACEHOLDERS */
    .art-preview {
        width: 100%;
        height: 220px;
        background-color: #111;
        margin-bottom: 20px;
        border-radius: 8px;
        background-size: cover;
        background-position: center;
        border: 1px solid #333;
    }

    .art-card h3 { font-family: 'Georgia', serif; font-size: 1.8rem; margin: 0; color: #2fb98f; }
    .price-circle { font-size: 1.3rem; color: #fff; margin: 10px 0; opacity: 0.9; font-weight: bold; }
    
    .list-style { margin: 15px 0; padding: 0; list-style: none; flex-grow: 1; }
    .list-style li { margin-bottom: 8px; color: #aaa; font-size: 0.9rem; display: flex; align-items: center; }
    .list-style li::before { content: "✦"; color: #9d50bb; margin-right: 10px; }

    /* 3. SPARKLE SYSTEM */
    .sparkle {
        position: fixed;
        background: white;
        pointer-events: none;
        animation: sparkle-fade 1.2s linear forwards;
        clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    }

    .bg-sparkle { z-index: -1; opacity: 0.4; }
    .fg-sparkle { z-index: 9999; }

    @keyframes sparkle-fade {
        0% { transform: scale(0) rotate(0deg); opacity: 0; }
        20% { opacity: 1; }
        100% { transform: scale(1.2) rotate(180deg) translateY(40px); opacity: 0; }
    }

    .studio-guide {
        background: rgba(255, 255, 255, 0.03);
        padding: 40px;
        border-radius: 15px;
        margin-top: 60px;
        border: 1px solid rgba(255, 255, 255, 0.05);
    }
    .guide-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 30px; }
    .guide-item h4 { color: #9d50bb; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px;}
    .guide-item p { font-size: 0.85rem; color: #888; line-height: 1.6; }
</style>

<div class="studio-viewport">
    <header class="studio-header">
        <h1>Commissions</h1>
        <div class="status-badge">CURRENTLY CLOSED</div>
    </header>
  <div style="max-width: 600px; margin: 40px auto; text-align: center; padding: 20px;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 10px; font-family: 'Georgia', serif; font-style: italic; font-size: 1.1rem; color: #aaa;">
            <span>Completed Commissions: <strong style="color: #2fb98f;">43</strong></span>
            <span>Goal: <strong style="color: #9d50bb;">100</strong></span>
        </div>
        <div style="
            width: 100%; 
            height: 12px; 
            background: rgba(255, 255, 255, 0.05); 
            border-radius: 50px; 
            border: 1px solid rgba(255, 255, 255, 0.1);
            position: relative;
            overflow: hidden;
            box-shadow: inset 0 0 10px rgba(0,0,0,0.5);
        ">
            <div style="
                width: 43%; 
                height: 100%; 
                background: linear-gradient(to right, #9d50bb, #2fb98f); 
                box-shadow: 0 0 15px rgba(47, 185, 143, 0.5);
                border-radius: 50px;
                position: relative;
            ">
                <div style="
                    position: absolute;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
                    animation: bar-shimmer 2s infinite;
                "></div>
            </div>
        </div>
        <p style="margin-top: 15px; font-size: 0.85rem; color: #666; letter-spacing: 1px; text-transform: uppercase;">
            Helping <span style="color: #fff;">43</span> characters come to life. On the road to the 100 mark!
        </p>
    </div>
    <style>
        @keyframes bar-shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
    </style>
   
</div>
    <div class="art-catalog">
        <div class="art-card">
            <div class="art-preview" style="background-image: url('/images/gallery/commissions/5.jpg');"></div>
            <h3>Headshot</h3>
            <div class="price-circle">$30</div>
            <ul class="list-style">
                <li>Detailed character focus</li>
                <li>Expression-heavy work</li>
                <li>Perfect for icons/avatars/wallpapers</li>
                <li>$10+ per character</li>
            </ul>
        </div>
        <div class="art-card">
            <div class="art-preview" style="background-image: url('/images/gallery/commissions/9.jpg');"></div>
            <h3>Waist & Bust</h3>
            <div class="price-circle">$50</div>
            <ul class="list-style">
                <li>Waist-up framing</li>
                <li>Posed character study</li>
                <li>Full shading & FX</li>
                <li>$20+ per character</li>
            </ul>
        </div>
        <div class="art-card">
            <div class="art-preview" style="background-image: url('/images/gallery/commissions/8.jpg');"></div>
            <h3>Full Body</h3>
            <div class="price-circle">$70+</div>
            <ul class="list-style">
                <li>Complete character design</li>
                <li>Dynamic action posing</li>
                <li>High-resolution render</li>
                <li>$30+ per character</li>
            </ul>
        </div>
        <div class="art-card" style="border-color: rgba(157, 80, 187, 0.4);">
            <div class="art-preview" style="background-image: url('/images/gallery/commissions/4.jpg');"></div>
            <h3>Illustration</h3>
            <div class="price-circle">$100+</div>
            <ul class="list-style">
                <li>Full background environment</li>
                <li>Cinematic lighting & story</li>
                <li>Complex effects</li>
                <li>$30+ per character.</li>
            </ul>
        </div>
</div>
    <div class="studio-guide">
        <div class="guide-grid">
            <div class="guide-item">
                <h4>The Process</h4>
                <p>Sketch phase -> Lineart -> Final Polish. Feedback is welcome at every major milestone.</p>
            </div>
            <div class="guide-item">
                <h4>Payment</h4>
                <p>Secure via Ko-fi. Full payment or 50% deposit required to secure your slot.</p>
            </div>
            <div class="guide-item">
                <h4>Timeline</h4>
                <p>Standard 2-4 weeks. I provide regular updates at end of the day (9PM MST.)</p>
            </div>
        </div>
    </div>
    <div style="margin-top: 100px; padding: 40px; background: rgba(255, 255, 255, 0.02); border-radius: 20px; border: 1px solid rgba(255, 255, 255, 0.05);">
        <h2 style="font-family: 'Georgia', serif; font-size: 2.2rem; font-style: italic; text-align: center; color: #2fb98f; margin-bottom: 40px;">
            Every step is documented.
        </h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; align-items: start;">
            <div style="text-align: center;">
                <div style="
                    width: 100%; 
                    height: 250px; 
                    background-image: url('/images/gallery/commissions/3.jpg'); 
                    background-size: cover; 
                    background-position: center; 
                    border-radius: 10px; 
                    border: 1px solid rgba(157, 80, 187, 0.3);
                    box-shadow: 0 0 20px rgba(157, 80, 187, 0.1);
                "></div>
                <h4 style="margin-top: 20px; color: #9d50bb; letter-spacing: 2px; text-transform: uppercase; font-size: 0.9rem;">
                    Stage 01: The Blueprint
                </h4>
                <p style="font-size: 0.85rem; color: #888; line-height: 1.5; padding: 0 20px;">
                    From rough thumbnails to structural lineart. I share these early drafts to ensure the composition hits the mark, updating you and documenting along the way.
                </p>
            </div>
            <div style="text-align: center;">
                <div style="
                    width: 100%; 
                    height: 250px; 
                    background-image: url('/images/gallery/commissions/4.jpg'); 
                    background-size: cover; 
                    background-position: center; 
                    border-radius: 10px; 
                    border: 1px solid rgba(47, 185, 143, 0.4);
                    box-shadow: 0 0 30px rgba(47, 185, 143, 0.2);
                "></div>
                <h4 style="margin-top: 20px; color: #2fb98f; letter-spacing: 2px; text-transform: uppercase; font-size: 0.9rem;">
                    Stage 02: Final Polish
                </h4>
                <p style="font-size: 0.85rem; color: #888; line-height: 1.5; padding: 0 20px;">
                    The completed vision. Particle effects, cinematic lighting, and final color grading applied for a professional finish of your vision.
                </p>
            </div>
        </div>
    </div>
    <div style="margin-top: 80px; padding: 40px; border-radius: 20px; background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 255, 255, 0.05);">
        <h2 style="font-family: 'Georgia', serif; font-size: 2.2rem; font-style: italic; text-align: center; color: #fff; margin-bottom: 40px;">
            Some Boundaries
        </h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px;">
            <div style="background: rgba(47, 185, 143, 0.05); padding: 30px; border-radius: 15px; border: 1px solid rgba(47, 185, 143, 0.2);">
                <h3 style="color: #2fb98f; text-transform: uppercase; letter-spacing: 2px; margin-top: 0;">✔ I Will Draw</h3>
                <ul style="list-style: none; padding: 0; line-height: 2;">
                    <li style="color: #eee;">✦ Original Characters (OCs)</li>
                    <li style="color: #eee;">✦ Fanart (Games/Anime)</li>
                    <li style="color: #eee;">✦ Humanoids & Anthro</li>
                    <li style="color: #eee;">✦ Detailed Environments</li>
                    <li style="color: #eee;">✦ Mild NSFW / Mild Gore / Horror</li>
                    <li style="color: #eee;">**(Must prove you're not underage for any mild NSFW/Gore/Horror)</li>
                </ul>
            </div>
            <div style="background: rgba(157, 80, 187, 0.05); padding: 30px; border-radius: 15px; border: 1px solid rgba(157, 80, 187, 0.2);">
                <h3 style="color: #9d50bb; text-transform: uppercase; letter-spacing: 2px; margin-top: 0;">✘ I Will Not Draw</h3>
                <ul style="list-style: none; padding: 0; line-height: 2;">
                    <li style="color: #bbb;">✦ Full NSFW / Explicit Content</li>
                    <li style="color: #bbb;">✦ Mecha / Complex Machinery</li>
                    <li style="color: #bbb;">✦ Realistic Portraits (Photos)</li>
                    <li style="color: #bbb;">✦ AI-Generated Concepts</li>
                </ul>
            </div>
        </div>
        <p style="text-align: center; margin-top: 30px; font-size: 0.85rem; color: #666; font-style: italic;">
            *If you're unsure if your request fits my style, feel free to ask!
        </p>
    </div>
    <div style="margin-top: 100px; padding: 40px; border-radius: 20px; background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); text-align: center;">
        <h2 style="font-family: 'Georgia', serif; font-size: 2.2rem; font-style: italic; color: #2fb98f; margin-bottom: 40px;">Tools of the Trade</h2>
        <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 40px;">
            <div style="flex: 1; min-width: 200px;">
                <h4 style="color: #9d50bb; text-transform: uppercase; letter-spacing: 2px;">Software</h4>
                <p style="color: #eee; font-size: 0.95rem;">Clip Studio Paint + PureRef<br><span style="color: #666; font-size: 0.8rem;">Primary Illustration & Reference</span></p>
            </div>
            <div style="flex: 1; min-width: 200px;">
                <h4 style="color: #9d50bb; text-transform: uppercase; letter-spacing: 2px;">Hardware</h4>
                <p style="color: #eee; font-size: 0.95rem;">iPad Pro + Apple Pencil<br><span style="color: #666; font-size: 0.8rem;">Main Drawing Surface</span></p>
            </div>
            <div style="flex: 1; min-width: 200px;">
                <h4 style="color: #9d50bb; text-transform: uppercase; letter-spacing: 2px;">The Vibe</h4>
                <p style="color: #eee; font-size: 0.95rem;">A giant spotify playlist<br><span style="color: #666; font-size: 0.8rem;">& Excessive amounts of Coffee</span></p>
            </div>
        </div>
    </div>
    <div style="margin-top: 80px; padding: 40px;">
        <h2 style="font-family: 'Georgia', serif; font-size: 2.2rem; font-style: italic; text-align: center; color: #fff; margin-bottom: 40px;">Frequently Asked Questions</h2>
        <div style="max-width: 800px; margin: 0 auto; text-align: left;">  
            <details style="margin-bottom: 20px; background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 10px; cursor: pointer; transition: 0.3s;">
                <summary style="padding: 20px; font-weight: bold; color: #2fb98f; outline: none; list-style: none;">
                    ✦ Can I use this for my Twitch stream?
                </summary>
                <div style="padding: 0 20px 20px 20px; color: #bbb; font-size: 0.9rem; line-height: 1.6;">
                    Yes! You can use your commission for stream overlays, profile pictures, and social media promotion. If you intend to sell the artwork on merchandise (shirts, prints, etc.), please let me know so we can discuss commercial licensing.
                </div>
            </details>
            <details style="margin-bottom: 20px; background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 10px; cursor: pointer; transition: 0.3s;">
                <summary style="padding: 20px; font-weight: bold; color: #2fb98f; outline: none; list-style: none;">
                    ✦ Do you offer discounts for bulk orders?
                </summary>
                <div style="padding: 0 20px 20px 20px; color: #bbb; font-size: 0.9rem; line-height: 1.6;">
                    Absolutely. If you are ordering a full set of character expressions, a multi-page comic, or a group shot with 3+ characters, we can work out a custom package rate that is more affordable than individual tier pricing.
                </div>
            </details>
            <details style="margin-bottom: 20px; background: rgba(0,0,0,0.3); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 10px; cursor: pointer; transition: 0.3s;">
                <summary style="padding: 20px; font-weight: bold; color: #2fb98f; outline: none; list-style: none;">
                    ✦ What file formats will I receive?
                </summary>
                <div style="padding: 0 20px 20px 20px; color: #bbb; font-size: 0.9rem; line-height: 1.6;">
                    Standard delivery includes a high-resolution PNG (with and without background) and a flattened JPEG. If you require a layered PSD or Clip Studio source file for specific project needs, please mention this during the starting phase.
                </div>
            </details>
        </div>
    </div>
    <div style="margin-top: 100px; padding: 80px 20px; text-align: center; background: radial-gradient(circle, rgba(157, 80, 187, 0.1) 0%, transparent 70%);">
    <h2 style="font-family: 'Georgia', serif; font-size: 3rem; font-style: italic; color: #fff; margin-bottom: 20px; filter: drop-shadow(0 0 10px rgba(47, 185, 143, 0.3));">
        Ready to Commission me?
    </h2>
    <p style="color: #aaa; font-size: 1.1rem; margin-bottom: 40px; letter-spacing: 1px;">
        Send me a DM to get started or ask a question below!
    </p>
    <a href="https://x.com/galileo_cat" target="_blank" class="contact-btn" style="
        display: inline-block;
        padding: 20px 50px;
        background: #000;
        border: 2px solid #2fb98f;
        border-radius: 50px;
        color: #2fb98f;
        text-decoration: none;
        font-weight: bold;
        font-size: 1.2rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        transition: all 0.4s ease;
        box-shadow: 0 0 20px rgba(47, 185, 143, 0.2);
    ">
        Contact me on Twitter
    </a>
    <p style="margin-top: 30px; font-size: 0.8rem; color: #444; text-transform: uppercase; letter-spacing: 3px;">
        ✦ Inquiries via DM only ✦
    </p>
    <style>
        .contact-btn:hover {
            background: #2fb98f;
            color: #000;
            box-shadow: 0 0 40px rgba(47, 185, 143, 0.6);
            transform: translateY(-5px) scale(1.05);
        }
        /* Subtle pulse to make the button "fidgety" */
        @keyframes btn-pulse {
            0% { box-shadow: 0 0 20px rgba(47, 185, 143, 0.2); }
            50% { box-shadow: 0 0 40px rgba(157, 80, 187, 0.4); }
            100% { box-shadow: 0 0 20px rgba(47, 185, 143, 0.2); }
        }
        .contact-btn {
            animation: btn-pulse 3s infinite ease-in-out;
        }
    </style>
</div>
    

</div>

<style>
    /* 1. THE CUTE CANVAS */
    html, body {
        background: #000 !important;
        /* Deep midnight purple glow for better contrast */
        background-image: radial-gradient(circle at 50% 50%, #1a0b2e 0%, #000 100%) !important;
        margin: 0;
        min-height: 100%;
    }

    /* 2. THE SPARKLES */
    .sparkle {
        position: absolute;
        background: white;
        pointer-events: none;
        /* Adding a pulse/shimmer to make them "cute" */
        animation: sparkle-fade 1.5s ease-out forwards, shimmer 0.5s infinite alternate;
        clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    }

    .bg-sparkle { 
        z-index: 0 !important; 
        opacity: 0.7;
        filter: blur(0.3px); 
    }

    .fg-sparkle { 
        z-index: 9999 !important; 
        position: fixed !important; 
    }

    /* Cute "Wobble" and Fade */
    @keyframes sparkle-fade {
        0% { transform: scale(0) rotate(0deg) translateX(0); opacity: 0; }
        20% { opacity: 1; }
        100% { transform: scale(1.4) rotate(240deg) translateY(60px) translateX(20px); opacity: 0; }
    }

    /* Shimmer Effect */
    @keyframes shimmer {
        from { filter: brightness(1) drop-shadow(0 0 2px #fff); }
        to { filter: brightness(1.5) drop-shadow(0 0 8px #fff); }
    }

    .studio-viewport {
        position: relative;
        z-index: 10; /* Keep content above the background stars */
        background: transparent !important;
    }
    
</style>

<script>
    function createSparkle(x, y, isBackground) {
        const sparkle = document.createElement('div');
        sparkle.className = isBackground ? 'sparkle bg-sparkle' : 'sparkle fg-sparkle';
        
        // Cute Palette: Added a soft "Candy Pink" and "Icy Blue"
        const colors = ['#9d50bb', '#2fb98f', '#ffffff', '#e1bee7', '#ffd700', '#ff80ab', '#80deea'];
        sparkle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        
        // Size variation for a "Hand-drawn" look
        const size = Math.random() * (isBackground ? 12 : 10) + 6 + 'px';
        sparkle.style.width = size;
        sparkle.style.height = size;

        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 1500);
    }

    // High-Frequency Mouse Trail
    document.addEventListener('mousemove', function(e) {
        // Spawns almost every time the mouse moves
        if (Math.random() > 0.05) return; 
        createSparkle(e.clientX, e.clientY, false);
    });

    // Intense Background Ambient Sparkle
    function spawnAmbient() {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * document.documentElement.scrollHeight;
        
        createSparkle(x, y, true);
        
        // HIGH FREQUENCY: Spawns a new star every 30ms to 100ms
        setTimeout(spawnAmbient, Math.random() * 70 + 30);
    }

    // Start the glitter blizzard
    spawnAmbient();
</script>
</div>