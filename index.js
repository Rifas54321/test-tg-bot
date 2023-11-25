const teleGram = require("node-telegram-bot-api");
const express = require("express")
const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.get("/",async(req,res)=>{
  res.send('<h2 style="text-align:center;">running</h2>')
})
const {Hercai} = require("hercai");
const bot_token ="6608460313:AAEtxzs2Bh2kb5f1aopKF_L98mGJBG8oOX4";
const bot = new teleGram(bot_token,{polling:true})
const hercai = new Hercai();
bot.on("message",async(msg)=>{
  const chatId=msg.chat.id;
  if(msg.text=="/start"){
  var m = {
    reply_markup:{
      keyboard:[[{text:"𝔸𝕓𝕠𝕦𝕥"}]]
    }
  }
const message = `𝙃𝙞! @${msg.chat.username}
𝙬𝙚𝙡𝙘𝙤𝙢𝙚 𝙩𝙤 𝙧𝙛𝙨𝘼𝙞`
     bot.sendMessage(chatId,message,m)
  }else if(msg.text == "𝔸𝕓𝕠𝕦𝕥"){
    bot.sendChatAction(chatId,"typing")
    bot.sendMessage(chatId,"𝔹𝕠𝕥 𝕔𝕣𝕖𝕒𝕥𝕖𝕕 𝕓𝕪 @rifas11")
  }
})
bot.on("message",async(msg)=>{
  const chatId=msg.chat.id;
  if(msg.text=="/text"){
    bot.sendChatAction(chatId,"typing")
    bot.sendMessage(chatId,"𝙋𝙡𝙚𝙖𝙨𝙚 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙚 𝙩𝙝𝙚 𝙦𝙪𝙚𝙧𝙮")
  }
})
bot.on("message",async(msg)=>{
  const chatId = msg.chat.id;
  if(msg.text=="/image"){
    bot.sendChatAction(chatId,"typing")
    bot.sendMessage(chatId,"𝙋𝙡𝙚𝙖𝙨𝙚 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙚 𝙩𝙝𝙚 𝙦𝙪𝙚𝙧𝙮")
  }
})
bot.onText(/\/image(.+)/, async(msg, match) => {
 const chatId = msg.chat.id;
 const img_resp = match[1];  
 console.log("image : ",img_resp)
 try{
   hercai.drawImage({model:"v2",prompt:img_resp}).then(response => {
  bot.sendChatAction(chatId,"typing")
   bot.sendPhoto(chatId,Photo=response.url)
 })
 }catch{
   bot.sendChatAction(chatId,"typing");
   bot.sendMessage(chatId,"𝙎𝙤𝙧𝙧𝙮! 𝙚𝙧𝙧𝙤𝙧 𝙤𝙘𝙘𝙪𝙧𝙚𝙙 𝙥𝙡𝙚𝙖𝙨𝙚 𝙩𝙧𝙮 𝙖𝙜𝙖𝙞𝙣 𝙡𝙖𝙩𝙚𝙧")
 }
 });
 
 bot.onText(/\/text(.+)/, async(msg, match) => {
 const chatId = msg.chat.id;
 const text_resp = match[1];  
 console.log("text : ",text_resp)
try{
hercai.question({model:"v2",content:text_resp}).then(response => {
  bot.sendChatAction(chatId,"typing")
  bot.sendMessage(chatId,response.reply)

});
}catch{
bot.sendChatAction(chatId,"𝙎𝙤𝙧𝙧𝙮! 𝙚𝙧𝙧𝙤𝙧 𝙤𝙘𝙘𝙪𝙧𝙚𝙙 𝙥𝙡𝙚𝙖𝙨𝙚 𝙩𝙧𝙮 𝙖𝙜𝙖𝙞𝙣 𝙡𝙖𝙩𝙚𝙧")
}

 });
app.listen(3100,()=>{console.log("server started")})
