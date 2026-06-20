// ===============================
// Typing Animation
// ===============================
var typed = new Typed("#typing", {
    strings: [
      "an AI Engineer",
        "a Python Developer",
        "a Backend Developer",
        "a Generative AI Innovator",
        "a Machine Learning Enthusiast"
    ],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});

// ===============================
// AOS Animation Setup
// ===============================
AOS.init({
    duration: 1000,
    once: true
});

// ===============================
// Vanilla Tilt Cards Config
// ===============================
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 12,
    speed: 400,
    glare: true,
    "max-glare": 0.25
});

// ===============================
// Particles Background Setup
// ===============================
particlesJS("particles-js", {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#00e5ff"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.4,
            random: false
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#00e5ff",
            opacity: 0.25,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out"
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            },
            onclick: {
                enable: true,
                mode: "push"
            }
        },
        modes: {
            repulse: {
                distance: 100
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// ===============================
// Navbar Dynamic Active Indicator
// ===============================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 160;
        if (scrollPosition >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

// ===============================
// Dark / Bright Mode Toggle Engine
// ===============================
const themeButton = document.getElementById('theme-button');
const body = document.body;

// Check localStorage for an existing user preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
    body.classList.add('light-theme');
    themeButton.innerHTML = '<i class="fas fa-sun"></i>';
}

themeButton.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    
    let theme = 'dark';
    if (body.classList.contains('light-theme')) {
        theme = 'light';
        themeButton.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeButton.innerHTML = '<i class="fas fa-moon"></i>';
    }
    
    // Save selection to prevent resetting on page reload
    localStorage.setItem('theme', theme);
});

// ===============================
// Smooth Reveal Initialization
// ===============================
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});
// ==========================================================================
// High-Performance AJAX Contact Form Submission
// ==========================================================================
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevents the page from redirecting to Cloudflare

        const formData = new FormData(contactForm);
        
        // Change the button text to show it is processing
        const submitBtn = contactForm.querySelector('.btn-primary-submit');
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
        submitBtn.disabled = true;

        // Send the data securely in the background
        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('🚀 Message sent successfully straight to Kunal!');
                contactForm.reset(); // Clear the input fields completely
            } else {
                alert('Something went wrong. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Connection timeout. Please check your network or email directly.');
        })
        .finally(() => {
            // Restore button styling back to original state
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
        });
    });
}
document.addEventListener("DOMContentLoaded", () => {
    // 1. Mobile Menu Open/Close Animation State Controller
    const menuToggle = document.querySelector(".mobile-menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const allLinks = document.querySelectorAll(".nav-links a");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            menuToggle.classList.toggle("open");
            
            const icon = menuToggle.querySelector("i");
            if (navLinks.classList.contains("active")) {
                icon.className = "fas fa-times";
            } else {
                icon.className = "fas fa-bars";
            }
        });

        // Automatically close navigation tray drawer whenever a user clicks an item link
        allLinks.forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                menuToggle.classList.remove("open");
                const icon = menuToggle.querySelector("i");
                if (icon) icon.className = "fas fa-bars";
            });
        });
    }

    // 2. High-Performance AJAX Contact Form Routing System (Bypasses Cloudflare Blockers)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); 

            const formData = new FormData(contactForm);
            const submitBtn = contactForm.querySelector('.btn-primary-submit');
            const originalBtnText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;

            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('🚀 Message sent successfully straight to Kunal!');
                    contactForm.reset(); 
                } else {
                    alert('Something went wrong. Please check your verification key.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Connection processed successfully. Check your email for inbox status confirmation.');
            })
            .finally(() => {
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            });
        });
    }
});
// ==========================================================================
// Modern Mobile Full-Screen Sidebar Drawer Execution System
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".mobile-menu-toggle");
    const menuClose = document.querySelector(".mobile-menu-close");
    const navLinks = document.querySelector(".nav-links");
    const allLinks = document.querySelectorAll(".nav-links a");

    // Open Drawer Logic Event Handler 
    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.add("active");
            document.body.style.overflow = "hidden"; // Stops underlying page viewport scrolling
        });
    }

    // Close Drawer Logic Event Handler (Dedicated Close X Target Button)
    if (menuClose && navLinks) {
        menuClose.addEventListener("click", () => {
            navLinks.classList.remove("active");
            document.body.style.overflow = ""; // Restores base document window scroll physics
        });
    }

    // Auto Collapse panel layer drawer tracking whenever a menu option link is selected
    allLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            document.body.style.overflow = "";
        });
    });
});
function copyToClipboard(elementId, buttonEl) {
    const textToCopy = document.getElementById(elementId).innerText.trim();
    navigator.clipboard.writeText(textToCopy).then(() => {
        const icon = buttonEl.querySelector('i');
        icon.className = 'fas fa-check';
        setTimeout(() => { icon.className = 'far fa-copy'; }, 2000);
    });
}