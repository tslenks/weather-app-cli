const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')
const chalk = require('chalk')

const [exec, file, country] = process.argv;

if(!country) {
    return console.log(chalk.red('no country provided after the command argument'))    
}

geocode(country, (error, result) => {    
    if(error) {
        return console.log(chalk.red(`error on geocode : ${error}`))
    } 

    const {place_name, latitude, longitude} = result
    forecast(latitude, longitude, (errors, {datetime, current}) => {
        if (errors) {
            console.log(chalk.red(`error on forecast : ${errors}`))
        } else {    
            console.log(chalk.greenBright(`${place_name} :: It is currently ${current.temp} °C and the cloudiness is about ${current.clouds} %`));          
        }
    })
})