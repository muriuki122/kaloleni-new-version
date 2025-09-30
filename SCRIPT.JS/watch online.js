// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Language Switcher Functionality
const currentLanguage = document.getElementById('current-language');
const languageOptions = document.querySelectorAll('.language-dropdown li');

languageOptions.forEach(option => {
    option.addEventListener('click', () => {
        const selectedLang = option.getAttribute('data-lang');
        currentLanguage.textContent = selectedLang.toUpperCase();
        
        // In a real implementation, you would load translations here
        console.log(`Language changed to: ${option.textContent}`);
    });
});

// Notify Me Button Functionality
const notifyBtn = document.querySelector('.btn-notify');
if (notifyBtn) {
    notifyBtn.addEventListener('click', () => {
        // In a real implementation, this would connect to a notification service
        alert('You will be notified when we go live!');
    });
}

// Form Submission Handling
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get the email input
        const emailInput = form.querySelector('input[type="email"]');
        
        if (emailInput && emailInput.value) {
            // In a real implementation, you would send this to a server
            alert(`Thank you for subscribing with: ${emailInput.value}`);
            emailInput.value = ''; // Clear the input
        }
    });
});

// Live Stream Status Simulation
function updateStreamStatus() {
    const liveBadge = document.querySelector('.live-badge');
    const streamStatus = document.querySelector('.stream-status h3');
    const sermonTitle = document.querySelector('.sermon-title');
    
    if (liveBadge) {
        // Check if current time is during service hours (Saturday 9AM-4PM)
        const now = new Date();
        const day = now.getDay(); // 0 = Sunday, 6 = Saturday
        const hour = now.getHours();
        
        if (day === 6 && hour >= 9 && hour < 16) {
            // During Saturday service
            liveBadge.innerHTML = '<i class="fas fa-circle"></i> LIVE NOW';
            liveBadge.style.backgroundColor = '#ff0000';
            if (streamStatus) streamStatus.textContent = 'Saturday Service';
        } else {
            // Not during service hours
            liveBadge.innerHTML = '<i class="fas fa-circle"></i> OFFLINE';
            liveBadge.style.backgroundColor = '#6c757d';
            if (streamStatus) streamStatus.textContent = 'Service Not Currently Live';
            if (sermonTitle) sermonTitle.textContent = 'Check back during service hours';
        }
    }
}

// Update stream status on page load
document.addEventListener('DOMContentLoaded', updateStreamStatus);

// Update stream status every minute
setInterval(updateStreamStatus, 60000);

// Scroll Animation for Elements
function checkScroll() {
    const elements = document.querySelectorAll('.event-card, .stream-info, .cta-box');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize elements for scroll animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.event-card, .stream-info, .cta-box');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Check scroll position on load
    checkScroll();
});

// Listen for scroll events
window.addEventListener('scroll', checkScroll);

// YouTube API Integration (for future enhancements)
// This would be used to get real-time stream status and viewer count
function loadYouTubeAPI() {
    // This is a placeholder for YouTube API integration
    // In a real implementation, you would:
    // 1. Load the YouTube IFrame API
    // 2. Get the channel's live broadcast status
    // 3. Update the UI accordingly
    console.log('YouTube API would be loaded here');
}

// Load YouTube API when the page is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadYouTubeAPI);
} else {
    loadYouTubeAPI();
}