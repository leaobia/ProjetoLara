
let utterance;
let isPlaying = false;
let duration = 0;
let currentTime = 0;
let interval;
let currentWordIndex = 0;
const texto = document.getElementById('texto').innerText;
const words = texto.split(' ');

duration = Math.round(words.length / 2);

function toggleAudio() {
    const playButton = document.querySelector('.play-button');

    if (!isPlaying) {
        startSpeech();
        isPlaying = true;
        playButton.textContent = '| |'; 
        interval = setInterval(updateProgress, 1000);
    } else {
       
        window.speechSynthesis.cancel();
        isPlaying = false;
        playButton.textContent = '▶'; 
        clearInterval(interval);
    }
}

function startSpeech() {

    const remainingText = words.slice(currentWordIndex).join(' ');
    utterance = new SpeechSynthesisUtterance(remainingText);
    utterance.lang = 'pt-BR';

    utterance.onboundary = (event) => {
        if (event.name === 'word') {
            currentWordIndex++; 
        }
    };

    utterance.onend = stopAudio;

    window.speechSynthesis.speak(utterance);
}

function stopAudio() {
    isPlaying = false;
    document.querySelector('.play-button').textContent = '▶';
    clearInterval(interval);
    currentTime = 0;
    currentWordIndex = 0;
    updateProgress();
}

function updateProgress() {
 
    if (currentTime < duration) {
        currentTime++;
        const progressPercent = (currentTime / duration) * 100;
        document.getElementById('progress').style.width = `${progressPercent}%`;
        document.getElementById('time').textContent = `${formatTime(currentTime)} / ${formatTime(duration)}`;
    } else {
        stopAudio();
    }
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}
function toggleSearch() {
    const searchOverlay = document.getElementById("searchOverlay");
    const searchIcon = document.getElementById("searchIcon");
    const body = document.body;

    searchOverlay.classList.toggle("visible");

    if (searchOverlay.classList.contains("visible")) {
        searchIcon.classList.remove("fa-magnifying-glass");
        searchIcon.classList.add("fa-times");
        body.classList.add("no-scroll"); 
    } else {
        searchIcon.classList.remove("fa-times");
        searchIcon.classList.add("fa-magnifying-glass");
        body.classList.remove("no-scroll"); 
    }
}
