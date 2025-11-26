document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNav.style.display = mainNav.style.display === 'block' ? 'none' : 'block';
        });
    }
    
    // Play button functionality for tracks
    const playButtons = document.querySelectorAll('.play-button');
    const playerPlay = document.querySelector('.player-play');
    let isPlaying = false;
    
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            const trackCard = this.closest('.track-card');
            const trackTitle = trackCard.querySelector('h3').textContent;
            const trackArtist = trackCard.querySelector('.artist').textContent;
            const trackImage = trackCard.querySelector('img').src;
            
            // Update player bar
            document.querySelector('.player-track-title').textContent = trackTitle;
            document.querySelector('.player-track-artist').textContent = trackArtist;
            document.querySelector('.player-track-image').src = trackImage;
            
            // Toggle play state
            isPlaying = true;
            updatePlayButton();
        });
    });
    
    // Player play button
    if (playerPlay) {
        playerPlay.addEventListener('click', function() {
            isPlaying = !isPlaying;
            updatePlayButton();
        });
    }
    
    function updatePlayButton() {
        const icon = isPlaying ? 'fa-pause' : 'fa-play';
        playerPlay.innerHTML = `<i class="fas ${icon}"></i>`;
    }
    
    // Simulate progress bar movement when playing
    setInterval(function() {
        if (isPlaying) {
            const progressBar = document.querySelector('.player-progress-filled');
            if (progressBar) {
                const currentWidth = parseFloat(progressBar.style.width) || 0;
                const newWidth = currentWidth + 0.1;
                if (newWidth <= 100) {
                    progressBar.style.width = `${newWidth}%`;
                    
                    // Update time display
                    const totalTime = 222; // 3:42 in seconds
                    const currentTime = Math.floor(totalTime * (newWidth / 100));
                    const minutes = Math.floor(currentTime / 60);
                    const seconds = currentTime % 60;
                    document.querySelector('.player-time-current').textContent = 
                        `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
                } else {
                    progressBar.style.width = '0%';
                    isPlaying = false;
                    updatePlayButton();
                }
            }
        }
    }, 1000);
    
    // Volume control
    const volumeBar = document.querySelector('.player-volume-bar');
    if (volumeBar) {
        volumeBar.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            const volumeFilled = this.querySelector('.player-volume-filled');
            volumeFilled.style.width = `${pos * 100}%`;
        });
    }
    
    // Like button
    const likeButton = document.querySelector('.player-like-btn');
    if (likeButton) {
        likeButton.addEventListener('click', function() {
            this.classList.toggle('liked');
            const icon = this.querySelector('i');
            if (this.classList.contains('liked')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                icon.style.color = '#f50';
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                icon.style.color = '#aaa';
            }
        });
    }
});