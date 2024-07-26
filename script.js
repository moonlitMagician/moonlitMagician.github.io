document.addEventListener('DOMContentLoaded', (event) => {
    if (!document.getElementById('background-music')) {
        const audio = document.createElement('audio');
        audio.id = 'background-music';
        audio.src = 'audio/bgmusic.mp3'; // Adjust the path if necessary
        audio.loop = true;
        audio.volume = 0.1;

        document.body.appendChild(audio);
        audio.play().catch((error) => {
            console.log('Autoplay was prevented:', error);
        });
    }
});
