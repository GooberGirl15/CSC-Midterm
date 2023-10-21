
const trailContainer = document.getElementById('cursor-trail');
const particles = [];

const numParticles = 30; // Adjust as needed
const particleLifetime = 1000;

document.addEventListener('mousemove', createParticle);
document.addEventListener("click", ()=> window.location = "index.html");

function createParticle(e) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = e.pageX + 'px';
    particle.style.top = e.pageY + 'px';
    trailContainer.appendChild(particle);
    particles.push(particle);


    setTimeout(() => {removeParticle(particle);}, particleLifetime);
}

function removeParticle(particle){
    let opacity = 1;
    const fadeInterval = 5;

    const fadeOut = setInterval(() =>{
        opacity -=0.02;
        particle.style.opacity =opacity;
        if (opacity <= 0){
            clearInterval(fadeOut);
        trailContainer.removeChild(particle);}},fadeInterval);}