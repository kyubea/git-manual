// active navigation tracking based on scroll position

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.sidebar nav a');
    
    function updateActiveNav() {
        let current = '';
        
        // checks main sections
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        // check h2 subsections
        const subsections = document.querySelectorAll('h2[id]');
        subsections.forEach(subsection => {
            const sectionTop = subsection.offsetTop;
            if (window.pageYOffset >= sectionTop - 100) {
                current = subsection.getAttribute('id');
            }
        });
        
        // updates active states in navigation
        navLinks.forEach(link => {
            const parent = link.parentElement;
            parent.classList.remove('active');
            
            if (link.getAttribute('href') === '#' + current) {
                parent.classList.add('active');
                // nested navigation
                const parentLi = parent.closest('ul').closest('li');
                if (parentLi) {
                    parentLi.classList.add('active');
                }
            }
        });
    }
    
    // scroll updater
    window.addEventListener('scroll', updateActiveNav);
    
    // initial
    updateActiveNav();
});
