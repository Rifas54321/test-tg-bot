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
const message = `Hi! @${msg.chat.username}
welcome to rfsAi`
     bot.sendMessage(chatId,message)
  }
})
bot.on("message",async(msg)=>{
  const chatId=msg.chat.id;
  if(msg.text=="/text"){
    bot.sendChatAction(chatId,"typing")
    bot.sendMessage(chatId,"please complete the query")
  }
})
bot.on("message",async(msg)=>{
  const chatId = msg.chat.id;
  if(msg.text=="/image"){
    bot.sendChatAction(chatId,"typing")
    bot.sendMessage(chatId,"please complete the query")
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
   bot.sendMessage(chatId,"sorry! error occured please try again later")
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
bot.sendChatAction(chatId,"sorry! error occured please try again later")
}

 });
app.listen(3100,()=>{console.log("server started")})
