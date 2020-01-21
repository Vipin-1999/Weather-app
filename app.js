const chalk = require('chalk')
const request = require('request')
const geocode = require('./geocode')
const forecast = require('./forecast.js')

var address = process.argv[2]

if(address.length < 3)
    console.log('Please prvide an address!')
else    {
    geocode(address, (error, {latitude, longitude, location}) => {
        if(error)
            console.log(chalk.red.inverse('Error') +  ' : ' + error)
        else    {
            console.log(chalk.green.inverse('Location') + ' : ' + location)
            forecast(latitude, longitude, (error, forecastdata) => {
                if(error)
                    console.log(chalk.red.inverse('Error') + ' : ' + error)
                else
                    console.log(chalk.cyan.inverse('Data') + ' : ' + forecastdata)
            })
        }
    })
}