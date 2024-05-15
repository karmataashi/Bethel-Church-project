//parallax effect starts here
window.addEventListener('scroll', function() {
  let scrolled = window.scrollY;
  let parallax = document.querySelector('#hero-container');
  parallax.style.backgroundPositionY = -(scrolled * 1.3) + 'px'; 
})

function showMenu() {
    const show = document.querySelector('.sidebar');
    show.style.display = 'flex';
}

function closeMenu() {
    const close = document.querySelector('.sidebar');
    close.style.display = 'none';
}

//parallax effect ends here
window.addEventListener('scroll',reveal);
function reveal() {
    let reveals = document.querySelectorAll('.reveal');
    for(let i=0; i<reveals.length; i++) {
        let windowheight = window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 100;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}
