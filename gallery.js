document.addEventListener('DOMContentLoaded', function() {
    // Configuration
    const galleryImages = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        // Add as many images as you want
    ];
    
    const rotationInterval = 3000; // Time between rotations in milliseconds (5 seconds)
    let currentImageIndex = 0;
    let rotationTimer;
    
    // Elements
    const galleryImage = document.getElementById('gallery-image');
    const galleryDots = document.querySelector('.gallery-dots');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    // Create dots for each image
    galleryImages.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        
        dot.addEventListener('click', () => {
            currentImageIndex = index;
            updateGallery();
            resetRotationTimer();
        });
        
        galleryDots.appendChild(dot);
    });
    
    // Navigation button event listeners
    prevBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        updateGallery();
        resetRotationTimer();
    });
    
    nextBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        updateGallery();
        resetRotationTimer();
    });
    
    // Function to update the gallery image and active dot
    function updateGallery() {
        // Fade out effect (optional)
        galleryImage.style.opacity = 0;
        
        setTimeout(() => {
            galleryImage.src = galleryImages[currentImageIndex];
            
            // Update active dot
            document.querySelectorAll('.dot').forEach((dot, index) => {
                if (index === currentImageIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
            
            // Fade in effect
            galleryImage.style.opacity = 1;
        }, 300); // This timing should be half of your CSS transition time
    }
    
    // Auto-rotation function
    function startRotationTimer() {
        rotationTimer = setInterval(() => {
            currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
            updateGallery();
        }, rotationInterval);
    }
    
    // Reset timer when user interacts with gallery
    function resetRotationTimer() {
        clearInterval(rotationTimer);
        startRotationTimer();
    }
    
    // Start auto-rotation
    startRotationTimer();
});