module.exports.config = {
	name: "tod",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "Starling",
	description: "Sự thật hay thử thách",
	commandCategory: "game",
    cooldowns: 5
};
var dare = ["Xin mời thành viên đưa ra thử thách"];//Câu hỏi thách <3
var truth = ["Xin mời thành viên đưa ra câu hỏi",
"bạn có đang thích ai không? hãy nói tên người đó",
"Bạn từng đi qua một chuyến du lịch đáng nhớ chưa?",
"Cây hoa cuối cùng bạn tặng cho ai là gì?",
"Bạn có bao giờ bị mất đồ quan trọng không?",
"Cuộc gặp gỡ đáng nhớ nhất của bạn là gặp ai và khi nào?",
"Bạn có thích đọc sách không? Nếu có, quyển sách cuối cùng bạn đọc là gì?",
"Nếu bạn có thể thay đổi một điều trong quá khứ của mình, đó sẽ là gì?",
"Bạn đã từng tham gia vào một hoạt động từ thiện không?",
"Một kỷ niệm vui vẻ từ thời thơ ấu của bạn là gì?",
"Bạn có một niềm đam mê hoặc sở thích đặc biệt không?",
"Bạn có một ước mơ lớn không? Nếu có, ước mơ đó là gì?",
"Cuộc phiêu lưu ngoại ô bạn muốn thử là gì?",
"Ai là người hùng của bạn và tại sao?",
"Bạn đã từng trải qua một thất bại lớn không?",
"Nếu bạn có thể thay đổi một điều trong thế giới này, đó sẽ là gì?",
"Bạn từng gặp một ngôi sao nổi tiếng chưa?",
"Ngày kỷ niệm đặc biệt nhất trong cuộc sống của bạn là ngày nào?",
"Nếu bạn có thể có một kỹ năng hoặc tài năng mới ngay lập tức, đó sẽ là gì?",
"Cây cầu đầu tiên bạn bước qua trong cuộc sống là gì?",
"Cuộc thi hoặc giải thưởng lớn nhất bạn từng giành được là gì?",
"Một bức tranh hoặc hình ảnh mà bạn đã vẽ là gì và nó có ý nghĩa gì đối với bạn?",
"Bạn từng trải qua một thay đổi lớn trong cuộc sống không?",
"Nếu bạn có thể chọn một nơi để sống trên thế giới, đó sẽ là đâu và tại sao?",
"Người trong gia đình bạn là người bạn thân nhất và bạn thường xuyên làm gì cùng họ?",
"Nếu bạn có thể trở thành người nổi tiếng trong lĩnh vực nào đó, đó sẽ là lĩnh vực gì?",
"Một kinh nghiệm học hỏi lớn nhất bạn đã có từ một người khác là gì?",
"Cuộc gặp gỡ tình cờ gần đây nhất của bạn là khi nào và với ai?",
"Bạn có một phương pháp giảm stress hoặc giữ gìn sức khỏe tinh thần không?",
"Một mục tiêu lớn trong cuộc sống của bạn là gì và bạn đã tiến triển đến đâu trong việc đạt được nó?",
"Nếu bạn có thể có một siêu năng lực, đó sẽ là siêu năng lực gì và bạn sẽ làm gì với nó?","Bạn từng trải qua một trải nghiệm vượt qua sợ hãi không? Nếu có, đó là trải nghiệm gì và nó đã dạy cho bạn điều gì về bản thân mình?",];//Câu hỏi thật <3
module.exports.run = async ({ event, api, args, Currencies }) => {
  const request = require("request");
const fs = require("fs");
   const { threadID, messageID, senderID } = event;
    
    
    
    if (!args[0]) {
     var msg = {body: `[ 𝐑𝐄𝐏𝐋𝐘 ] - 𝐓𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐯𝐚̀ 𝐜𝐡𝐨̣𝐧 𝐭𝐡𝐚̣̂𝐭 𝐡𝐨𝐚̣̆𝐜 𝐭𝐡𝐚́𝐜𝐡 🎁\n🍑====================🍑\nㅤㅤㅤㅤㅤㅤ𝟏: 𝐓𝐡𝐚́𝐜𝐡 🐥\nㅤㅤㅤㅤㅤㅤ𝟐: 𝐓𝐡𝐚̣̂𝐭 🐰\n🍭====================🍭\n𝐂𝐨́ 𝐂𝐡𝐨̛𝐢 𝐂𝐨́ 𝐂𝐡𝐢̣𝐮 𝐁𝐮̀𝐧𝐠 𝐂𝐚́𝐢...`}
        
        return api.sendMessage(msg, event.threadID, (error, info) => {
        
            global.client.handleReply.push({
                type: "choosee",
                name: this.config.name,
                author: event.senderID,
                messageID: info.messageID
            })
        })
    }
}
    module.exports.handleReply = async function ({
    args,
    event,
    Users,
    api,
    handleReply,
    Currencies
}) {
  const axios = require("axios");
    var { author } = handleReply;
    if (event.senderID != author) return api.sendMessage("===[ WARNING ]===\n !!!", event.threadID, event.messageID); 
    switch (handleReply.type) {
    case "choosee": {
        switch (event.body) {
        case "1": {
          api.unsendMessage(handleReply.messageID);
          
    return api.sendMessage(`Dare : ${dare[Math.floor(Math.random()*dare.length)]}`, event.threadID, event.messageID)

            }
            
        
        
        case "2": {
          api.unsendMessage(handleReply.messageID);
    return api.sendMessage(`Truth : ${truth[Math.floor(Math.random()*truth.length)]}`, event.threadID, event.messageID)
            }
            break;
					default:
           const choose = parseInt(event.body);
            	if (isNaN(event.body)) return api.sendMessage("Vui lòng nhập 1 con số", event.threadID, event.messageID);
            	if (choose > 2 || choose < 1) return api.sendMessage("Lựa chọn không nằm trong danh sách.", event.threadID, event.messageID); 
    }
    }
}
      }