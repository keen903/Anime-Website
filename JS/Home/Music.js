const button = document.getElementById('music');
const audio = document.getElementById('audio');

button.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        button.innerHTML = '<i class="bi bi-pause-circle"></i>';
    } else {
        audio.pause();
        button.innerHTML = '<i class="bi bi-music-note-beamed"></i>'
    }
});


