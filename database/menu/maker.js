const maker = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `-----[ *MAKER MENU* ]-----
Hallo, ${pushname} 👋
Semoga harimu Menyenangkan User, ${sender.split("@")[0]}

Berikut adalah fitur yang ada pada bot ini!✨
Jika tidak paham ketik *${prefix}bingungcok*
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ *${prefix}hartatahta*
┃│➸ *${prefix}ninjalogo*
┃│➸ *${prefix}halloweentext*
┃│➸ *${prefix}pornhub*
┃│➸ *${prefix}glitchtext*
┃│➸ *${prefix}blackpink*
┃│➸ *${prefix}neontext*
┃│➸ *${prefix}textlight*
┃│➸ *${prefix}coffetext*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
-----[ *POWERED BY ${ownerName}* ]-----`
}
exports.maker = maker