---
title: " "
enable_chat: true
---

<style>
   
    html, body {
        background-color: #0b0510 !important; 
        background-image: 
            radial-gradient(circle at 15% 50%, rgba(157, 80, 187, 0.15), transparent 50%),
            radial-gradient(circle at 85% 30%, rgba(47, 185, 143, 0.15), transparent 50%) !important;
        background-attachment: fixed;
        margin: 0;
        min-height: 100%;
        font-family: 'Segoe UI', Roboto, sans-serif;
        color: #fff;
        overflow-x: hidden;
    }

    .studio-viewport {
        max-width: 1100px;
        margin: 0 auto;
        padding: 40px 20px;
        position: relative;
        z-index: 10;
    }

  
    #art-rain-canvas {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 0;
        pointer-events: none;
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
        padding: 8px 25px;
        border-radius: 30px;
        background: rgba(47, 185, 143, 0.1);
        border: 1px solid #2fb98f;
        color: #2fb98f;
        font-weight: bold;
        letter-spacing: 1px;
    }

    h2.section-title {
        font-family: 'Georgia', serif;
        font-size: 2.2rem;
        text-align: center;
        color: #fff;
        margin-bottom: 40px;
    }

  
    .art-catalog {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 30px;
        margin: 40px 0;
    }

    .art-card {
        background: rgba(20, 20, 25, 0.85);
        border: 1px solid rgba(255, 255, 255, 0.1);
        padding: 20px;
        transition: all 0.3s ease;
        display: flex;
        flex-direction: column;
        border-radius: 12px;
        backdrop-filter: blur(10px);
    }

    .art-card:hover {
        transform: translateY(-8px);
        border-color: #9d50bb;
        box-shadow: 0 15px 30px rgba(157, 80, 187, 0.15);
    }

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

    .art-card h3 { 
        font-family: 'Georgia', serif; 
        font-size: 1.6rem; 
        margin: 0; 
        color: #2fb98f; 
    }
    
    .price-circle { font-size: 1.3rem; color: #fff; margin: 10px 0; opacity: 0.9; font-weight: bold; }
    
    .list-style { margin: 15px 0; padding: 0; list-style: none; flex-grow: 1; }
    .list-style li { margin-bottom: 8px; color: #aaa; font-size: 0.95rem; display: flex; align-items: flex-start; }
    .list-style li::before { content: "✦"; color: #9d50bb; margin-right: 10px; margin-top: 2px;}

   
    .content-box {
        margin-top: 80px;
        padding: 40px;
        background: rgba(255, 255, 255, 0.02);
        border-radius: 20px;
        border: 1px solid rgba(255, 255, 255, 0.05);
    }

    .guide-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 30px; }
    .guide-item h4 { color: #9d50bb; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px;}
    .guide-item p { font-size: 0.9rem; color: #bbb; line-height: 1.6; margin: 0; }

   
    .contact-btn {
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
        transition: all 0.3s ease;
        box-shadow: 0 0 20px rgba(47, 185, 143, 0.2);
    }

    .contact-btn:hover {
        background: #2fb98f;
        color: #000;
        box-shadow: 0 0 30px rgba(47, 185, 143, 0.5);
        transform: translateY(-3px);
    }

    @keyframes bar-shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
    }
</style>

<canvas id="art-rain-canvas"></canvas>

<div class="studio-viewport">
    <header class="studio-header">
        <h1>Commissions</h1>
        <div class="status-badge">🟢 COMMISSIONS OPEN</div>
    </header>
    <div style="max-width: 600px; margin: 0 auto 60px auto; text-align: center; padding: 20px;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 10px; font-family: 'Georgia', serif; font-size: 1.1rem; color: #aaa;">
            <span>Completed: <strong style="color: #2fb98f;">43</strong></span>
            <span>Goal: <strong style="color: #9d50bb;">100</strong></span>
        </div>
        <div style="width: 100%; height: 12px; background: rgba(255, 255, 255, 0.05); border-radius: 50px; border: 1px solid rgba(255, 255, 255, 0.1); position: relative; overflow: hidden; box-shadow: inset 0 0 10px rgba(0,0,0,0.5);">
            <div style="width: 43%; height: 100%; background: linear-gradient(to right, #9d50bb, #2fb98f); box-shadow: 0 0 15px rgba(47, 185, 143, 0.5); border-radius: 50px; position: relative;">
                <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent); animation: bar-shimmer 2s infinite;"></div>
            </div>
        </div>
        <p style="margin-top: 15px; font-size: 0.85rem; color: #888; letter-spacing: 1px; text-transform: uppercase;">
            Helping <span style="color: #fff;">43</span> characters come to life!
        </p>
    </div>
    <div class="art-catalog">
        <div class="art-card" style="border-color: #2fb98f; box-shadow: 0 0 15px rgba(47, 185, 143, 0.1);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h3 style="margin: 0;">Chibi</h3>
                <span style="font-size: 0.75rem; font-weight: bold; color: #2fb98f; background: rgba(47, 185, 143, 0.15); padding: 3px 10px; border-radius: 20px; border: 1px solid #2fb98f; letter-spacing: 1px;">AVAILABLE</span>
            </div>
            <div class="art-preview" style="background-image: url('/images/gallery/art6.jpg');"></div>   
            <div class="price-circle">$25</div>
            <ul class="list-style">
                <li>Chibi style</li>
                <li>Focus on cuteness.</li>
                <li>Perfect for icons & avatars</li>
                <li>+$10 per extra character</li>
            </ul>
        </div>
        <div class="art-card" style="opacity: 0.6; filter: grayscale(20%); position: relative;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h3 style="margin: 0; color: #aaa;">Headshot</h3>
                <span style="font-size: 0.75rem; font-weight: bold; color: #ff5555; background: rgba(255, 85, 85, 0.1); padding: 3px 10px; border-radius: 20px; border: 1px solid #ff5555; letter-spacing: 1px;">CLOSED</span>
            </div>
            <div class="art-preview" style="background-image: url('/images/gallery/commissions/5.jpg');"></div>
            <div class="price-circle" style="color: #aaa;">$30</div>
            <ul class="list-style">
                <li>Detailed character focus</li>
                <li>Expression-heavy work</li>
                <li>Perfect for icons & avatars</li>
                <li>+$10 per extra character</li>
            </ul>
        </div>
        <div class="art-card" style="opacity: 0.6; filter: grayscale(20%); position: relative;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h3 style="margin: 0; color: #aaa;">Waist & Bust</h3>
                <span style="font-size: 0.75rem; font-weight: bold; color: #ff5555; background: rgba(255, 85, 85, 0.1); padding: 3px 10px; border-radius: 20px; border: 1px solid #ff5555; letter-spacing: 1px;">CLOSED</span>
            </div>
            <div class="art-preview" style="background-image: url('/images/gallery/commissions/9.jpg');"></div>
            <div class="price-circle" style="color: #aaa;">$50</div>
            <ul class="list-style">
                <li>Waist-up framing</li>
                <li>Posed character study</li>
                <li>Full shading & basic FX</li>
                <li>+$20 per extra character</li>
            </ul>
        </div>
        <div class="art-card" style="opacity: 0.6; filter: grayscale(20%); position: relative;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h3 style="margin: 0; color: #aaa;">Full Body</h3>
                <span style="font-size: 0.75rem; font-weight: bold; color: #ff5555; background: rgba(255, 85, 85, 0.1); padding: 3px 10px; border-radius: 20px; border: 1px solid #ff5555; letter-spacing: 1px;">CLOSED</span>
            </div>
            <div class="art-preview" style="background-image: url('/images/gallery/commissions/8.jpg');"></div>
            <div class="price-circle" style="color: #aaa;">$70+</div>
            <ul class="list-style">
                <li>Complete character design</li>
                <li>Dynamic action posing</li>
                <li>High-resolution render</li>
                <li>+$30 per extra character</li>
            </ul>
        </div>
        <div class="art-card" style="opacity: 0.6; filter: grayscale(20%); position: relative;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h3 style="margin: 0; color: #aaa;">Illustration</h3>
                <span style="font-size: 0.75rem; font-weight: bold; color: #ff5555; background: rgba(255, 85, 85, 0.1); padding: 3px 10px; border-radius: 20px; border: 1px solid #ff5555; letter-spacing: 1px;">CLOSED</span>
            </div>
            <div class="art-preview" style="background-image: url('/images/gallery/commissions/4.jpg');"></div>
            <div class="price-circle" style="color: #aaa;">$100+</div>
            <ul class="list-style">
                <li>Full background environment</li>
                <li>Cinematic lighting & story</li>
                <li>Complex magic/particle effects</li>
                <li>+$30 per extra character</li>
            </ul>
        </div>
    </div>
    <div class="content-box">
        <div class="guide-grid">
            <div class="guide-item">
                <h4>The Process</h4>
                <p>Sketch phase &rarr; Lineart &rarr; Final Polish. Feedback is welcome at every major milestone.</p>
            </div>
            <div class="guide-item">
                <h4>Payment</h4>
                <p>Securely handled via invoice. Full payment or 50% deposit required to secure your slot.</p>
            </div>
            <div class="guide-item">
                <h4>Timeline</h4>
                <p>Standard turnaround is 1-2 weeks. I provide regular progress updates at the end of the day.</p>
            </div>
        </div>
    </div>
    <div class="content-box">
        <h2 class="section-title" style="color: #2fb98f;">Every step is documented.</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; align-items: start;">
            <div style="text-align: center;">
                <div style="width: 100%; height: 250px; background-image: url('/images/gallery/commissions/3.jpg'); background-size: cover; background-position: center; border-radius: 10px; border: 1px solid rgba(157, 80, 187, 0.3); box-shadow: 0 0 20px rgba(157, 80, 187, 0.1);"></div>
                <h4 style="margin-top: 20px; color: #9d50bb; letter-spacing: 2px; text-transform: uppercase; font-size: 0.9rem;">Stage 01: The Blueprint</h4>
                <p style="font-size: 0.9rem; color: #bbb; line-height: 1.6; padding: 0 10px;">From rough thumbnails to structural lineart. I share these early drafts to ensure the composition hits the mark before moving forward.</p>
            </div>
            <div style="text-align: center;">
                <div style="width: 100%; height: 250px; background-image: url('/images/gallery/commissions/4.jpg'); background-size: cover; background-position: center; border-radius: 10px; border: 1px solid rgba(47, 185, 143, 0.4); box-shadow: 0 0 30px rgba(47, 185, 143, 0.2);"></div>
                <h4 style="margin-top: 20px; color: #2fb98f; letter-spacing: 2px; text-transform: uppercase; font-size: 0.9rem;">Stage 02: Final Polish</h4>
                <p style="font-size: 0.9rem; color: #bbb; line-height: 1.6; padding: 0 10px;">The completed vision. Particle effects, cinematic lighting, and final color grading are applied for a professional finish.</p>
            </div>
        </div>
    </div>
    <div class="content-box" style="background: rgba(157, 80, 187, 0.05); border-color: rgba(157, 80, 187, 0.2);">
        <h2 class="section-title" style="color: #9d50bb; margin-bottom: 30px;">Client Experiences</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px;">
            <div style="background: rgba(0,0,0,0.4); padding: 25px; border-radius: 12px; border-left: 4px solid #2fb98f;">
                <p style="color: #ddd; font-style: italic; font-size: 0.95rem; line-height: 1.6; margin-top: 0;">"AAAAAAAAAAAAAAAAAAAAAAA YOURE SUCH A STAR HOLY GMHDMGSLHDKHDKHDMHXYSGKS"</p>
                <span style="color: #2fb98f; font-weight: bold; font-size: 0.85rem; text-transform: uppercase;">— @BlossBuck</span>
            </div>
            <div style="background: rgba(0,0,0,0.4); padding: 25px; border-radius: 12px; border-left: 4px solid #9d50bb;">
                <p style="color: #ddd; font-style: italic; font-size: 0.95rem; line-height: 1.6; margin-top: 0;">"OMG se ve increíbleeeee!!! Muchas gracias 🥺❤️❤️❤️❤️ me encanta !!!!"</p>
                <span style="color: #9d50bb; font-weight: bold; font-size: 0.85rem; text-transform: uppercase;">— @Mary_Fox09</span>
            </div>
            <div style="background: rgba(0,0,0,0.4); padding: 25px; border-radius: 12px; border-left: 4px solid #bb5050;">
                <p style="color: #ddd; font-style: italic; font-size: 0.95rem; line-height: 1.6; margin-top: 0;">"Aaaahhhhhh!!!! It’s so cute!!!! 💛💛💛 You absolitely nailed it!"</p>
                <span style="color: #bb5050; font-weight: bold; font-size: 0.85rem; text-transform: uppercase;">— @Hachi_Shibaru</span>
            </div>
        </div>
        <p style="text-align: center; margin-top: 30px; margin-bottom: 0; font-size: 0.8rem; color: #666; font-style: italic; line-height: 1.4;">
            *Public reactions, reviews, and completed commission artwork may be featured here or in my gallery as promotional material. If you prefer to have your review modified, anonymized, or completely removed, just let me know and I will gladly update it to your liking!
        </p>
    </div>
    <div class="content-box" style="background: rgba(0,0,0,0.3);">
        <h2 class="section-title">Some Boundaries</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px;">
            <div style="background: rgba(47, 185, 143, 0.05); padding: 30px; border-radius: 15px; border: 1px solid rgba(47, 185, 143, 0.2);">
                <h3 style="color: #2fb98f; text-transform: uppercase; letter-spacing: 2px; margin-top: 0;">✔ I Will Draw</h3>
                <ul class="list-style" style="line-height: 2;">
                    <li>Original Characters (OCs)</li>
                    <li>Fanart (Games/Anime)</li>
                    <li>Humanoids & Anthro</li>
                    <li>Detailed Environments</li>
                    <li>Mild NSFW / Gore / Horror*</li>
                </ul>
                <p style="font-size: 0.8rem; color: #888; margin-top: 15px;">*(Must prove you're 18+ for mature themes)</p>
            </div>
            <div style="background: rgba(157, 80, 187, 0.05); padding: 30px; border-radius: 15px; border: 1px solid rgba(157, 80, 187, 0.2);">
                <h3 style="color: #9d50bb; text-transform: uppercase; letter-spacing: 2px; margin-top: 0;">✘ I Will Not Draw</h3>
                <ul class="list-style" style="line-height: 2;">
                    <li style="color: #bbb;">Full NSFW / Explicit Content</li>
                    <li style="color: #bbb;">Mecha / Complex Machinery</li>
                    <li style="color: #bbb;">Realistic Portraits (Photos)</li>
                    <li style="color: #bbb;">AI-Generated Concepts</li>
                </ul>
            </div>
        </div>
        <p style="text-align: center; margin-top: 30px; font-size: 0.9rem; color: #888; font-style: italic;">
            *If you're unsure if your request fits my style, feel free to ask!
        </p>
    </div>
    <div class="content-box" style="text-align: center;">
        <h2 class="section-title" style="color: #2fb98f;">Tools of the Trade</h2>
        <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 40px;">
            <div style="flex: 1; min-width: 200px;">
                <h4 style="color: #9d50bb; text-transform: uppercase; letter-spacing: 2px;">Software</h4>
                <p style="color: #eee; font-size: 0.95rem;">Clip Studio Paint + PureRef<br><span style="color: #888; font-size: 0.85rem;">Primary Illustration</span></p>
            </div>
            <div style="flex: 1; min-width: 200px;">
                <h4 style="color: #9d50bb; text-transform: uppercase; letter-spacing: 2px;">Hardware</h4>
                <p style="color: #eee; font-size: 0.95rem;">iPad Pro + Apple Pencil<br><span style="color: #888; font-size: 0.85rem;">Main Drawing Surface</span></p>
            </div>
            <div style="flex: 1; min-width: 200px;">
                <h4 style="color: #9d50bb; text-transform: uppercase; letter-spacing: 2px;">The Vibe</h4>
                <p style="color: #eee; font-size: 0.95rem;">A giant Spotify playlist<br><span style="color: #888; font-size: 0.85rem;">& Excessive amounts of Coffee</span></p>
            </div>
        </div>
    </div>
    <div style="margin-top: 80px; padding: 0 20px;">
        <h2 class="section-title">Frequently Asked Questions</h2>
        <div style="max-width: 800px; margin: 0 auto; text-align: left;">  
            <details style="margin-bottom: 20px; background: rgba(0,0,0,0.4); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 10px; cursor: pointer;">
                <summary style="padding: 20px; font-weight: bold; color: #2fb98f; outline: none; list-style: none;">
                    ✦ Can I use this for my Twitch stream?
                </summary>
                <div style="padding: 0 20px 20px 20px; color: #bbb; font-size: 0.95rem; line-height: 1.6;">
                    Yes! You can use your commission for stream overlays, profile pictures, and social media promotion. If you intend to sell the artwork on merchandise (shirts, prints, etc.), please let me know so we can discuss commercial licensing.
                </div>
            </details>
            <details style="margin-bottom: 20px; background: rgba(0,0,0,0.4); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 10px; cursor: pointer;">
                <summary style="padding: 20px; font-weight: bold; color: #2fb98f; outline: none; list-style: none;">
                    ✦ Do you offer discounts for bulk orders?
                </summary>
                <div style="padding: 0 20px 20px 20px; color: #bbb; font-size: 0.95rem; line-height: 1.6;">
                    Absolutely. If you are ordering a full set of character expressions, a multi-page comic, or a group shot with 3+ characters, we can work out a custom package rate that is more affordable than individual tier pricing.
                </div>
            </details>
            <details style="margin-bottom: 20px; background: rgba(0,0,0,0.4); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 10px; cursor: pointer;">
                <summary style="padding: 20px; font-weight: bold; color: #2fb98f; outline: none; list-style: none;">
                    ✦ What file formats will I receive?
                </summary>
                <div style="padding: 0 20px 20px 20px; color: #bbb; font-size: 0.95rem; line-height: 1.6;">
                    Standard delivery includes a high-resolution PNG (with and without background) and a flattened JPEG. If you require a layered PSD or Clip Studio source file for specific project needs, please mention this in your form submission.
                </div>
            </details>
        </div>
    </div>
    <div style="margin-top: 100px; padding: 80px 20px; text-align: center; background: radial-gradient(circle, rgba(157, 80, 187, 0.1) 0%, transparent 70%);">
        <h2 style="font-family: 'Georgia', serif; font-size: 3rem; font-style: italic; color: #fff; margin-bottom: 15px; filter: drop-shadow(0 0 10px rgba(47, 185, 143, 0.2));">
            Ready to bring your idea to life?
        </h2>
        <p style="color: #bbb; font-size: 1.1rem; margin-bottom: 40px; max-width: 600px; margin-left: auto; margin-right: auto;">
            Skip the back-and-forth! Fill out my request form below with your character references and details to secure your spot in my queue.
        </p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdlEu0YW80vvRtM0xouMuAkYS6s_hT0uZJjGr9IHBFPfVlN8Q/viewform?usp=publish-editor" target="_blank" class="contact-btn">
            Submit Commission Request
        </a>
        <p style="margin-top: 30px; font-size: 0.85rem; color: #666; text-transform: uppercase; letter-spacing: 2px;">
            ✦ No upfront payment required to submit a request ✦
        </p>
    </div>
</div>

<script>
    const canvas = document.getElementById('art-rain-canvas');
    const ctx = canvas.getContext('2d');

    const artSources = [
        '/images/gallery/art12.png',
        '/images/gallery/art12.png',
        '/images/gallery/art12.png',
        '/images/gallery/art12.png',
    ];

    const loadedImages = [];
    let items = [];
    let sparkles = [];

   
    artSources.forEach(src => {
        const img = new Image();
        img.src = src;
        img.onload = () => loadedImages.push(img);
    });

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

 
    const rand = (min, max) => Math.random() * (max - min) + min;

    class FallingArt {
        constructor() {
            this.img = loadedImages[Math.floor(Math.random() * loadedImages.length)];
            this.size = rand(45, 75); 
            this.x = rand(-this.size, canvas.width);
            this.y = rand(-this.size * 2, -this.size);
            this.speedY = rand(0.6, 1.4); 
            this.speedX = rand(-0.2, 0.2);
            this.rotation = rand(0, Math.PI * 2);
            this.rotSpeed = rand(-0.01, 0.01);
            this.sparkleTimer = 0;
        }

        update() {
            this.y += this.speedY;
            this.x += this.speedX;
            this.rotation += this.rotSpeed;
            this.sparkleTimer++;

            
            if (this.sparkleTimer % 7 === 0 && this.y > 0) {
                sparkles.push(new TrailSparkle(this.x + this.size / 2, this.y + this.size / 2));
            }
        }

        draw() {
            if (!this.img) return;
            ctx.save();
            ctx.translate(this.x + this.size / 2, this.y + this.size / 2);
            ctx.rotate(this.rotation);
            
           
            ctx.shadowColor = 'rgba(157, 80, 187, 0.3)';
            ctx.shadowBlur = 8;

          
            ctx.beginPath();
            ctx.roundRect(-this.size / 2, -this.size / 2, this.size, this.size, 8);
            ctx.clip();

            ctx.drawImage(this.img, -this.size / 2, -this.size / 2, this.size, this.size);
            ctx.restore();
        }
    }

    class TrailSparkle {
        constructor(x, y) {
            this.x = x + rand(-15, 15);
            this.y = y + rand(-15, 15);
            this.size = rand(3, 7);
            this.maxLife = rand(40, 80);
            this.life = this.maxLife;
            
            const colors = ['#9d50bb', '#2fb98f', '#ffffff', '#e1bee7', '#80deea'];
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.speedY = rand(0.1, 0.4); 
        }

        update() {
            this.y += this.speedY;
            this.life--;
        }

        draw() {
            const alpha = this.life / this.maxLife;
            ctx.save();
            ctx.globalAlpha = alpha;
            ctx.fillStyle = this.color;
            
            
            ctx.beginPath();
            ctx.moveTo(this.x, this.y - this.size);
            ctx.lineTo(this.x + this.size * 0.6, this.y);
            ctx.lineTo(this.x, this.y + this.size);
            ctx.lineTo(this.x - this.size * 0.6, this.y);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }
    }

   
    function loop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

      
        ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
        if (Math.random() > 0.85) {
            ctx.fillRect(rand(0, canvas.width), rand(0, canvas.height), 2, 2);
        }

        
        if (items.length < 10 && loadedImages.length > 0 && Math.random() < 0.015) {
            items.push(new FallingArt());
        }

        
        items.forEach((item, index) => {
            item.update();
            item.draw();
            if (item.y > canvas.height + item.size) items.splice(index, 1);
        });

        
        sparkles.forEach((sparkle, index) => {
            sparkle.update();
            sparkle.draw();
            if (sparkle.life <= 0) sparkles.splice(index, 1);
        });

        requestAnimationFrame(loop);
    }

    loop();
</script>