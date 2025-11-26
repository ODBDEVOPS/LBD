document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons and contents
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Create new playlist functionality
    const createNewPlaylist = document.querySelector('.playlist-card.create-new');
    if (createNewPlaylist) {
        createNewPlaylist.addEventListener('click', function() {
            alert('Fonctionnalité de création de playlist à implémenter');
        });
    }
    
    // Playlist play buttons
    const playlistPlayButtons = document.querySelectorAll('.playlist-card .play-button');
    playlistPlayButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const playlistCard = this.closest('.playlist-card');
            const playlistTitle = playlistCard.querySelector('h3').textContent;
            
            // Update player bar
            document.querySelector('.player-track-title').textContent = "Playlist: " + playlistTitle;
            document.querySelector('.player-track-artist').textContent = "Brown Diamonds";
            document.querySelector('.player-track-image').src = "https://via.placeholder.com/50x50";
            
            // Set playing state
            const playerPlay = document.querySelector('.player-play');
            playerPlay.innerHTML = '<i class="fas fa-pause"></i>';
        });
    });
    
    // Track row play buttons
    const trackPlayButtons = document.querySelectorAll('.play-btn-small');
    trackPlayButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const trackRow = this.closest('.track-row');
            const trackTitle = trackRow.querySelector('.track-details h4').textContent;
            const trackArtist = trackRow.querySelector('.track-details p').textContent;
            const trackImage = trackRow.querySelector('.track-thumbnail').src;
            
            // Update player bar
            document.querySelector('.player-track-title').textContent = trackTitle;
            document.querySelector('.player-track-artist').textContent = trackArtist;
            document.querySelector('.player-track-image').src = trackImage;
            
            // Set playing state
            const playerPlay = document.querySelector('.player-play');
            playerPlay.innerHTML = '<i class="fas fa-pause"></i>';
        });
    });
    
    // Track row click (play on row click)
    const trackRows = document.querySelectorAll('.track-row');
    trackRows.forEach(row => {
        row.addEventListener('click', function() {
            const trackTitle = this.querySelector('.track-details h4').textContent;
            const trackArtist = this.querySelector('.track-details p').textContent;
            const trackImage = this.querySelector('.track-thumbnail').src;
            
            // Update player bar
            document.querySelector('.player-track-title').textContent = trackTitle;
            document.querySelector('.player-track-artist').textContent = trackArtist;
            document.querySelector('.player-track-image').src = trackImage;
            
            // Set playing state
            const playerPlay = document.querySelector('.player-play');
            playerPlay.innerHTML = '<i class="fas fa-pause"></i>';
        });
    });
    
    // Like buttons
    const likeButtons = document.querySelectorAll('.like-btn');
    likeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('liked');
            const icon = this.querySelector('i');
            if (this.classList.contains('liked')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
            }
        });
    });
    
    // Discover button
    const discoverBtn = document.querySelector('.btn-discover');
    if (discoverBtn) {
        discoverBtn.addEventListener('click', function() {
            window.location.href = "index.html";
        });
    }
});