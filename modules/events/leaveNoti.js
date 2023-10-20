module.exports.config = {
	name: "leave",
	eventType: ["log:unsubscribe"],
	version: "1.0.0",
	credits: "HĐGN",//Mod by H.Thanh
	description: "Thông báo Bot hoặc người rời khỏi nhóm có random gif/ảnh/video",
	dependencies: {
		"fs-extra": "",
		"path": ""
	}
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "cache", "leaveGif");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "leaveGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}

module.exports.run = async function({ api, event, Users, Threads }) {
	if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
	const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
	const { join } =  global.nodemodule["path"];
	const { threadID } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:s");
  const hours = moment.tz("Asia/Ho_Chi_Minh").format("HH");
	const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
	const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
	const type = (event.author == event.logMessageData.leftParticipantFbId) ? "rời" : "bị quản lí đá";
	const path = join(__dirname, "cache", "leaveGif");
	const pathGif = join(path, `${threadID}.mp4`);
	var msg, formPush

	if (existsSync(path)) mkdirSync(path, { recursive: true });

(typeof data.customLeave == "undefined") ? msg = "[⚜️]  {name} đã {type} 𝗞𝗵𝗼̉𝗶 𝗡𝗵𝗼́𝗺 [⚜️]\n●▬▬▬▬๑۩۩๑▬▬▬▬●\n🌺🌸🌺 𝗖𝗮̉𝗺 𝗢̛𝗻 bạn  {name} 𝗗𝗮̃ 𝗗𝗼̂̀𝗻𝗴 𝗛𝗮̀𝗻𝗵 𝗖𝘂̃𝗻𝗴 𝗕𝗼𝘁 𝗩𝗮̀ 𝗕𝗼𝘅𝘅 𝗧𝗿𝗼𝗻𝗴 𝗧𝗵𝗼̛̀𝗶 𝗚𝗶𝗮𝗻 𝗤𝘂𝗮 𝗗𝘂̀ 𝗖𝗼́ 𝗡𝗵𝘂̛̃𝗻𝗴 𝗧𝗶𝗲̂́𝗰 𝗡𝘂𝗼̂́𝗶 𝗡𝗵𝘂̛𝗻𝗴 𝗧𝗮̣𝗺 𝗕𝗶𝗲̣̂𝘁 bạn  𝗩𝗮̀ 𝗛𝗲̣𝗻 𝗚𝗮̣̆𝗽 𝗹𝗮̣𝗶 𝗧𝗿𝗼𝗻𝗴 𝗧𝘂̛𝗼̛𝗻𝗴 𝗟𝗮𝗶 𝗦𝗮̆́𝗽 𝗧𝗼̛́𝗶 <𝟯 😊💔\n\n[❤️‍🔥] 𝗧𝗵𝗼̛̀𝗶 𝗚𝗶𝗮𝗻 𝗢𝘂𝘁 𝗡𝗵𝗼́𝗺: 𝗕𝘂𝗼̂̉𝗶 {session} || {time}" : msg = data.customLeave;
	msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type).replace(/\{session}/g, hours <= 10 ? "𝑠𝑎́𝑛𝑔" : 
    hours > 10 && hours <= 12 ? "𝑡𝑟𝑢̛𝑎" :
    hours > 12 && hours <= 18 ? "𝑐ℎ𝑖𝑒̂̀𝑢" : "𝑡𝑜̂́𝑖").replace(/\{time}/g, time);  

	const randomPath = readdirSync(join(__dirname, "cache", "leaveGif", "randomgif"));

	if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif) }
	else if (randomPath.length != 0) {
		const pathRandom = join(__dirname, "cache", "leaveGif", "randomgif",`${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
		formPush = { body: msg, attachment: createReadStream(pathRandom) }
	}
	else formPush = { body: msg }
	
	return api.sendMessage(formPush, threadID);
}