// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');
mobileMenuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    mobileMenuBtn.querySelector('i').classList.toggle('fa-bars');
    mobileMenuBtn.querySelector('i').classList.toggle('fa-times');
});

// Smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
        mainNav.classList.remove('active');
        mobileMenuBtn.querySelector('i').classList.add('fa-bars');
        mobileMenuBtn.querySelector('i').classList.remove('fa-times');
    });
});

// Contact form
const contactForm = document.getElementById('contactForm');
const messageConfirmation = document.getElementById('messageConfirmation');
contactForm.addEventListener('submit', e => {
    e.preventDefault();
    messageConfirmation.classList.add('show');
    contactForm.reset();
    setTimeout(() => { messageConfirmation.classList.remove('show'); }, 5000);
});

// Animate skill bars
const skillBars = document.querySelectorAll('.skill-level');
function animateSkillBars() {
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => { bar.style.width = width; bar.style.transition = 'width 1.5s ease-in-out'; }, 300);
    });
}
const skillsSection = document.querySelector('.skills');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if(entry.isIntersecting){ animateSkillBars(); observer.unobserve(entry.target); } });
}, { threshold: 0.5 });
if (skillsSection) observer.observe(skillsSection);