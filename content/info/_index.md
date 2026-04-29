---
title: "System Information"
---

<style>
    /* MySpace Revival Styles - FINAL */
    .ms-body { 
        /* YOUR CUSTOM GIF BACKGROUND */
        background-image: url('/images/comicsicon/72v.gif');
        background-repeat: repeat;
        background-attachment: fixed;
        font-family: Arial, Helvetica, sans-serif; 
        max-width: 850px; 
        margin: 0 auto; 
        color: #fff;
        text-align: left;
        padding: 20px;
        border: 1px solid #333;
        background-color: #000; /* Fallback */
    }

    .ms-header {
        text-align: center;
        padding: 20px;
        color: #ff00ff;
        text-shadow: 0 0 8px #fff, 0 0 15px #ff00ff;
        font-size: 2rem;
        animation: ms-blink 1.5s infinite;
    }
    @keyframes ms-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.7; } }

    .ms-grid {
        display: grid;
        grid-template-columns: 300px 1fr;
        gap: 20px;
    }

    .ms-box {
        border: 2px solid #6699cc;
        background: rgba(0, 0, 0, 0.85); /* Semi-transparent so background shows slightly */
        margin-bottom: 20px;
    }
    .ms-box-head {
        background: #6699cc;
        color: #fff;
        padding: 5px 10px;
        font-weight: bold;
        font-size: 0.85rem;
        text-transform: uppercase;
    }
    .ms-box-body { padding: 10px; }

    .ms-profile-pic { width: 100%; border: 1px solid #333; }
    .ms-online { color: #ffcc00; font-weight: bold; text-align: center; margin: 10px 0; display: block; font-size: 1.1rem; }

    /* CONTACT TABLE FIX */
    .ms-contact-table { 
        width: 100%; 
        border-collapse: collapse; 
        background: transparent; 
    }
    .ms-contact-table td { 
        border: 1px solid #6699cc; 
        padding: 8px; 
        text-align: center; 
        font-size: 0.75rem; 
    }
    .ms-contact-table a { 
        color: #6699cc; 
        text-decoration: none; 
        font-weight: bold; 
        display: block;
        width: 100%;
    }
    .ms-contact-table a:hover {
        background: #6699cc;
        color: #fff;
    }

    .ms-top8 {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
        text-align: center;
        font-size: 0.65rem;
    }
    .ms-friend-thumb { 
        width: 100%; 
        height: 60px; 
        background-color: #222; 
        margin-bottom: 5px; 
        border: 1px solid #444; 
        background-size: cover; 
        background-position: center;
    }

    @media (max-width: 768px) { .ms-grid { grid-template-columns: 1fr; } }
</style>

<div class="ms-body">
    <div class="ms-header">✨ galileo_cat's space ✨</div>
    <div class="ms-grid">
        <div class="ms-left">
            <div class="ms-box">
                <div class="ms-box-body">
                    <img src="/images/home-icon.jpg" class="ms-profile-pic">
                    <span class="ms-online">Online Now!</span>
                    <p style="font-size: 0.85rem; text-align: center;">"Archiving the shadows..."</p>
                    <p style="font-size: 0.8rem; margin-top: 10px;">
                        <b style="color: #6699cc;">Male</b><br>
                        <b style="color: #6699cc;">Location:</b> The Void
                    </p>
                </div>
            </div>
            <div class="ms-box">
                <div class="ms-box-head">Contacting galileo_cat</div>
                <div class="ms-box-body" style="padding: 0;">
                    <table class="ms-contact-table">
                        <tr>
                            <td><a href="https://ko-fi.com/galileo_cat">Support</a></td>
                            <td><a href="https://x.com/galileo_cat">Add Friend</a></td>
                        </tr>
                        <tr>
                            <td><a href="https://linktr.ee/GalileoCat">Linktree</a></td>
                            <td><a href="#">Discord: @galileocat</a></td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="ms-box">
                <div class="ms-box-head">My Details</div>
                <div class="ms-box-body" style="font-size: 0.85rem; line-height: 1.6;">
                    <p><b>Status:</b> Coding</p>
                    <p><b>Discord:</b> @galileocat</p>
                </div>
            </div>
        </div>
        <div class="ms-right">
            <div class="ms-box">
                <div class="ms-box-head">galileo_cat's Interests</div>
                <div class="ms-box-body" style="font-size: 0.9rem; line-height: 1.6;">
                    <p><b style="color: #6699cc;">General:</b> Art, Mystery, Adventure, Game Dev, Cyber Defense</p>
                    <p><b style="color: #6699cc;">Music:</b> The Strokes, The Voidz, The Weeknd, Joji</p>
                </div>
            </div>
            <div class="ms-box">
                <div class="ms-box-head">About Me</div>
                <div class="ms-box-body" style="font-size: 0.95rem; line-height: 1.6;">
                    <p>I create art that lives in the shadows between <b>horror</b> and <b>high-fantasy</b>. <br><br><i>Samurai Smokey</i> is my current primary focus—a webcomic dedicated to atmospheric storytelling and bold, graphic lines.</p>
                    <p style="margin-top: 15px;">This space serves as the definitive, secure archive for my work. <b>No algorithms, no noise—just the art.</b></p>
                </div>
            </div>
            <div class="ms-box">
                <div class="ms-box-head">The Top 8 Friends</div>
                <div class="ms-box-body">
                    <div class="ms-top8">
                        <div><div class="ms-friend-thumb" style="background-image: url('/images/comicsicon/smokey.png');"></div>Smokey</div>
                        <div><div class="ms-friend-thumb" style="background-image: url('/images/comicsicon/kiki.png');"></div>Kiki</div>
                        <div><div class="ms-friend-thumb" style="background-image: url('/images/comicsicon/miyagi.png');"></div>Miyagi</div>
                        <div><div class="ms-friend-thumb" style="background-image: url('/images/comicsicon/cookiecat.png');"></div>CookieCat</div>
                        <div><div class="ms-friend-thumb" style="background-image: url('/images/comicsicon/skull.png');"></div>Skull</div>
                        <div><div class="ms-friend-thumb" style="background-image: url('/images/comicsicon/catnip.png');"></div>Catnip</div>
                        <div><div class="ms-friend-thumb" style="background-image: url('/images/comicsicon/liz.png');"></div>Liz</div>
                        <div><div class="ms-friend-thumb" style="background-image: url('/images/comicsicon/babu.png');"></div>Babu</div>
                    </div>
                </div>
            </div>
        </div> </div> <footer style="margin-top: 50px; font-size: 0.75rem; opacity: 0.5; text-align: center; padding-bottom: 40px; font-family: monospace;">
        SYSTEM LOG: BUILT WITH HUGO | HOSTED VIA GITHUB | MAINTAINED BY GALILEOCAT
    </footer>
</div>