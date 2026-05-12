---
title: "System Interface"
---

<style>
    /* 1. THE AMBIENT BACKGROUND */
    .ps-viewport {
        position: fixed;
        top: 0; left: 0; width: 100vw; height: 100vh;
        /* Slow shifting gradient */
        background: linear-gradient(-45deg, #050d1a, #112240, #1a1025, #0a192f);
        background-size: 400% 400%;
        animation: ambient-shift 25s ease infinite;
        overflow: hidden;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        color: #fff;
        z-index: 9999; /* Overrides the whole page to act as a screensaver */
    }

    @keyframes ambient-shift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }

    /* 2. THE FLOATING 'RIBBONS' (Blurred Orbs) */
    .ps-orb {
        position: absolute;
        border-radius: 50%;
        filter: blur(100px);
        opacity: 0.4;
        animation: orb-float 20s infinite alternate ease-in-out;
        pointer-events: none;
    }

    .orb-1 { width: 60vw; height: 60vh; background: #2fb98f; top: -10%; left: -10%; animation-duration: 25s; }
    .orb-2 { width: 50vw; height: 50vh; background: #9d50bb; bottom: -20%; right: -10%; animation-duration: 30s; animation-direction: alternate-reverse; }
    .orb-3 { width: 40vw; height: 40vh; background: #4a90e2; top: 30%; left: 40%; animation-duration: 35s; }

    @keyframes orb-float {
        0% { transform: translate(0, 0) scale(1); }
        100% { transform: translate(100px, 50px) scale(1.2); }
    }

    /* 3. TOP BAR (Clock & User) */
    .ps-topbar {
        position: absolute;
        top: 40px; right: 60px;
        display: flex;
        align-items: center;
        gap: 20px;
        text-shadow: 0 2px 10px rgba(0,0,0,0.5);
    }

    .ps-user {
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 300;
        font-size: 1.1rem;
        opacity: 0.9;
    }

    .ps-avatar {
        width: 35px; height: 35px;
        background: #fff;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(255,255,255,0.2);
    }

    .ps-clock {
        font-size: 1.4rem;
        font-weight: 200;
        letter-spacing: 1px;
    }

    /* 4. THE XMB HORIZONTAL UI */
    .xmb-container {
        position: absolute;
        top: 50%; left: 0;
        width: 100vw;
        transform: translateY(-50%);
        display: flex;
        align-items: center;
        padding-left: 15vw; /* Keeps the active item slightly left of center */
        gap: 30px;
        overflow-x: auto;
        scroll-behavior: smooth;
        /* Hides scrollbar but allows scrolling */
        -ms-overflow-style: none;  
        scrollbar-width: none;  
    }
    
    .xmb-container::-webkit-scrollbar { display: none; }

    .xmb-item {
        flex: 0 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 15px;
        cursor: pointer;
        opacity: 0.5;
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    .xmb-item:hover, .xmb-item.active {
        opacity: 1;
        transform: scale(1.15);
    }

    .xmb-icon {
        width: 120px;
        height: 120px;
        background: rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.2);
        border-radius: 15px; /* PS4 style tiles */
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        backdrop-filter: blur(10px);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.8rem;
        color: #888;
        transition: all 0.3s ease;
    }

    .xmb-item:hover .xmb-icon, .xmb-item.active .xmb-icon {
        border-color: rgba(255,255,255,0.8);
        box-shadow: 0 0 20px rgba(255,255,255,0.3), inset 0 0 20px rgba(255,255,255,0.1);
    }

    .xmb-title {
        font-size: 1.2rem;
        font-weight: 300;
        text-shadow: 0 2px 10px rgba(0,0,0,0.8);
        opacity: 0;
        transition: opacity 0.3s ease;
        letter-spacing: 1px;
    }

    .xmb-item:hover .xmb-title, .xmb-item.active .xmb-title {
        opacity: 1;
    }

</style>

<div class="ps-viewport">
    <div class="ps-orb orb-1"></div>
    <div class="ps-orb orb-2"></div>
    <div class="ps-orb orb-3"></div>
    <div class="ps-topbar">
        <div class="ps-user">
            <div class="ps-avatar" style="background-image: url('/images/gallery/commissions/1.jpg'); background-size: cover;"></div>
            User 1
        </div>
        <div class="ps-clock" id="live-clock">00:00 PM</div>
    </div>
    <div class="xmb-container">       
        <div class="xmb-item">
            <div class="xmb-icon">INFO</div>
            <div class="xmb-title">System Information</div>
        </div>
        <div class="xmb-item active">
            <div class="xmb-icon" style="background-image: url('/images/gallery/commissions/4.jpg'); background-size: cover; border-color: #2fb98f;"></div>
            <div class="xmb-title">Start Chapter 1</div>
        </div>
        <div class="xmb-item">
            <div class="xmb-icon">COMMISIONS</div>
            <div class="xmb-title">Creative Studio</div>
        </div>
        <div class="xmb-item">
            <div class="xmb-icon">GALLERY</div>
            <div class="xmb-title">Media & Archives</div>
        </div>
        <div class="xmb-item">
            <div class="xmb-icon">SUPPORT</div>
            <div class="xmb-title">Ko-fi Link</div>
        </div>
    </div>
    <div style="position: absolute; bottom: 30px; right: 40px; font-size: 0.8rem; opacity: 0.4; font-weight: 300;">
        ENTER ✖ &nbsp;&nbsp; BACK ◯
    </div>

</div>

<script>
    // Live Clock Script to complete the Homescreen illusion
    function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        
        const timeString = hours + ':' + minutes + ' ' + ampm;
        document.getElementById('live-clock').innerText = timeString;
    }
    
    setInterval(updateClock, 1000);
    updateClock(); // Run immediately

    // Simple interaction to change the "active" tile on click
    const items = document.querySelectorAll('.xmb-item');
    items.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active from all
            items.forEach(i => i.classList.remove('active'));
            // Add to clicked
            item.classList.add('active');
            
            // Optional: Smooth scroll the container to center the clicked item
            item.scrollIntoView({ behavior: 'smooth', inline: 'center' });
        });
    });
</script>