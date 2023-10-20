module.exports.config = {
	name: "ngủ",
	version: "1.0.1",
	hasPermssion: 1,
	credits: "ManhG",
	description: "",
	commandCategory: "quản trị viên",
	usages: "",
	cooldowns: 0,
	denpendencies: {
		"fs-extra": "",
		"request": ""
	}
};

module.exports.handleEvent = async ({
	event,
	api,
	Users
}) => {
	const fs = global.nodemodule["fs-extra"];
	var {
		threadID,
		messageID,
		body,
		senderID
	} = event;
	const thread = global.data.threadData.get(threadID) || {};
	if (typeof thread["ngủ"] !== "undefined" && thread["ngủ"] == false) return;

	let name = await Users.getNameUser(event.senderID);
	if (senderID == api.getCurrentUserID()) return;

	function out(data) {
		api.sendMessage(data, threadID, messageID)
	}
	//trả lời
	var msg = {
		body: `💘Baii ${name}💖chúc bbi ngủ ngon 💜 `,
		attachment: (await global.nodemodule["axios"]({
			url: (await global.nodemodule["axios"]('https://apikanna-1.fudgohdgfh43.repl.co')).data.data,
			method: "GET",
			responseType: "stream"
		})).data
	}
	// Gọi bot
	var arr = ["ngủ", "đi ngủ ", "đi ngủ đây", "đi ngủ nha", "đi ngủ", "ngủ ngon", "tao đi ngủ đây", "ngủ nha"];
	arr.forEach(i => {
		let str = i[0].toUpperCase() + i.slice(1);
		if (body === i.toUpperCase() | body === i | str === body) return out(msg)
	});
};

module.exports.languages = {
	"vi": {
		"on": "Bật",
		"off": "Tắt",
		"successText": "ngủ thành công",
	},
	"en": {
		"on": "on",
		"off": "off",
		"successText": "ngủ success!",
	}
}

module.exports.run = async function({
	api,
	event,
	Threads,
	getText
}) {
	const {
		threadID,
		messageID
	} = event;
	let data = (await Threads.getData(threadID)).data;

	if (typeof data["ngủ"] == "undefined" || data["ngủ"] == true) data["ngủ"] = false;
	else data["ngủ"] = true;

	await Threads.setData(threadID, {
		data
	});
	global.data.threadData.set(threadID, data);
	return api.sendMessage(`${(data["ngủ"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}