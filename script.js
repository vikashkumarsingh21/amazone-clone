// Search input event
document.querySelector('.search-icon').addEventListener('click', () => {
    const query = document.querySelector('.search-input').value.trim();
    if (query) {
        alert(`Searching for "${query}"... (This is a mock search)`);
    } else {
        alert('Please enter a search term.');
    }
});

// Sign-in click
document.querySelector('.nav-singin').addEventListener('click', () => {
    alert('Redirecting to sign-in page... (Demo only)');
});

// Cart click
document.querySelector('.nav-cart').addEventListener('click', () => {
    alert('Your cart is currently empty.');
});

// Responsive menu toggle (if you implement a toggle)
const panelAll = document.querySelector('.panel-all');
if (panelAll) {
    panelAll.addEventListener('click', () => {
        alert('Menu toggle clicked (implement mobile menu if needed).');
    });
}
