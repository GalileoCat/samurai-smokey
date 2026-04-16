---
title: " "
layout: "list"
---

<style>
    /* Force the Chapter Cards to look like buttons */
    .chapter-grid {
        display: flex;
        flex-direction: column;
        gap: 20px;
        max-width: 600px;
        margin: 0 auto;
        text-align: center;
    }

    .chapter-card {
        display: block;
        background: #0a0a0a;
        border: 1px solid #333;
        padding: 25px;
        text-decoration: none !important;
        transition: all 0.3s ease;
        border-radius: 4px;
    }

    .chapter-card:hover {
        border-color: #ff4d4d;
        background: rgba(255, 77, 77, 0.05);
        transform: translateY(-3px);
    }

    .chapter-number {
        display: block;
        font-family: monospace;
        color: #ff4d4d;
        font-size: 0.8rem;
        letter-spacing: 2px;
        margin-bottom: 5px;
    }

    .chapter-info h3 {
        margin: 5px 0;
        font-size: 1.4rem;
        color: #fff !important;
    }

    .status-tag {
        margin-top: 10px;
        font-size: 0.7rem;
        letter-spacing: 1px;
        opacity: 0.5;
        color: #fff;
    }

    .locked {
        opacity: 0.5;
        border-style: dashed;
        cursor: not-allowed;
    }
</style>

<div class="series-header" style="text-align: center; padding: 40px 0;">
    <img src="/images/title-icon.png" alt="Samurai Smokey" style="max-width: 600px; width: 100%; height: auto; margin-bottom: 15px;">
    <p class="series-subtitle" style="opacity: 0.7; letter-spacing: 2px; font-style: italic;">The story of a great Samurai named Smokey.</p>
</div>

<hr>

<div class="chapter-vault">
    <h2 style="text-align: center; letter-spacing: 4px; opacity: 0.8; margin-bottom: 30px;">CHAPTERS</h2>
    <div class="chapter-grid">
        <a href="/comics/samurai-smokey/chapter-1" class="chapter-card">
            <div class="chapter-info">
                <span class="chapter-number">VOL 01</span>
                <h3>Chapter 1: Sky Burns Black</h3>
                <p class="status-tag">STATUS: COMING SOON</p>
            </div>
        </a>
        <div class="chapter-card locked">
            <div class="chapter-info">
                <span class="chapter-number">VOL 01</span>
                <h3>Chapter 2: Nightmare</h3>
                <p class="status-tag">STATUS: COMING SOON</p>
            </div>
        </div>
    </div>
</div>

<hr>
