document.addEventListener('DOMContentLoaded', function() {
    const refreshBtn = document.getElementById('refresh-btn');
    
    if (refreshBtn) {
        refreshBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Generate a 'Cache Buster' timestamp
            const url = new URL(window.location.href);
            url.searchParams.set('reload', new Date().getTime());
            
            // Redirect to the new URL
            window.location.href = url.href;
        });
    }
});