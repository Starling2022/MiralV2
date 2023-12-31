module.exports.config = {
    name: "masoi",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ManhG",
    description: "Game Ma sói uwu",
    commandCategory: "game-mp",
    usages: "[create/start/join/info/leave]",
    cooldowns: 1
};

module.exports.run = async ({ api: a, event: e, args: n }) => {
    const { senderID: s, threadID: i, messageID: o } = e;
    global.moduleData.masoi = global.moduleData.masoi || new Map;
    const t = global.moduleData.masoi.get(i) || {};

    if (n[0] == "create") {
        if (global.moduleData.masoi.has(i)) {
            a.sendMessage("Hiện tại nhóm này đang có game ma sói đang được mở", i, o);
        } else {
            global.moduleData.masoi.set(e.threadID, {
                author: e.senderID,
                start: 0,
                chiabai: 0,
                ready: 0,
                player: [{ id: s, card1: 0, card2: 0, card3: 0, doibai: 2, ready: false }]
            });
            a.sendMessage("Game ma sói của bạn đã được tạo thành công!, để tham gia bạn hãy nhập masoi join", i, o);
        }
    } else if (n[0] == "join") {
        if (t) {
            if (t.start == 1) {
                a.sendMessage("Hiện tại game ma sói đã được bắt đầu", i, o);
            } else if (t.player.find(a => a.id == s)) {
                a.sendMessage("Bạn đã tham gia vào game ma sói này!", i, o);
            } else {
                global.moduleData.masoi.set(i, t);
                a.sendMessage("Bạn đã tham gia thành công!", i, o);
            }
        } else {
            a.sendMessage("Hiện tại chưa có game ma sói nào, bạn có thể tạo bằng cách sử dụng masoi create", i, o);
        }
    } else if (n[0] == "list") {
        if (t && typeof t.player === 'undefined') {
            a.sendMessage("Hiện tại chưa có game ma sói nào, bạn có thể tạo bằng cách sử dụng masoi create", i, o);
        } else {
            a.sendMessage(`=== game ma sói ===\n Author Bàn: ${t.author}\nTổng số người chơi: ${t.player.length} Người`, i, o);
        }
    } else if (n[0] == "leave") {
        if (t && typeof t.player === 'undefined') {
            a.sendMessage("Hiện tại chưa có game ma sói nào, bạn có thể tạo bằng cách sử dụng masoi create", i, o);
        } else {
            if (t.player.some(a => a.id == s)) {
                if (t.author == s) {
                    global.moduleData.masoi.delete(i);
                    a.sendMessage("Author đã rời khỏi bàn, đồng nghĩa với việc bàn sẽ bị giải tán!", i, o);
                } else {
                    t.player.splice(t.player.findIndex(a => a.id === s), 1);
                    a.sendMessage("Bạn đã rời khỏi game ma sói này!", i, o);
                    global.moduleData.masoi.set(i, t);
                }
            } else {
                a.sendMessage("Bạn chưa tham gia vào game ma sói trong nhóm này!", i, o);
            }
        }
    } else if (n[0] == "start") {
        if (t.author == s) {
            if (t) {
                if (t.player.length <= 1) {
                    a.sendMessage("Hiện tại không có người chơi nào tham gia, bạn có thể mời người khác tham gia bằng cách yêu cầu họ nhập masoi join", i, o);
                } else if (t.start == 1) {
                    a.sendMessage("Hiện tại game đã được bắt đầu bởi chủ bàn", i, o);
                } else {
                    t.start = 1;
                    a.sendMessage("Game ma sói của bạn đã được bắt đầu", i, o);
                }
            } else {
                a.sendMessage("Hiện tại chưa có game ma sói nào, bạn có thể tạo bằng cách sử dụng masoi create", i, o);
            }
        } else {
            global.utils.throwError(this.config.name, i, o);
        }
    } else if (n[0] == "info") {
        if (t.author == s) {
            if (t) {
                if (t.player.some(a => a.id == e.senderID)) {
                    t.player.forEach(e => a.sendMessage("Bạn có thấy tin nhắn này?", e.id));
                    a.sendMessage("Bạn có thấy tin nhắn của bot gửi tới bạn? Nếu không, hãy kiểm tra phần tin nhắn chờ hoặc tin nhắn spam!", i, o);
                } else {
                    a.sendMessage("Bạn chưa tham gia vào game ma sói trong nhóm này!", i, o);
                }
            } else {
                a.sendMessage("Hiện tại chưa có game ma sói nào, bạn có thể tạo bằng cách sử dụng masoi create", i, o);
            }
        } else {
            global.utils.throwError(this.config.name, i, o);
        }
    } else {
        global.utils.throwError(this.config.name, i, o);
    }
};