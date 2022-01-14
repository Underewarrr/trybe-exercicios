const API_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest" ;

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    endpoint: `/currencies/usd.min.json`
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => console.log(data));
};

window.onload = () => fetchJoke();