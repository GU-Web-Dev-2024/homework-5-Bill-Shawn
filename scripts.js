/*-- Xinye Bao, CS-332, HW 5, 2024-10-05--> */

document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter');
    const resetButton = document.getElementById('reset-button');
    const addArtButton = document.getElementById('add-art-button');
    const removeButton = document.getElementById('(bonus)Remove-Artwork');
    const artGrid = document.getElementById('art-grid');
    let viewedCount = 0;
    let removeMode = false;

    // Provided artworks example
    const newArtworks = [
        { title: 'The Scream', artist: 'Edvard Munch', img: 'https://via.placeholder.com/200' },
        { title: 'Girl with a Pearl Earring', artist: 'Johannes Vermeer', img: 'https://via.placeholder.com/200' },
        { title: 'The Birth of Venus', artist: 'Sandro Botticelli', img: 'https://via.placeholder.com/200' },
        { title: 'The Night Watch', artist: 'Rembrandt van Rijn', img: 'https://via.placeholder.com/200' },
        { title: 'The Kiss', artist: 'Gustav Klimt', img: 'https://via.placeholder.com/200' },
        { title: 'American Gothic', artist: 'Grant Wood', img: 'https://via.placeholder.com/200' },
        { title: 'Las Meninas', artist: 'Diego Velázquez', img: 'https://via.placeholder.com/200' },
        { title: 'The Last Supper', artist: 'Leonardo da Vinci', img: 'https://via.placeholder.com/200' },
        { title: 'Water Lilies', artist: 'Claude Monet', img: 'https://via.placeholder.com/200' },
        { title: 'Starry Night Over the Rhône', artist: 'Vincent van Gogh', img: 'https://via.placeholder.com/200' }
    ];

    // Update the view counter
    function updateCounter() {
        counterElement.textContent = `Artworks Viewed: ${viewedCount}`;
    }

    // Add event listener to each art panel for highlight or unhighlight
    // removeMode indicates which mode should be
    function addPanelEventListeners(panel)
    {
        panel.addEventListener('click', () => {
            if (removeMode) {
                if (panel.classList.contains('viewed')) {
                    panel.classList.remove('viewed');
                    panel.style.backgroundColor = '#eee';
                    viewedCount--;
                    updateCounter();
                }
            } else if (!panel.classList.contains('viewed')) {
                panel.classList.add('viewed');
                panel.style.backgroundColor = '#d0e8f2';
                viewedCount++;
                updateCounter();
            }
        });
    }

    // Reset gallery function
    resetButton.addEventListener('click', () => {
        viewedCount = 0;
        updateCounter();
        const viewedPanels = document.querySelectorAll('.art-panel.viewed');
        viewedPanels.forEach(panel => {
            panel.classList.remove('viewed');
            panel.style.backgroundColor = '#eee';
        });
    });

    // Add new artwork to the gallery
    addArtButton.addEventListener('click', () => {
        const randomArtwork = newArtworks[Math.floor(Math.random() * newArtworks.length)];
        const newPanel = document.createElement('div');
        newPanel.className = 'art-panel';
        newPanel.innerHTML = `
            <img src="${randomArtwork.img}" alt="${randomArtwork.title}">
            <p>${randomArtwork.title} by ${randomArtwork.artist}</p>
        `;
        addPanelEventListeners(newPanel);
        artGrid.appendChild(newPanel);
    });

    // add remove selection button
    removeButton.addEventListener('click', () => {
        removeMode = !removeMode;
        removeButton.textContent = removeMode ? 'Remove Mode: ON' : 'Remove Mode: OFF';
        removeButton.style.backgroundColor = removeMode ? '#ff4d4d' : '#333';
    });

    // Add initial event listeners to existing panels
    document.querySelectorAll('.art-panel').forEach(addPanelEventListeners);
});
