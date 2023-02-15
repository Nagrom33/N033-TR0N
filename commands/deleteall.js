module.exports = {
  name: 'deleteall',
  aliases: ['p'],
  inVoiceChannel: true,
  run: async (client, message, args) => {
    const moderatorRoleName = 'Moderator' // Replace this with the name of the moderator role
    const moderatorRole = message.guild.roles.cache.find(role => role.name === moderatorRoleName)
    if (!message.member.roles.cache.has(moderatorRole.id)) {
      message.reply(`${client.emotes.error} | Sorry, you do not have permission to use that command.`)
      return
    }

    // Delete all messages in the channel
    const channel = message.channel
    await channel.bulkDelete(100) // This will delete the last 100 messages in the channel.
    message.channel.send(`${client.emotes.success} | All messages deleted!`)
  }
}
