// Async node first method => setTimeOut
console.log('start')
setTimeout(()=>{  console.log('waiting')}, 2000)
setTimeout(()=>{  console.log('0 second timer')}, 0)
console.log('end')
// ==> node is async non-blocking model because it does not wait the setTimeout function but print already the end
/**
    start
    end  
    0 second timer
    waiting
    ----
    In the synchronous model, we would be waiting for the setTimeout to finish before the script continues
 */

// ------------

 const chalk = require('chalk')

const urlToGetLongLat = 'https://api.mapbox.com/geocoding/v5/mapbox.places/starbucks.json?bbox=-77.083056,38.908611,-76.997778,38.959167&access_token=pk.eyJ1IjoidHNsZW5rcyIsImEiOiJjazkzMzZkY3IwMTVsM25ubngzMTVlaGQ1In0.ARAyVqVyneV20pes_YODwA&limit=1'
// const urlToGetLongLat = 'https://api.mapbox.com/geocoding/v5/mapbox.places/starbucks.json?bbox=-77.083056,38.908611,-76.997778,38.959167&access_token=pk.eyJ1IjoidHNsZW5rcyIsImEiOiJjazkzMzZkY3IwMTVsM25ubngzMTVlaGQ1In0.ARAyVqVyneV20pes_YODwA&limit=1' // wrong url
/* request.get({url:urlToGetLongLat, json:true}, (error, response) => {
    if(response.body && response.body.message) {
        console.log(chalk.red(response.body.message));
        return
    } 

    const [feature] = response.body.features
    const [longitude, latitude] = feature.center
    console.log('longitude ===> ', longitude)
    console.log('latitude  ===> ', latitude)
}) */

// const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=-18.816236&lon=47.543490&appid=fe2b0352ea9e98fffea158225de38180&units=metric&lang=fr'
//const url = 'https://api.openweathermap.org/data/2.5/onecall?lon=47.543490&appid=fe2b0352ea9e98fffea158225de38180&units=metric&lang=fr' // wrong-url
/* request.get({url, json:true}, (error, response) => {            
    if(!response || response === null || response === undefined){
        console.log(chalk.red(`Unable to connect to the server`));   
        return     
    } else if (response.body.cod === '400') {
        const {message} = response.body
        console.log(chalk.red(message))
        return
    }
        
    const {current} = response.body    
    const datetime = new Date(current.dt);    
    console.log(chalk.greenBright(`${datetime} ==> It is currently ${current.temp} °C and the cloudiness is about ${current.clouds} %`));    
}) */