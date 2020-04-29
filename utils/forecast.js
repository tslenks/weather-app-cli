const request = require('request')
const chalk  = require('chalk')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=fe2b0352ea9e98fffea158225de38180&units=metric&lang=fr`;
    // console.log(chalk.keyword('orange').inverse(url))
    request.get({url, json:true}, (error, response) => {
        if(!response || response === null || response === undefined){
            callback(chalk.red(`Unable to connect to the server`))   
        } else if (response.body.cod === '400') {
            const {message} = response.body
            callback(chalk.red(message));   
        } else {
            const {current} = response.body    
            const datetime = new Date(current.dt)
            callback(undefined, {current, datetime})            
        }       
    })    
}

module.exports = forecast