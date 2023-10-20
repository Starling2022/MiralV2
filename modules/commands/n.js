module.exports.config = {
	name: "\n",
	version: "1.0.5",
	hasPermssion: 0,
	credits: "Tpk",
	description: "sailenh",
	commandCategory: "Tiện ích",
	usages: "Tiện ích",
	cooldowns: 0
};

module.exports.run = async ({ api, event }) => {
    var os = require("os");
	var cpus = os.cpus();
	var chips;
	for (var i of cpus) chips = i.model, speed = i.speed;
	if (cpus == undefined);
  const allicon = ["💞","💖","💗","💜","🌸","💗","💝","🎀","🌹","🍁","🎊","🌟","🍁"];
const icon = allicon[Math.floor(Math.random()*allicon.length)];
const axios = require('axios');
    const request = require('request');
    const timeStart = Date.now();
  const dcm = process.uptime(); 
      var anh = Math.floor(dcm / (60 * 60));
	var la = Math.floor((dcm % (60 * 60)) / 60);
	var vtoan = Math.floor(dcm % 60);
  const fs = require("fs");
    const moment = require("moment-timezone");
  const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
  const xuly = Math.floor((Date.now() - global.client.timeStart)/4444)
 var trinhtrang = xuly < 10 ? " 𝗧𝗼̂́𝘁 ✔️":
  xuly > 10 && xuly < 100 ? " 𝗢̂̉𝗻 Đ𝗶̣𝗻𝗵 📊" : "𝗗𝗲𝗽𝗹𝝰𝝲 ";
   var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
					api.sendMessage({
                                                body: `💓 ==== [ Nguyễn Hoàng Long  ] ==== 💓 💓\n━━━━━━━━━━━━━━━━━━\n⏰ 𝗧𝗶𝗺𝗲: ${timeNow}\n ⏳ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗼𝗻𝗹: ${anh} 𝗴𝗶𝗼̛̀ ${la} 𝗽𝗵𝘂́𝘁 ${vtoan} 𝗴𝗶𝗮̂𝘆 💓\n🧸 𝗛𝗼̂𝗺 𝗻𝗮𝘆 𝗹𝗮̀ ${thu} 💓 \n◆━━━◆『 ${icon} 』◆━━━◆ \n☁️ 𝗖𝗮 𝗱𝗮𝗼: \n━━━━━━━━━━━━━━━━━━\n ⚠️ 𝗧𝗶̀𝗻𝗵 𝘁𝗿𝗮̣𝗻𝗴 𝗵𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 đ𝗮𝗻𝗴 𝗼̛̉ 𝗺𝘂̛́𝗰: ${trinhtrang} \n 🌸 𝗧𝗼̂́𝗰 đ𝗼̣̂ 𝘅𝘂̛̉ 𝗹𝘆́: ${Date.now() - timeStart} 𝗴𝗶𝗮̂𝘆\n⚙️ 𝗟𝗼̂̀𝗻𝗴 𝗖𝗣𝗨: ${os.cpus().length}\n\n━━━━━━━━━━━━━━━━━━\n 💮 𝗧𝗵𝗮̉ 𝗰𝗮̉𝗺 𝘅𝘂́𝗰 "😭" 𝘃𝗮̀𝗼 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗰𝘂̉𝗮 𝗯𝗼𝘁 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝗵𝗲𝗹𝗽`,
},event.threadID, (err, info) => {
    global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
    })
    },event.messageID);
     }
