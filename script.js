// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Change icon
    const icon = menuToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Sticky Navigation
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '0.5rem 0';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.padding = '1rem 0';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').substring(1) === current) {
            item.classList.add('active');
        }
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Download CV Button Enhancement
const downloadBtn = document.querySelector('.btn-download');
if (downloadBtn) {
    downloadBtn.addEventListener('click', function(e) {
        if (!this.getAttribute('href')) {
            e.preventDefault();
            alert('Please add your CV file and name it "Final CV.pdf" in the same folder.');
        }
    });
}

// Animate elements on scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.education-item, .project-card, .contact-item').forEach(el => {
    observer.observe(el);
});

// Photo frame animation on hover
const photoContainer = document.querySelector('.photo-container');
if (photoContainer) {
    photoContainer.addEventListener('mouseenter', () => {
        const frame = photoContainer.querySelector('.photo-frame');
        frame.style.animationDuration = '5s';
    });
    
    photoContainer.addEventListener('mouseleave', () => {
        const frame = photoContainer.querySelector('.photo-frame');
        frame.style.animationDuration = '20s';
    });
}

// Current year in footer
document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.querySelector('.copyright');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = yearSpan.textContent.replace('2024', currentYear);
    }
});

// Update current year in footer
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }
    
    // Add project count
    const projectCount = document.querySelectorAll('.project-card').length;
    const projectsTitle = document.querySelector('#projects .section-title');
    if (projectsTitle) {
        projectsTitle.innerHTML = `Projects <span class="project-count">(${projectCount})</span>`;
    }
});

// Add CSS for project count
const style = document.createElement('style');
style.textContent = `
    .project-count {
        font-size: 1.5rem;
        color: var(--primary-color);
        font-weight: 600;
    }
    
    .tech-tags span {
        transition: all 0.3s ease;
    }
    
    .tech-tags span:hover {
        background-color: var(--accent-color) !important;
        transform: translateY(-2px);
    }
`;
document.head.appendChild(style);

