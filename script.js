const images = [
    { src: 'images/image1.jpg', alt: 'Image 1' },
    { src: 'images/image2.jpg', alt: 'Image 2' },
    { src: 'images/image3.jpg', alt: 'Image 3' },
    { src: 'images/image4.jpg', alt: 'Image 4' },
    { src: 'images/image5.jpg', alt: 'Image 5' },
    { src: 'images/image6.jpg', alt: 'Image 6' },
    { src: 'images/image7.jpg', alt: 'Image 7' },
    { src: 'images/image8.jpg', alt: 'Image 8' },
    { src: 'images/image9.jpg', alt: 'Image 9' },
    { src: 'images/image10.jpg', alt: 'Image 10' },
    { src: 'images/image11.jpg', alt: 'Image 11' },
    { src: 'images/image12.jpg', alt: 'Image 12' },
    
];

const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const closeLightbox = document.getElementById('close-lightbox');
const lightboxImage = document.getElementById('lightbox-image');

// Function to open the lightbox with a specific image
function openLightbox(imageSrc) {
    lightboxImage.src = imageSrc; 
    lightbox.style.display = 'flex'; 
}

// Close lightbox event
closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none'; // Hide the lightbox
});

// Close lightbox on click outside the image
lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

// Create gallery items dynamically
images.forEach(image => {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');

    const imgElement = document.createElement('img');
    imgElement.src = image.src;
    imgElement.alt = image.alt;

    // Add click event listener to the image
    imgElement.addEventListener('click', () => {
        openLightbox(image.src);
    });

    galleryItem.appendChild(imgElement);
    gallery.appendChild(galleryItem);
});

// This line is important to make sure the lightbox is hidden initially
lightbox.style.display = 'none';

// Close lightbox event
closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none'; // Hide the lightbox
});

// Close lightbox on click outside the image
lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
        lightbox.style.display = 'none';
    }
});