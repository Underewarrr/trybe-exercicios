const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  let temp = Math.floor(Math.random() * maxTemperature);
    return temp
};

// crie a função sendMarsTemperature abaixo
function sendMarsTemperature () {
    setTimeout(() => console.log("Returned", getMarsTemperature()),messageDelay());
}
sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo