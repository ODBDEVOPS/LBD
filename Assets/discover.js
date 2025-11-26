document.addEventListener('DOMContentLoaded', function() {
    // Follow buttons functionality
    const followButtons = document.querySelectorAll('.btn-follow');
    
    followButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            if (this.textContent === 'Suivre') {
                this.textContent = 'Suivi';
                this.style.borderColor = '#f50';
                this.style.color = '#f50';
            } else {
                this.textContent = 'Suivre';
                this.style.borderColor = '#ddd';
                this.style.color = '#333';
            }
        });
    });
    
    // Play buttons functionality
    const playButtons = document.querySelectorAll('.play-button');
    
    playButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            let trackTitle, artistName;
            
            const card = this.closest('.recommended-card, .playlist-card, .release-card');
            if (card) {
                if (card.classList.contains('recommended-card')) {
                    trackTitle = card.querySelector('h3').textContent;
                    artistName = "Playlist recommandée";
                } else if (card.classList.contains('playlist-card')) {
                    trackTitle = "Playlist: " + card.querySelector('h3').textContent;
                    artistName = card.querySelector('.creator').textContent;
                } else if (card.classList.contains('release-card')) {
                    trackTitle = card.querySelector('h3').textContent;
                    artistName = card.querySelector('.artist').textContent;
                }
                
                // Update player bar
                document.querySelector('.player-track-title').textContent = trackTitle;
                document.querySelector('.player-track-artist').textContent = artistName;
                document.querySelector('.player-track-image').src = "https://via.placeholder.com/50x50";
                
                // Set playing state
                const playerPlay = document.querySelector('.player-play');
                playerPlay.innerHTML = '<i class="fas fa-pause"></i>';
            }
        });
    });
    
    // Artist card click (play top track)
    const artistCards = document.querySelectorAll('.artist-card');
    
    artistCards.forEach(card => {
        card.addEventListener('click', function() {
            const artistName = this.querySelector('h3').textContent;
            
            // Update player bar
            document.querySelector('.player-track-title').textContent = "Top Track - " + artistName;
            document.querySelector('.player-track-artist').textContent = artistName;
            document.querySelector('.player-track-image').src = "https://via.placeholder.com/50x50";
            
            // Set playing state
            const playerPlay = document.querySelector('.player-play');
            playerPlay.innerHTML = '<i class="fas fa-pause"></i>';
        });
    });
    
    // Genre card click
    const genreCards = document.querySelectorAll('.genre-card');
    
    genreCards.forEach(card => {
        card.addEventListener('click', function() {
            const genreName = this.querySelector('h3').textContent;
            alert(`Fonctionnalité à implémenter : Jouer une playlist ${genreName}`);
        });
    });
});