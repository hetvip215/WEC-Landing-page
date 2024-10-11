// JavaScript to toggle the dropdown on click
document.querySelectorAll('.has-dropdown > a').forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const dropdown = this.nextElementSibling;
        document.querySelectorAll('.mega-dropdown').forEach(drop => {
            if (drop !== dropdown) {
                drop.style.display = 'none';
            }
        });

        // Toggle the clicked dropdown
        if (dropdown.style.display === 'block') {
            dropdown.style.display = 'none';
        } else {
            dropdown.style.display = 'block';
        }
    });
});


// Close dropdown when clicking outside
document.addEventListener('click', function (e) {
    const isClickInside = e.target.closest('.has-dropdown');
    if (!isClickInside) {
        document.querySelectorAll('.mega-dropdown').forEach(drop => {
            drop.style.display = 'none';
        });
    }
});

const fixedImage = document.getElementById('fixedImage');
const sections = document.querySelectorAll('.content-block');
const sectionImages = {
    section1: 'anime1-img1.png',
    section2: 'anime1-img2.png',
    section3: 'anime1-img3.png'
};

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;

        // Check if the section's center is within the viewport's vertical center
        if (sectionCenter >= window.innerHeight / 4 && sectionCenter <= (window.innerHeight * 3) / 4) {
            const sectionId = section.id;
            const newImageSrc = sectionImages[sectionId];

            // If the image is already showing the correct image, no need to change it
            if (fixedImage.src.includes(newImageSrc)) return;

            // Change the image source
            fixedImage.src = newImageSrc;

            // Remove the animation class, force reflow, then re-add the class for the pop-out effect
            fixedImage.classList.remove('pop-out');
            void fixedImage.offsetWidth;  // Force reflow to restart the animation
            fixedImage.classList.add('pop-out');
        }
    });
});
// code for animation 3 section 
const fixImg = document.getElementById('fixImg');
const sec = document.querySelectorAll('.content-block');
const secImg = {
    sec1: 'anime3-img1.png',
    sec2: 'anime3-img2.png',
    sec3: 'anime3-img3.png'
};

window.addEventListener('scroll', () => {
    sec.forEach(section => {
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;

        // Check if the section's center is within the viewport's vertical center
        if (sectionCenter >= window.innerHeight / 4 && sectionCenter <= (window.innerHeight * 3) / 4) {
            const sectionId = section.id;
            const newImageSrc = secImg[sectionId];

            // If the image is already showing the correct image, no need to change it
            if (fixImg.src.includes(newImageSrc)) return;

            // Change the image source
            fixImg.src = newImageSrc;

            // Remove the animation class, force reflow, then re-add the class for the pop-out effect
            fixImg.classList.remove('pop-out');
            void fixImg.offsetWidth;  // Force reflow to restart the animation
            fixImg.classList.add('pop-out');
        }
    });
});

const switch2 = document.querySelectorAll('.switch2');
const dynamicImage = document.getElementById('dynamicImage'); 
const selectDrop = {
    info1: 'mobile-img.webp',
    info2: 'Laptop-img.png',
    info3: 'GDPR-img.avif' // Fixed the duplicate key issue
};

switch2.forEach(row => {
    row.addEventListener('click', function() { // Use regular function to access 'this'
        const information = this.nextElementSibling; 
        const newImage = this.getAttribute('data-image');
        dynamicImage.src = newImage;
        document.querySelectorAll('.extra-info').forEach(drop => {
            if (drop !== information) {
                drop.style.display = 'none'; // Hide other 'extra-info' divs

            }
        });

        // Toggle display of the current 'extra-info' div
        if (information.style.display === 'block') {
            information.style.display = 'none';
        } else {
            information.style.display = 'block';
        }
    });
});


