let light = document.getElementById('circle');

document.getElementById('button').addEventListener('click', () => {
    light.classList.remove('flash-animation');
    
        void light.offsetWidth;
    
    light.classList.add('flash-animation');
});


let eject = document.getElementById('photo')

document.getElementById('button').addEventListener('click', () => {
    eject.classList.remove('eject-photo');
    setTimeout(function(){
    eject.classList.add('eject-photo');
    }, 500);
});
