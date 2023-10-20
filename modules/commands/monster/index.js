var createCharacter = require("./createCharacter");
var get = require("./getData");
var set = require("./setData");
var axios = require("axios");

async function createCharecter({ Users, api, event }) {
    const { senderID, threadID, messageID } = event;
    const dataUser = createCharacter({
        data: {
            id: senderID,
            name: (await Users.getData(senderID)).name
        }
    });
    if (dataUser == 403) return api.sendMessage("【♥】Bạn đã có nhân vật rồi", threadID, messageID);
    var stream = (await axios.get(global.configMonster.create, { responseType: 'stream' })).data;
    return api.sendMessage({body: "【SUCCESS】✨ Tạo nhân vật thành công\n\n»Sử dụng lệnh /monster info để xem thông tin nhân vật\n»Sử dụng lệnh /monster help để xem cách chơi", attachment: stream}, threadID, messageID);
}

async function getCharacter({ api, event }) {
    const { senderID, threadID, messageID } = event;
    const dataUser = get.getDataUser(senderID);
    if (!dataUser) return api.sendMessage("【 ? 】✨ Bạn chưa có nhân vật", threadID, messageID);
    var statusBag = "";
        if(dataUser.monster.length >= 1) statusBag = "🟢";
        if(dataUser.monster.length >= 10) statusBag = "🟡";
        if(dataUser.monster.length >= 20) statusBag = "🟠";
        if(dataUser.monster.length >= 30) statusBag = "🔴";
    var stream = (await axios.get(global.configMonster.info, { responseType: 'stream' })).data;
    return api.sendMessage({body: `✨ STATUS ✨\n-----------------\n‣ Tên nhân vật: ${dataUser.name}\n‣ ${dataUser.id}\n‣ Level: ${dataUser.level}\n‣ EXP⭐: ${dataUser.exp.toFixed()}/${500 * Math.pow(1.2, dataUser.level - 1).toFixed()}\n‣ Chỉ số:\n ❤: ${dataUser.hp} (+${dataUser.weapon != null ? dataUser.weapon.HP: "0"})\n ⚔: ${dataUser.atk} (+${dataUser.weapon != null ? dataUser.weapon.ATK : "0"})\n 🛡: ${dataUser.def} (+${dataUser.weapon != null ? dataUser.weapon.DEF: "0"})\n ⚡: ${dataUser.spd} (+${dataUser.weapon != null ? dataUser.weapon.SPD: "0"})\n‣ Lực Chiến cơ bản: ${dataUser.hp + 4 * dataUser.atk + 3 * dataUser.def + 5 * dataUser.spd}\n  Trang bị cộng thêm: ${dataUser.weapon != null ? dataUser.weapon.HP + 4 * dataUser.weapon.ATK + 3 * dataUser.weapon.DEF + 5 * dataUser.weapon.SPD: 0 }\n- Thể lực💪: ${dataUser.the_luc}\n\n‣ Vũ khí: ${dataUser.weapon ? dataUser.weapon.name + " (Độ bền: " + dataUser.weapon.durability + ")" : "Không có"}\n‣ Số vật phẩm trong túi đồ: ${dataUser.bag.length}\n‣ Số quái trong túi: ${dataUser.monster.length}/30 (`+ statusBag +`)\n‣ Khu vực: ${dataUser.locationID ? dataUser.locationID : "Home"}\n\n`, attachment: stream}, threadID, messageID);
}

async function getWeapon({ api, event }) {
    const { senderID, threadID, messageID } = event;
    const dataUser = get.getDataUser(senderID);
    if (dataUser.weapon == null) return api.sendMessage("【 ? 】✨ Bạn chưa trang bị vũ khí", threadID, messageID);
    var stream = (await axios.get(dataUser.weapon.image, { responseType: 'stream' })).data;
    return api.sendMessage({body: `✨ TRANG BỊ HIỆN TẠI ✨\n-----------------\n‣ Vũ khí: ${dataUser.weapon ? dataUser.weapon.name : "Không có"}\n‣ Level: ${dataUser.weapon.usage}\n- HP: ${dataUser.weapon.HP}\n- ATK: ${dataUser.weapon.ATK}\n- DEF: ${dataUser.weapon.DEF}\n- SPD: ${dataUser.weapon.SPD}\n‣ Lực chiến: ${dataUser.weapon != null ? dataUser.weapon.HP + 4 * dataUser.weapon.ATK + 3 * dataUser.weapon.DEF + 5 * dataUser.weapon.SPD: 0 }\n\n`, attachment: stream}, threadID, messageID);
}

async function getServer({ api, event }) {
    const { senderID, threadID, messageID } = event;
    const datauser = require("./data/datauser.json");
    const dataitem = require("./data/item.json");
    const datamonster = require("./data/monster.json");
    const data = require("./data/data.json");
    var stream = (await axios.get(global.configMonster.info, { responseType: 'stream' })).data;
    return api.sendMessage({body: `✨ MONSTER STATUS ✨\n-----------------\n\n‣Tổng số người chơi: ${datauser.length}\n‣Tổng khu vực: ${datamonster.length}\n‣Tổng: ${data.length} quái\n‣Tổng số vũ khí: ${dataitem.length}\n‣Các tier (độ hiếm): I, II, III, IV, V, X, XX\n‣Các mức độ nguy hiểm: 1 ~ 16`, attachment: stream}, threadID, messageID);
}

