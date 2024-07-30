// Importación de la clase Movies
const Movies = require('../utils/movieClass');

// Definición de los datos de películas
const movieEsquema = [
    {
        "title": "Guardians of the Galaxy Vol. 2",
        "year": 2017,
        "director": "James Gunn",
        "duration": "2h 16min",
        "genre": [
            "Action",
            "Adventure",
            "Comedy",
        ],
        "rate": 7.7,
        "poster": "https://i.pinimg.com/736x/1e/e0/62/1ee06299c6d7515c71e0dc52fe0a82ed.jpg"
    }
];

// Función para obtener las películas
const getMoviesService = () => {
    const newMovies = movieEsquema.map(movieData => new Movies(movieData));
    console.log(newMovies);
    return newMovies;
};

module.exports = {
    getMoviesService: getMoviesService
};
