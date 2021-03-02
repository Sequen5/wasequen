const random = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `-----[ *RANDOM MENU* ]-----
Hallo, ${pushname} 👋
Semoga harimu Menyenangkan User, ${sender.split("@")[0]}

Berikut adalah fitur yang ada pada bot ini!✨
Jika tidak paham ketik *${prefix}bingungcok*
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ *${prefix}randomhentai*
┃│➸ *${prefix}bokep*
┃│➸ *${prefix}blowjob*
┃│➸ *${prefix}pussy*
┃│➸ *${prefix}wibu*
┃│➸ *${prefix}loli*
┃│➸ *${prefix}neko*
┃│➸ *${prefix}kpop*
┃│➸ *${prefix}anjing*
┃│➸ *${prefix}pokemon*
┃│➸ *${prefix}darkjokes*
┃│➸ *${prefix}meme*
┃│➸ *${prefix}nsfwtrap*
┃│➸ *${prefix}nsfwneko*
┃│➸ *${prefix}nsfwblowjob*
┃│➸ *${prefix}waifu*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
-----[ *POWERED BY ${ownerName}* ]-----`
}
exports.random = random