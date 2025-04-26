document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
function toggleNav() {
const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');
navLinks.classList.toggle('active');
hamburger.classList.toggle('active');
}

        // Video Player Functionality
        const playButtons = document.querySelectorAll('.play-button');
        const videoModal = document.getElementById('videoModal');
        const videoPlayer = document.querySelector('.video-player');

        playButtons.forEach(button => {
            button.addEventListener('click', () => {
                videoModal.style.display = 'flex';
                videoPlayer.play();
            });
        });

        function closeVideo() {
            videoModal.style.display = 'none';
            videoPlayer.pause();
            videoPlayer.currentTime = 0;
        }

        // Close modal when clicking outside
        window.onclick = function(event) {
            if (event.target == videoModal) {
                closeVideo();
            }
        }

        // Close with ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeVideo();
            }
        });