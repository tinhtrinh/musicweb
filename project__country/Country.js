

var arr = [
  {
    title__left: "Tất cả",
    title__right: "XEM TẤT CẢ",
    src1: "./asset/content/img (1).svg",
    src2: "./asset/content/img (2).svg",
    src3: "./asset/content/img (3).svg",
    src4: "./asset/content/img (4).svg",
    title1: "Top 100 V-Pop",
    title2: "Top 100 K-Pop",
    title3: "Top 100 US-UK",
    title4: "Top 100 C-Pop",
    author1: "Nhiều ca sĩ",
    author2: "Nhiều ca sĩ",
    author3: "Nhiều ca sĩ",
    author4: "Nhiều ca sĩ"
  },
  {
    title__left: "V-Pop",
    title__right: "XEM TẤT CẢ",
    src1: "./asset/content/img (5).svg",
    src2: "./asset/content/img (6).svg",
    src3: "./asset/content/img (7).svg",
    src4: "./asset/content/img (8).svg",
    title1: "Hoa hải đường",
    title2: "Ai mang cô đơn đi",
    title3: "Hỏi thăm nhau",
    title4: "With you (Ngẫu hứng)",
    author1: "Jack",
    author2: "K-ICM, APJ",
    author3: "Lê Bảo Bình",
    author4: "Hoaprox, Nick Strand, Mio"
  }, {
    title__left: "J-Pop",
    title__right: "XEM TẤT CẢ",
    src1: "./asset/content/img (9).svg",
    src2: "./asset/content/img (10).svg",
    src3: "./asset/content/img (11).svg",
    src4: "./asset/content/img (12).svg",
    title1: "Kousui",
    title2: "Youru ni Kakeru",
    title3: "Lemon",
    title4: "Make you happy",
    author1: "Eito",
    author2: "YOASOBI",
    author3: "Yonezu Kenshi",
    author4: "NiziU"
  }, {
    title__left: "Âu Mỹ",
    title__right: "XEM TẤT CẢ",
    src1: "./asset/content/img (13).svg",
    src2: "./asset/content/img (14).svg",
    src3: "./asset/content/img (15).svg",
    src4: "./asset/content/img (16).svg",
    title1: "SkyFall",
    title2: "Timber",
    title3: "Wrecking Ball",
    title4: "Beliver",
    author1: "Adele",
    author2: "Pitbull ft. Ke$ha",
    author3: "Milley Cyrus",
    author4: "Imagines Dragon"
  }, {
    title__left: "K-Pop",
    title__right: "XEM TẤT CẢ",
    src1: "./asset/content/img (17).svg",
    src2: "./asset/content/img (18).svg",
    src3: "./asset/content/img (19).svg",
    src4: "./asset/content/img (20).svg",
    title1: "Haru haru",
    title2: "How you like that",
    title3: "Come back home",
    title4: "Mr. Taxi",
    author1: "Big Bang",
    author2: "BLACKPINK",
    author3: "2NE1",
    author4: "Girl's Generation"
  }, {
    title__left: "C-Pop",
    title__right: "XEM TẤT CẢ",
    src1: "./asset/content/img (21).svg",
    src2: "./asset/content/img (22).svg",
    src3: "./asset/content/img (23).svg",
    src4: "./asset/content/img (24).svg",
    title1: "Rebirth",
    title2: "Good Night",
    title3: "Break Down",
    title4: "Our Time",
    author1: "Cai Xukun",
    author2: "Lay Zhang Yixing",
    author3: "Super Junior - M",
    author4: "TFBoys"
  }, {
    title__left: "Nhạc cá nhân",
    title__right: "XEM TẤT CẢ",
    src1: "./asset/content/img (25).svg",
    src2: "./asset/content/img (26).svg",
    src3: "./asset/content/img (27).svg",
    src4: "./asset/content/img (28).svg",
    title1: "Bios (Guilty Crown OST)",
    title2: "Guilty Crown Opening",
    title3: "GIANTS",
    title4: "Bye Bye",
    author1: "Mika Kobayashi",
    author2: "Egoist",
    author3: "Becky G, Keke Palmer, SOYEON, DUCKWRTH, Thutmose",
    author4: "Onoken"
  }
]
$(document).ready(() => {
  $("#wrapper").html(
    arr.map(i => {
      return '<div id="title"> <h1>' + i.title__left + '</h1> <p>' + i.title__right + '</p></div>' + '<div id="content__row"><div id="item"><img src="' + i.src1 + '"/><h4>' + i.title1 + '</h4> <p>' + i.author1 + '</p></div><div id="item"><img src="' + i.src2 + '"/><h4>' + i.title2 + '</h4> <p>' + i.author2 + '</p></div><div id="item"><img src="' + i.src3 + '"/><h4>' + i.title3 + '</h4> <p>' + i.author3 + '</p></div><div id="item"><img src="' + i.src4 + '"/><h4>' + i.title4 + '</h4> <p>' + i.author4 + '</p></div></div>';
    })
  )
  $("#btn__backToTop").html(() => {
    window.onscroll = () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $("#btn__backToTop").css("display", "block");
      } else {
        $("#btn__backToTop").css("display", "none");
      }
    }
    $("#btn__backToTop").click(() => {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });
  })
}) 
