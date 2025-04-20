let light = document.getElementById('circle');
let eject = document.getElementById('photo');
let button = document.getElementById('button');

button.addEventListener('click', () => {
    // Remove and re-add flash animation to restart it
    light.classList.remove('flash-animation');
    void light.offsetWidth; // trigger reflow
    light.classList.add('flash-animation');

    // Remove and re-add eject photo animation with delay
    eject.classList.remove('eject-photo');
    setTimeout(() => {
        eject.classList.add('eject-photo');
    }, 500);

    // Total animation duration = flash (0.2s) + eject delay (0.5s) + eject animation (0.6s)
    // So wait about 1.3 seconds before redirecting
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 1900);
});
