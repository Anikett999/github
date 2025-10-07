// Interactive Portfolio JavaScript

// Page Management
let currentPage = 1;
const totalPages = 6;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();
  
  // Initialize page navigation
  setupPageNavigation();
  
  // Setup PDF overlay
  setupPDFOverlay();
  
  // Setup smooth scrolling
  setupSmoothScrolling();
  
  // Initialize animations
  initializeAnimations();
}

// Page Navigation
function setupPageNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const pageNumber = parseInt(this.getAttribute('data-page'));
      navigateToPage(pageNumber);
    });
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft' && currentPage > 1) {
      navigateToPage(currentPage - 1);
    } else if (e.key === 'ArrowRight' && currentPage < totalPages) {
      navigateToPage(currentPage + 1);
    }
  });
}

function navigateToPage(pageNumber) {
  if (pageNumber < 1 || pageNumber > totalPages) return;
  
  // Hide current page
  const currentPageElement = document.getElementById(`page-${currentPage}`);
  if (currentPageElement) {
    currentPageElement.classList.remove('active');
  }
  
  // Show new page
  const newPageElement = document.getElementById(`page-${pageNumber}`);
  if (newPageElement) {
    newPageElement.classList.add('active');
  }
  
  // Update navigation
  updateNavigation(pageNumber);
  
  // Update current page
  currentPage = pageNumber;
  
  // Trigger page-specific animations
  triggerPageAnimations(pageNumber);
}

function updateNavigation(pageNumber) {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const linkPage = parseInt(link.getAttribute('data-page'));
    if (linkPage === pageNumber) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// PDF Overlay
function setupPDFOverlay() {
  const pdfToggle = document.getElementById('pdf-toggle');
  const pdfOverlay = document.getElementById('pdf-overlay');
  const closePdf = document.getElementById('close-pdf');
  
  if (pdfToggle) {
    pdfToggle.addEventListener('click', openPDF);
  }
  
  if (closePdf) {
    closePdf.addEventListener('click', closePDF);
  }
  
  if (pdfOverlay) {
    pdfOverlay.addEventListener('click', function(e) {
      if (e.target === pdfOverlay) {
        closePDF();
      }
    });
  }
  
  // Close PDF with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !pdfOverlay.classList.contains('hidden')) {
      closePDF();
    }
  });
}

function openPDF() {
  const pdfOverlay = document.getElementById('pdf-overlay');
  pdfOverlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closePDF() {
  const pdfOverlay = document.getElementById('pdf-overlay');
  pdfOverlay.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

// Smooth Scrolling
function setupSmoothScrolling() {
  document.addEventListener('click', function(e) {
    const target = e.target.closest('a[href^="#"]');
    if (!target) return;
    
    const href = target.getAttribute('href');
    if (href.startsWith('#page-')) {
      e.preventDefault();
      const pageNumber = parseInt(href.replace('#page-', ''));
      navigateToPage(pageNumber);
    }
  });
}

// Animations
function initializeAnimations() {
  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);
  
  // Observe elements for animation
  const animatedElements = document.querySelectorAll('.project-card, .about-card, .stat-card, .timeline-item, .skill-item');
  animatedElements.forEach(el => observer.observe(el));
}

function triggerPageAnimations(pageNumber) {
  // Trigger specific animations based on page
  switch(pageNumber) {
    case 1:
      // Hero animations
      animateFloatingCards();
      break;
    case 2:
      // About page animations
      animateStats();
      break;
    case 3:
      // Projects animations
      animateProjectCards();
      break;
    case 4:
      // Experience animations
      animateTimeline();
      break;
    case 5:
      // Skills animations
      animateSkillBars();
      break;
    case 6:
      // Contact animations
      animateContactElements();
      break;
  }
}

function animateFloatingCards() {
  const cards = document.querySelectorAll('.floating-card');
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.animation = 'none';
      card.offsetHeight; // Trigger reflow
      card.style.animation = `float 6s ease-in-out infinite ${index * 0.2}s`;
    }, 100);
  });
}

function animateStats() {
  const statNumbers = document.querySelectorAll('.stat-number');
  statNumbers.forEach(stat => {
    const finalValue = stat.textContent;
    const numericValue = parseInt(finalValue.replace(/\D/g, ''));
    
    if (numericValue) {
      animateNumber(stat, 0, numericValue, 2000);
    }
  });
}

function animateNumber(element, start, end, duration) {
  const startTime = performance.now();
  
  function updateNumber(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    const current = Math.floor(start + (end - start) * progress);
    element.textContent = current + (element.textContent.includes('+') ? '+' : '') + (element.textContent.includes('%') ? '%' : '');
    
    if (progress < 1) {
      requestAnimationFrame(updateNumber);
    }
  }
  
  requestAnimationFrame(updateNumber);
}

function animateProjectCards() {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.transform = 'translateY(0)';
      card.style.opacity = '1';
    }, index * 200);
  });
}

function animateTimeline() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach((item, index) => {
    setTimeout(() => {
      item.style.transform = 'translateX(0)';
      item.style.opacity = '1';
    }, index * 300);
  });
}

function animateSkillBars() {
  const skillBars = document.querySelectorAll('.skill-progress');
  skillBars.forEach((bar, index) => {
    setTimeout(() => {
      const width = bar.style.width;
      bar.style.width = '0%';
      bar.offsetHeight; // Trigger reflow
      bar.style.width = width;
    }, index * 200);
  });
}

function animateContactElements() {
  const contactItems = document.querySelectorAll('.contact-item, .social-link');
  contactItems.forEach((item, index) => {
    setTimeout(() => {
      item.style.transform = 'translateY(0)';
      item.style.opacity = '1';
    }, index * 100);
  });
}

// Utility Functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Export functions for global access
window.navigateToPage = navigateToPage;
window.openPDF = openPDF;
window.closePDF = closePDF;

