var Infofamily = [{
  id: 1,
  name: "tuongclearlove7 \n",
  age: 20,
  },
  {
  id:2, 
  name:"thaorose \n",
  age:19,
  },
  {
  id:3,
  name:"Cucnguyen \n",
  age:50
  },
]
function Importanthandle(Family){
  return " id : "+Family.id+" "+ "name : "+Family.name+" "+"age : "+Family.age;
}
let NewInfoFamily = Infofamily.map(Importanthandle);
let joinObject = NewInfoFamily.join(" ");
console.log(joinObject)
  
  let myfunc = () =>{
    
  }

 var pass = prompt("nhap pass : ")
 /** 
 var toxic = ['oc','cc','sucsinh','súc sinh','sua cmm','fuck you',
            'vaicalol','vailolluon','dau cat moi','con chó này','lmm','bot ngu','cac'
            ,'mày bị ngu à','ngu nhu con chó','chet di',"Óc chó","lol",'cặc','ditmemay'
            ,"dien a`",'buoi','buồi','đầu buồi','shit','cứt','ngu','ocloz','oclol'
            ,'dmm','dcm','địt mẹ mày','óc chó','cdmm','bot điên','dcmm','đm','lồn','cặc'
            ,'vãi lồn','vailon','vaicac','vãi cặc','vai cac','vai lon']; 

  console.log("number toxic : ",toxic.length)


let TOXIC = toxic;
  let Uppertoxic = TOXIC.map(element => {
    return element.toUpperCase();
  });
  


  if(pass == Uppertoxic[0]||pass==Uppertoxic[1])
    console.log("k đc nói tục")
    switch(pass){
      case toxic[0]:
        case toxic[1]:
          case toxic[2]:
            case toxic[3]:
      console.log("không đc nói tục !");
    }

*/
var SearchBot = ['Thể khẳng định => Công thức : S + am/ is/ are + N/ Adj Trong đó: S (subject): Chủ ngữ N/ Adj (Noun/ Adjective): Danh từ/ tính từ Lưu ý: S = I + am S = He/ She/ It + is S = You/ We/ They + are Ví dụ : My father is a teacher. (Bố tôi là một giáo viên.) They are from Japan. (Họ đến từ Nhật Bản.) I am handsome. (Tôi đẹp trai.)'
,'Thảo sinh ngày 9/9/2003 cô ấy rất đẹp và dịu dàng cô ấy là người tôi thích, thật tuyệt nếu cô ấy làm người yêu tôi, tôi không thể quên cô ấy cô ấy đã mang đến cho tôi những kỷ niệm không thể nào quên.'
,'Những người thuộc cung Ma Kết sống theo nguyên tắc, cẩn thận, quy củ, coi trọng các luật lệ và đề phòng trong các mối quan hệ. Bởi vậy trong mắt mọi người, Ma Kết lúc nào cũng nghiêm túc, không hài hước, vui vẻ. Tính cách cung Ma Kết hướng nội. Ban đầu khi giao tiếp, họ sẽ rụt rè, lúng túng và thiếu tự tin. Nếu có ai đó pha vỡ tấm lá chắn ngại ngùng của Ma Kết, họ mới có thể trở nên nhiệt tình hơn. Ma Kết là người tuyệt đối giữ bí mật và kín đáo, họ biết điều gì nên nói và không nên nói. Nếu ai đó nhờ giữ bí mật, Ma Kết sẽ đồng ý và không mấp máy nửa lời. Họ cũng thường giữ kín những mục tiêu và kế hoạch của mình, dù ai có cố gắng nhòm ngó cũng không thể khai thác được thông tin gì.'
,'Những người thuộc cung Xử Nữ biểu tượng cho đất, được sao Thủy chiếu mệnh. Họ là người sống có kế hoạch, kỉ luật, khá tỉ mỉ và khắt khe. Họ sẽ không lãng phí bất kì thứ gì đặc biệt là tiền của, dù họ sống trong điều kiện dư dả. Những người này luôn giữ căn nhà của họ thật sạch sẽ, ngăn nắp và trang trí cho nó bằng những phụ kiện lung linh, màu sắc sặc sỡ. Xử Nữ sở hữu sự thông minh, trí tuệ sắc sảo vượt trội. Họ có thể thích hợp với những công việc như: nhà nghiên cứu khoa học, chuyên viên kĩ thuật, chế tạo máy móc…'
,'Trường THPT Võ Văn Kiệt được thành lập ngày 28 tháng 11 năm 2018 chính thức đi vào hoạt động từ học kì 2 năm học 2018-2019. Trường đóng trên địa bàn thôn 10 xã Ea Khal, huyện Ea H’leo tỉnh Đắk Lắk. Thực tế trường giáp ranh với thị trấn Ea Drăng (cách thị trấn khoảng 300 m), cách đường Hồ Chí Minh  (Quốc lộ 14) 1,4 Km về phía Tây. Đến nay sau hơn 3 năm xây dựng và phát triển hiện trường có 60 CB, GV,NV với 23 lớp gần 1000 học sinh là con em các xã thị trấn trên toàn huyện theo học. Về cơ sở vật chất: Thuộc top đầu của tỉnh đảm bảo việc học tập và thực hành theo chương trình GDPT năm 2018. Trường có diện tích hơn 3ha với 30 phòng học kiên cố; 5 phòng thí nghiệm. 3 phòng công nghệ mỗi phòng rộng gần 100m2; 3 phòng tin học hiện đại. Hệ thống thư viện và thư viện điện tử 2 phòng; nhà đa năng với sức chứa 600 người; 2 sân bóng rổ; 3 sân bóng chuyền, và đặc biệt có 01 sân bóng cỏ nhân tạo. Về đội ngũ giảng dạy: nhà trường có 3 CBQL, 49 GV đứng lớp, 7 nhân viên; có 7 GV trình độ thạc sĩ, có 07 GV dạy giỏi cấp tỉnh….100% GB,GV đạt chuẩn và trên chuẩn. Về chất lượng giảng dạy: Năm học vừa rồi trường có 01 HS giỏi Tỉnh, 05 huy chương kì thi Olimpic 10/3 (1 Vàng 2 Bạc 2 đồng). Tỷ lệ tốt nghiệp đạt 99,8%. Rất nhiều em đậu vào các trường ĐH chất lượng cả nước như em Thùy Dương ( Y Tây Nguyên) em Hoàng Linh, em Toản (Công nghệ thông tin -ĐHQG TP HCM) em Phương Hà (ĐH Kinh tế TP HCM) em Thanh Thảo (ĐH Kinh tế -Luật) …. Năm học 2022-2023 qui mô trường trên 25 lớp với gần 1200 học sinh. Địa bàn tuyển sinh chính của trường là các xã Ea Nam, Ea Khal, Ea Tir, một phần xã Cư Mốt, xã Ea ral và học sinh học thị trấn Ea Drăng nhưng có hộ khẩu các xã nói trên… Nhà trường kính chúc quí phụ huynh và các em học sinh sức khỏe và lựa chọn ngôi trường này để học tập. Ngôi trường lí tưởng cho các bạn học tập và vui chơi. Chia sẻ bài viết này cho mọi ngưòi biết với nha các ban. Thầy xin cảm ơn'
,'Tính số Ampe (A) tương ứng với công suất (KW) bằng cách lấy công suất (P) chia cho số vôn (V). Ví dụ: máy có công suất là 100KW, hiệu điện thế là 220V thì I = P/U = 100220 = 4.5 Ampe. Để tính ra Ampe. Ta nhân với 1000 thì 4.5 A*100 = 450 Ampe.'
,'Hồ Chí Minh, tên khai sinh Nguyễn Sinh Cung, là một nhà cách mạng và chính khách người Việt Nam. Ngày/nơi sinh: 19 tháng 5, 1890'
,'Việt Nam, quốc hiệu chính thức là Cộng hòa Xã hội chủ nghĩa Việt Nam, là một quốc gia nằm ở cực Đông của bán đảo Đông Dương thuộc khu vực Đông Nam Á, giáp với Lào, Campuchia, Trung Quốc, biển Đông và vịnh Thái Lan. Lãnh thổ Việt Nam xuất hiện con người sinh sống từ thời đại đồ đá cũ.'
,'Đà Nẵng là một thành phố trực thuộc trung ương, nằm trong vùng Duyên hải Nam Trung Bộ Việt Nam, là thành phố trung tâm và lớn nhất khu vực miền Trung - Tây Nguyên.'
,'Đắk Lắk là một tỉnh có diện tích lớn thứ 4 nằm ở trung tâm vùng Tây Nguyên, miền Trung Việt Nam. Năm 2019, Đắk Lắk là đơn vị hành chính Việt Nam đông thứ 10 về số dân, xếp thứ 22 về Tổng sản phẩm trên địa bàn, xếp thứ 41 về GRDP bình quân đầu người, đứng thứ 37 về tốc độ tăng trưởng GRDP.'
,'Python là một ngôn ngữ lập trình bậc cao cho các mục đích lập trình đa năng, do Guido van Rossum tạo ra và lần đầu ra mắt vào năm 1991. Python được thiết kế với ưu điểm mạnh là dễ đọc, dễ học và dễ nhớ.'
,'C++ là một loại ngôn ngữ lập trình bậc trung. Đây là ngôn ngữ lập trình đa năng được tạo ra bởi Bjarne Stroustrup như một phần mở rộng của ngôn ngữ lập trình C, hoặc "C với các lớp Class", Ngôn ngữ đã được mở rộng đáng kể theo thời gian và C ++ hiện đại có các tính năng: lập trình tổng quát, lập trình hướng đối tượng'
,'C# là một ngôn ngữ lập trình hướng đối tượng đa năng, mạnh mẽ được phát triển bởi Microsoft, C# là phần khởi đầu cho kế hoạch .NET của họ. Tên của ngôn ngữ bao gồm ký tự thăng theo Microsoft nhưng theo ECMA là C#, chỉ bao gồm dấu số thường. Microsoft phát triển C# dựa trên C++ và Java.'
,'Ngôn ngữ lập trình C là một ngôn ngữ mệnh lệnh được phát triển từ đầu thập niên 1970 bởi Dennis Ritchie để dùng trong hệ điều hành UNIX. Từ đó, ngôn ngữ này đã lan rộng ra nhiều hệ điều hành khác và trở thành một những ngôn ngữ phổ dụng nhất.'
,'JavaScript, theo phiên bản hiện hành, là một ngôn ngữ lập trình thông dịch được phát triển từ các ý niệm nguyên mẫu. Ngôn ngữ này được dùng rộng rãi cho các trang web cũng như phía máy chủ.'
,'Node.js là một hệ thống phần mềm được thiết kế để viết các ứng dụng internet có khả năng mở rộng, đặc biệt là máy chủ web. Chương trình được viết bằng JavaScript, sử dụng kỹ thuật điều khiển theo sự kiện, nhập/xuất không đồng bộ để tối thiểu tổng chi phí và tối đa khả năng mở rộng.'
,'là một cầu thủ bóng đá người Na Uy hiện đang thi đấu ở vị trí tiền đạo cho câu lạc bộ Borussia Dortmund và đội tuyển bóng đá quốc gia Na Uy.'
,'Cristiano Ronaldo dos Santos Aveiro GOIH ComM là một cầu thủ bóng đá chuyên nghiệp người Bồ Đào Nha hiện đang thi đấu ở vị trí tiền đạo cho câu lạc bộ Manchester United và là đội trưởng của đội tuyển bóng đá quốc gia Bồ Đào Nha.'
,'Ricardo Izecson dos Santos Leite, được biết đến nhiều nhất với tên Kaká, là một cựu cầu thủ bóng đá người Brasil. Anh từng được trao danh hiệu Quả bóng vàng châu Âu và Cầu thủ xuất sắc nhất năm của FIFA vào năm 2007.'
,'Câu lạc bộ bóng đá Manchester City là một câu lạc bộ bóng đá chuyên nghiệp có trụ sở tại thành phố Manchester, nước Anh. Tính tới nay, Manchester City đã có 7 lần vô địch bóng đá Anh, 6 lần vô địch Cúp FA, 8 lần vô địch Cúp Liên đoàn bóng đá Anh, 6 lần vô địch Siêu cúp nước Anh và 1 lần đoạt Cúp C2 châu Âu.'
,'Câu lạc bộ bóng đá Chelsea là một câu lạc bộ bóng đá chuyên nghiệp của Anh có trụ sở tại Fulham, London. Được thành lập vào năm 1905, câu lạc bộ hiện đang thi đấu tại Premier League, giải đấu hàng đầu của bóng đá Anh.'
,'Na Uy, tên chính thức là Vương quốc Na Uy, là một quốc gia ở Bắc Âu nằm ở Tây Bắc Châu Âu có lãnh thổ bao gồm phần phía tây và cực bắc của Bán đảo Scandinavia; bao gồm đảo Jan Mayen và quần đảo Svalbard là 2 lãnh thổ nằm rất xa về phía Bắc Cực; bao gồm lãnh thổ phụ thuộc: đảo Bouvet nằm ở khu vực Subantartic.'
,'Trường Đại học Duy Tân là một trường đại học tư thục đầu tiên tại miền Trung Việt Nam, được thành lập năm 1994. Trường có mặt trong một số bảng xếp hạng đại học như: QS Rankings, CWUR, URAP, Nature Index, ShanghaiRanking Consultancy. https://www.facebook.com/daihocduytan.dtu'
,'https://instagram.fdad1-1.fna.fbcdn.net/v/t51.2885-19/278075207_657062702047512_2120175194043005538_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fdad1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=NYKddBiD9oYAX_VlF-a&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT-syiS7oFVTP6eMHHTzGPzAcOwVf8FND2lICfI-sEnJsA&oe=62751C72&_nc_sid=7bff83'
,'Elon Reeve Musk FRS, là một kỹ sư, nhà tài phiệt, nhà phát minh, doanh nhân công nghệ và nhà từ thiện Người Mỹ gốc Nam Phi. Ông cũng là công dân mang hai quốc tịch Nam Phi và Canada. '
,'bạn đã sử dụng help, tôi sẽ giúp bạn. Tôi có thể dịch từ vựng tiếng anh sang tiếng Việt, hãy gửi từ vựng cho tôi. Tôi cái gì cũng biết hãy hỏi tôi 😂'
,' Mark Elliot Zuckerberg là một nhà lập trình máy tính người Mỹ kiêm doanh nhân mảng công nghệ Internet. Anh là nhà đồng sáng lập của Meta, và hiện đang điều hành công ty này với chức danh chủ tịch kiêm giám đốc điều hành. Tài sản của anh giảm 4,37 tỷ USD trong ngày 7/2, còn 85 tỷ USD.'
,'Tết Nguyên Đán là dịp lễ đầu năm mới theo âm lịch của các dân tộc thuộc Vùng văn hóa Đông Á, gồm có Trung Quốc, Nhật Bản, bán đảo Triều Tiên, Đài Loan và Việt Nam.'
,'Tỵ là một trong số 12 chi của Địa chi, thông thường được coi là địa chi thứ sáu. Đứng trước nó là Ngọ, đứng sau nó là Thìn. Tháng Tỵ trong nông lịch là tháng tư âm lịch. Về thời gian thì giờ Tỵ tương ứng với khoảng thời gian từ 09:00 tới 11:00 trong 24 giờ mỗi ngày. Về phương hướng thì Tỵ chỉ hướng nam đông nam.'
]
  console.log(SearchBot.length)
  console.log(SearchBot[28])

  switch(pass){
    case"hiện tại đơn":
   console.log(SearchBot[0]||SearchBot[1])
  
  }






