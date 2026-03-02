// Launcher Button Functionality
const launcherButton = document.getElementById('launcherButton');

launcherButton.addEventListener('click', () => {
    console.log('Launcher button clicked!');
    // Add more functionality here
});

// Admin Panel Integration
const adminPanel = document.getElementById('adminPanel');

function toggleAdminPanel() {
    adminPanel.classList.toggle('visible');
    console.log('Admin panel toggled!');
    // More integration code here
}

// Example usage
const toggleButton = document.getElementById('toggleAdminButton');
toggleButton.addEventListener('click', toggleAdminPanel);
