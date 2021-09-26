import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
intents: [
 Intents.FLAGS.GUILDS,
 Intents.FLAGS.GUILD_MESSAGES
]
})

client.on('ready', () => {
   console.log('The bot is ready')
})

client.on('messageCreate', (message) => {
 if (message.content === 'Whats Khandys youtube?') {
     message.reply({
       content: 'Subscribe to https://www.youtube.com/c/Khandy'
     })
 }
})

client.on('messageCreate', (message) => {
    if (message.content === 'Whats Kaylas youtube??') {
        message.reply({
          content: 'Subscribe to https://www.youtube.com/c/Kovah'
        })
    }
   })

client.login(process.env.TOKEN)