
const TelegramBot = require("node-telegram-bot-api");
const request = require("request");
const url = "https://nice-cyan-fawn-wig.cyclic.app/"


const { Hercai } = require('hercai');
const herc = new Hercai();
const token = "6608460313:AAEtxzs2Bh2kb5f1aopKF_L98mGJBG8oOX4"
const bot = new TelegramBot(token,{polling:true})
bot.on("message",async (msg)=>{
  const chatId = msg.chat.id;
  const msgText = msg.text;
  console.log(msg.text);
  request(url,(err,res,body)={
    if (err){
      console.log(err)
    }else{
      console.log(res.status)
    }
  })
  if (msgText === "/start"){
    bot.sendMessage(chatId,"Welcome to rfs ai")
  }else{
  await herc.question({model:"v2",content:msgText}).then(response => {
bot.sendMessage(chatId,response.reply);

});
   }
});