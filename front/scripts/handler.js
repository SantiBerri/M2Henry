const renderFilms = require('./renderFilms.js')
const axios = require('axios')

const getFilms = () => {
    axios.get('https://students-api.up.railway.app/movies')
    .then(response => {
        const info = response.data
        info.forEach(element => {
            console.log(element)
            renderFilms(element)
        });
        console.log(response.data)
    })
    .catch(e=>{
        console.error('Error al obtener peliculas', e)
    }) 
}

module.exports = getFilms

