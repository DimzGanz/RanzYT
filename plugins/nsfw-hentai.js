/*import fetch from 'node-fetch'

let handler = async (m, { command, conn }) => {
  let cap = `
Silakan Aktifkan`
   if (global.db.data.chats[m.chat].nsfw == false && m.isGroup) return conn.sendButtonDoc(m.chat, 'โ๐๐๐๐ ๐๐ ๐๐๐๐๐!!', cap, 'แดษดแดสสแด', '.on nsfw', null, adReply)
    let anu = await fetch(`https://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=${global.lolkey}`)

   let fimgb = Buffer.from(await anu.arrayBuffer())

    conn.sendButton(m.chat, 'Random Pict Hentai',botdate, fimgb, [['next', '.hentai2']], m)
}
handler.help = ['hentai2']
handler.tags = ['nsfw']
handler.command = /^(hentai2)$/i
handler.limit = true
handler.premium = true

export default handler*/