async function getItems({ api, event, type }) {
    const { senderID, threadID, messageID } = event;
    if(!type) return api.sendMessage("【ERROR】! Không hợp lệ", threadID, messageID);
    const dataUser = get.getDataUser(senderID);
    if (!dataUser) return api.sendMessage("---<[ 𝕄ℍ 𝕊𝕋𝔸𝕋𝕌𝕊 ]>---\n\n❎Bạn chưa có nhân vật❎", threadID, messageID);
    switch(type) {
        case "1":
            var msg = "🔨 𝙱𝚕𝙰𝙲𝙺𝚂𝙼𝙸𝚃𝙷 🔨\n\n";
            num = 0;
            get.getItems().forEach(item => {
                num++;
                msg += `${num}, ${item.name}\n‣Độ bền: ${item.durability}\n‣Chỉ số:\n- ATK: ${item.ATK}\n- DEF: ${item.DEF}\n- SPEED: ${item.SPD}\nGiá: ${item.price}$\n\n`;
            });
            var stream = (await axios.get(global.configMonster.weapon, { responseType: 'stream' })).data;
            return api.sendMessage({body: msg, attachment: stream}, threadID, (err, info) => {
                global.client.handleReply.push({
                    name: 'monster',
                    messageID: info.messageID,
                    author: senderID,
                    type: "buyItem",
                    id: "1",
                    data: get.getItems()
                });
            }, messageID);
        case "2":
            var foods = [
                {
                    type: "food",
                    name: "A Platter Mini (+5 mọi chỉ số)",
                    price: 10000,
                    heal: 100,
                    boostHP: 5,
                    boostATK: 5,
                    boostDEF: 5,
                    boostSPD: 5,
                    boostEXP: 0,
                    image: "https://i.imgur.com/a4sWP0L.png"
                },
                {
                    type: "food",
                    name: "B Platter Medium (+10 mọi chỉ số)",
                    price: 20000,
                    boostHP: 10,
                    boostATK: 10,
                    boostDEF: 10,
                    boostSPD: 10,
                    boostEXP: 0,
                    heal: 250,
                    image: "https://i.imgur.com/Zzjdj65.png"
                },
                {
                    type: "food",
                    name: "C Platter XL (+15 mọi chỉ số)",
                    price: 40000,
                    boostHP: 15,
                    boostATK: 15,
                    boostDEF: 15,
                    boostSPD: 15,
                    boostEXP: 0,
                    heal: 500,
                    image: "https://i.imgur.com/6LTkApY.png"
                },
                {
                    type: "food",
                    name: "Trà Sữa TocoToco Full Topping (+20 mọi chỉ số)",
                    price: 50000,
                    boostHP: 20,
                    boostATK: 20,
                    boostDEF: 20,
                    boostSPD: 20,
                    boostEXP: 0,
                    heal: 600,
                    image: "https://i.imgur.com/JoyQr1y.png"
                },
                {
                    type: "food",
                    name: "Upgrade Pill+ (đột phá mọi chỉ số)",
                    price: 2000000,
                    boostHP: 2000,
                    boostATK: 1000,
                    boostDEF: 1000,
                    boostSPD: 100,
                    boostEXP: 0,
                    heal: 0,
                    image: "https://i.imgur.com/C8cunxL.png"
                },
                {
                    type: "food",
                    name: "10x Upgrade Pill+ (đột phá mọi chỉ số)",
                    price: 20000000,
                    boostHP: 20000,
                    boostATK: 10000,
                    boostDEF: 10000,
                    boostSPD: 1000,
                    boostEXP: 0,
                    heal: 0,
                    image: "https://i.imgur.com/Lbe9fdO.png"
                },
                {
                    type: "food",
                    name: "Essence Of Life+",
                    price: 1000000,
                    boostHP: 4000,
                    boostATK: 0,
                    boostDEF: 0,
                    boostSPD: 0,
                    boostEXP: 0,
                    heal: 0,
                    image: "https://i.imgur.com/qOu2s77.png"
                },
                {
                    type: "food",
                    name: "Essence Of Power",
                    price: 1000000,
                    boostHP: 0,
                    boostATK: 2500,
                    boostDEF: 0,
                    boostSPD: 0,
                    boostEXP: 0,
                    heal: 0,
                    image: "https://i.imgur.com/jHMNVEA.png"
                },
                {
                    type: "food",
                    name: "Essence Of Vitality",
                    price: 1000000,
                    boostHP: 0,
                    boostATK: 0,
                    boostDEF: 2500,
                    boostSPD: 0,
                    boostEXP: 0,
                    heal: 0,
                    image: "https://i.imgur.com/LrGmips.png"
                },
                {
                    type: "food",
                    name: "Essence Of Wind",
                    price: 1000000,
                    boostHP: 0,
                    boostATK: 0,
                    boostDEF: 0,
                    boostSPD: 1500,
                    boostEXP: 0,
                    heal: 0,
                    image: "https://i.imgur.com/1KIiwIV.png"
                },
                {
                    type: "food",
                    name: "Lá Cần Sa Của Chúa",
                    price: 9999999999999,
                    boostHP: 9999999,
                    boostATK: 99999,
                    boostDEF: 99999,
                    boostSPD: 99999,
                    boostEXP: 0,
                    heal: 99999,
                    image: "https://i.imgur.com/IUom95z.png"
                }
            ]
            var msg = "Thức ăn hồi thể lực và thuốc:\n";
            num = 0;
            foods.forEach(item => {
                num++;
                msg += `${num}, ${item.name}\nHồi thể lực: ${item.heal} - ${item.price}$\n`;
            });
            msg += "【👀】- Bạn có thể mua thức ăn bằng cách nhập số thứ tự thức ăn (có thể nhập nhiều số cách nhau bởi dấu phẩy hoặc tất cả -all)";
            var stream = (await axios.get(global.configMonster.food, { responseType: 'stream' })).data;
            return api.sendMessage({body: msg, attachment: stream}, threadID, (err, info) => {
                global.client.handleReply.push({
                    name: 'monster',
                    messageID: info.messageID,
                    author: senderID,
                    type: "buyItem",
                    id: "2",
                    data: foods
                });
            }, messageID);
        case "3":
            if(!dataUser.monster || dataUser.monster.length == 0) return api.sendMessage("【⚠】- Túi của mày có cái nịt con giai à", threadID, messageID);
            var msg = "» Chiến lợi phẩm của bạn:\n";
            var num = 0;
            dataUser.monster.forEach(monster => {
                num++;
                msg += `${num} ‣ ${monster.Name} - ${monster.price}$\n`;
            });
            msg += "【👀】- Bạn có thể bán quái vật của mình bằng cách nhập số thứ tự quái vật (có thể nhập nhiều số cách nhau bởi dấu phẩy hoặc tất cả -all)";
            var stream = (await axios.get(global.configMonster.sell, { responseType: 'stream' })).data;
            return api.sendMessage({body: msg, attachment: stream}, threadID, (err, info) => {
                global.client.handleReply.push({
                    name: 'monster',
                    messageID: info.messageID,
                    author: senderID,
                    type: "buyItem",
                    id: "3",
                    data: dataUser.monster
                });
            }, messageID);
        case "4":
                var upgrades = [
                    {
                        type: "upgrade",
                        name: "Mithril",
                        usage: 1,
                        price: 20000,
                        boostHPweapon: 2000,
                        boostATKweapon: 200,
                        boostDEFweapon: 200,
                        boostSPDweapon: 10,
                        image: "https://i.imgur.com/Cvg8eHC.png"
                    },
                    {
                        type: "upgrade",
                        name: "Orichalcum",
                        usage: 2,
                        price: 50000,
                        boostHPweapon: 4000,
                        boostATKweapon: 400,
                        boostDEFweapon: 400,
                        boostSPDweapon: 20,
                        image: "https://i.imgur.com/Sz0A2hp.png"
                    },
                    {
                        type: "upgrade",
                        name: "Adamantium",
                        usage: 4,
                        price: 120000,
                        boostHPweapon: 8000,
                        boostATKweapon: 800,
                        boostDEFweapon: 800,
                        boostSPDweapon: 40,
                        image: "https://i.imgur.com/SnObhnz.png"
                    },
                    {
                        type: "upgrade",
                        name: "Scarite",
                        usage: 8,
                        price: 260000,
                        boostHPweapon: 16000,
                        boostATKweapon: 1600,
                        boostDEFweapon: 1600,
                        boostSPDweapon: 80,
                        image: "https://i.imgur.com/iIMwZEy.jpg"
                    },
                    {
                        type: "upgrade",
                        name: "Dragonite",
                        usage: 16,
                        price: 420000,
                        boostHPweapon: 32000,
                        boostATKweapon: 3200,
                        boostDEFweapon: 3200,
                        boostSPDweapon: 160,
                        image: "https://i.imgur.com/mKzBHAK.jpg"
                    },
                    {
                        type: "upgrade",
                        name: "Lunarite",
                        usage: 32,
                        price: 840000,
                        boostHPweapon: 64000,
                        boostATKweapon: 6400,
                        boostDEFweapon: 6400,
                        boostSPDweapon: 320,
                        image: "https://i.imgur.com/40qcjeG.jpg",
                    },
                    {
                        type: "upgrade",
                        name: "Kriztonite",
                        usage: 64,
                        price: 1580000,
                        boostHPweapon: 128000,
                        boostATKweapon: 12800,
                        boostDEFweapon: 12800,
                        boostSPDweapon: 640,
                        image: "https://i.imgur.com/awGbMAP.jpg"
                    },
                    {
                        type: "upgrade",
                        name: "Damascusium Crytalite",
                        usage: 128,
                        price: 4560000,
                        boostHPweapon: 256000,
                        boostATKweapon: 25600,
                        boostDEFweapon: 25600,
                        boostSPDweapon: 1280,
                        image: "https://i.imgur.com/a0T8AZf.jpg"
                    }
                ]
                var msg = "Upgrade Materials:\n";
                num = 0;
                upgrades.forEach(item => {
                    num++;
                    msg += `${num}, ${item.name}\nCộng chỉ số vũ khí: +${item.usage} - ${item.price}$\n`;
                });
                msg += "【👀】- Bạn có thể mua bằng cách nhập số thứ tự vật phẩm nâng cấp, vô bag để sử dụng nâng cấp vũ khí đang trang bị";
                var stream = (await axios.get(global.configMonster.weapon, { responseType: 'stream' })).data;
                return api.sendMessage({body: msg, attachment: stream}, threadID, (err, info) => {
                    global.client.handleReply.push({
                        name: 'monster',
                        messageID: info.messageID,
                        author: senderID,
                        type: "buyItem",
                        id: "4",
                        data: upgrades
                    });
                }, messageID);
        default:
            return api.sendMessage("【ERROR】⚠ Không hợp lệ", threadID, messageID);

    }
}

