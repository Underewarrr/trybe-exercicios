const axios = require("axios").default

const lineReader = require('line-reader');

lineReader.eachLine('./movies.txt', async function (line, last, callback) {
  const movie = await getMovie(line)
  console.log(movie);

  callback(last);
});


/* const movie = {
    "id": imdbID,
    "title": Title,
    "year": Year + "-01-01",
    "runtime": Runtime,
    "genres": Genre,
    "director": Director,
    "plot": Plot,
    "rating": parseFloat(imdbRating),
  }; */

async function getMovie(title) {
    try {
        const response = await axios.get(`http://www.omdbapi.com/?t=${title}&apikey=4a3b6f6f`)
        return response.data
    }
    catch (error) {
        console.log(error)
    }
}

