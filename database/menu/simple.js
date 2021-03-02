const simple = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `-----[ *SIMPLE MENU* ]-----
Hallo, ${pushname} 👋
Semoga harimu Menyenangkan User, ${sender.split("@")[0]}

Berikut adalah fitur yang ada pada bot ini!✨
Jika tidak paham ketik *${prefix}bingungcok*
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ *${prefix}sticker*
┃│➸ *${prefix}stickergif*
┃│➸ *${prefix}ttp*
┃│➸ *${prefix}tts*
┃│➸ *${prefix}toimg*
┃│➸ *${prefix}nulis*
┃│➸ *${prefix}simi*
┃│➸ *${prefix}stalkig*
┃│➸ *${prefix}quotes*
┃│➸ *${prefix}bikinquote*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
----[ *POWERED BY ${ownerName}* ]----`
}
exports.simple = simple