module.exports.handleReaction = async ({ event, api, handleReaction, Currencies, Users}) => {
  var os = require("os");
	var cpus = os.cpus();
	var chips;
	for (var i of cpus) chips = i.model, speed = i.speed;
	if (cpus == undefined);
	const timeStart = Date.now();
const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
  const { threadID, messageID, userID } = event;
  const xuly = Math.floor((Date.now() - global.client.timeStart)/4444)
 var trinhtrang = xuly < 10 ? " TỐT ✔️":
  xuly > 10 && xuly < 100 ? " ỔN ĐỊNH 📊" : "DEPLAY ";
if (event.userID != handleReaction.author) return;
if (event.reaction != "😭") return; 
 api.unsendMessage(handleReaction.messageID);
        var msg = `=== [ 𝗠𝗘𝗡𝗨 𝗧𝗛𝗢̂𝗡𝗚 𝗧𝗜𝗡 ] ===\n━━━━━━━━━━━━━━━━━━\n𝟭. 𝗫𝗲𝗺 𝗰𝗮́𝗰 𝗹𝗲̣̂𝗻𝗵 𝗵𝗮𝘆 đ𝘂̛𝗼̛̣𝗰 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 🧸\n𝟮. 𝗧𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗹𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝗮𝗱𝗺𝗶𝗻 𝗯𝗼𝘁 ☎️\n𝟯. 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝘄𝗲𝗯 𝗮𝗽𝗶 𝗰𝘂̉𝗮 /𝗯𝗼𝘁 🖨️\n𝟰. 𝗧𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝘃𝗲̂̀ 𝗯𝗼𝘁 💻\n\n𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘁𝗵𝗲𝗼 𝘀𝗼̂́ đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺\n\n━━━━━━━━━━━━━━━━━━\n⚠️ 𝗧𝗶̀𝗻𝗵 𝘁𝗿𝗮̣𝗻𝗴 𝗵𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 đ𝗮𝗻𝗴 𝗼̛̉ 𝗺𝘂̛́𝗰: ${trinhtrang} \n 🌸 𝗧𝗼̂́𝗰 đ𝗼̣̂ 𝘅𝘂̛̉ 𝗹𝘆́: ${Date.now() - timeStart} 𝗴𝗶𝗮̂𝘆\n⚙️ 𝗟𝗼̂̀𝗻𝗴 𝗖𝗣𝗨: ${os.cpus().length}`
        return api.sendMessage({body: msg
},event.threadID,(error, info) => {
        
            global.client.handleReply.push({
                type: "choosee",
                name: this.config.name,
                author: event.senderID,
                messageID: info.messageID
            })
        })
    }
