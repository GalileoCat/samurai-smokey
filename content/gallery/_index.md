---
title: "Gallery"
---

Welcome to the gallery, concept and new art will show up here! Click an image to see it in full resolution.

<div class="comic-grid">

[![Concept Art 1](/images/gallery/art1.jpg)](/images/gallery/art1.jpg)

[![Character Sheet](/images/gallery/art2.jpg)](/images/gallery/art2.jpg)

[![Concept Art 1](/images/gallery/art3.png)](/images/gallery/art3.png)

[![Character Sheet](/images/gallery/art4.jpg)](/images/gallery/art4.jpg)

[![Concept Art 1](/images/gallery/art5.png)](/images/gallery/art5.png)

[![Character Sheet](/images/gallery/art6.jpg)](/images/gallery/art6.jpg)

[![Concept Art 1](/images/gallery/art7.jpg)](/images/gallery/art7.jpg)

[![Character Sheet](/images/gallery/art8.jpg)](/images/gallery/art8.jpg)

</div>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.14.0/simple-lightbox.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.14.0/simple-lightbox.min.js"></script>
<script>
    // This is a 'Force' script that ignores theme settings
    var interval = setInterval(function() {
        if (window.SimpleLightbox) {
            new SimpleLightbox('.comic-grid a');
            console.log("Lightbox Forced!");
            clearInterval(interval);
        }
    }, 100);
</script>