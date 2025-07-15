let timer; 

document.getElementById('startButton').addEventListener('click', function() {
    let timeInput = document.getElementById('timeInput').value;
    let timerDisplay = document.getElementById('timerDisplay');
    let alarmSound = document.getElementById('alarmSound');

    if (timeInput <= 0 || isNaN(timeInput)) {
        alert("Please enter a valid time in minutes.");
        return;
    }

    let timeLeft = parseInt(timeInput) * 60; 

    function formatTime(seconds) {
        let minutes = Math.floor(seconds / 60);
        let remainingSeconds = seconds % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }
    // NotesSociety
    timerDisplay.textContent = formatTime(timeLeft);

    timer = setInterval(function() {
        timeLeft--;
        timerDisplay.textContent = formatTime(timeLeft);

        if (timeLeft <= 0) {
            clearInterval(timer); 
            alarmSound.play(); 
            alert("Time's up!");
            timerDisplay.textContent = "00:00"; 
        }
    }, 1000);
});

document.getElementById('resetButton').addEventListener('click', function() {
    clearInterval(timer); 
    document.getElementById('timeInput').value = ''; 
    document.getElementById('timerDisplay').textContent = '00:00'; 
});

//reset timer
document.getElementById('resetButton').addEventListener('click', function() {
    clearInterval(timer); 
    document.getElementById('timeInput').value = ''; 
    document.getElementById('timerDisplay').textContent = '00:00';
});
