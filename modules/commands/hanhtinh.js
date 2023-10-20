const fs = require("fs");
module.exports.config = {
	name: "hanhtinh",
    version: "1.1.8",
	hasPermssion: 0,
	credits: "JRT fix by Jukie~~", 
	description: "Xem thông tin về hành tinh",
	commandCategory: "xem bói",
	usages: "",
    cooldowns: 5, 
};

module.exports.handleReply = async ({ api, event, handleReply }) => {
const { threadID, messageID, senderID } = event;
    switch(handleReply.type) {
        case "choosee": {
            switch(event.body) {

					case "1":
			api.sendMessage({
				body: "1. Hệ Mặt Trời - The Sun ☀\nMặt Trời (tiếng Anh: Sun; còn gọi là Thái Dương hoặc Nhật), là ngôi sao ở trung tâm Hệ Mặt Trời, chiếm khoảng 99,86% khối lượng của Hệ Mặt Trời. Trái Đất và các thiên thể khác như các hành tinh, tiểu hành tinh, thiên thạch, sao chổi, và bụi quay quanh Mặt Trời. Khoảng cách trung bình giữa Mặt Trời và Trái Đất xấp xỉ 149,6 triệu kilômét (1 Đơn vị thiên văn AU) nên ánh sáng Mặt Trời cần 8 phút 19 giây mới đến được Trái Đất. Trong một năm, khoảng cách này thay đổi từ 147,1 triệu kilômét (0,9833 AU) ở điểm cận nhật (khoảng ngày 3 tháng 1), tới xa nhất là 152,1 triệu kilômét (1,017 AU) ở điểm viễn nhật (khoảng ngày 4 tháng 7). Năng lượng Mặt Trời ở dạng ánh sáng hỗ trợ cho hầu hết sự sống trên Trái Đất thông qua quá trình quang hợp, và điều khiển khí hậu cũng như thời tiết trên Trái Đất. Thành phần của Mặt Trời gồm hydro (khoảng 74% khối lượng, hay 92% thể tích), heli (khoảng 24% khối lượng, 7% thể tích), và một lượng nhỏ các nguyên tố khác, gồm sắt, nickel, oxy, silic, lưu huỳnh, magiê, carbon, neon, calci, và crom.\nMặt Trời có hạng quang phổ G2V. G2 có nghĩa nó có nhiệt độ bề mặt xấp xỉ 5.778 K (5.505 °C) khiến nó có màu trắng, và thường có màu vàng khi nhìn từ bề mặt Trái Đất bởi sự tán xạ khí quyển. Chính sự tán xạ này của ánh sáng ở giới hạn cuối màu xanh của quang phổ khiến bầu trời có màu xanh. Quang phổ Mặt Trời có chứa các vạch ion hoá và kim loại trung tính cũng như các đường hydro rất yếu. V (số 5 La Mã) trong lớp quang phổ thể hiện rằng Mặt Trời, như hầu hết các ngôi sao khác, là một ngôi sao thuộc dãy chính. Điều này có nghĩa nó tạo ra năng lượng bằng tổng hợp hạt nhân của hạt nhân hydro thành heli. Có hơn 100 triệu ngôi sao lớp G2 trong Ngân Hà của chúng ta. Từng bị coi là một ngôi sao nhỏ và khá tầm thường nhưng thực tế theo hiểu biết hiện tại, Mặt Trời sáng hơn 85% các ngôi sao trong Ngân Hà với đa số là các sao lùn đỏ.Quầng nóng của Mặt Trời liên tục mở rộng trong không gian và tạo ra gió Mặt Trời là các dòng hạt có vận tốc gấp 5 lần âm thanh - mở rộng nhật mãn (Heliopause) tới khoảng cách xấp xỉ 100 AU. Bong bóng trong môi trường liên sao được hình thành bởi gió mặt trời, nhật quyển (heliosphere) là cấu trúc liên tục lớn nhất trong Hệ Mặt Trời.Mặt Trời hiện đang đi xuyên qua đám mây Liên sao Địa phương (Local Interstellar Cloud) trong vùng Bóng Địa phương (Local Bubble) mật độ thấp của khí khuếch tán nhiệt độ cao, ở vành trong của Nhánh Orion của Ngân Hà, giữa nhánh Perseus và nhánh Sagittarius của ngân hà. Trong 50 hệ sao gần nhất bên trong 17 năm ánh sáng từ Trái Đất, Mặt Trời xếp hạng 4 về khối lượng như một ngôi sao cấp bốn (M = +4,83), dù có một số giá trị cấp hơi khác biệt đã được đưa ra, ví dụ 4,85 và 4,81. Mặt Trời quay quanh trung tâm của Ngân Hà ở khoảng cách xấp xỉ 24.000–26.000 năm ánh sáng từ trung tâm Ngân Hà, nói chung di chuyển theo hướng chùm sao Cygnus và hoàn thành một vòng trong khoảng 225–250 triệu năm (một năm ngân hà). Tốc độ trên quỹ đạo của nó được cho khoảng 250 ± 20, km/s nhưng một ước tính mới đưa ra con số 251 km/s.\nBởi Ngân Hà của chúng ta đang di chuyển so với Màn bức xạ vi sóng vũ trụ (CMB) theo hướng chòm sao Hydra với tốc độ 550 km/s, nên tốc độ chuyển động của nó so với CMB là khoảng 370 km/s theo hướng chòm sao Crater hay Leo.", 
				attachment: fs.createReadStream(__dirname + `/noprefix/hanhtinh/mattroi.jpg`)
			}, event.threadID, event.messageID);
			break;
		case "2":
			api.sendMessage({
				body: "2. Trái Đất - Earth🌎\n\nTrái Đất hay Địa Cầu (chữ Hán: 地球, tiếng Anh: Earth), là hành tinh thứ ba tính từ Mặt Trời, đồng thời cũng là hành tinh lớn nhất trong các hành tinh đất đá của hệ Mặt Trời xét về bán kính, khối lượng và mật độ vật chất. Trái Đất còn được biết tên với các tên gọi (hành tinh xanh), là nhà của hàng triệu loài sinh vật, trong đó có con người và cho đến nay nó là nơi duy nhất trong vũ trụ được biết đến là có sự sống. Hành tinh này được hình thành cách đây 4,55 tỷ năm và sự sống xuất hiện trên bề mặt của nó khoảng 1 tỷ năm trước. Kể từ đó, sinh quyển, khí quyển của Trái Đất và các điều kiện vô cơ khác đã thay đổi đáng kể, tạo điều kiện thuận lợi cho sự phổ biến của các vi sinh vật ưa khí cũng như sự hình thành của tầng ôzôn-lớp bảo vệ quan trọng, cùng với từ trường của Trái Đất, đã ngăn chặn các bức xạ có hại và chở che cho sự sống. Các đặc điểm vật lý của Trái Đất cũng như lịch sử địa lý hay quỹ đạo, cho phép sự sống tồn tại trong thời gian qua. Người ta ước tính rằng Trái Đất chỉ còn có thể hỗ trợ sự sống thêm 1,5 tỷ năm nữa, trước khi kích thước của Mặt Trời tăng lên (trở thành sao khổng lồ đỏ) và tiêu diệt hết sự sống.Bề mặt Trái Đất được chia thành các mảng kiến tạo, chúng di chuyển từ từ trên bề mặt Trái Đất trong hàng triệu năm. Khoảng 71% bề mặt Trái Đất được bao phủ bởi các đại dương nước mặn, phần còn lại là các lục địa và các đảo. Nước là thành phần rất cần thiết cho sự sống và cho đến nay con người vẫn chưa phát hiện thấy sự tồn tại của nó trên bề mặt của bất kì hành tinh nào khác ngoại trừ sao Hỏa là có nước bị đóng băng ở hai cực. Tuy nhiên, người ta có chứng cứ xác định nguồn nước có ở Sao Hỏa trong quá khứ, và có thể tồn tại cho tới ngày nay. Lõi của Trái Đất vẫn hoạt động được bao bọc bởi lớp manti rắn dày, lớp lõi ngoài lỏng tạo ra từ trường và lõi sắt trong rắn.Trái Đất tương tác với các vật thể khác trong không gian bao gồm Mặt Trời và Mặt Trăng. Hiện quãng thời gian Trái Đất di chuyển hết một vòng quanh Mặt Trời bằng 365,2564 lần quãng thời gian nó tự quay một vòng quanh trục của mình. Khoảng thời gian này bằng với một năm thiên văn tức 365,2564 ngày trong dương lịch. Trục tự quay của Trái Đất nghiêng một góc bằng 23,44° so với trục vuông góc với mặt phẳng quỹ đạo, tạo ra sự thay đổi mùa trên bề mặt của Trái Đất trong một năm chí tuyến. Mặt Trăng, vệ tinh tự nhiên duy nhất của Trái Đất, đồng thời cũng là nguyên nhân chính gây ra hiện tượng thủy triều đại dương, bắt đầu quay quanh Trái Đất từ 4,53 tỷ năm trước, vẫn giữ nguyên góc quay ban đầu theo thời gian nhưng đang chuyển động chậm dần lại. Trong khoảng từ 4,1 đến 3,8 tỷ năm trước, sự va đập của các thiên thạch trong suốt thời kì (Công phá Mạnh muộn) đã tạo ra những sự thay đổi đáng kể trên bề mặt Mặt Trăng.\nCả tài nguyên khoáng sản lẫn các sản phẩm của sinh quyển Trái Đất được sử dụng để cung cấp cho cuộc sống của con người. Dân cư được chia thành hơn hàng trăm quốc gia độc lập, có quan hệ với nhau thông qua các hoạt động ngoại giao, du lịch, thương mại, quân sự. Văn hóa loài người đã phát triển tạo nên nhiều cách nhìn về Trái Đất bao gồm việc nhân cách hóa Trái Đất như một vị thần, niềm tin vào một Trái Đất phẳng hoặc Trái Đất là trung tâm của cả vũ trụ, và một quan điểm nhìn hiện đại hơn như Trái Đất là một môi trường thống nhất cần có sự định hướng.", 
				attachment: fs.createReadStream(__dirname + `/noprefix/hanhtinh/traidat.jpg`)
			}, event.threadID, event.messageID);
			break;
		case "3":
			api.sendMessage({
				body: "3. Sao hỏa - Mars \n\nSao Hỏa hay Hỏa tinh (chữ Hán: 火星, tiếng Anh: Mars) là hành tinh thứ tư tính từ Mặt Trời trong Thái Dương Hệ. Nó thường được gọi với tên khác là (Hành tinh Đỏ), do sắt ôxít có mặt rất nhiều trên bề mặt hành tinh làm cho bề mặt nó hiện lên với màu đỏ đặc trưng. Sao Hỏa là một hành tinh đất đá với một khí quyển mỏng, có những đặc điểm trên bề mặt có nét giống với cả các hố va chạm trên Mặt Trăng và các núi lửa, thung lũng, sa mạc và chỏm băng ở cực trên của Trái Đất. Chu kỳ tự quay và sự tuần hoàn của các mùa trên Hỏa Tinh khá giống với của Trái Đất do độ nghiêng của trục quay tạo ra. Trên Sao Hỏa có ngọn núi Olympus Mons, ngọn núi cao nhất trong Hệ Mặt Trời, và hẻm núi Valles Marineris, hẻm núi dài và rộng nhất trong Thái Dương Hệ. Lòng chảo Borealis bằng phẳng trên bán cầu bắc bao phủ tới 40% diện tích bề mặt hành tinh đỏ và có thể là một hố va chạm khổng lồ trong quá khứ.Cho đến khi tàu Mariner 4 lần đầu tiên bay ngang qua Sao Hỏa vào năm 1965, đã có nhiều suy đoán về sự có mặt của nước lỏng trên bề mặt hành tinh này. Chúng dựa trên những quan sát về sự biến đổi chu kỳ về độ sáng và tối của những nơi trên bề mặt hành tinh, đặc biệt tại những vĩ độ vùng cực, nơi có đặc điểm của biển và lục địa; những đường kẻ sọc dài và tối ban đầu được cho là những kênh tưới tiêu chứa nước lỏng. Những đường sọc thẳng này sau đó được giải thích như là những ảo ảnh quang học, mặc dù các chứng cứ địa chất thu thập bởi các tàu thăm dò không gian cho thấy Sao Hỏa có khả năng đã từng có nước lỏng bao phủ trên diện rộng ở bề mặt của nó. Năm 2005, dữ liệu từ tín hiệu radar cho thấy sự có mặt của một lượng lớn nước đóng băng ở hai cực, và tại các vũng vĩ độ trung bình. Robot tự hành Spirit đã lấy được mẫu các hợp chất hóa học chứa phân tử nước vào tháng 3 năm 2007. Tàu đổ bộ Phoenix đã trực tiếp lấy được mẫu nước đóng băng trong lớp đất nông trên bề mặt vào ngày 31 tháng 7 năm 2008.Sao Hỏa có hai vệ tinh: Phobos và Deimos, chúng là các vệ tinh nhỏ và dị hình. Đây có thể là các tiểu hành tinh bị Hỏa Tinh bắt được, tương tự như 5261 Eureka - một tiểu hành tinh Troia của Hỏa Tinh. Hiện nay có ba tàu quỹ đạo còn hoạt động đang bay quanh Sao Hỏa: Mars Odyssey, Mars Express, và Mars Reconnaissance Orbiter. Trên bề mặt nó có robot tự hành thám hiểm Sao Hỏa (Mars Exploration Rover) Opportunity không còn hoạt động và cặp song sinh với nó robot tự hành Spirit đã ngừng hoạt động, cùng với đó là những tàu đổ bộ và robot tự hành trong quá khứ-cả thành công lẫn không thành công. Tàu đổ bộ Phoenix đã hoàn thành phi vụ của nó vào năm 2008. Những quan sát bởi tàu quỹ đạo đã ngừng hoạt động của NASA Mars Global Surveyor chỉ ra chứng cứ về sự dịch chuyển thu nhỏ và mở rộng của chỏm băng cực bắc theo các mùa. Tàu quỹ đạo Mars Reconnaissance Orbiter của NASA đã thu nhận được các bức ảnh cho thấy khả năng có nước chảy trong những tháng nóng nhất trên sao Hỏa.Sao Hỏa có thể dễ dàng nhìn từ Trái Đất bằng mắt thường. Cấp sao biểu kiến của nó đạt giá trị −3,0 chỉ đứng sau so với Sao Mộc, Sao Kim, Mặt Trăng, và Mặt Trời.", 
				attachment: fs.createReadStream(__dirname + `/noprefix/hanhtinh/saohoa.jpg`)
			}, event.threadID, event.messageID); 
			break;
		case "4":
			api.sendMessage({
				body: "4. Sao Kim - Venus\n\nSao Kim (Venus) hay Kim tinh (chữ Hán: 金星), còn gọi là sao Thái Bạch (太白), Thái Bạch Kim tinh (太白金星), là hành tinh thứ 2 trong hệ Mặt Trời, tự quay quanh nó với chu kỳ 224,7 ngày Trái Đất. Xếp sau Mặt Trăng, nó là thiên thể tự nhiên sáng nhất trong bầu trời tối, với cấp sao biểu kiến bằng −4.6, đủ sáng để tạo nên bóng trên mặt nước. Bởi vì Sao Kim là hành tinh phía trong tính từ Trái Đất, nó không bao giờ xuất hiện trên bầu trời mà quá xa Mặt Trời: góc ly giác đạt cực đại bằng 47,8°. Sao Kim đạt độ sáng lớn nhất ngay sát thời điểm hoàng hôn hoặc bình minh, do vậy mà dân gian còn gọi là sao Hôm, khi hành tinh này hiện lên lúc hoàng hôn, và sao Mai, khi hành tinh này hiện lên lúc bình minh.Sao Kim được xếp vào nhóm hành tinh đất đá và đôi khi người ta còn coi nó là (hành tinh chị em) với Trái Đất do kích cỡ, gia tốc hấp dẫn, tham số quỹ đạo gần giống với Trái Đất. Tuy nhiên, người ta đã chỉ ra rằng nó rất khác Trái Đất trên những mặt khác. Sao Kim bị bao bọc bởi lớp mây dày có tính phản xạ cao chứa axít sunfuric, và khiến chúng ta không thể quan sát bề mặt của nó dưới bước sóng ánh sáng khả kiến. Mật độ không khí trong khí quyển của nó lớn nhất trong số bốn hành tinh đất đá, thành phần chủ yếu là cacbon dioxide. Áp suất khí quyển tại bề mặt hành tinh cao gấp 92 lần so với của Trái Đất. Với nhiệt độ bề mặt trung bình bằng 735 K (462 °C), Sao Kim là hành tinh nóng nhất trong Hệ Mặt Trời. Nó không có chu trình cacbon để đưa cacbon trở lại đá và đất trên bề mặt, do vậy không thể có một tổ chức sống hữu cơ nào có thể hấp thụ nó trong sinh khối. Một số nhà khoa học từng cho rằng Sao Kim đã có những đại dương trong quá khứ, nhưng đã bốc hơi khi nhiệt độ hành tinh tăng lên do hiệu ứng nhà kính mất kiểm soát. Nước có thể đã bị quang ly, và bởi vì không có từ quyển hành tinh, hiđrô tự do có thể thoát vào vũ trụ bởi tác động của gió Mặt Trời. Toàn bộ bề mặt của Sao Kim là một hoang mạc khô cằn với đá và bụi và có lẽ vẫn còn núi lửa hoạt động trên hành tinh này.", 
				attachment: fs.createReadStream(__dirname + `/noprefix/hanhtinh/saokim.jpg`)
			}, event.threadID, event.messageID); 
			break;
		case "5":
			api.sendMessage({
				body: "5. Sao Mộc - Saturn\n\nSao Mộc (Jupiter) hay Mộc tinh (chữ Hán: 木星) là hành tinh thứ năm tính từ Mặt Trời và là hành tinh lớn nhất trong Hệ Mặt Trời. Nó là hành tinh khí khổng lồ với khối lượng bằng một phần nghìn của Mặt Trời nhưng bằng hai lần rưỡi tổng khối lượng của tất cả các hành tinh khác trong Hệ Mặt Trời cộng lại. Sao Mộc được xếp vào nhóm hành tinh khí khổng lồ cùng với Sao Thổ (Sao Thiên Vương và Sao Hải Vương được xếp vào hành tinh băng khổng lồ). Hai hành tinh này đôi khi được gọi là hành tinh kiểu Sao Mộc  hoặc hành tinh vòng ngoài. Các nhà thiên văn học cổ đại đã biết đến hành tinh này, và gắn với thần thoại và niềm tin tôn giáo trong nhiều nền văn hóa. Người La Mã đặt tên hành tinh theo tên của vị thần Jupiter, vị thần quan trọng nhất trong số các vị thần. Tên gọi trong tiếng Trung Quốc, tiếng Triều Tiên, tiếng Nhật và tiếng Việt của hành tinh này được đặt dựa vào hành (mộc)trong ngũ hành. Khi nhìn từ Trái Đất, Sao Mộc có cấp sao biểu kiến −2,94, đủ sáng để tạo bóng; và là thiên thể sáng thứ ba trên bầu trời đêm sau Mặt Trăng và Sao Kim. (Sao Hỏa hầu như sáng bằng Sao Mộc khi Sao Hỏa ở những vị trí xung đối trên quỹ đạo của nó với Trái Đất.)Sao Mộc chứa chủ yếu hiđrô và heli - chiếm một phần tư khối lượng của nó, mặc dù heli chỉ chiếm một phần mười số lượng phân tử. Có thể có một lõi đá trong hành tinh chứa các nguyên tố nặng hơn, nhưng giống như những hành tinh khí khổng lồ khác, Sao Mộc không có một bề mặt rắn định hình. Bởi vì có tốc độ tự quay nhanh, hình dạng của hành tinh có hình phỏng cầu dẹt (nó hơi phình ra tại xích đạo). Lớp khí quyển ngoài cùng hiện lên với nhiều dải mây ở những độ cao khác nhau, do kết quả của hiện tượng nhiễu loạn khí động và tương tác với những cơn bão tại biên. Một đặc điểm nổi bật trên ảnh chụp của nó đó là Vết Đỏ Lớn, một cơn bão khổng lồ được biết đến tồn tại ít nhất từ thế kỷ 17 khi các nhà thiên văn lần đầu tiên quan sát nó bằng kính thiên văn. Bao quanh Mộc Tinh là một hệ thống vành đai mờ nhạt cũng như từ quyển mạnh. Có ít nhất 67 vệ tinh tự nhiên quay quanh nó, bao gồm bốn vệ tinh lớn nhất gọi là các vệ tinh Galileo do nhà bác học Galileo Galilei lần đầu tiên quan sát năm 1610. Ganymede, vệ tinh lớn nhất, có đường kính lớn hơn Sao Thủy.Đã có một vài tàu không gian thám hiểm đến Sao Mộc, bao gồm tàu Pioneer và Voyager trong các phi vụ bay ngang qua và sau đó tàu Galileo bay quay hành tinh này. Con tàu gần đây nhất bay qua Sao Mộc trên hành trình đến Sao Diêm Vương - tàu New Horizons bay qua vào cuối 2007. Con tàu sử dụng sự hỗ trợ của hấp dẫn từ Sao Mộc nhằm tăng tốc độ của nó. Hiện nay tàu Juno của NASA đã đến vào ngày 5 tháng 7 năm 2016. Trong tương lai có phi vụ của ESA đến thám hiểm các vệ tinh Galileo nói chung và Europa nói riêng.", 
				attachment: fs.createReadStream(__dirname + `/noprefix/hanhtinh/saomoc.jpg`)
			}, event.threadID, event.messageID); 
			break;
		case "6":
			api.sendMessage({
				body: "6. Sao Thiên Vương - Uranus \n\nSao Thiên Vương (Uranus) hay Thiên Vương tinh (chữ Hán: 天王星) là hành tinh thứ bảy tính từ Mặt Trời; là hành tinh có bán kính lớn thứ ba và có khối lượng lớn thứ tư trong Hệ Mặt Trời. Sao Thiên Vương có thành phần tương tự như Sao Hải Vương. Cả hai có thành phần hóa học khác so với hai hành tinh khí khổng lồ lớn hơn là Sao Mộc và Sao Thổ. Vì vậy, các nhà thiên văn thỉnh thoảng đưa các hành tinh này vào danh sách (hành tinh băng khổng lồ). Khí quyển của Sao Thiên Vương tương tự như của Sao Mộc và Sao Thổ về thành phần cơ bản như hiđrô và heli. Khác là chúng chứa nhiều hợp chất dễ bay hơi như nước, amonia và mêtan cùng với lượng nhỏ hydrocarbon. Hành tinh này có bầu khí quyển lạnh nhất trong số các hành tinh trong Hệ Mặt Trời, với nhiệt độ cực tiểu bằng 49 K (−224 °C). Nó có cấu trúc tầng mây phức tạp. Khả năng những đám mây thấp nhất chứa chủ yếu nước trong khi mêtan lại chiếm chủ yếu trong những tầng mây phía trên. Ngược lại, cấu trúc bên trong Sao Thiên Vương chỉ chứa chủ yếu một lõi băng và đá.Giống như những hành tinh khí khổng lồ khác, Sao Thiên Vương có một hệ thống vành đai, từ quyển và rất nhiều vệ tinh tự nhiên. Hệ thống Sao Thiên Vương có cấu trúc độc nhất bởi vì trục tự quay của nó bị nghiêng rất lớn, gần như song song với mặt phẳng quỹ đạo của hành tinh. Do vậy cực bắc và cực nam của hành tinh này nằm gần như tại vị trí xích đạo so với những hành tinh khác. Năm 1986, những ảnh chụp của tàu không gian Voyager 2 cho thấy Sao Thiên Vương qua ánh sáng khả kiến hiện lên với một màu gần như đồng nhất mà không có các dải mây hay cơn bão như những hành tinh khí khổng lồ khác. Các nhà thiên văn thực hiện quan sát từ mặt đất phát hiện ra dấu hiệu của sự thay đổi mùa và sự gia tăng hoạt động thời tiết trong những năm gần đây khi nó tiếp cận đến vị trí điểm phân trên quỹ đạo. Tốc độ gió trên Sao Thiên Vương đạt tới 250 mét trên giây (900 km/h).", 
				attachment: fs.createReadStream(__dirname + `/noprefix/hanhtinh/saothienvuong.jpg`)
			}, event.threadID, event.messageID); 
			break;
		case "7":
			api.sendMessage({
				body: "7.Sao Thổ - Jupiter\n\nSao Thổ (Saturn) tức Thổ tinh (chữ Hán: 土星) là hành tinh thứ sáu tính theo khoảng cách trung bình từ Mặt Trời và là hành tinh lớn thứ hai về đường kính cũng như khối lượng, sau Sao Mộc trong Hệ Mặt Trời. Tên tiếng Anh của hành tinh mang tên thần Saturn trong thần thoại La Mã, ký hiệu thiên văn của hành tinh là (♄) thể hiện cái liềm của thần. Sao Thổ là hành tinh khí khổng lồ với bán kính trung bình bằng 9 lần của Trái Đất. Tuy khối lượng của hành tinh cao gấp 95 lần khối lượng của Trái Đất nhưng với thể tích lớn hơn 763 lần, khối lượng riêng trung bình của Sao Thổ chỉ bằng một phần tám so với của Trái Đất.Cấu trúc bên trong của Sao Thổ có lẽ bao gồm một lõi sắt, nikel và đá (hợp chất silic và ôxy), bao quanh bởi một lớp dày hiđrô kim loại, một lớp trung gian giữa hiđrô lỏng với heli lỏng và bầu khí quyển bên trên cùng. Hình ảnh hành tinh có màu sắc vàng nhạt là do sự có mặt của các tinh thể amonia trong tầng thượng quyển. Dòng điện bên trong lớp hiđrô kim loại là nguyên nhân Sao Thổ có một từ trường hành tinh với cường độ hơi yếu hơn so với từ trường của Trái Đất và bằng một phần mười hai so với cường độ từ trường của Sao Mộc. Lớp khí quyển bên trên cùng hành tinh có những màu đồng nhất và hiện lên dường như yên ả so với bầu khí quyển hỗn loạn của Sao Mộc, mặc dù nó cũng có những cơn bão mạnh. Tốc độ gió trên Sao Thổ có thể đạt tới 1.800 km/h, nhanh hơn trên Sao Mộc, nhưng không nhanh bằng tốc độ gió trên Sao Hải Vương.Sao Thổ có một hệ thống vành đai bao gồm chín vành chính liên tục và ba cung đứt đoạn, chúng chứa chủ yếu hạt băng với lượng nhỏ bụi và đá. Sao Thổ có 82 vệ tinh tự nhiên đã biết; trong đó 53 vệ tinh đã được đặt tên. Số lượng vệ tinh này không bao gồm hàng trăm tiểu vệ tinh (moonlet) bên trong vành đai. Titan là vệ tinh lớn nhất của Sao Thổ và là vệ tinh lớn thứ hai trong Hệ Mặt Trời, nó cũng lớn hơn cả Sao Thủy và là vệ tinh tự nhiên duy nhất trong Hệ Mặt Trời có bầu khí quyển dày đặc.", 
				attachment: fs.createReadStream(__dirname + `/noprefix/hanhtinh/saotho.jpg`)
			}, event.threadID, event.messageID); 
			break;
		case "8":
			api.sendMessage({
				body: "8. Sao Thủy - Mecury\n\nSao Thủy (Mercury) hay Thủy tinh (chữ Hán: 水星) là hành tinh nhỏ nhất và gần Mặt Trời nhất trong tám hành tinh thuộc Hệ Mặt Trời, với chu kỳ quỹ đạo bằng 88 ngày Trái Đất. Nhìn từ Trái Đất, hành tinh hiện lên với chu kỳ giao hội trên quỹ đạo bằng xấp xỉ 116 ngày, và nhanh hơn hẳn những hành tinh khác. Tốc độ chuyển động nhanh này đã khiến người La Mã đặt tên hành tinh là Mercurius, vị thần liên lạc và đưa tin một cách nhanh chóng. Trong thần thoại Hy Lạp tên của vị thần này là Hermes (Ερμής). Tên tiếng Việt của hành tinh này dựa theo tên do Trung Quốc đặt, chọn theo hành thủy trong ngũ hành.\nDo hành tinh hầu như không có khí quyển để giữ lại nhiệt lượng, bề mặt Sao Thủy trải qua sự biến đổi nhiệt độ lớn nhất trong số các hành tinh, thay đổi từ 100 K (−173 °C; −280 °F) vào ban ngày tới 700 K (427 °C; 800 °F) vào ban ngày. Trục quay của Sao Thủy có độ nghiêng nhỏ nhất trong Hệ Mặt Trời (khoảng 1⁄30 độ), nhưng hành tinh lại có độ lệch tâm quỹ đạo lớn nhất. Tại viễn điểm quỹ đạo, Sao Thủy ở cách xa Mặt Trời hơn 1,5 lần khi so với hành tinh ở cận điểm quỹ đạo. Bề mặt hành tinh có rất nhiều hố va chạm nhìn trông giống như bề mặt của Mặt Trăng, và hành tinh không còn hoạt động địa chất trong hàng tỷ năm trước.\nTrên Sao Thủy không có sự biến đổi thời tiết theo mùa như ở các hành tinh khác bởi vì nó không có bầu khí quyển đáng kể. Hành tinh bị khóa thủy triều với Mặt Trời do đó nó quay trên quỹ đạo rất khác so với các hành tinh khác. Khi lấy các ngôi sao cố định làm điểm mốc, nó tự quay được chính xác ba vòng trong hai chu kỳ quỹ đạo quanh Mặt Trời . Khi nhìn từ Mặt Trời, trong hệ quy chiếu quay cùng với chuyển động quỹ đạo, hành tinh hiện lên chỉ quay quanh trục một lần trong hai (năm) Sao Thủy. Do vậy nếu có người đứng trên Sao Thủy họ chỉ nhận thấy 1 ngày trong 2 năm.\nBởi vì quỹ đạo Thủy Tinh nằm bên trong quỹ đạo Trái Đất (và của Sao Kim), khi nhìn từ Trái Đất hành tinh có lúc hiện lên vào buổi sáng hoặc vào buổi tối, nhưng không bao giờ có thể nhìn thấy lúc nửa đêm. Tương tự như Sao Kim và Mặt Trăng, hành tinh cũng có các pha quan sát khi nó di chuyển trên quỹ đạo. Sao Thủy không có một vệ tinh tự nhiên nào. Độ sáng biểu kiến của Sao Thủy thay đổi từ −2,0 đến 5,5; nhưng vì quá gần Mặt Trời nên nếu quan sát hành tinh này qua kính viễn vọng rất khó khăn và ít khi thực hiện được.\nHai phi thuyền đã ghé thăm sao Thủy: Mariner 10 bay vào năm 1974 và 1975; và MESSENGER, được phóng lên vào năm 2004, đã quay quanh sao Thủy hơn 4.000 lần trong vòng bốn năm trước khi cạn kiệt nguồn nhiên liệu và rơi vào bề mặt hành tinh này vào ngày 30 tháng 4 năm 2015.", 
				attachment: fs.createReadStream(__dirname + `/noprefix/hanhtinh/saothuy.jpg`)
			}, event.threadID, event.messageID); 
			break;
    case "9":
			api.sendMessage({
				body: "9. Sao Hải Vương - Neptune\n\nSao Hải Vương (Neptune) hay Hải Vương tinh (chữ Hán: 海王星) là hành tinh thứ tám và xa nhất tính từ Mặt Trời trong Hệ Mặt Trời. Nó là hành tinh lớn thứ tư về đường kính và lớn thứ ba về khối lượng. Sao Hải Vương có khối lượng riêng lớn nhất trong số các hành tinh khí trong hệ Mặt trời. Sao Hải Vương có khối lượng gấp 17 lần khối lượng của Trái Đất và hơi lớn hơn khối lượng của Sao Thiên Vương (xấp xỉ bằng 15 lần của Trái Đất). Sao Hải Vương quay trên quỹ đạo quanh Mặt Trời ở khoảng cách trung bình 30,1 AU, bằng khoảng 30 lần khoảng cách Trái Đất - Mặt Trời. Sao Hải Vương được đặt tên theo vị thần biển cả của người La Mã (Neptune). Nó có ký hiệu thiên văn là ♆, là biểu tượng cách điệu cây đinh ba của thần Neptune.\nSao Hải Vương là hành tinh đầu tiên được tìm thấy bằng tính toán lý thuyết. Dựa vào sự nhiễu loạn bất thường của quỹ đạo Sao Thiên Vương, nhà thiên văn Alexis Bouvard đã kết luận rằng quỹ đạo của nó bị nhiễu loạn do tương tác hấp dẫn với một hành tinh nào đó. Vào ngày 23 tháng 9 năm 1846, nhà thiên văn Johann Galle đã phát hiện ra Sao Hải Vương ở vị trí lệch 1 độ so với tiên đoán của Urbain Le Verrier. Sau đó ít lâu, người ta cũng khám phá ra Triton, vệ tinh lớn nhất của sao Hải Vương, trong khi 13 vệ tinh còn lại của nó chỉ được phát hiện trong thế kỷ XX. Cho tới nay, tàu không gian Voyager 2 là tàu duy nhất bay qua Sao Hải Vương vào ngày 25 tháng 8 năm 1989.\nSao Hải Vương có cấu tạo tương tự như Sao Thiên Vương, nhưng lại khác biệt với những hành tinh khí khổng lồ như Sao Mộc và Sao Thổ. Khí quyển của sao Hải Vương chứa thành phần cơ bản là hydro và heli, cùng một số ít các hydrocarbon và có lẽ cả nitơ, tương tự như của Sao Mộc hay Sao Thổ. Tuy nhiên khí quyển của nó chứa tỷ lệ lớn hơn các phân tử (băng) như nước, amonia, và methan. Do đó các nhà thiên văn thỉnh thoảng phân loại Sao Thiên Vương và Sao Hải Vương thành các hành tinh băng đá khổng lồ để nhấn mạnh sự khác biệt này. Bên trong Sao Hải Vương chứa chủ yếu băng và đá, giống như Sao Thiên Vương. Lõi hành tinh có thể có bề mặt tuy rắn nhưng nhiệt độ của nó có thể cao tới hàng nghìn độ và áp suất rất lớn. Khí methan trong tầng ngoài khí quyển là nguyên nhân Sao Hải Vương hiện lên với màu xanh lam.\nTrái ngược với bầu khí quyển mờ đặc và gần như đồng màu của Sao Thiên Vương, khí quyển của Sao Hải Vương có những vùng hoạt động mạnh và dễ nhận thấy. Năm 1989, tàu Voyager 2 khi bay qua Sao Hải Vương đã chụp được hình ảnh của Vết Tối Lớn trên bán cầu nam có kích thước tương đương với Vết Đỏ Lớn của Sao Mộc. Những vùng hoạt động thời tiết này được duy trì bởi những cơn gió với tốc độ lên tới 2.100 kilômét trên giờ, mạnh nhất trên khí quyển trong các hành tinh thuộc Hệ Mặt Trời. Do cách rất xa Mặt Trời nên lớp khí quyển ngoài cùng của Sao Hải Vương là một trong những nơi lạnh nhất trong Hệ Mặt Trời. Nhiệt độ của những đám mây trên cao khoảng 55 K (-218 °C) trong khi nhiệt độ tại lõi hành tinh xấp xỉ 5.400 K (5.000 °C). Sao Hải Vương có một hệ thống vành đai mờ và rời rạc (hay những cung), được phát hiện trong thập niên 1960 nhưng chỉ được xác nhận vào năm 1989 bởi Voyager 2.", attachment: fs.createReadStream(__dirname + `/noprefix/hanhtinh/saohaivuong.jpg`)
			}, event.threadID, event.messageID); 
			break;
    case "10":
			api.sendMessage({
				body: "10. Mặt Trăng - The Moon 🌕\n\nTrong tiếng Việt, Mặt Trăng còn được gọi bằng những tên khác như ông Trăng, Nguyệt (月), Hằng Nga (hay Thường Nga), Thái Âm (太陰), v.v... Không giống như vệ tinh của những hành tinh khác, Mặt Trăng - vệ tinh của Trái Đất - không có tên riêng nào khác. Trong một số ngôn ngữ, Mặt Trăng của Trái Đất được viết hoa để phân biệt với danh từ chung (mặt trăng), nói đến các vệ tinh tự nhiên của các hành tinh khác như (the Moon) trong tiếng Anh và (the moon).\nTừ moon (Mặt Trăng - trong tiếng Anh) là một từ thuộc nhóm ngôn ngữ German, liên quan tới từ mensis trong tiếng Latin; từ này lại xuất phát từ gốc me- trong ngôn ngữ Ấn-Âu nguyên thủy (Proto-Indo-European), cũng xuất hiện trong measure (đo lường) (thời gian), với sự gợi nhớ tới tầm quan trọng của nó trong việc đo đạc thời gian trong những từ có nguồn gốc từ nó như Monday (thứ Hai - trong tiếng Anh), month (tháng - trong tiếng Anh) và menstrual (hàng tháng/kinh nguyệt). Trong tiếng Anh, từ moon chỉ có nghĩa (Mặt Trăng) cho tới tận năm 1665, khi nó được mở rộng nghĩa để chỉ những vệ tinh tự nhiên mới được khám phá của các hành tinh khác. Mặt Trăng thỉnh thoảng cũng được gọi theo tên tiếng Latin của nó, Luna, để phân biệt với các vệ tinh tự nhiên; tính từ có liên quan là lunar và một tiền tố tính từ seleno - hay hậu tố -selene (theo tên vị thần Hy Lạp Selene).Khoảng cách trung bình tính từ tâm Trái Đất đến Mặt Trăng là 384.403 km, lớn khoảng 30 lần đường kính Trái Đất. Đường kính Mặt Trăng là 3.474 km, bằng 27% đường kính Trái Đất. Khối lượng Mặt Trăng khoảng bằng 2% khối lượng Trái Đất và lực hấp dẫn tại bề mặt Mặt Trăng bằng 17% lực hấp dẫn trên bề mặt Trái Đất. Mặt Trăng quay một vòng quanh Trái Đất với chu kỳ quỹ đạo 27,32 ngày, và các biến đổi định kỳ trong hình học của hệ Trái Đất – Mặt Trăng – Mặt Trời là nguyên nhân gây ra các pha Mặt Trăng, lặp lại sau mỗi chu kỳ giao hội tầm 29,53 ngày.", attachment: fs.createReadStream(__dirname + `/noprefix/hanhtinh/mattrang.jpg`)
			}, event.threadID, event.messageID); 
						break;
					default:
				const choose = parseInt(event.body);
            	if (isNaN(event.body)) return api.sendMessage("💟 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐧𝐡𝐚̣̂𝐩 𝟏 𝐜𝐨𝐧 𝐬𝐨̂́", event.threadID, event.messageID);
            	if (choose > 12 || choose < 1) return api.sendMessage("🔰 𝐋𝐮̛̣𝐚 𝐜𝐡𝐨̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐧𝐚̆̀𝐦 𝐭𝐫𝐨𝐧𝐠 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡.", event.threadID, event.messageID); 
		    
			}
		}
	}
}

