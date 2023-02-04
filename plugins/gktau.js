//let { MessageType } = require('@adiwajshing/baileys')
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn, text, participants }) => {
  let users = participants.map(u => u.jid)
  m.reply(text + '\n Hai Saya DimzBot, Semoga Harimu Selalu Cerah Secerah Cahaya Ilahi ', null, {
    contextInfo: { mentionedJid: users }
  })
}
handler.command = ['DimzBot']

handler.admin = false
handler.group = false

export default handler
