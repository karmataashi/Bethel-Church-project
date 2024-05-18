//parallax effect starts here
window.addEventListener('scroll', function () {
    let scrolled = window.scrollY;
    let parallax = document.querySelector('#hero-container');
    parallax.style.backgroundPositionY = -(scrolled * 1.6) + 'px';
})
//parallax effect ends here

// sidebar ko lagi 
function showMenu() {
    const show = document.querySelector('.sidebar');
    show.style.display = 'flex';
}

function closeMenu() {
    const close = document.querySelector('.sidebar');
    close.style.display = 'none';
}


// reveal hunu ko lagi animation
window.addEventListener('scroll', reveal);
function reveal() {
    let reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        let windowheight = window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 120;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}





const verses = [
    '"Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit." - Matthew 28-19',
    '"I can do all things through Christ who strengthens me." - Philippians 4:13',
    '"Trust in the Lord with all your heart and lean not on your own understanding." - Proverbs 3:5',
    '"For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." - John 3:16',
    '"For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, plans to give you hope and a future." - Jeremiah 29:11',
    '"In all your ways acknowledge Him, and He shall direct your paths." - Proverbs 3:6',
    '"Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God." - Philippians 4:6',
    '"The Lord is my shepherd; I shall not want." - Psalm 23:1',
    '"For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord." - Romans 6:23',
    '"I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world." - John 16:33'
]


function getRandomVerse() {
    const randomVerse = Math.floor(Math.random() * verses.length);
    return verses[randomVerse];
}


const finalVerse = getRandomVerse();

const verse = document.getElementById('church-timings');
const verseText = document.createElement('p');
verseText.classList.add('verse-text');
verseText.innerText = finalVerse;

verse.appendChild(verseText);