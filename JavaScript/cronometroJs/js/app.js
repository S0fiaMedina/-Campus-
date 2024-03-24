stopWatch = document.getElementById('text-main');
reset = document.getElementById('flow-reset');
play = document.getElementById('flow-control');

play.addEventListener('click', setInterval(playStopWatch, 1000));

function playStopWatch() {
    const time = new Date();
    stopWatch.innerHTML = time.toLocaleTimeString();
}