
const TelegramBot = require("node-telegram-bot-api");
const express = require("express")
const path = require("path")
const app = express();
app.use(express.static(path.join(__dirname)));
app.use(express.json());
app.get("/",(req,res)=>{
  req.sendFile("index.html")
  req.end()
})


const { Hercai } = require('hercai');
const herc = new Hercai();
const token = "6608460313:AAEtxzs2Bh2kb5f1aopKF_L98mGJBG8oOX4"
const bot = new TelegramBot(token,{polling:true})
bot.on("message",async (msg)=>{
  const chatId = msg.chat.id;
  const msgText = msg.text;
  console.log(msg.text);
  if (msgText === "/start"){
    bot.sendMessage(chatId,"Welcome to rfs ai")
  }else{
  await herc.question({model:"v2",content:msgText}).then(response => {
bot.sendMessage(chatId,response.reply);

});
   }
});
app.listen(8010,console.log("running"))