module.exports.handleReply = async function ({
    args,
    event,
    Users,
    api,
    handleReply,
    Currencies,
    __GLOBAL
}) {
  const axios = require("axios");
  const fs = require("fs-extra");
        api.sendMessage(`vui lòng chờ 1 xiu`, event.threadID, (err, info) =>
	setTimeout(() => {api.unsendMessage(info.messageID) } , 100000));
  const request = require("request");
       const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
  let data = (await Currencies.getData(event.senderID)).ghepTime;
 
    
    switch (handleReply.type) {
    case "choosee": {
        switch (event.body) {
          case "" :
          case "":
        case "1": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `==== [ 𝗠𝗨𝗟𝗧𝗜𝗣𝗟𝗘 𝗨𝗦𝗘𝗗 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 ] ====
━━━━━━━━━━━━━━━━━━
🐼 𝗖𝗮́𝗰 𝗹𝗲̣̂𝗻𝗵 𝘁𝗵𝘂̛𝗼̛̀𝗻𝗴 đ𝘂̛𝗼̛̣𝗰 𝗱𝘂̀𝗻𝗴 🐼

🌸 𝗱𝘂̀𝗻𝗴 !𝗵𝗲𝗹𝗽: 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝘁𝗮̂́𝘁 𝗰𝗮̉ 𝗹𝗲̣̂𝗻𝗵 𝗯𝗼𝘁 𝗰𝗼́
💞 𝗱𝘂̀𝗻𝗴 !𝗰𝗵𝗲𝗰𝗸𝘁𝘁: đ𝗲̂̉ 𝘅𝗲𝗺 𝘀𝗼̂́ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗺𝗮̀ 𝗯𝗮̣𝗻 đ𝗮̃ 𝗻𝗵𝗮̆́𝗻
🌷 𝗱𝘂̀𝗻𝗴 !𝗰𝗵𝗲𝗰𝗸: 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝗰𝗮́𝗰 𝗹𝗲̣̂𝗻𝗵 𝘃𝗲̂̀ 𝗰𝗵𝗲𝗰𝗸
💕 !𝗯𝗼𝘅 𝗶𝗻𝗳𝗼: đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝘃𝗲̂̀ 𝗯𝗼𝘅 
💍 !𝗴𝗵𝗲𝗽: 𝗽𝗵𝗶𝗲̂𝗻 𝗯𝗮̉𝗻 𝗰𝗮𝗻𝘃𝗮𝘀 
🕊️ !𝗴𝗵𝗲́𝗽: 𝗰𝘂̃𝗻𝗴 𝗹𝗮̀ 𝗴𝗵𝗲́𝗽 𝗻𝗵𝘂̛̃𝗻𝗴 𝗹𝗮̀ 𝗽𝗵𝗶𝗲̂𝗻 𝗯𝗮̉𝗻 𝘁𝗶𝗻𝗱𝗲𝗿
☠️ !𝗹𝗼𝗰𝗺𝗲𝗺: 𝗹𝗼̣𝗰 𝗻𝗵𝘂̛̃𝗻𝗴 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝘂̛𝗼̛𝗻𝗴 𝘁𝗮́𝗰
💝 !𝘀𝗲𝘁𝗻𝗮𝗺𝗲 + 𝘁𝗲̂𝗻: 𝘀𝗲𝘁 𝗯𝗶𝗲̣̂𝘁 𝗱𝗮𝗻𝗵 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗼̛̉ 𝗻𝗵𝗼́𝗺
💓 !𝘆𝗼𝘂𝘁𝘂𝗯𝗲 & 𝘁𝗲̂𝗻 𝗰𝗹𝗶𝗽: 𝘁𝗮̉𝗶 𝗰𝗹𝗶𝗽 𝘁𝗿𝗲̂𝗻 𝘆𝘁𝗯
🎥 !𝘁𝗶𝗸𝘁𝗼𝗸: 𝘁𝗮̉𝗶 𝘃𝗶𝗱𝗲𝗼 𝘁𝗶𝗸𝘁𝗼𝗸 𝗱𝘂̀𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 𝗱̶𝗲̂̉ 𝗯𝗶𝗲̂́𝘁 𝗰𝗵𝗶 𝘁𝗶𝗲̂́𝘁
🎼 !𝘀𝗶𝗻𝗴 𝗼𝗿 𝘁𝗲̂𝗻 𝗯𝗮̀𝗶 𝗵𝗮́𝘁: 𝗽𝗵𝗮́𝘁 𝗯𝗮̀𝗶 𝗵𝗮́𝘁 𝗱𝗮̣𝗻𝗴 𝘃𝗼𝗶𝗰𝗲𝘀
👤 !𝗶𝗻𝗳𝗼: 𝘅𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝘃𝗲̂̀ 𝗮𝗰𝗰 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻
🔗 !𝗶𝗺𝗴𝘂𝗿 + 𝗿𝗲𝗽𝗹𝘆 𝗮̉𝗻𝗵: 𝗹𝗮̂́𝘆 𝗹𝗶𝗻𝗸 𝗶𝗺𝗴𝘂𝗿
💗 !𝗻𝗲𝘁𝗮𝗻𝗵 & 𝗿𝗲𝗽𝗹𝘆 𝗮̉𝗻𝗵: 𝗹𝗮̀𝗺 𝗻𝗲́𝘁 𝗮̉𝗻𝗵 𝗺𝗮̀ 𝗯𝗮̣𝗻 𝗿𝗲𝗽𝗹𝘆
🌹 !𝗮𝘃𝘁𝗱𝗼𝗶: 𝗴𝘂̛̉𝗶 𝗮𝘃𝘁𝗱𝗼𝗶 𝘁𝗵𝗲𝗼 𝗯𝗮̣𝗻 𝗰𝗵𝗼̣𝗻
💞 𝗾𝗿 + 𝗾𝗿𝘀: 𝗹𝗮̀𝗺 𝗾𝗿 𝘃𝗮̀ 𝗾𝘂𝗲́𝘁 𝗾𝗿
━━━━━━━━━━━━━━━━━━
💓 ==== [ Hà Khoai Tây  ] ==== 💓 `
},event.threadID, event.messageID)
        }
        case "2": {
          var os = require("os");
	var cpus = os.cpus();
	var chips;
	for (var i of cpus) chips = i.model, speed = i.speed;
	if (cpus == undefined);
	const timeStart = Date.now();
          const xuly = Math.floor((Date.now() - global.client.timeStart)/4444)
 var trinhtrang = xuly < 10 ? " TỐT ✔️":
  xuly > 10 && xuly < 100 ? " ỔN ĐỊNH 📊" : "DEPLAY ";
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `🌐 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸:fb.me/th.datdat \n💬 𝗠𝗲𝘀𝘀𝗲𝗻𝗴𝗲𝗿𝘀: Thinh Dat \n📲 𝗭𝗮𝗹𝗼: \n☎️ 𝗖𝗮𝗹𝗹: 0924130629\n\n━━━━━━━━━━━━━━━━━━\n⚠️ 𝗧𝗶̀𝗻𝗵 𝘁𝗿𝗮̣𝗻𝗴 𝗵𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 đ𝗮𝗻𝗴 𝗼̛̉ 𝗺𝘂̛́𝗰: ${trinhtrang} \n 🌸 𝗧𝗼̂́𝗰 đ𝗼̣̂ 𝘅𝘂̛̉ 𝗹𝘆́: ${Date.now() - timeStart} 𝗴𝗶𝗮̂𝘆\n⚙️ 𝗟𝗼̂̀𝗻𝗴 𝗖𝗣𝗨: ${os.cpus().length}`
},event.threadID, event.messageID)
        }
        case "3": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `🖥 𝗪𝗲𝗯 𝗮𝗽𝗶: https://boss-ken-1.asunayukii.repl.co`,
},event.threadID, event.messageID)
        }
        case "4": {
           var os = require("os");
	var cpus = os.cpus();
	var chips;
	for (var i of cpus) chips = i.model, speed = i.speed;
	if (cpus == undefined);
	const timeStart = Date.now();
const admin = config.ADMINBOT
    const ndh = config.NDH
          const namebot = config.BOTNAME
          const { commands } = global.client;
          const PREFIX = config.PREFIX
          const axios = require('axios'); 
          const xuly = Math.floor((Date.now() - global.client.timeStart)/4444)
 var trinhtrang = xuly < 10 ? " TỐT ✔️":
  xuly > 10 && xuly < 100 ? " ỔN ĐỊNH 📊" : "DEPLAY ";       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `==== [ 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢 ] ====
━━━━━━━━━━━━━━━━━━\n\n🖥 𝗠𝗼𝗱𝘂𝗹𝗲𝘀: 𝗖𝗼́ ${commands.size} 𝗹𝗲̣̂𝗻𝗵 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝘁𝗿𝗲̂𝗻 𝗯𝗼𝘁\n📎 𝗣𝗿𝗲𝗳𝗶𝘅: 𝗗𝗮̂́𝘂 𝗹𝗲̣̂𝗻𝗵 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝘁𝗿𝗲̂𝗻 𝗯𝗼𝘁 𝗹𝗮̀ [ ${PREFIX} ]\n💓 𝗡𝗮𝗺𝗲 𝗯𝗼𝘁: ${namebot}\n💬 𝗟𝗶𝘀𝘁𝗯𝗼𝘅: 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗼̛̉ ${global.data.allThreadID.length} 𝗯𝗼𝘅\n👑 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗰𝗼́ ${admin.length} 𝗮𝗱𝗺𝗶𝗻 𝘃𝗮̀  ${ndh.length} 𝗻𝗱𝗵\n⚠️ 𝗧𝗶̀𝗻𝗵 𝘁𝗿𝗮̣𝗻𝗴 𝗵𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 đ𝗮𝗻𝗴 𝗼̛̉ 𝗺𝘂̛́𝗰: ${trinhtrang} \n 🌸 𝗧𝗼̂́𝗰 đ𝗼̣̂ 𝘅𝘂̛̉ 𝗹𝘆́: ${Date.now() - timeStart} 𝗴𝗶𝗮̂𝘆\n⚙️ 𝗟𝗼̂̀𝗻𝗴 𝗖𝗣𝗨: ${os.cpus().length}\n🧰𝗖𝗵𝗶𝗽: ${global.config.CHIP}\n💻𝗛𝗲̣̂ Đ𝗶𝗲̂̀𝘂 𝗛𝗮̀𝗻𝗵:${global.config.HEDIEUHANH}\n📈𝗣𝗵𝗶𝗲̂𝗻 𝗕𝗮̉𝗻 𝗛𝗶𝗲̣̂𝗻 𝗧𝗮̣𝗶 𝗖𝘂̉𝗮 𝗕𝗼𝘁:${global.config.PHIENBAN}\n📂𝗧𝗼̂̉𝗻𝗴 𝗕𝗼̣̂ 𝗡𝗵𝗼̛́:${global.config.BONHO}\n🗃️𝗣𝗵𝗮̂̀𝗻 𝗖𝘂̛́𝗻𝗴 𝗣𝗵𝗶𝗲̂𝗻 𝗕𝗮̉𝗻 𝗦𝗼̂́: ${global.config.OCUNG}\n♻️𝗥𝗢𝗠: ${global.config.ROM}\n📡𝗣𝗵𝗶𝗲̂𝗻 𝗕𝗮̉𝗻 𝗚𝗶𝗮̉𝗶 𝗧𝗮̂̀𝗻 𝗖𝗼̛ 𝗦𝗼̛̉:${global.config.PHIENBANGIAITANCOSO}\n📟𝗣𝗵𝗶𝗲̂𝗻 𝗕𝗮̉𝗻 𝗸𝗲𝗿𝗻𝗲𝗹: ${global.config.KERNEL}\n        \n━━━━━━━━━━━━━━━━━━\n𝗦𝗮𝘂 đ𝐚̂𝘆 𝗹𝗮̀ 𝗹𝗼̛̀𝗶 𝗻𝗼́𝗶 𝗯𝗼𝘁 𝗺𝘂𝗼̂́𝗻 𝗴𝘂̛̉𝗶 đ𝗲̂́𝗻 𝗯𝗮̣𝗻: Đ𝘂̛̀𝗻𝗴 𝘀𝗽𝗮𝗺 𝘁𝘂𝗶 𝗻𝗵𝗮́ 𝘃𝗶̀ 𝘁𝘂𝗶 𝗿𝗮̂́𝘁 𝗰𝘂𝘁𝗶 , 𝘁𝘂𝗶 𝘀𝗲̃ 𝗽𝗵𝘂̣𝗰 𝘃𝘂̣ 𝗯𝗮̣𝗻 𝟭 𝗰𝗮́𝗰𝗵 𝗻𝗵𝗶𝗲̣̂𝘁 𝘁𝗶̀𝗻𝗵 𝗻𝗵𝗮̂́𝘁 💓`, 
},event.threadID, event.messageID)
        }
            break;
					default:
           const choose = parseInt(event.body);
            	if (isNaN(event.body)) return api.sendMessage("→ 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐧𝐡𝐚̣̂𝐩 𝟏 𝐜𝐨𝐧 𝐬𝐨̂́", event.threadID, event.messageID);
            	if (choose > 4 || choose < 1) return api.sendMessage("→ 𝐋𝐮̛̣𝐚 𝐜𝐡𝐨̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐧𝐚̆̀𝐦 𝐭𝐫𝐨𝐧𝐠 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡.", event.threadID, event.messageID); 
    }
    }
}
}