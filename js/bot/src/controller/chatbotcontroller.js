require("dotenv").config();
import { text } from "express";
import request from "request";
const fs = require("fs");


const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;
let VERIFY_TOKEN = process.env.VERIFY_TOKEN;


let getHomePage = (req,res)=>{
   
    return res.send("<html style='background-color:#FACE9C;text-align:center;'><h1 style='color:black;text-align:center;font-family:fantasy;'>Chatbot Messenger Fanpage Facebook </h1><img style='border-radius:0px 50px;box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.5);', src='https://i.pinimg.com/originals/7d/9b/1d/7d9b1d662b28cd365b33a01a3d0288e1.gif'>")
};

let postWebhook= (req,res)=>{

    let body = req.body;
    if (body.object === 'page') {

    
    body.entry.forEach(function(entry) {

    
   // Gets the body of the webhook event
    let webhook_event = entry.messaging[0];
    console.log(webhook_event);


    // Get the sender PSID
    let sender_psid = webhook_event.sender.id;
    console.log('Sender PSID: ' + sender_psid);

    
    if (webhook_event.message) {

      handleMessage(sender_psid, webhook_event.message); 

    } else if (webhook_event.postback) {

      handlePostback(sender_psid, webhook_event.postback);
    }
    ;
});

    res.status(200).send('EVENT_RECEIVED');

  }else{
    res.sendStatus(404);
  }
};

let getWebhook= (req,res)=>{

    
    console.log(VERIFY_TOKEN)


    let mode = req.query["hub.mode"];
    let token = req.query["hub.verify_token"];
    let challenge = req.query["hub.challenge"];
    if(mode && token)
    {
        if(mode === "subscribe"&&token === VERIFY_TOKEN){
            console.log("WEBHOOK_VERIFY");
            res.status(200).send(challenge);
        }else{
            res.sendStatus(403);
            }   
        }
};

