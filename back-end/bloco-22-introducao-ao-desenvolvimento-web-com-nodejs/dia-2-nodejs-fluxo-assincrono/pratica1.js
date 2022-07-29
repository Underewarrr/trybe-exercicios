axios = require('axios')
let readline = require('linebyline'),
rl = readline('./assets/cep.txt');






rl.on('line', function(line, lineCount, byteCount) {
    // do something with the line of text
    axios.get(`http://ws.matheuscastiglioni.com.br/ws/cep/find/${line}/json`, (err, res) => {
    
    if (res.data.cep) {
            console.log(res.data);
            res.status(200).json('Working', res.data.cep);
            response.json()
            data => cep = data.cep
        }
        else {
            res.status(404).json('Not found', err);
        }
    }
    )
})
