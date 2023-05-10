const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Help command!'),
    async execute(client, interaction) {

        const Help = new EmbedBuilder()
            .setTitle('Help Centre')
            .setDescription('Help Command Guide:')
            .setColor('0x000000')
            .addFields({ name: 'Page 1', value: 'Help $ Resources | Button 1'})
            .addFields({ name: 'Page 2', value: 'Info | Button 2'})
            .addFields({ name: 'Page 3', value: 'Community Commands | Button 3'})
            .addFields({ name: 'Page 4', value: 'Utility Commands | Button 4'})
            .addFields({ name: 'Page 5', value: 'Reddit Commands | Button 5'})
            .addFields({ name: 'Page 6', value: 'Animal Commands | Button 6'})
            .addFields({ name: 'Page 7', value: 'Economy/Leveling Commands | Button 7'})
            .addFields({ name: 'Page 8', value: 'Moderation Commands | Button 8'})

        const info = new EmbedBuilder()
            .setTitle('Test')

        const CCommands = new EmbedBuilder()
            .setTitle('Community Commands')
            .setColor('0x000000')
            .addFields({ name: '/help', value: 'do /help to see the Help Centre'})
            .addFields({ name: '/review', value: 'do /review to review our bot :3 | WE GET THE RESONCES IF U ABUSE WE WILL BLACKLIST YOU'})
            .addFields({ name: '/anime-hug', value: 'do /anime-hug to get an anime-hug.gif!'})
            .addFields({ name: '/anime-pat', value: 'do /anime-pat to get an anime-pat.gif!'})
            .addFields({ name: '/anime-wink', value: 'do /anime-wink to get an anime-wink.gif!'})
            .addFields({ name: '/are_you_ok', value: '😭'})
            .addFields({ name: '/blue', value: 'do /blue to blue-ify a member'})
            .addFields({ name: '/blur', value: 'do /blur to blur-ify a member'})
            .addFields({ name: '/blurple', value: 'do /blurple to blurple-ify a member'})
            .addFields({ name: '/boldtext', value: 'do /boldtext to make your text bold'})
            .addFields({ name: '/codeblock', value: 'do /codeblock to make your text into a codeblock'})
            .addFields({ name: '/fake-tweet', value: 'do /fake-tweet to make a fake tweet'})
            .addFields({ name: '/fake-yt-comment', value: 'do /fake-yt-comment to make a fake YouTube comment'})
            .addFields({ name: '/gay', value: 'do /gay to gay-ify a user'}
            .addFields({ name: '/glass', value: 'do /glass to glass-ify a user'}))
            .addFields({ name: '/green', value: 'do /green to green-ify a user'})
            .addFields({ name: '/hi', value: 'do /hi to say hi :3'})
            .addFields({ name: '/howgay', value: 'do /howgay to see how gay a user is'})
            .addFields({ name: '/hug', value: 'do /hug to hug a user'})
            .addFields({ name: '/im_not_ok', value: 'do /im_not_ok to get help emotionaly'})
            .addFields({ name: '/invert', value: 'do /invert to invert a user'})
            .addFields({ name: '/jail', value: 'do /jail to jail a user'})
            .addFields({ name: '/mission-passed', value: 'do /mission-passed to mission-passed-ify a user'})
            .addFields({ name: '/pixelate', value: 'do /pixalate to pixelate-ify a user'})
            .addFields({ name: '/red', value: 'do /red to red-ify a user'})
            .addFields({ name: '/sepia', value: 'do /sepia to sepia-ify a user'})
            .addFields({ name: '/simp-card', value: 'do /smip-card to get someones simp-card'})
            .addFields({ name: '/triggered', value: 'do /to'})
            .addFields({ name: '/wasted', value: 'do /wasted to wasted-ify a user'})

        const UCommands = new EmbedBuilder()
            .setTitle('Utility Commands')
            .setColor('0x000000')
            .addFields({ name: '/8ball', value: 'do /8ball to ask a question to an 8-Ball.'})
            .addFields({ name: '/bug', value: 'do /bug to report a bug'})
            .addFields({ name: '/buttons', value: 'do /buttons to see the diff types of buttons'})
            .addFields({ name: '/info', value: 'do /info to get info'})
            .addFields({ name: '/invite', value: 'do /invite to invite me to your server :3'})
            .addFields({ name: '/italictext', value: 'do /italictext to make your text italic'})
            .addFields({ name: '/membercount', value: 'do /membercount to see the member count of the current server'})
            .addFields({ name: '/ping', value: 'do /ping to ping or to pong'})
            .addFields({ name: '/serverinfo', value: 'do /serverinfo to get breif info about the current server'})
            .addFields({ name: '/spoilertext', value: 'do /spoilertext to spoil your text'})
            .addFields({ name: '/subtract', value: 'do /subtract to subtract'})
            .addFields({ name: '/support', value: 'do /support to get support in my server'})
            .addFields({ name: '/underscoretext', value: 'do /underscoretext to underscore your text'})
            .addFields({ name: '/updates', value: 'do /updates to see the latest updates!'})
            .addFields({ name: '/userinfo', value: 'do /userinfo to stalk a user'})
            .addFields({ name: '/vent', value: 'do /vent to vent'})

        const RCommands = new EmbedBuilder()
            .setTitle('Reddit Commands')
            .setColor('0x000000')
            .addFields({ name: '/reddit', value: 'do /reddit to see all of the reddit commands'}
            .addFields({ name: '/memes', value: 'do /memes to see a meme from r/memes'}))
            .addFields({ name: '/horror', value: 'do /horror to see r/horror storys'})
            .addFields({ name: '/nosleep', value: 'do /nosleep to see a r/nosleep story'})

        const ACommands = new EmbedBuilder()
            .setTitle('Animal Commands')
            .setColor('0x000000')
            .addFields({ name: '/cat', value: 'do /cat to see cat facts or images'})
            .addFields({ name: '/dog', value: 'do /dog to see cat facts or images'})
            .addFields({ name: '/fox', value: 'do /fox to see fox facts or images'})
            .addFields({ name: '/kangaroo', value: 'do /kankaroo to see kangaroo facts or images'})
            .addFields({ name: '/koala', value: 'do /koala to see koala facts or images'})
            .addFields({ name: '/panda', value: 'do /panda to see panda facts or images'})
            .addFields({ name: '/racoon', value: 'do /raccon to see racoon facts or images'})
            .addFields({ name: '/redpanda', value: 'do /redpanda to see red panda facts or images'})

        const ECommands = new EmbedBuilder()
            .setTitle('Test')

        const MCommands = new EmbedBuilder()
            .setTitle('Moderation Commands')
            .setColor('0x000000')
            .addFields({ name: '/automod -----', value: 'do /automod ----- to set up automod! | NOTE: the -\'s in the command means it\'s a sub command'})
            .addFields({ name: '/mute', value: 'do /mute to mute a user'})
            .addFields({ name: '/offline', value: 'lol only <@608493376861634573> can do that!'})
            .addFields({ name: '/poll', value: 'do /poll to create a poll'})
            .addFields({ name: '/purge', value: 'do /purge to purge messages'})
            .addFields({ name: '/say', value: 'do /say to make the bot say something'})
            .addFields({ name: '/ticket', value: 'lol only <@608493376861634573> can do that!'})

        const buttons = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('page1')
                    .setLabel('Page 1')
                    .ButtonStyle(ButtonStyle.Success),
                
                new ButtonBuilder()
                    .setCustomId('page2')
                    .setLabel('Page 2')
                    .ButtonStyle(ButtonStyle.Success),
                
                new ButtonBuilder()
                    .setCustomId('page3')
                    .setLabel('Page 3')
                    .ButtonStyle(ButtonStyle.Success),

                new ButtonBuilder()
                    .setCustomId('page4')
                    .setLabel('Page 4')
                    .ButtonStyle(ButtonStyle.Success),

                new ButtonBuilder()
                    .setCustomId('page5')
                    .setLabel('Page 5')
                    .ButtonStyle(ButtonStyle.Success),

                new ButtonBuilder()
                    .setCustomId('page6')
                    .setLabel('Page 6')
                    .ButtonStyle(ButtonStyle.Success),

                new ButtonBuilder()
                    .setCustomId('page7')
                    .setLabel('Page 7')
                    .ButtonStyle(ButtonStyle.Success),

                new ButtonBuilder()
                        .setCustomId('page8')
                        .setLabel('Page 8')
                        .ButtonStyle(ButtonStyle.Success),
            )
        
        const message = await interaction.reply({ embeds: [Help], components: [buttons]});

        const collector = await message.createMessageComponentCollector();

        collector.on('collect', async i => {

            if (i.customId === 'page1') {
                await i.update({ embeds: [Help], components: [buttons]})
            }
            if (i.customId === 'page2') {
                await i.update({ embeds: [info], components: [buttons]})
            }
            if (i.customId === 'page3') {
                await i.update({ embeds: [CCommands], components: [buttons]})
            }
            if (i.customId === 'page4') {
                await i.update({ embeds: [UCommands], components: [buttons]})
            }
            if (i.customId === 'page5') {
                await i.update({ embeds: [RCommands], components: [buttons]})
            }
            if (i.customId === 'page6') {
                await i.update({ embeds: [ACommands], components: [buttons]})
            }
            if (i.customId === 'page7') {
                await i.update({ embeds: [ECommands], components: [buttons]})
            }
            if (i.customId === 'page8') {
                await i.update({ embeds: [MCOmmands], components: [buttons]})
            }
        
})}}
