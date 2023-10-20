module.exports.config = {
    name: "qtvonly",
    version: "1.0",
    hasPermssion: 1,
    credits: "D-Jukie fix Kadeer",
    description: "Quản lý admin bot",
    commandCategory: "Tiện ích",
    usages: "qtvonly",
    cooldowns: 5,
    dependencies: {
        "fs-extra": ""
    }
};

module.exports.onLoad = function() {
    const { writeFileSync, existsSync } = require('fs-extra');
    const { resolve } = require("path");
    const path = resolve(__dirname, 'cache', 'data.json');
    if (!existsSync(path)) {
        const obj = {
            adminbox: {}
        };
        writeFileSync(path, JSON.stringify(obj, null, 4));
    } else {
        const data = require(path);
        if (!data.hasOwnProperty('adminbox')) data.adminbox = {};
        writeFileSync(path, JSON.stringify(data, null, 4));
    }
}
module.exports.run = async function ({ api, event, args }) {
const { threadID, messageID, mentions } = event;

        const { resolve } = require("path");
        const pathData = resolve(__dirname, 'cache', 'data.json');
        const database = require(pathData);
        const { adminbox } = database;   
        if (adminbox[threadID] == true) {
            adminbox[threadID] = false;
            api.sendMessage("» 𝑻𝒂̆́𝒕 𝒕𝒉𝒂̀𝒏𝒉 𝒄𝒐̂𝒏𝒈 𝒄𝒉𝒆̂́ 𝒅𝒐̣̂ 𝒒𝒕𝒗𝒐𝒏𝒍𝒚 (𝒕𝒂̂́𝒕 𝒄𝒂̉ 𝒎𝒐̣𝒊 𝒏𝒈𝒖̛𝒐̛̀𝒊 𝒅𝒆̂̀𝒖 𝒄𝒐́ 𝒕𝒉𝒆̂̉ 𝒔𝒖̛̉ 𝒅𝒖̣𝒏𝒈 𝒃𝒐𝒕)", threadID, messageID);
        } else {
            adminbox[threadID] = true;
            api.sendMessage("» 𝑩𝒂̣̂𝒕 𝒕𝒉𝒂̀𝒏𝒉 𝒄𝒐̂𝒏𝒈 𝒄𝒉𝒆̂́ 𝒅𝒐̣̂ 𝒒𝒕𝒗𝒐𝒏𝒍𝒚 (𝒄𝒉𝒊̉ 𝒂𝒅𝒎𝒊𝒏 𝒗𝒐̛́𝒊 𝒒𝒕𝒗 𝒃𝒐𝒙 𝒎𝒐̛́𝒊 𝒄𝒐́ 𝒕𝒉𝒆̂̉ 𝒔𝒖̛̉ 𝒅𝒖̣𝒏𝒈 𝒃𝒐𝒕)", threadID, messageID);
        }
}
