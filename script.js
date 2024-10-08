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
