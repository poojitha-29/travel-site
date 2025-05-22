document.addEventListener('DOMContentLoaded', () => {
  // Header scroll effect
  const header = document.querySelector('.header');
  const scrollThreshold = 50;

  function handleScroll() {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll);

  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navList = document.querySelector('.nav-list');

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      navList.classList.toggle('active');
      mobileMenuBtn.setAttribute('aria-expanded', 
        mobileMenuBtn.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
      );
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (navList.classList.contains('active') && 
        !e.target.closest('.nav-list') && 
        !e.target.closest('.mobile-menu-btn')) {
      navList.classList.remove('active');
      if (mobileMenuBtn) {
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      }
    }
  });

  // Animate elements on scroll
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  
  const animateOnScroll = () => {
    animateElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight - 100) {
        element.classList.add('fade-in');
      }
    });
  };
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Initial check
  
  // Destination slider (if exists)
  const destinationSlider = document.querySelector('.destination-slider');
  if (destinationSlider) {
    let currentSlide = 0;
    const slides = destinationSlider.querySelectorAll('.destination-slide');
    const totalSlides = slides.length;
    const nextBtn = document.querySelector('.slider-next');
    const prevBtn = document.querySelector('.slider-prev');
    
    const updateSlider = () => {
      slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
      });
    };
    
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
      });
    }
    
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
      });
    }
    
    updateSlider();
  }
  
  // Search form handling
  const searchForm = document.querySelector('.search-form');
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // In a real app, this would submit to a backend
      // For now, we'll just show an alert
      const destination = searchForm.querySelector('[name="destination"]').value;
      alert(`Searching for trips to ${destination}... (This is just a UI demo)`);
    });
  }
  
  // Newsletter form handling
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // In a real app, this would submit to a backend
      const email = newsletterForm.querySelector('[name="email"]').value;
      alert(`Thanks for subscribing with ${email}! (This is just a UI demo)`);
      newsletterForm.reset();
    });
  }
});