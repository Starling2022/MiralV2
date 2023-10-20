module.exports.config = {
name: "menu",
version: "1.0.0",
hasPermssion: 0,
credits: "DungUwU",
description: "Menu, just a menu",
usages: "[all/-a] [số trang]",
commandCategory: "Tiện ích",
cooldowns: 2
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "menutest.gif")) request("https://i.imgur.com/tUMV0ui.gif ").pipe(fs.createWriteStream(dirMaterial + "menutest.gif"));
}
module.exports.handleReply = ({ api, event, handleReply }) => {
let num = parseInt(event.body.split(" ")[0].trim());
(handleReply.bonus) ? num -= handleReply.bonus : num;
let msg = "";
let data = handleReply.content;
let check = false;
if (isNaN(num)) msg = "Not a number";
else if (num > data.length || num <= 0) msg = "Not available";
else {
const { commands } = global.client;
let dataAfter = data[num-=1];
if (handleReply.type == "cmd_info") {
let command_config = commands.get(dataAfter).config;
msg += `🌸 ${command_config.commandCategory.toUpperCase()} 🌸\n`;
msg += `\n» 𝐓𝐞̂𝐧: ${dataAfter}`;
msg += `\n» 𝐌𝐨̂ 𝐭𝐚̉: ${command_config.description}`;
msg += `\n» 𝐂𝐚́𝐜𝐡 𝐝𝐮̀𝐧𝐠: ${(command_config.usages) ? command_config.usages : ""}`;
msg += `\n» 𝐓𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧 𝐜𝐡𝐨̛̀: ${command_config.cooldowns || 5}s`;
msg += `\n» 𝐐𝐮𝐲𝐞̂̀𝐧 𝐡𝐚̣𝐧: ${(command_config.hasPermssion == 0) ? "Người dùng" : (command_config.hasPermssion == 1) ? "Quản trị viên nhóm" : "Quản trị viên bot"}`;
msg += `\n\n» 𝐌𝐨𝐝𝐮𝐥𝐞 𝐜𝐨𝐝𝐞 𝐛𝐲 𝗦𝘁𝗮𝗿𝗹𝗶𝗻𝗴 «`;
} else {
check = true;
let count = 0;
msg += `🌸 ${dataAfter.group.toUpperCase()} 🌸\n`;

dataAfter.cmds.forEach(item => {
msg += `\n ${count+=1}. ${item}: ${commands.get(item).config.description}`;
})
msg += "\n\n🔥 𝐇𝐚̃𝐲 𝐫𝐞𝐩𝐥𝐲 (𝐩𝐡𝐚̉𝐧 𝐡𝐨̂̀𝐢) 𝐒𝐓𝐓 𝐧𝐞̂́𝐮 𝐦𝐮𝐨̂́𝐧 𝐱𝐞𝐦 𝐭𝐡𝐨̂𝐧𝐠 𝐭𝐢𝐧 𝐜𝐡𝐢 𝐭𝐢𝐞̂́𝐭 !";
}
}

return api.sendMessage(msg, event.threadID, (error, info) => {
if (error) console.log(error);
if (check) {
global.client.handleReply.push({
type: "cmd_info",
name: this.config.name,
messageID: info.messageID,
content: data[num].cmds
})
}
}, event.messageID);
}

module.exports.run = function({ api, event, args }) {
const fs = require("fs");
const { commands } = global.client;
const { threadID, messageID } = event;
const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

const command = commands.values();
var group = [], msg = "[⚜️] ━━━━━━━ [ 𝗠𝗲𝗻𝘂 ] ━━━━━━━ [⚜️]\n";
let check = true, page_num_input = "";
let bonus = 0;

for (const commandConfig of command) {
if (!group.some(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase())) group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
else group.find(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
}

if (args[0] && ["all", "-a"].includes(args[0].trim())) {
let all_commands = [];
group.forEach(commandGroup => {
commandGroup.cmds.forEach(item => all_commands.push(item));
});
let page_num_total = Math.ceil(all_commands.length / 50);//muốn menu hiện bao nhiêu dòng module
if (args[1]) {
check = false;
page_num_input = parseInt(args[1]);
if (isNaN(page_num_input)) msg = "Not a number";
else if (page_num_input > page_num_total || page_num_input <= 0) msg = "Not available";
else check = true;
}
if (check) {
index_start = (page_num_input) ? (page_num_input * 50) - 50 : 0;
bonus = index_start;
index_end = (index_start + 50 > all_commands.length) ? all_commands.length : index_start + 50;
all_commands = all_commands.slice(index_start, index_end);
all_commands.forEach(e => {
msg += `\n🎀${index_start+=1}. ${e}: ${commands.get(e).config.description}`;
})
msg += `\n━━━━━━━━━━━━━━━━━━\n📌 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗰𝗼́ ${commands.size} 𝗹𝗲̣̂𝗻𝗵 𝗰𝗼́ 𝘁𝗵𝗲̂́ 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝘁𝗿𝗲̂𝗻 𝗯𝗼𝘁 𝗻𝗮̀𝘆 \n🎊 𝗦𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗵𝗲𝗹𝗽 + 𝘁𝗲̂𝗻 𝗹𝗲̣̂𝗻𝗵 \n🎶 𝗡𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝗯𝗶𝗲̂́𝘁 𝗰𝗵𝗶 𝘁𝗶𝗲̂́𝘁 𝗰𝗮́𝗰𝗵 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 `;
}
return api.sendMessage(msg, threadID, (error, info) => {
if (check) {
global.client.handleReply.push({
type: "cmd_info",
bonus: bonus,
name: this.config.name,
messageID: info.messageID,
content: all_commands
})
}
}, messageID)
}

let page_num_total = Math.ceil(group.length / 50);
if (args[0]) {
check = false;
page_num_input = parseInt(args[0]);
if (isNaN(page_num_input)) msg = "Not a number";
else if (page_num_input > page_num_total || page_num_input <= 0) msg = "Not available";
else check = true;
}
if (check) {
index_start = (page_num_input) ? (page_num_input * 50) - 50 : 0;
bonus = index_start;
index_end = (index_start + 50 > group.length) ? group.length : index_start + 50;
console.log(page_num_input)
console.log(index_start)
console.log(index_end)
group = group.slice(index_start, index_end);
group.forEach(commandGroup => msg += `\n🎀${index_start+=1}. ${commandGroup.group.toUpperCase()}🧩`);
msg += `\n━━━━━━━━━━━━━━━━━━\n💓 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗰𝗼́ ${commands.size} 𝗹𝗲̣̂𝗻𝗵 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝘁𝗿𝗲̂𝗻 𝗯𝗼𝘁 𝗻𝗮̀𝘆\n🎶 𝗛𝗮̃𝘆 𝗿𝗲𝗽𝗹𝘆 (𝗽𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶) 𝘁𝗵𝗲𝗼 𝘀𝗼̂́ 𝘁𝗵𝘂̛́ 𝘁𝘂̛̣\n🔰 𝗗𝘂̀𝗻𝗴 𝗺𝗲𝗻𝘂 𝗮𝗹𝗹 𝗱𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗮̂́𝘁 𝗰𝗮̉ 𝗹𝗲̣̂𝗻𝗵 𝘁𝗿𝗲̂𝗻 𝗯𝗼𝘁`;
}
return api.sendMessage({body:`${msg}`,attachment: fs.createReadStream(__dirname + `/noprefix/menutest.gif`)}, threadID, async (error, info) => {
global.client.handleReply.push({
name: this.config.name,
bonus: bonus,
messageID: info.messageID,
content: group
})
});
}
