document.addEventListener('DOMContentLoaded', function() {
    // Configuration
    const galleryImages = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        // Add as many images as you want
    ];
    
    const rotationInterval = 4000; // Time between rotations in milliseconds (4 seconds)
    let currentImageIndex = 0;
    const galleryImage = document.getElementById('gallery-image');
    
    // Function to update the gallery image
    function updateGallery() {
        // Fade out
        galleryImage.style.opacity = 0;
        
        setTimeout(() => {
            // Change image source
            galleryImage.src = galleryImages[currentImageIndex];
            
            // Fade in
            galleryImage.style.opacity = 1;
            
            // Move to next image for next time
            currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        }, 500); // Half of the transition time
    }
    
    // Start auto-rotation
    setInterval(updateGallery, rotationInterval);
});