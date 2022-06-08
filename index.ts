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
    if (message.content === 'hi') {
        message.reply({
            content: 'hello, I am the Arcade DiscordBot!',
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

client.on('messageCreate', (message) => {
    if (message.content === 'what is arcade') {
        message.reply({
            content: 'Arcade is the leading Game-fi platform enabling holders of the $ARCADE token to earn significant rewards from multiple Play-to-Earn metaverse games without having to play the game themselves or collect the payments or NFTs. Arcade manages the entire process for our token holders, through the strategic infrastructure of guilds, players, and game developers, in-game rewards are passed onto our token holders.',
        })
    }
})

client.login(process.env.TOKEN)