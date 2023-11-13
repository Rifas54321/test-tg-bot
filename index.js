const teleGram = require("node-telegram-bot-api");
const {Hercai} = require("hercai");
const bot_token ="6507681162:AAGaoadFk7_24D2TD7MItN7yawuxOkKMe3A";
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
    bot.sendMessage(chatId,"please complete the query")
  }
})
bot.on("message",async(msg)=>{
  const chatId = msg.chat.id;
  if(msg.text=="/image"){
    bot.sendMessage(chatId,"please complete the query")
  }
})
bot.onText(/\/image(.+)/, async(msg, match) => {
 const chatId = msg.chat.id;
 const img_resp = match[1];  
 console.log("image : ",img_resp)
   hercai.drawImage({model:"v2",prompt:img_resp}).then(response => {
   bot.sendPhoto(chatId,Photo=response.url)
 })
 });
 
 bot.onText(/\/text(.+)/, async(msg, match) => {
 const chatId = msg.chat.id;
 const text_resp = match[1];  
 console.log("text : ",text_resp)
hercai.question({model:"v2",content:text_resp}).then(response => {
  bot.sendMessage(chatId,response.reply)

});

 });

