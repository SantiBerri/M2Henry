const renderFilms = (movie) => {
    const movieElement = document.createElement('article');
    movieElement.classList.add('film-card');

    movieElement.innerHTML = `
        <div class="film-poster">
            <img src="${movie.poster}" alt="${movie.title}">
        </div>
        <div class="film-details">
            <h2 class="film-title">${movie.title}</h2>
            <div class="film-info">
                <span>Año: ${movie.year}</span>
                <span>Duración: ${movie.duration}</span>
                <span>Género: ${movie.genre.join(', ')}</span>
                <span>Valoración: ${movie.rate}</span>
            </div>
        </div>
    `;

    const filmsSection = document.getElementById('destacadas');
    filmsSection.appendChild(movieElement);
};

module.exports = renderFilms;