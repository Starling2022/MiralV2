module.exports.config = {
    name: "monster",
    version: "3.1.0",
    hasPermssion: 0,
    credits: "Starling",
    description: "Monster hunter",
    commandCategory: "Game",
    usages: "[tag]",
    cooldowns: 0
};
module.exports.onLoad = function() {
  try {
    global.monster = require("./monster/index.js");
    global.configMonster = require("./monster/config.json");
  }
  catch(e) {
    console.log(e)
  }
}
module.exports.run = async function({ api, event, args, Users }) {
    var axios = require("axios");
    try {
        switch(args[0]) {
            case "create":
            case "-c":
                return await global.monster.createCharecter({ Users, api, event });
            case "info":
            case "-i":
                return await global.monster.getCharacter({ api, event });
            case "status":
                return await global.monster.getServer({ api, event });
            case "weapon":
                return await global.monster.getWeapon({ api, event });
            case "shop":
            case "-s":
                return await api.sendMessage("《 𝐀𝐒𝐓𝐄𝐑𝐀 》\n\n1. Mua vũ khí🗡\n2. Mua thức ăn🍗\n3. Bán quái vật💵\n4. Mua vật phẩm nâng cấp vũ khí🔨\n5. Mua buff\n✨Reply theo stt để chọn✨", event.threadID, (err, info) => {
                    global.client.handleReply.push({
                        name: 'monster',
                        messageID: info.messageID,
                        author: event.senderID,
                        type: "listItem"
                    });
                }, event.messageID);
            case "bag":
            case "-b":
                return await global.monster.myItem({ api, event });
            case "fixditmemay":
                var stream = (await axios.get(global.configMonster.fix, { responseType: 'stream' })).data;
                return api.sendMessage({ body: `Lưu ý: chỉ được sửa độ bền của vũ khí đang sử dụng!\nĐộ bền tối đa 10.000/1 vũ khí`, attachment: stream }, event.threadID, (err, info) => {
                    global.client.handleReply.push({
                        name: 'monster',
                        messageID: info.messageID,
                        author: event.senderID,
                        type: "increaseDurability"
                    });
                }, event.messageID);
            case "match":
            case "fight":
            case "pvp":
                return global.monster.match({ api, event });
            case "location":
            case "-l":
                return await global.monster.listLocation({ api, event });
            default:
                var stream = (await axios.get(global.configMonster.monster, { responseType: 'stream' })).data;
                return api.sendMessage({body: "《𝐌𝐎𝐍𝐒𝐓𝐄𝐑 𝐇𝐔𝐍𝐓𝐄𝐑》\n Các tag:\n1. Create: tạo nhân vật\n2. Info: xem thông số nhân vật\n3. Shop: mở cửa hàng\n4. Bag: mở túi đồ để trang bị và sử dụng vật phẩm\n5. Fix: sửa trang bị\n6. Match/pvp/fight: săn quái\n7. Location: chọn bãi săn\n8. status: thông tin server\n9. weapon: vũ khí đang trang bị\n\n Nhập /monster + [tag] để sử dụng", attachment: stream}, event.threadID, event.messageID);
        }
    }
    catch(e) {
        console.log(e);
    }
}
module.exports.handleReply = async function({ api, event, Currencies, handleReply }) {
    try {
        if(handleReply.author != event.senderID) return;
        switch(handleReply.type) {
            case "listItem":
                return await global.monster.getItems({ api, event, type: event.body });
            case "buyItem":
                return await global.monster.buyItem({ api, event, idItem: event.body, Currencies, handleReply });
            case "setItem":
                return await global.monster.setItem({ api, event, idItem: event.body, handleReply });
            case "increaseDurability":
                return await global.monster.increaseDurability({ api, event, Currencies, handleReply });
            case "match":
                return await global.monster.match({ api, event, id: event.body });
            case "setLocationID":
                return await global.monster.setLocationID({ api, event, id: event.body, handleReply });
            default:
                return;
        }
    }
    catch(e) {
        console.log(e);
    }
}