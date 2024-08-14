document.addEventListener('DOMContentLoaded', () => {
    // Example data, more updates can be added easily
    addUpdate('New Feature: User Profiles', 'We\'ve added user profiles to enhance your personalized experience on Dupuis.lol.');
    addUpdate('Bug Fix: Login Issues', 'Resolved an issue causing unexpected logouts for some users.');
    addUpdate('UI Update: Enhanced Design', 'Refined the user interface for a more modern and sleek experience.');
});

/**
 * Adds a new update card to the updates container
 * @param {string} title - The title of the update
 * @param {string} description - The description of the update
 */
function addUpdate(title, description) {
    const updatesContainer = document.getElementById('updates-container');
    
    // Create the update card
    const updateCard = document.createElement('div');
    updateCard.className = 'update-card';
    
    // Create the title element
    const updateTitle = document.createElement('h2');
    updateTitle.className = 'update-title';
    updateTitle.textContent = title;
    
    // Create the description element
    const updateDescription = document.createElement('p');
    updateDescription.className = 'update-description';
    updateDescription.textContent = description;
    
    // Append title and description to the card
    updateCard.appendChild(updateTitle);
    updateCard.appendChild(updateDescription);
    
    // Append the card to the updates container
    updatesContainer.appendChild(updateCard);
}