function handleMessage(sender_psid, received_message) {
    let response;        
    if (received_message.text) {    
      
       response = {
        "text": `bạn đã gửi tin nhắn : " ${received_message.text} ". Xin Chào tôi là bot CL7 rất vui được gặp bạn, hãy gửi ảnh cho tôi `,
      }
  }
    if(received_message.text === "CL7"){
       response = {
        "text": "CL7 is developer",
    }
}
    if(received_message.text === "#maket"){
       response = {
        "text": "Những người thuộc cung Ma Kết sống theo nguyên tắc, cẩn thận, quy củ, coi trọng các luật lệ và đề phòng trong các mối quan hệ. Bởi vậy trong mắt mọi người, Ma Kết lúc nào cũng nghiêm túc, không hài hước, vui vẻ. Tính cách cung Ma Kết hướng nội. Ban đầu khi giao tiếp, họ sẽ rụt rè, lúng túng và thiếu tự tin. Nếu có ai đó pha vỡ tấm lá chắn ngại ngùng của Ma Kết, họ mới có thể trở nên nhiệt tình hơn. Ma Kết là người tuyệt đối giữ bí mật và kín đáo, họ biết điều gì nên nói và không nên nói. Nếu ai đó nhờ giữ bí mật, Ma Kết sẽ đồng ý và không mấp máy nửa lời. Họ cũng thường giữ kín những mục tiêu và kế hoạch của mình, dù ai có cố gắng nhòm ngó cũng không thể khai thác được thông tin gì.",
    }
}
    if(received_message.text === "#xunu"){
       response = {
        "text": "Những người thuộc cung Xử Nữ biểu tượng cho đất, được sao Thủy chiếu mệnh. Họ là người sống có kế hoạch, kỉ luật, khá tỉ mỉ và khắt khe. Họ sẽ không lãng phí bất kì thứ gì đặc biệt là tiền của, dù họ sống trong điều kiện dư dả. Những người này luôn giữ căn nhà của họ thật sạch sẽ, ngăn nắp và trang trí cho nó bằng những phụ kiện lung linh, màu sắc sặc sỡ. Xử Nữ sở hữu sự thông minh, trí tuệ sắc sảo vượt trội. Họ có thể thích hợp với những công việc như: nhà nghiên cứu khoa học, chuyên viên kĩ thuật, chế tạo máy móc…",
    }
}
    if(received_message.text === "#profileCL7Dev"){
       response = {
        "text": "this is profile Dev bot : https://www.facebook.com/Ytttuong1/",
    }
}
    if(received_message.text === "#MyCrush"){
       response = {
        "text": "https://instagram.fdad1-1.fna.fbcdn.net/v/t51.2885-19/278075207_657062702047512_2120175194043005538_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fdad1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=Exh5-N_6tZ8AX_deyIQ&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT_1PMoCbPqfYnwC4WKjhR8QUjB88tOfQ23Lja_kXsYYdw&oe=626D3372&_nc_sid=7bff83"
    }
}
    if(received_message.text === "#Profilemycrush"){
       response = {
        "text": "this is profile my crush : https://www.facebook.com/profile.php?id=100048916030141",
    }
}
    if(received_message.text === "#Thaorose"){
      response = {
        "text": "Thảo sinh ngày 9/9/2003 cô ấy rất đẹp và dịu dàng cô ấy là người tôi thích, thật tuyệt nếu cô ấy làm người yêu tôi, tôi không thể quên cô ấy cô ấy đã mang đến cho tôi những kỷ niệm không thể nào quên.",
    }
}
    if(received_message.text === "#Webbot"){
      response = {
        "text": "this is web bot : https://demo-clearlove-dev.herokuapp.com/",
    }
}   
    if(received_message.text === "#Webbot"){
      response = {
        "text": "this is web bot : https://demo-clearlove-dev.herokuapp.com/",
    }
}
    if(received_message.text === "thì hiện tại đơn"){
      response = {
        "text": 'Thể khẳng định => Công thức : S + am/ is/ are + N/ Adj Trong đó: S (subject): Chủ ngữ N/ Adj (Noun/ Adjective): Danh từ/ tính từ Lưu ý: S = I + am S = He/ She/ It + is S = You/ We/ They + are Ví dụ : My father is a teacher. (Bố tôi là một giáo viên.) They are from Japan. (Họ đến từ Nhật Bản.) I am handsome. (Tôi đẹp trai.)',
    }
}
    if(received_message.text === "#hello"){
      response = {
        "text": 'hello : xin chào',
    }
}
    if (received_message.text==="#Hi"){
      response = {"text": 'Hi : chào',}
    }
    if (received_message.text==="#produce"){
    response = {"text": 'produce : sản xuất',}
    }
    if (received_message.text==="#flag"){
    response = {"text": 'flag : lá cờ',}
    }
    if (received_message.text==="#switch"){
    response = {"text": 'switch : công tắc điện',}
    }
    if (received_message.text==="#case"){
    response = {"text": 'case : trường hợp',}
    }
    if (received_message.text==="#messenge"){
    response = {"text": 'messenge : tin nhắn',}
    }
    if (received_message.text==="process"){
    response = {"text": 'process : tiến trình',}
    }
    if (received_message.text==="#sản phẩm"){
    response = {"text": 'sản phẩm : product',}
    }
    if (received_message.text==="#vovankethighschool"){
    response = {"text": 'Trường THPT Võ Văn Kiệt được thành lập ngày 28 tháng 11 năm 2018 chính thức đi vào hoạt động từ học kì 2 năm học 2018-2019. Trường đóng trên địa bàn thôn 10 xã Ea Khal, huyện Ea H’leo tỉnh Đắk Lắk. Thực tế trường giáp ranh với thị trấn Ea Drăng (cách thị trấn khoảng 300 m), cách đường Hồ Chí Minh  (Quốc lộ 14) 1,4 Km về phía Tây. Đến nay sau hơn 3 năm xây dựng và phát triển hiện trường có 60 CB, GV,NV với 23 lớp gần 1000 học sinh là con em các xã thị trấn trên toàn huyện theo học. Về cơ sở vật chất: Thuộc top đầu của tỉnh đảm bảo việc học tập và thực hành theo chương trình GDPT năm 2018. Trường có diện tích hơn 3ha với 30 phòng học kiên cố; 5 phòng thí nghiệm. 3 phòng công nghệ mỗi phòng rộng gần 100m2; 3 phòng tin học hiện đại. Hệ thống thư viện và thư viện điện tử 2 phòng; nhà đa năng với sức chứa 600 người; 2 sân bóng rổ; 3 sân bóng chuyền, và đặc biệt có 01 sân bóng cỏ nhân tạo. Về đội ngũ giảng dạy: nhà trường có 3 CBQL, 49 GV đứng lớp, 7 nhân viên; có 7 GV trình độ thạc sĩ, có 07 GV dạy giỏi cấp tỉnh….100% GB,GV đạt chuẩn và trên chuẩn. Về chất lượng giảng dạy: Năm học vừa rồi trường có 01 HS giỏi Tỉnh, 05 huy chương kì thi Olimpic 10/3 (1 Vàng 2 Bạc 2 đồng). Tỷ lệ tốt nghiệp đạt 99,8%. Rất nhiều em đậu vào các trường ĐH chất lượng cả nước như em Thùy Dương ( Y Tây Nguyên) em Hoàng Linh, em Toản (Công nghệ thông tin -ĐHQG TP HCM) em Phương Hà (ĐH Kinh tế TP HCM) em Thanh Thảo (ĐH Kinh tế -Luật) …. Năm học 2022-2023 qui mô trường trên 25 lớp với gần 1200 học sinh. Địa bàn tuyển sinh chính của trường là các xã Ea Nam, Ea Khal, Ea Tir, một phần xã Cư Mốt, xã Ea ral và học sinh học thị trấn Ea Drăng nhưng có hộ khẩu các xã nói trên… Nhà trường kính chúc quí phụ huynh và các em học sinh sức khỏe và lựa chọn ngôi trường này để học tập. Ngôi trường lí tưởng cho các bạn học tập và vui chơi. Chia sẻ bài viết này cho mọi ngưòi biết với nha các ban. Thầy xin cảm ơn',}
    }
    if (received_message.text==="#làm nghề tự do"){
    response = {"text": 'làm nghề tự do : freelancer',}
    }
    if (received_message.text==="thí nghiệm"){
    response = {"text": 'thí nghiệm : experiment',}
    }
    if (received_message.text==="#phát triển"){
    response = {"text": 'phát triền : develop' ,}
    }
    if (received_message.text==="#nhà phát triển"){
    response = {"text": 'nhà phát triển : developer',}
    }
    if (received_message.text==="expensive"){
    response = {"text": 'expensive : đắt tiền',}
    }
    if (received_message.text==="coin"){
    response = {"text": 'coin : đồng tiền',}
    }
    if (received_message.text==="business"){
    response = {"text": 'business : kinh doanh',}
    }
    if (received_message.text==="money"){
    response = {"text": 'money : tiền',}
    }
    if (received_message.text==="ball"){
    response = {"text": 'ball : bóng',}
    }
    if (received_message.text==="search"){
    response = {"text": 'search : tiềm kiếm',}
    }
    if (received_message.text==="callback"){
    response = {"text": 'callback : gọi lại',}
    }
    if (received_message.text==="comeback"){
    response = {"text": 'comeback : sự trở lại',}
    }
    if (received_message.text==="hub"){
    response = {"text": 'hub : trung tâm',}
    }
    if (received_message.text==="max"){
    response = {"text": 'max : tối đa',}
    }
    if (received_message.text==="switch"){
    response = {"text": 'switch : công tắc điện',}
    }
    if (received_message.text==="world"){
    response = {"text": 'world : thế giới',}
    }
    if (received_message.text==="global"){
    response = {"text": 'console : toàn cầu',}
    }
    if (received_message.text==="goodbye"){
    response = {"text": 'console : bàn điều khiển',}
    }
    if(received_message.text==="response"){
      response = {"text": 'response : phản ứng nhanh nhẹn',}
    }
    if(received_message.text==="response"){
      response = {"text": 'response : phản ứng nhanh nhẹn',}
    }
    if(received_message.text==="ethical"){
      response = {"text": 'ethical : có đạo đức',}
    }
    if(received_message.text==="công thức ampe"){
      response = {"text": 'Tính số Ampe (A) tương ứng với công suất (KW) bằng cách lấy công suất (P) chia cho số vôn (V). Ví dụ: máy có công suất là 100KW, hiệu điện thế là 220V thì I = P/U = 100220 = 4.5 Ampe. Để tính ra Ampe. Ta nhân với 1000 thì 4.5 A*100 = 450 Ampe.',}
    }
    if(received_message.text==="#bác hồ"){
      response = {"text": 'Hồ Chí Minh, tên khai sinh Nguyễn Sinh Cung, là một nhà cách mạng và chính khách người Việt Nam. Ngày/nơi sinh: 19 tháng 5, 1890',}
    }
    if(received_message.text==="#analyst"){
      response = {"text": 'analyst : nhà phân tích',}
    }
    if(received_message.text==="#vietnam"){
      response = {"text": 'Việt Nam, quốc hiệu chính thức là Cộng hòa Xã hội chủ nghĩa Việt Nam, là một quốc gia nằm ở cực Đông của bán đảo Đông Dương thuộc khu vực Đông Nam Á, giáp với Lào, Campuchia, Trung Quốc, biển Đông và vịnh Thái Lan. Lãnh thổ Việt Nam xuất hiện con người sinh sống từ thời đại đồ đá cũ.',}
    }
    if(received_message.text==="#đà nẵng"){
      response = {"text": 'Đà Nẵng là một thành phố trực thuộc trung ương, nằm trong vùng Duyên hải Nam Trung Bộ Việt Nam, là thành phố trung tâm và lớn nhất khu vực miền Trung - Tây Nguyên.',}
    }
    if(received_message.text==="#đăk lăk"){
      response = {"text": 'Đắk Lắk là một tỉnh có diện tích lớn thứ 4 nằm ở trung tâm vùng Tây Nguyên, miền Trung Việt Nam. Năm 2019, Đắk Lắk là đơn vị hành chính Việt Nam đông thứ 10 về số dân, xếp thứ 22 về Tổng sản phẩm trên địa bàn, xếp thứ 41 về GRDP bình quân đầu người, đứng thứ 37 về tốc độ tăng trưởng GRDP.',}
    }
    if(received_message.text==="#python"){
      response = {"text": 'Python là một ngôn ngữ lập trình bậc cao cho các mục đích lập trình đa năng, do Guido van Rossum tạo ra và lần đầu ra mắt vào năm 1991. Python được thiết kế với ưu điểm mạnh là dễ đọc, dễ học và dễ nhớ.',}
    }
    if(received_message.text==="#c++"){
      response = {"text": 'C++ là một loại ngôn ngữ lập trình bậc trung. Đây là ngôn ngữ lập trình đa năng được tạo ra bởi Bjarne Stroustrup như một phần mở rộng của ngôn ngữ lập trình C, hoặc "C với các lớp Class", Ngôn ngữ đã được mở rộng đáng kể theo thời gian và C ++ hiện đại có các tính năng: lập trình tổng quát, lập trình hướng đối tượng',}
    }
    if(received_message.text==="#javaScript"){
      response = {"text": 'JavaScript, theo phiên bản hiện hành, là một ngôn ngữ lập trình thông dịch được phát triển từ các ý niệm nguyên mẫu. Ngôn ngữ này được dùng rộng rãi cho các trang web cũng như phía máy chủ.',}
    }
    if(received_message.text==="#nodejs"){
      response = {"text": 'Node.js là một hệ thống phần mềm được thiết kế để viết các ứng dụng internet có khả năng mở rộng, đặc biệt là máy chủ web. Chương trình được viết bằng JavaScript, sử dụng kỹ thuật điều khiển theo sự kiện, nhập/xuất không đồng bộ để tối thiểu tổng chi phí và tối đa khả năng mở rộng.',}
    }
    if(received_message.text==="#c"){
      response = {"text": 'Ngôn ngữ lập trình C là một ngôn ngữ mệnh lệnh được phát triển từ đầu thập niên 1970 bởi Dennis Ritchie để dùng trong hệ điều hành UNIX. Từ đó, ngôn ngữ này đã lan rộng ra nhiều hệ điều hành khác và trở thành một những ngôn ngữ phổ dụng nhất.',}
    }
    if(received_message.text==="#programing language"){
      response = {"text": `${received_message.text}  : ngôn ngữ lập trình `,
      }
    }
    if(received_message.text==="#program"){
      response = {"text": `${received_message.text}  : chương trình `,
      }
    }
    if(received_message.text==="#translate"){
      response = {"text": `${received_message.text}  : giải thích , dịch `,
      }
    }
    if(received_message.text==="#stupid"){
      response = {"text": `${received_message.text}  : ngu ngốc `,
      }
    }
    if(received_message.text==="#else"){
      response = {"text": `${received_message.text}  : khác `,
      }
    }
    if(received_message.text==="#damn"){
      response = {"text": `${received_message.text}  : chết tiệt `,
      }
    }
    if(received_message.text==="#anything"){
      response = {"text": `${received_message.text}  : bất cứ điều gì `,
      }
    }
    if(received_message.text==="c#"){
      response = {"text": `${received_message.text}  : C# là một ngôn ngữ lập trình hướng đối tượng đa năng, mạnh mẽ được phát triển bởi Microsoft, C# là phần khởi đầu cho kế hoạch .NET của họ. Tên của ngôn ngữ bao gồm ký tự thăng theo Microsoft nhưng theo ECMA là C#, chỉ bao gồm dấu số thường. Microsoft phát triển C# dựa trên C++ và Java. `,
      }
    }
    if(received_message.text==="#received"){
      response = {"text": `${received_message.text}  : nhận `,
      }
    }
    if(received_message.text==="#haaland"){
      response = {"text": `${received_message.text}  : là một cầu thủ bóng đá người Na Uy hiện đang thi đấu ở vị trí tiền đạo cho câu lạc bộ Borussia Dortmund và đội tuyển bóng đá quốc gia Na Uy.  `,
      }
    }
    if(received_message.text==="#CR7"){
      response = {"text": `${received_message.text}  : Cristiano Ronaldo dos Santos Aveiro GOIH ComM là một cầu thủ bóng đá chuyên nghiệp người Bồ Đào Nha hiện đang thi đấu ở vị trí tiền đạo cho câu lạc bộ Manchester United và là đội trưởng của đội tuyển bóng đá quốc gia Bồ Đào Nha.`,
      }
    }
    if(received_message.text==="#kaka"){
      response = {"text": `${received_message.text}  : Ricardo Izecson dos Santos Leite, được biết đến nhiều nhất với tên Kaká, là một cựu cầu thủ bóng đá người Brasil. Anh từng được trao danh hiệu Quả bóng vàng châu Âu và Cầu thủ xuất sắc nhất năm của FIFA vào năm 2007.`,
      }
    }
    if(received_message.text==="#mancity"){
      response = {"text": `${received_message.text}  : Câu lạc bộ bóng đá Manchester City là một câu lạc bộ bóng đá chuyên nghiệp có trụ sở tại thành phố Manchester, nước Anh. Tính tới nay, Manchester City đã có 7 lần vô địch bóng đá Anh, 6 lần vô địch Cúp FA, 8 lần vô địch Cúp Liên đoàn bóng đá Anh, 6 lần vô địch Siêu cúp nước Anh và 1 lần đoạt Cúp C2 châu Âu.`,
      }
    }
    if(received_message.text==="#chelsea"){
      response = {"text": `${received_message.text}  : Câu lạc bộ bóng đá Chelsea là một câu lạc bộ bóng đá chuyên nghiệp của Anh có trụ sở tại Fulham, London. Được thành lập vào năm 1905, câu lạc bộ hiện đang thi đấu tại Premier League, giải đấu hàng đầu của bóng đá Anh.`,
      }
    }
    if(received_message.text==="#language"){
      response = {"text": `${received_message.text}  : ngôn ngữ`,
      }
    }
    if(received_message.text==="#norway"){
      response = {"text": `${received_message.text}  : Na Uy, tên chính thức là Vương quốc Na Uy, là một quốc gia ở Bắc Âu nằm ở Tây Bắc Châu Âu có lãnh thổ bao gồm phần phía tây và cực bắc của Bán đảo Scandinavia; bao gồm đảo Jan Mayen và quần đảo Svalbard là 2 lãnh thổ nằm rất xa về phía Bắc Cực; bao gồm lãnh thổ phụ thuộc: đảo Bouvet nằm ở khu vực Subantartic.`,
      }
    }
    if(received_message.text==="#Duy Tân"){
      response = {"text": `${received_message.text} : Trường Đại học Duy Tân là một trường đại học tư thục đầu tiên tại miền Trung Việt Nam, được thành lập năm 1994. Trường có mặt trong một số bảng xếp hạng đại học như: QS Rankings, CWUR, URAP, Nature Index, ShanghaiRanking Consultancy. `,
      }
    }
    if(received_message.text==="#Tường"){
      response = {"text": `${received_message.text} : tuongdepzai`,
      }
    }

   else if (received_message.attachments) {
    let attachment_url = received_message.attachments[0].payload.url;
    response = {
      "attachment": {
        "type": "template",
        "payload": {
          "template_type": "generic",
          "elements": [{
            "title": "oh ảnh của bạn thật đẹp",
            "subtitle": "bạn có thấy nó đẹp không?",
            "image_url": attachment_url,
            "title":"cảm ơn vì đã gửi ảnh cho tôi ^^",
            "buttons": [
              {
                "type": "postback",
                "title": "Có rất đẹp ((: !",
                "payload": "yes",
              },
              {
                "type": "postback",
                "title": "Không đẹp chút nào !",
                "payload": "no",
              }
            ],
          }]
        }
      }
    }
  } 
  
  callSendAPI(sender_psid, response);    
}

function handlePostback(sender_psid, received_postback) {
    let response;
    
    let payload = received_postback.payload;

    if (payload === 'yes') {
      response = { "text": "Cảm ơn!" }
    } else if (payload === 'no') {
      response = { "text": "ohhh, cảm ơn vì bạn đã nhận xét <: " }
    }
    
    callSendAPI(sender_psid, response);
}

function callSendAPI(sender_psid, response) {
    let request_body = {
      "recipient": {
        "id": sender_psid
      },
      "message": response
    }
    
    request({
      "uri": "https://graph.facebook.com/v2.6/me/messages",
      "qs": { "access_token": PAGE_ACCESS_TOKEN },
      "method": "POST",
      "json": request_body
    },
      (err, res, body) => {
        if (!err) {
          console.log('message sent!');
        } else {
          console.error("Unable to send message:" + err);
        }
    });
}
module.exports = {
    getHomePage: getHomePage,
    getWebhook: getWebhook,
    postWebhook: postWebhook
}














