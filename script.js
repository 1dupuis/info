document.addEventListener('DOMContentLoaded', () => {
    // Add initial updates
    addUpdate('Added Game', 'A new game has been added to Dupuis.lol, providing an engaging way to learn and explore.');
    addUpdate('Added APIs (Translation, YouTube)', 'New APIs for translation and YouTube integration have been added, enhancing the overall functionality.');
    addUpdate('Added Additional Resources', 'New resources have been added, including events, translation tools, and YouTube videos.');
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
