
document.addEventListener("DOMContentLoaded", function() {
    const openFormBtn = document.getElementById('openFormBtn');
    const movieForm = document.getElementById('movieForm');
    const submitFormBtn = document.getElementById('submitFormBtn');

    openFormBtn.addEventListener('click', () => {
      movieForm.style.display = 'block';
    });

    submitFormBtn.addEventListener('click', (event) => {
      event.preventDefault();

      const movie = {
        title: document.getElementById('titleInput').value,
        poster: document.getElementById('posterInput').value,
        year: parseInt(document.getElementById('yearInput').value),
        duration: document.getElementById('durationInput').value,
        genre: document.getElementById('genreInput').value.split(',').map(genre => genre.trim()),
        rate: parseFloat(document.getElementById('rateInput').value)
      };

      renderFilms(movie, 'lanzamientos-container');
      movieForm.style.display = 'none'; 
    });

    function renderFilms(movie, containerId) {
      const movieElement = document.createElement('div');
      movieElement.classList.add('newFilm-card');

      movieElement.innerHTML = `
        <div class="newFilm-poster">
          <img src="${movie.poster}" alt="${movie.title}">
        </div>
        <div class="newFilm-details">
          <h2 class="newFilm-title">${movie.title}</h2>
          <div class="newFilm-info">
            <span>Año: ${movie.year}</span>
            <span>Duración: ${movie.duration}</span>
            <span>Género: ${movie.genre.join(', ')}</span>
            <span>Valoración: ${movie.rate}</span>
          </div>
        </div>
      `;

      const container = document.getElementById(containerId);
      container.appendChild(movieElement);
    }
  });