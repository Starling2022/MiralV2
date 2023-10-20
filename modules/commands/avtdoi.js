module.exports.config = {
	name: "avtdoi",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "TDong",
	description: "Bro, cho tôi xin 10k",
	commandCategory: "imgur",
	usages: "avtdoi + số thứ tự",
	cooldowns: 5
};

module.exports.run = async function({ api , event , args }) {
  try {
    const { threadID , messageID } = event;
    const axios = require('axios');
    const fs = require('fs-extra');
    const cLA = ['shikizum','doremon'];
    var count = 0;
    var cLS = '';
    for ( let name of cLA ) {
        var char = name.charAt(0).toUpperCase() + name.slice(1);
        cLS += `${++count}. ${char}\n`;
    };
    if (!args[0]) return api.sendMessage(`Vui lòng dùng /avtdoi kèm số thứ tự hoặc tên nhân vật:\n${cLS}`, threadID, messageID);
    if (!cLA.includes(args[0]) && isNaN(args[0])) return api.sendMessage(`Vui lòng dùng /avtdoi kèm số thứ tự hoặc tên nhân vật:\n${cLS}`, threadID, messageID);
    if (isNaN(args[0])) {
        var charName = args[0].toLowerCase(); 
    } else {
        if (parseInt(args[0]) < 1 || parseInt(args[0]) > cLA.length) return api.sendMessage(`Số tối thiểu là 1 và số tối đa là ${cLA.length}`, threadID, messageID);
        var charName = cLA[parseInt(args[0]) - 1];
    };
    const res = await axios.get(`https://TPKTAO.last-namename.repl.co/avtdoi/${charName}`);
    const imageUrl = res.data.url;
    const imageUrl1 = imageUrl[0];
    var ext1 = imageUrl1.split('.');
    var ext1 = ext1[ext1.length - 1];
    const imageUrl2 = imageUrl[1];
    var ext2 = imageUrl2.split('.');
    var ext2 = ext2[ext2.length - 1];
    var img = [];
    var image1 = (await axios.get(imageUrl1, {responseType: "arraybuffer"})).data;
    fs.writeFileSync(__dirname + `/cache/avtdoi1.${ext1}`, Buffer.from(image1, "utf-8") );                          
    img.push(fs.createReadStream(__dirname + `/cache/avtdoi1.${ext1}`));
    var image2 = (await axios.get(imageUrl2, {responseType: "arraybuffer"})).data;
    fs.writeFileSync(__dirname + `/cache/avtdoi2.${ext2}`, Buffer.from(image2, "utf-8") );                          
    img.push(fs.createReadStream(__dirname + `/cache/avtdoi2.${ext2}`));
    var msg = {
         body: `Ảnh của bạn đây`,
         attachment: img
    };
    api.sendMessage(msg , threadID , messageID);
  } catch (e) {
    api.sendMessage(`${e}`, event.threadID);
  }
};