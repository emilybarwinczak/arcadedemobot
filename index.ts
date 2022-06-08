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
    console.log("the bot is readddyyyy")
})

client.on('messageCreate', (message) => {
    if (message.content === 'ping') {
        message.reply({
            content: 'pong',
        })
    }
})

client.on('messageCreate', (message) => {
    if (message.content === 'I have some questions') {
        message.reply({
            content: 'I would love to help answer some',
        })
    }
})

client.on('messageCreate', (message) => {
    if (message.content === 'howdy') {
        message.reply({
            content: 'howdy ho!',
        })
    }
})

client.login(process.env.TOKEN)