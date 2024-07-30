
const { getMoviesService } = require("../services/movie");

const moviesController = (req, res) => {
    const movies = getMoviesService();
    res.status(200).send(movies);
};

module.exports = moviesController;
