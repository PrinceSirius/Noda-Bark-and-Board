const navLinks = document.getElementById("navLinks")

function showMenu(){
    navLinks.style.right = "0";
}

function hideMenu(){
    navLinks.style.right ="-200px";
}


// Animations

gsap.registerPlugin(ScrollTrigger)

gsap.from('.animate-hero', {
    duration: 0.6,
    opacity: 0,
    y: -150,
    stagger: 0.3
});


gsap.from('.animate-services', {
    ScrollTrigger: '.animate-services',
    duration: 0.5,
    opacity: 1,
    x: -150,
    stagger: 0.12
});

gsap.from('.animate-img', {
    ScrollTrigger: '.animate-services',
    duration: 1.2,
    opacity: 0,
    x: -200
});

gsap.from('.animate-membership', {
    ScrollTrigger: '.animate-membership',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.5
});

gsap.from('.animate-card', {
    ScrollTrigger: '.animate-card',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.5
});

gsap.from('.animate-team', {
    ScrollTrigger: '.animate-team',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.2
});

gsap.from('.animate-email', {
    ScrollTrigger: '.animate-email',
    duration: 0.8,
    opacity: 0,
    y: -150,
    stagger: 0.25,
    delay: 0.4
});