async function buyItem({ api, event, idItem, Currencies, handleReply }) {
    var { senderID, threadID, messageID } = event;
    var dataGlobal = require("./data/datauser.json");
    var dataUser = dataGlobal.find(item => item.id == senderID);
    var fs = require("fs-extra");
    if (!dataUser) return api.sendMessage("---<[ 𝕄ℍ 𝕊𝕋𝔸𝕋𝕌𝕊 ]>---\n\nBạn chưa có nhân vật", threadID, messageID);
    if (!idItem) return api.sendMessage("【ERROR】⚠ Bạn chưa nhập ID vật phẩm", threadID, messageID);
    var money = (await Currencies.getData(senderID)).money;
    try {
        switch(handleReply.id) {
            case "1":
                if(money < handleReply.data[idItem - 1].price) return api.sendMessage("【✨】• Bạn không đủ tiền, làm việc đi bà già mày", threadID, messageID);
                await Currencies.decreaseMoney(event.senderID, parseInt( handleReply.data[idItem - 1].price));
                const item = set.buyItem(senderID, handleReply.data[idItem - 1]);
                if (item == 404) return api.sendMessage("【ERROR】⚠ Không tìm thấy vật phẩm", threadID, messageID);
                if (item == 403) return api.sendMessage("【✨】• Bạn đã sở hữu vật phẩm này từ trước", threadID, messageID);
                api.unsendMessage(handleReply.messageID);
                var stream = (await axios.get(handleReply.data[idItem - 1].image, { responseType: 'stream' })).data;
                return api.sendMessage({body: `【✨】• Bạn đã mua thành công ${handleReply.data[idItem - 1].name} với giá ${handleReply.data[idItem - 1].price}$`, attachment: stream}, threadID, messageID);
            case "2":
                if(handleReply.data[idItem - 1] == undefined) return api.sendMessage("【ERROR】⚠ Không tìm thấy vật phẩm", threadID, messageID);
                if(money < handleReply.data[idItem - 1].price) return api.sendMessage("【✨】• Bạn không đủ tiền, làm việc đi bà già mày", threadID, messageID);
                await Currencies.decreaseMoney(event.senderID, parseInt( handleReply.data[idItem - 1].price));
                const food = set.buyItem(senderID, handleReply.data[idItem - 1]);
                if (food == 404) return api.sendMessage("【ERROR】⚠ Không tìm thấy vật phẩm", threadID, messageID);
                api.unsendMessage(handleReply.messageID);
                var stream = (await axios.get(handleReply.data[idItem - 1].image, { responseType: 'stream' })).data;
                return api.sendMessage({body: `【✨】• Bạn đã mua thành công ${handleReply.data[idItem - 1].name} với giá ${handleReply.data[idItem - 1].price}$`, attachment: stream}, threadID, messageID);
            case "4":
                if(handleReply.data[idItem - 1] == undefined) return api.sendMessage("【ERROR】⚠ Không tìm thấy vật phẩm", threadID, messageID);
                if(money < handleReply.data[idItem - 1].price) return api.sendMessage("【✨】• Bạn không đủ tiền, làm việc đi bà già mày", threadID, messageID);
                await Currencies.decreaseMoney(event.senderID, parseInt( handleReply.data[idItem - 1].price));
                const upgrade = set.buyItem(senderID, handleReply.data[idItem - 1]);
                if (upgrade == 404) return api.sendMessage("【ERROR】⚠ Không tìm thấy vật phẩm", threadID, messageID);
                api.unsendMessage(handleReply.messageID);
                var stream = (await axios.get(handleReply.data[idItem - 1].image, { responseType: 'stream' })).data;
                return api.sendMessage({body: `【✨】• Bạn đã mua thành công ${handleReply.data[idItem - 1].name} với giá ${handleReply.data[idItem - 1].price}$`, attachment: stream}, threadID, messageID);
            case "3":
                var list = event.body.split(" ");
                var num = 0;
                var moneySell = 0;
                if(list[0] == "-all") {
                    dataUser.monster.forEach(monster => {
                        num++;
                        moneySell += monster.price;
                    });
                    dataUser.monster = [];
                    fs.writeFileSync(__dirname + "/data/datauser.json", JSON.stringify(dataGlobal, null, 4));
                }
                else {
                    list.forEach(id => {
                        if(dataUser.monster[id - 1] == undefined) {
                            api.sendMessage("【ERROR】⚠ Không tìm thấy quái tại số " + id, threadID, messageID);
                        }
                        else {
                            num++;
                            moneySell += dataUser.monster[id - 1].price;
                            dataUser.monster.splice(id - 1, 1);
                        }
                    });
                    fs.writeFileSync(__dirname + "/data/datauser.json", JSON.stringify(dataGlobal, null, 4));
                }
                api.unsendMessage(handleReply.messageID);
                await Currencies.increaseMoney(event.senderID, parseInt(moneySell));
                return api.sendMessage(`【SOLD】✨ Bạn đã bán thành công ${num} quái vật và nhận được ${moneySell} đô`, threadID, messageID);
            default:
                return api.sendMessage("【ERROR】! Không hợp lệ", threadID, messageID);
        }
    }
    catch (e) {
        return api.sendMessage("【NOTICE】- Không tìm thấy vật phẩm", threadID, messageID);
    }
}

