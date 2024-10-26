import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async m => {
  const imageBuffer = await (await fetch('https://telegra.ph/file/403a47e628ef49dee27a3.jpg')).buffer()
  let imgurl = await uploadImage(imageBuffer)
  
  const messageContent = `
  ╭⭑⭑⭑★✪ *QUEEN•ROSI* ✪★⭑⭑⭑
  │ 📂 *BOT Name:* _QUEEN_ROSI_MD_
  │ 📝 *Description:* _I'm QUEEN-ROSI. A MultiDevice WhatsApp bot with rich features Created By PAPA IGWE inc._
  │ 👤 *Owner:* _PAPA IGWE_
  │ 🌐 *Channel:* https://whatsapp.com/channel/0029VaoRh0h2UPBAyRobHB2t
  ╰━━━━━━━━━━━━━━━━╯
  `.trim()
  const imageBuffer = await response.buffer()
      let imgurl = await uploadImage(imageBuffer)
      await conn.sendButton(m.chat,'Here is your Result', author, imgurl, [['MENU', `${usedPrefix}menu`]], null, [['WATCH ANIME', `https://ab-streamer.vercel.app`]], m)
}
handler.help = ['bchannel']
handler.tags = ['main']
handler.command = ['igwechannel', 'bchannel']
export default handler