module.exports.run = async ({ api, event, handleReply }) => {
	const fs = require("fs");
	const { threadID, messageID, senderID } = event;
	return api.sendMessage({ body: "== 🪐 𝐂𝐚́𝐜 𝐇𝐚̀𝐧𝐡 𝐓𝐢𝐧𝐡 🌌 ==" +
                "\n𝟏. 𝐇𝐞̣̂ 𝐌𝐚̣̆𝐭 𝐓𝐫𝐨̛̀𝐢 - 𝐓𝐡𝐞 𝐒𝐮𝐧" +
                "\n𝟐. 𝐓𝐫𝐚́𝐢 Đ𝐚̂́𝐭 - 𝐄𝐚𝐫𝐭𝐡" +
                "\n𝟑. 𝐒𝐚𝐨 𝐇𝐨̉𝐚 - 𝐌𝐚𝐫𝐬" +
                "\n𝟒. 𝐒𝐚𝐨 𝐊𝐢𝐦 - 𝐕𝐞𝐧𝐮𝐬" +
                "\n𝟓. 𝐒𝐚𝐨 𝐌𝐨̣̂𝐜 - 𝐒𝐚𝐭𝐮𝐫𝐧" +
                "\n𝟔. 𝐒𝐚𝐨 𝐓𝐡𝐢𝐞̂𝐧 𝐕𝐮̛𝐨̛𝐧𝐠 - 𝐔𝐫𝐚𝐧𝐮𝐬" +
                "\n𝟕. 𝐒𝐚𝐨 𝐓𝐡𝐨̂̉ - 𝐉𝐮𝐩𝐢𝐭𝐞𝐫" +
                "\n𝟖. 𝐒𝐚𝐨 𝐓𝐡𝐮̉𝐲 - 𝐌𝐞𝐜𝐮𝐫𝐲" +
                "\n𝟗. 𝐒𝐚𝐨 𝐇𝐚̉𝐢 𝐕𝐮̛𝐨̛𝐧𝐠 - 𝐍𝐞𝐩𝐭𝐮𝐧𝐞" +
                "\n𝟏𝟎. 𝐌𝐚̣̆𝐭 𝐓𝐫𝐚̆𝐧𝐠 - 𝐓𝐡𝐞 𝐌𝐨𝐨𝐧" +
                "\n\n🌈𝐑𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐭𝐡𝐞𝐨 𝐬𝐨̂́ 𝐧𝐞̂́𝐮 𝐦𝐮𝐨̂́𝐧 𝐱𝐞𝐦 𝐭𝐡𝐞̂𝐦 𝐯𝐞̂̀ 𝐜𝐚́𝐜 𝐡𝐚̀𝐧𝐡 𝐭𝐢𝐧𝐡 𝐱𝐮𝐧𝐠 𝐪𝐮𝐚𝐧𝐡 𝐜𝐡𝐮́𝐧𝐠 𝐭𝐚 𝐧𝐡𝐞́  ❤"
            ,attachment: fs.createReadStream(__dirname + `/noprefix/hanhtinh/hanhtinh.jpg`)}, event.threadID, (error, info) => {
        global.client.handleReply.push({
            type: "choosee",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID
        })  
    })
}