async function setItem({ api, event, handleReply }) {
    var weapon = handleReply.data[event.body - 1];
    const { senderID, threadID, messageID } = event;
    const dataUser = get.getDataUser(senderID);
    if(!weapon) return api.sendMessage("【NOTICE】- Không tìm thấy vật phẩm", threadID, messageID);
    if (!dataUser) return api.sendMessage("---<[ 𝕄ℍ 𝕊𝕋𝔸𝕋𝕌𝕊 ]>---\n\nBạn chưa có nhân vật", threadID, messageID);
    if (!event.body) return api.sendMessage("【NOTICE】- Bạn chưa nhập ID vật phẩm", threadID, messageID);
    set.setItem(senderID, weapon);
    api.unsendMessage(handleReply.messageID);
    var stream = (await axios.get(weapon.type == "weapon" ? global.configMonster.setWeapon : global.configMonster.eatGif, { responseType: 'stream' })).data;
    return api.sendMessage({body: `【NOTICE】- Đã ${weapon.type == "weapon" ? "đặt" : "sử dụng"} vật phẩm`, attachment: stream}, threadID, messageID);
}

async function myItem({ api, event }) {
    const { senderID, threadID, messageID } = event;
    const dataUser = get.getDataUser(senderID);
    if (!dataUser) return api.sendMessage("---<[ 𝕄ℍ 𝕊𝕋𝔸𝕋𝕌𝕊 ]>---\n\nBạn chưa có nhân vật", threadID, messageID);
    var msg = "⋄ Các vật phẩm của bạn:\n";
    var num = 0;
    var weapon = dataUser.bag.filter(item => item.type == "weapon");
    var food = dataUser.bag.filter(item => item.type == "food");
    var upgrade = dataUser.bag.filter(item => item.type == "upgrade");
    var user = get.getDataUser(senderID);
    msg += "【Vũ khí】:\n";
    if(weapon.length == 0) msg += "【NOTICE】- Không có vũ khí\n\n";
    else {
        weapon.forEach(item => {
            num++;
            msg += `${num} ‣Tên: ${item.name} (Giá: ${item.price})\n\n`;
        });
    }
    msg += "【Thực phẩm】:\n";
    if(food.length == 0) msg += "【NOTICE】- Không có thức ăn\n\n";
    else {
        food.forEach(item => {
            num++;
            msg += `${num} ‣Tên: ${item.name} -  ${item.price}$\n`;
        });
    }
    msg += "【Nâng Cấp】:\n";
    if(upgrade.length == 0) msg += "【NOTICE】Không có nâng cấp\n\n";
    if(user.weapon == null) msg += "【NOTICE】Trang bị vũ khí để sử dụng\n\n";
    else {
        upgrade.forEach(item => {
            num++;
            msg += `${num} ‣Tên: ${item.name} -  ${item.price}$\n`;
        });
    }
    msg += "• Bạn có thể trang bị vũ khí hoặc dùng thức ăn bằng cách nhập số thứ tự của vật phẩm\n---------------\n『ALERT』★ Vũ khí mới sẽ thay thế vũ khí cũ và vũ khí cũ sẽ bị mất ★";
    var stream = (await axios.get(global.configMonster.bag, { responseType: 'stream' })).data;
    return api.sendMessage({ body: msg, attachment: stream }, threadID, (err, info) => {
        global.client.handleReply.push({
            name: 'monster',
            messageID: info.messageID,
            author: senderID,
            type: "setItem",
            data: weapon.concat(food, upgrade)
        });
    }, messageID);
}



