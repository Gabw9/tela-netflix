const movieImages = document.querySelectorAll('.carrossel-imgs img');
const modal = document.getElementById('movie-modal');
const closeModal = document.querySelector('.close');
const movieTitle = document.getElementById('movie-title');
const movieImage = document.getElementById('movie-image');
const movieSynopsis = document.getElementById('movie-synopsis');
const watchButton = document.getElementById('watch-button');

movieImages.forEach(img => {
    img.addEventListener('click', () => {
        const title = img.getAttribute('data-title');
        const synopsis = img.getAttribute('data-synopsis');
        const src = img.getAttribute('src');

        movieTitle.textContent = title;
        movieImage.src = src;
        movieSynopsis.textContent = synopsis;

        modal.style.display = 'block';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

watchButton.addEventListener('click', () => {
    alert('Iniciar o filme...');
});
