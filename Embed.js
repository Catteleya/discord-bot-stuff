const { SlashCommandBuilder, EmbedBuilder } = require('discord')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('embed-builder')
        .setDescription('This makes an embed to your liking (do \\n to create a line in description)')
        .addStringOption(option => option.setName('title').setDescription('This will be the title of your embed').setRequired(true))
        .addStringOption(option => option.setName('description').setDescription('This will be your description.').setRequired(true))
        .addStringOption(option => option.setName('colour').setDescription('Set the colour to a 6 diget (without the "#") hex code.').setRequired(false).setMaxLength(6))
        .addStringOption(option => option.setName('image').setDescription('Image for the embed. | HAS TO BE A URL!').setRequired(false))
        .addStringOption(option => option.setName('thumbnail').setDescription('Thumbnail for your embed. | HAS TO BE A URL!').setRequired(false))
        .addStringOption(option => option.setName('field-name').setDescription('This is the field name for your embed.').setRequired(false))
        .addStringOption(option => option.setName('field-value').setDescription('This is the field value for you embed.').setRequired(false))
        .addStringOption(option => option.setName('footer').setDescription('This is the footer for your embed').setRequired(false)),
    async execute(client, interaction) {

        const { options } = interaction

        const member = interaction.member;
        const title = options.getString('title');
        const description = options.getString('description');
        const colour = options.getString('color') || '000000';
        const image = options.getString('image');
        const thumbnail = options.getString('thumbnail');
        const fieldn = options.getString('field-name') || ' ';
        const fieldv = options.getString('field-value') || ' ';
        const footer = options.getString('footer') || ' ';

        if (image) {
            if (!image.startsWith('http')) return await interaction.reply({ content: 'You cannot make this your image!', ephemeral: true})
        }
        if (thumbnail) {
            if (!thumbnail.startsWith('http')) return await interaction.reply({ content: 'You cannot make this your thumbnail!', ephemeral: true})
        }

        const embed = new EmbedBuilder()
            .setTitle(title)
            .setDescription(description)
            .setDescription(`0x${colour}`)
            .setImage(image)
            .setThumbnail(thumbnail)
            .setTimestamp()
            .addFields({ name: `${fieldn}`, value: `${fieldv}`})
            .setFooter({ text: `${footer}`, iconURL: member.displayAvatarURL({ dynamic: true })})

            await interaction.reply({ content: 'Your embed has been sent below!', embeds: [embed], ephemeral: true })

            await interaction.channel.send({ embeds: [embed]})
    }
}
