  const axios = require("axios").default

  const lineReader = require('line-reader');
  
  lineReader.eachLine('./movies.txt', async function (line, last, callback) {
    const movie = await getMovie(line)
    console.log(movie);
    
    callback(last);
});

async function getMovie(title) {
      const apikey = 'f63f1ecf'
     try {
        const response = await axios.get(`http://www.omdbapi.com/?apikey=${apikey}&t=${title}`)
        // http://www.omdbapi.com/?apikey=[yourkey]&t=[movie title]
      return response.data
    }
      catch (
          error) {
          console.log(error)
          }
       } {
        return {
          title: "Movie not found"
        }
  
  }
  
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
  
  
  
  
  
  
