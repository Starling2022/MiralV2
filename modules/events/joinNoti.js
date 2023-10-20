module.exports.config = {
    name: "join",
    eventType: ['log:subscribe'],
    version: "1.0.0",
    credits: "Mirai-Team",//inspire by miraibot
    description: "GROUP UPDATE NOTIFICATION"
};
module.exports.run = async function({ api, event, Users }) {
  const fs = require('fs-extra')
   var fullYear = global.client.getTime("fullYear");
    var getHours = await global.client.getTime("hours");
      var session = `${getHours < 3 ? "đêm khuya" : getHours < 8 ? "buổi sáng sớm" : getHours < 12 ? "buổi trưa" : getHours < 17 ? "buổi chiều" : getHours < 23 ? "buổi tối" : "đêm khuya"}`
  const { join } = global.nodemodule["path"];
  const { threadID } = event;
  if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
    api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "BOT BASIL" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
    const fs = require("fs");
    return api.sendMessage("", event.threadID, () => api.sendMessage({ body: `Mirai Team\n[] Kết nối thành công\n[] Dấu lệnh ${global.data.threadData.get(event.threadID).PREFIX || global.config.PREFIX}\n[] Admin :fb.me/100029891650673`, attachment: fs.createReadStream(__dirname + "/cache/anhgai.jpg") }, threadID));
  }
  else {
    try {
      const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
      let { threadName, participantIDs } = await api.getThreadInfo(threadID);
      const moment = require("moment-timezone");
      const hours = moment.tz("Asia/Ho_Chi_Minh").format("HH");
      const time = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
      const threadData = global.data.threadData.get(parseInt(threadID)) || {};
      const path = join(__dirname, "cache", "joinGif");
      const pathGif = join(path, `hi.gif`);
      var mentions = [], nameArray = [], memLength = [], iduser = [], i = 0;
      var abx = [];
      for (id in event.logMessageData.addedParticipants) {
        const userName = event.logMessageData.addedParticipants[id].fullName; iduser.push(event.logMessageData.addedParticipants[id].userFbId.toString());
        nameArray.push(userName);
        mentions.push({ tag: userName, id: event.senderID });
        memLength.push(participantIDs.length - i++);
        console.log(userName)
      }
      const axios = require('axios')
     // console.log(event.logMessageData.addedParticipants)
      var id = [];
      for(o = 0; o < event.logMessageData.addedParticipants.length; o++){
        let path = __dirname + `/cache/${o}.jpg`;
        id.push(event.logMessageData.addedParticipants[o].userFbId)
        var baseUrl = `https://api.nguyenlienmanh.com/canvas/joinnoti?id=${event.logMessageData.addedParticipants[o].userFbId}&name=${event.logMessageData.addedParticipants[o].fullName}&boxname=${threadName}&memberst=${participantIDs.length - o}`
        var resDL = (await axios.get( encodeURI(baseUrl),
             {responseType: "arraybuffer"}
          )).data
        fs.writeFileSync(path, Buffer.from(resDL, 'utf-8'));
        abx.push(fs.createReadStream(__dirname + `/cache/${o}.jpg`))
      }
      memLength.sort((a, b) => a - b);
      (typeof threadData.customJoin == "undefined") ? msg = "\n━━━━━━━━━━━━\n=>Chào {buoi} TVM {name} tới với nhóm {threadName}\n=>URL Profile:\nhttps://www.facebook.com/profile.php?id={iduser}\n{type} là thành viên thứ {soThanhVien} của nhóm\nĐược thêm vào nhóm bởi: {author} \n=>Link facebook là: https://www.facebook.com/profile.php?id={uidAuthor}\n=>Hãy chăm chỉ tương tác để không bị kick khỏi nhóm nhé 😋\n━━━━━━━━━━━━\n[ {time} ]" : msg = threadData.customJoin;
      var nameAuthor = await Users.getNameUser(event.author)
      msg = msg
        .replace(/\{iduser}/g, iduser.join(', '))
        .replace(/\{name}/g, nameArray.join(', '))
        .replace(/\{type}/g, (memLength.length > 1) ? 'Bạn' : 'BẠn')
        .replace(/\{soThanhVien}/g, memLength.join(', '))
        .replace(/\{threadName}/g, threadName)
        .replace(/\{author}/g, nameAuthor)
        .replace(/\{uidAuthor}/g, event.author)
         .replace(/\{buoi}/g, session)
        .replace(/\{time}/g, time);

      if (existsSync(path)) mkdirSync(path, { recursive: true });

      const randomPath = readdirSync(join(__dirname, "cache", "joinGif"));

      if (existsSync(pathGif)) formPush = { body: msg, attachment: abx, mentions }
      else if (randomPath.length != 0) {
        const pathRandom = join(__dirname, "cache", "joinGif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
        formPush = { body: msg, attachment: abx, mentions }
      }
      else formPush = { body: msg, mentions }
for (let ii = 0; ii < parseInt(id.length); ii++) {
        fs.unlinkSync(__dirname + `/cache/${ii}.jpg`)
    }
      return api.sendMessage(formPush, threadID);
    } catch (e) { return console.log(e) };
  }
}