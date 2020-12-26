var menus = [
    {
        name: "Trang Chủ",
        src: "../asset/icon/home.svg",
        href: "./home-content.html"
    },
    {
        name: "Bảng Xếp Hạng",
        src: "../asset/icon/bar-chart.svg",
        href: "../bxh/bxh.html"
    },
    {
        name: "Nghệ Sĩ",
        src: "../asset/icon/singer.svg",
        href: "../nghe-si/nghe-si.html"
    },
    {
        name: "Thể Loại",
        src: "../asset/icon/tag.svg",
        href: "../ca-nhan/ca-nhan.html"
    },
    {
        name: "Khu vực",
        src: "../asset/icon/flag.svg",
        href: "/project__country/Country.html"
    }
]

$(document).ready(function () {
    $("#side-bar").html(menus.map(menu => {
        return '<a href="'+ menu.href +'" class="text" target="home-iframe"><li class="side-item"><img src="' + menu.src + '" alt="home" class="icon-size">' + menu.name +'</li></a>'
    }).join("")+ '<a href="../dang_nhap/login.html" class="text"><li class="side-item"><img src="../asset/icon/user.svg" class="icon-size">Cá Nhân</li></a>');
    
    $("#end").click(function (e) { 
        e.preventDefault();
        $("#playMusicBar").css("visibility", "hidden");
    });

    $("#s-input").keyup(function(e){ 
        var code = e.key;
        if(code==="Enter") $("#iframe").attr("src", "../result/result.html");
    });
});