async function increaseDurability({ api, event, Currencies, handleReply }) {
    try {
        if(event.body == NaN) return api.sendMessage("『NOTICE』★ Nhập một chữ số ♢", event.threadID, event.messageID);
        const money = (await Currencies.getData(event.senderID)).money;
        if(money < event.body) return api.sendMessage("『NOTICE』★ Nghèo thì cút", threadID, messageID);
        const item = set.increaseDurability(event.senderID, event.body);
        await Currencies.decreaseMoney(event.senderID, parseInt(event.body));
        if (item == 404) return api.sendMessage("Không tìm thấy vật phẩm", event.threadID, event.messageID);
        api.unsendMessage(handleReply.messageID);
        return api.sendMessage(`Đã gia tăng độ bền thành công, độ bền hiện tại của vật phẩm là ${item}`, event.threadID, event.messageID);
    }
    catch (e) {
        console.log(e);
    }
}



async function match({ api, event }) {
    const { senderID, threadID, messageID } = event;
    const locate = require("./data/monster.json");
    const dataUser = get.getDataUser(senderID);
    if (!dataUser) return api.sendMessage("---<[ 𝕄ℍ 𝕊𝕋𝔸𝕋𝕌𝕊 ]>---\n\nBạn chưa có nhân vật", threadID, messageID);
    if (dataUser.locationID == null) return api.sendMessage("---<[ 𝕄ℍ 𝕊𝕋𝔸𝕋𝕌𝕊 ]>---\n\nBạn chưa đến khu vực nào", threadID, messageID);
    const monster = get.getMonster(dataUser.locationID);
    const minLevel = get.getMinLevel(dataUser.locationID);
    const maxLevel = get.getMaxLevel(dataUser.locationID);
    const locationLevel = get.getLocationLevel(dataUser.locationID);
    if (!monster || monster.length == 0) return api.sendMessage("『ERROR』★ Không tìm thấy khu vực này hoặc không có quái vật nào ở khu vực này!", threadID, messageID);
    if(dataUser.weapon == null) return api.sendMessage("『WARN』★ Chưa lên đồ đánh bằng tay không à cưng =))", threadID, messageID);
    if(dataUser.weapon.durability <= 0) return api.sendMessage("『WARN』★ Vũ khí của bạn đã bị hỏng sửa đi bà già mày :(", threadID, messageID);
    if(dataUser.level < locationLevel) return api.sendMessage('『WARN』★ Bạn chưa đạt đủ level, hãy cày thêm\nLevel khu vưc: ' + locationLevel, threadID, messageID);
    if(dataUser.the_luc < 50) return api.sendMessage("『WARN』★ Thể lực của bạn không đủ để đánh quái vật, vui lòng ghé cửa hàng để mua thức ăn!", threadID, messageID);
    if(dataUser.monster.length > 30) return api.sendMessage("Bạn đã đầy túi, hãy bán bớt quái!!!", threadID, messageID);
    const random = Math.floor(Math.random() * 1000);
    var tier = 0;
    if (random < 340) tier = "I";
    else if (random < 540) tier = "II";
    else if (random < 690) tier = "III";
    else if (random < 790) tier = "IV";
    else if (random < 840) tier = "V";
    else if (random < 860) tier = "X";
    else if (random < 861) tier = "XX";
    else return api.sendMessage("Bạn không gặp quái vật", threadID, messageID);
    const monsterTier = monster.filter((item) => item.Tier == tier);
        if (monsterTier.length == 0) return api.sendMessage('Bạn không gặp quái vật', threadID, messageID);
    const monsterRandom = monsterTier[Math.floor(Math.random() * monsterTier.length)];
    var level = Math.floor(Math.random() * maxLevel + minLevel);
    var threat = "";
        if(monsterRandom.HP + 4 * monsterRandom.ATK + 3 * monsterRandom.DEF + 5 * monsterRandom.SPD > 1) threat = "1💀";
        if(monsterRandom.HP + 4 * monsterRandom.ATK + 3 * monsterRandom.DEF + 5 * monsterRandom.SPD > 4400) threat = "2💀";
        if(monsterRandom.HP + 4 * monsterRandom.ATK + 3 * monsterRandom.DEF + 5 * monsterRandom.SPD > 8300) threat = "3💀";
        if(monsterRandom.HP + 4 * monsterRandom.ATK + 3 * monsterRandom.DEF + 5 * monsterRandom.SPD > 28800) threat = "4💀";
        if(monsterRandom.HP + 4 * monsterRandom.ATK + 3 * monsterRandom.DEF + 5 * monsterRandom.SPD > 80000) threat = "5💀";
        if(monsterRandom.HP + 4 * monsterRandom.ATK + 3 * monsterRandom.DEF + 5 * monsterRandom.SPD > 140000) threat = "6💀";
        if(monsterRandom.HP + 4 * monsterRandom.ATK + 3 * monsterRandom.DEF + 5 * monsterRandom.SPD > 275000) threat = "7💀";
        if(monsterRandom.HP + 4 * monsterRandom.ATK + 3 * monsterRandom.DEF + 5 * monsterRandom.SPD > 400000) threat = "8💀";
        if(monsterRandom.HP + 4 * monsterRandom.ATK + 3 * monsterRandom.DEF + 5 * monsterRandom.SPD > 590000) threat = "9💀";
        if(monsterRandom.HP + 4 * monsterRandom.ATK + 3 * monsterRandom.DEF + 5 * monsterRandom.SPD > 800000) threat = "10💀";
        if(monsterRandom.HP + 4 * monsterRandom.ATK + 3 * monsterRandom.DEF + 5 * monsterRandom.SPD > 1000000) threat = "11💀";
        if(monsterRandom.HP + 4 * monsterRandom.ATK + 3 * monsterRandom.DEF + 5 * monsterRandom.SPD > 1200000) threat = "12💀";
        if(monsterRandom.HP + 4 * monsterRandom.ATK + 3 * monsterRandom.DEF + 5 * monsterRandom.SPD > 1500000) threat = "13💀";
        if(monsterRandom.HP + 4 * monsterRandom.ATK + 3 * monsterRandom.DEF + 5 * monsterRandom.SPD > 2000000) threat = "14💀";
        if(monsterRandom.HP + 4 * monsterRandom.ATK + 3 * monsterRandom.DEF + 5 * monsterRandom.SPD > 2600000) threat = "15💀";
        if(monsterRandom.HP + 4 * monsterRandom.ATK + 3 * monsterRandom.DEF + 5 * monsterRandom.SPD > 3920000) threat = "16💀";
        if(monsterRandom.HP + 4 * monsterRandom.ATK + 3 * monsterRandom.DEF + 5 * monsterRandom.SPD > 4300000) threat = "17💀";
        if(monsterRandom.HP + 4 * monsterRandom.ATK + 3 * monsterRandom.DEF + 5 * monsterRandom.SPD > 4900000) threat = "18💀";
        if(monsterRandom.HP + 4 * monsterRandom.ATK + 3 * monsterRandom.DEF + 5 * monsterRandom.SPD > 5600000) threat = "19💀";
        if(monsterRandom.HP + 4 * monsterRandom.ATK + 3 * monsterRandom.DEF + 5 * monsterRandom.SPD > 6000000) threat = "20💀";
        if(monsterRandom.HP + 4 * monsterRandom.ATK + 3 * monsterRandom.DEF + 5 * monsterRandom.SPD > 7000000) threat = "21💀";
        if(monsterRandom.HP + 4 * monsterRandom.ATK + 3 * monsterRandom.DEF + 5 * monsterRandom.SPD > 9000000) threat = "23💀";
        if(monsterRandom.HP + 4 * monsterRandom.ATK + 3 * monsterRandom.DEF + 5 * monsterRandom.SPD > 11000000) threat = "24💀";
        if(monsterRandom.HP + 4 * monsterRandom.ATK + 3 * monsterRandom.DEF + 5 * monsterRandom.SPD > 12500000) threat = "25💀";
        if(monsterRandom.HP + 4 * monsterRandom.ATK + 3 * monsterRandom.DEF + 5 * monsterRandom.SPD > 25000000) threat = "26💀";
        if(monsterRandom.HP + 4 * monsterRandom.ATK + 3 * monsterRandom.DEF + 5 * monsterRandom.SPD > 50000000) threat = "27💀";
        if(monsterRandom.HP + 4 * monsterRandom.ATK + 3 * monsterRandom.DEF + 5 * monsterRandom.SPD > 60000000) threat = "28💀";
        if(monsterRandom.HP + 4 * monsterRandom.ATK + 3 * monsterRandom.DEF + 5 * monsterRandom.SPD > 70000000) threat = "29💀";
        if(monsterRandom.HP + 4 * monsterRandom.ATK + 3 * monsterRandom.DEF + 5 * monsterRandom.SPD > 85000000) threat = "30💀";
        if(monsterRandom.HP + 4 * monsterRandom.ATK + 3 * monsterRandom.DEF + 5 * monsterRandom.SPD > 90000000) threat = "30+💀";
    const exp = Math.round(monsterRandom.exp + (monsterRandom.exp * 0.1) * (level - 1))
    var monsterHp = monsterRandom.HP + (monsterRandom.HP * 0.1) * (level - 1)
    const monsterHP = Math.round(monsterHp)
    var monsterAtk = monsterRandom.ATK + (monsterRandom.ATK * 0.1) * (level - 1)
    const monsterATK = Math.round(monsterAtk)
    var monsterDef = monsterRandom.DEF + (monsterRandom.DEF * 0.1) * (level - 1)
    const monsterDEF = Math.round(monsterDef)
    var monsterSpd = monsterRandom.SPD + (monsterRandom.SPD * 0.1) * (level - 1)
    const monsterSPD = Math.round(monsterSpd)
    var path = __dirname + "/" + senderID + ".png";
    var image = await get.getImgMonster(monsterRandom, path);
    var fs = require('fs-extra');
    var msgStatus = `!!《𝙴𝙽𝙴𝙼𝚈 𝚂𝙿𝙾𝚃𝚃𝙴𝙳》!!\n‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒\nBạn đã gặp quái vật ${monsterRandom.Name} (Tier: ${tier}) có chỉ số:\n- Level: ${level}\n- HP❤: ${monsterHP}\n- ATK⚔: ${monsterATK}\n- DEF🛡: ${monsterDEF}\n- SPEED⚡: ${monsterSPD}\n- ⚠Độ nguy hiểm: ` + threat + `\nLực Chiến👊: ${monsterHP + 4 * monsterATK + 3 * monsterDEF + 5 * monsterSPD}\n`
    msgStatus += "Chỉ số của bạn:\n";
    msgStatus += `- ❤: ${dataUser.hp + dataUser.weapon.HP}\n`;
    msgStatus += `- ⚔: ${dataUser.atk + dataUser.weapon.ATK}\n`;
    msgStatus += `- 🛡: ${dataUser.def + dataUser.weapon.DEF}\n`;
    msgStatus += `- ⚡: ${dataUser.spd + dataUser.weapon.SPD}\n`;
    msgStatus += `Lực Chiến👊: ${dataUser.hp + dataUser.weapon.HP + 4 * (dataUser.atk + dataUser.weapon.ATK) + 3 * (dataUser.def + dataUser.weapon.DEF) + 5 * (dataUser.spd + dataUser.weapon.SPD)}\n`;
    var msg = {
        body: msgStatus,
        attachment: image
    }
    await api.sendMessage(msg, threadID)
    fs.unlinkSync(path);
    await new Promise(resolve => setTimeout(resolve, 3000));
    await api.sendMessage("『FIGHTING』Đang giao cấu...⚔⚔⚔", threadID);
    try {
        var fight = require('./fight.js');
        var result = fight.fight({
            HP: dataUser.hp + dataUser.weapon.HP,
            ATK: dataUser.atk + dataUser.weapon.ATK,
            DEF: dataUser.def + dataUser.weapon.DEF,
            SPD: dataUser.spd + dataUser.weapon.SPD,
            Mana: 1
        }, {
            HP: monsterHP,
            ATK: monsterATK,
            DEF: monsterDEF,
            SPD: monsterSPD,
            Mana: 1
        });
        var dur = set.decreaseDurability(senderID);
        var powPlayer = result.playerPow;
        set.decreaseHealthWeapon(senderID, powPlayer.HP);
        var dame = 0,
            def = 0,
            dameMonster = 0,
            defMonster = 0,
            countTurn = result.log.length
        result.log.map(i => {
            if(i.attacker == "player") {
                dame += i.damage;
                defMonster += i.defenderDef;
            }
            else {
                dameMonster += i.damage;
                def += i.defenderDef;
            }
        })
        var msg = `» Bạn và nó giao cấu trong ${countTurn} hiệp\n» Bạn:\n- Tổng sát thương: ${dame}⚔\n- Chống chịu: ${def}🛡 \n» Quái vật:\n-Tổng sát thương: ${dameMonster}⚔\n- Chống chịu: ${defMonster}🛡`;
        if(dur == 0) await api.sendMessage("『WARN』★ Vũ khí của bạn đã bị hỏng, sửa đi bà già mày :(", threadID);
        if(dataUser.weapon == null) await api.sendMessage("『WARN』★ Vũ khí của bạn đã bị hỏng nặng, không thể sửa được :(", threadID);
        if(dataUser.the_luc < 150) await api.sendMessage("『WARN』★ Thể lực gần cạn, chú ý bổ sung thể lực⚠", threadID);
        var status = "";
        if(result.log.length == 1) status = "NHỜN! MỘT VỤT\n\n";
        if(result.log.length >= 2) status = "Quá EZ!!!\n\n";
        if(result.log.length > 10) status = "Quá ghê gớm, bạn và con quái giao cấu mãnh liệt\n\n";
        if(result.log.length > 20) status = "Bạn và con quái giao cấu banh cả một khu!!!\n\n";
        if(result.log.length > 30) status = "Dã man tàn bạo vô nhân đạo, bạn và quái giao cấu banh cả map!!!\n\n";
        if(result.winner == true) {
            var sendMsg = status + `•Bạn đã hạ được ${monsterRandom.Name} (Tier: ${tier})\n•Bạn nhận được ${exp}EXP`;
            set.addMonster(senderID, monsterRandom);
            await api.sendMessage(sendMsg, threadID);
            await new Promise(resolve => setTimeout(resolve, 1000));
            await api.sendMessage("★Thống kê trận đấu★\n-------------\n" + msg, threadID);
            set.setExp(senderID, exp, api, threadID);
        }
        else {
            await api.sendMessage(status + "★Bạn đã thua trận đấu :(", threadID);
            await new Promise(resolve => setTimeout(resolve, 1000));
            await api.sendMessage("★Thống kê trận đấu★\n\n" + msg, threadID);
            return;
        }
    }
    catch (e) {
        return api.sendMessage("«Đã có lỗi xảy ra»", threadID, messageID);
    }
    
}

