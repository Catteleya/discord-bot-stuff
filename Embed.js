const { SlashCommandBuilder, EmbedBuilder } = require('discord')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('embed-builder')
    .setDescription('This makes an embed to your liking (do \\n to create a line in description)')
    .addStringOption(option => option.setName('title').setDescription('This will be the title of your embed').setRequired(true))
    .addStringOption(option => option.setName('description').setDescription('This will be your description.').setRequired(true))
    .addStringOption(option => option.setName('').setDescription('').setRequired())
    .addStringOption(option => option.setName('').setDescription('').setRequired())
    .addStringOption(option => option.setName('').setDescription('').setRequired())
    .addStringOption(option => option.setName('').setDescription('').setRequired())
    .addStringOption(option => option.setName('').setDescription('').setRequired())
    .addStringOption(option => option.setName('').setDescription('').setRequired())
}
