axios = require('axios')
let readline = require('linebyline'),
rl = readline('./assets/cep.txt');






rl.on('line', function(line, lineCount, byteCount) {
    // do something with the line of text

   
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!resolve) {
                throw new Error("Deu erro");
            }
			resolve("Promise resolvida");
            console.log("Promise resolvida");
            axios.get(`http://www.omdbapi.com/?apikey=f63f1ecf&t=${line}`)
            .then(function(response) {
                resolve(response.data)
                console.log(response.data)
            }
            ).catch(function(error) {
        
            }
            )
        }, 5000);
    });
})