async function listLocation({ api, event }) {
    const { senderID, threadID, messageID } = event;
    const dataUser = get.getDataUser(senderID);
    if (!dataUser) return api.sendMessage("---<[ 𝕄ℍ 𝕊𝕋𝔸𝕋𝕌𝕊 ]>---\n\nBạn chưa có nhân vật", threadID, messageID);
    var listLocation = require("./data/monster.json")
    var msg = "---《 𝙼𝙷 𝙼𝙰𝙿 》---\n\nCác khu vực:\n";
    listLocation.forEach(location => {
        msg += `»${location.ID + 1} • ${location.location} - Level yêu cầu: ${location.level}\n\n `;
    });
    var stream = await axios.get(global.configMonster.location, { responseType: 'stream' });
    return api.sendMessage({body: msg, attachment: stream.data}, threadID, (err, info) => {
        global.client.handleReply.push({
            name: 'monster',
            messageID: info.messageID,
            author: senderID,
            type: "setLocationID"
        });
    }, messageID);
}

function setLocationID({ api, event, handleReply }) {
    const { senderID, threadID, messageID } = event;
    const dataUser = get.getDataUser(senderID);
    if (!dataUser) return api.sendMessage("『ERROR』✦Bạn chưa có nhân vật", threadID, messageID);
    const locationID = Number(event.body) - 1;
    const location = require("./data/monster.json")[locationID];
    if (!location) return api.sendMessage("---《 𝙼𝙷 𝙼𝙰𝙿 》---\n\n『ERROR』✦Không tìm thấy khu vực\n--------------", threadID, messageID);
    set.setLocation(senderID, String(locationID));
    api.unsendMessage(handleReply.messageID);
    return api.sendMessage(`---《 𝙼𝙷 𝙼𝙰𝙿 》---\n\nĐã đến khu vực ${location.location}\n--------------`, threadID, messageID);
}
    
module.exports = {
    createCharecter,
    getCharacter,
    getItems,
    getServer,
    buyItem,
    setItem,
    myItem,
    increaseDurability,
    match,
    listLocation,
    setLocationID,
    getWeapon
}