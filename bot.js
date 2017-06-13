const Discord = require('discord.js')
const config = require('./config.js')
const client = new Discord.Client()
var api = 'http://api.openweathermap.org/data/2.5/'
var weather=require('openweather-Node')
weather.setAPPID('cf1bb87b13a1c343101030c6d7714a33')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`)
})

client.on('message', msg => {
  // Check if the message has been posted in a channel where the bot operates
  // and that the author is not the bot itself
  if (msg.channel.type !== 'dm' && (config.channel !== msg.channel.id || msg.author.id === client.user.id)) return

  // If message is hello, post hello too
  if (msg.content === 'hello') {
    console.log(' VOILA !')
    msg.channel.send('Hello')
  } else if (msg.content==='!aide')
  	{

  		var commands =
  		{
  			//meteo
  			'!weather': 'avoir la météo d une ville'
  			'!forecast': 'prevision meteo pour les 5 prochains jours'
  		}
  	}




  if (msg.content.startwith('!weather')){
  	data.content= msg.content.substring(13)
{if (error)
		{ console.log(erreur)}

		else{
				var degres = aData.values.main.temps
				var degresMax= aData.values.main.temp_max
				var wind = aDat7.values.wind.speed
				var humidity = aData.values.main.humidity
				var cloud = aData.values.clouds.all

				msg.channel.sendMessage('La température est de '+deg+' Celius')
				msg.channel.sendMessage('L humidité est de '+humidity+'%')
				msg.channel.sendMessage('Le vent souffle à'+wind+'km/h')
					if(+wind+ > 30
							{
								msg.channel.sendMessage('Soyez prudent')
							}
						)
						else{ msg.channel.sendMessage('Sortez sans crainte')}

				msg.channel.sendMessage(+aData.values.weather[0].description)

		}

		if(msg.content.startwith('!forecast'))
 				{
			    weather.forecast(msg.content.substring(10), function (error, aData) {
			      if (error) {
			        console.log(error)
			      }

			      else
			      {
			      	var j1 = aData.values.list[0].main.temps
					var w1 = aDat.values.list[0].wind.speed
					

					var j2 = aData.values.list[1].main.temps
					var w2 = aDat.values.list[1].wind.speed
					
					var j3 = aData.values.list[2].main.temps
					var w3 = aDat.values.list[2].wind.speed
					

					var j4 = aData.values.list[3].main.temps
					var w4 = aDat.values.list[3].wind.speed
					
					var j5 = aData.values.list[4].main.temps
					var w5 = aDat.values.list[4].wind.speed
					
					
					msg.channel.sendMessage('Voici la météo des 5 prochains jours')
			      	
			      	msg.channel.sendMessage('le jour 1 il fera' +aData.values.list[0].main.temps+'°C, le vent ira a ' +aDat.values.list[0].wind.speed+)
			      	msg.channel.sendMessage('il fera '+aData.values.list[0].weather[0].description)

			      	 	msg.channel.sendMessage('le jour 2 il fera' +aData.values.list[1].main.temps+'°C, le vent ira a ' +aDat.values.list[1].wind.speed+)
			      	msg.channel.sendMessage('il fera '+aData.values.list[1].weather[0].description)

			      	 	msg.channel.sendMessage('le jour 3 il fera' +aData.values.list[2].main.temps+'°C, le vent ira a ' +aDat.values.list[2].wind.speed+)
			      	msg.channel.sendMessage('il fera '+aData.values.list[2].weather[0].description)

			      	 	msg.channel.sendMessage('le jour 4 il fera' +aData.values.list[3].main.temps+'°C, le vent ira a ' +aDat.values.list[3].wind.speed+)
			      	msg.channel.sendMessage('il fera '+aData.values.list[3].weather[0].description)

			      	 	msg.channel.sendMessage('le jour 5 il fera' +aData.values.list[4].main.temps+'°C, le vent ira a ' +aDat.values.list[4].wind.speed+)
			      	msg.channel.sendMessage('il fera '+aData.values.list[4].weather[0].description)


			      }



}

  		)
  }
})

client.login(config.token)
