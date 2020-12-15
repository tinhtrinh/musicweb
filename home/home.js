var menus = [
    {
        name: "Trang Chủ",
        src: "../asset/icon/home.svg",
        href: "./ca-nhan/ca-nhan.html"
    },
    {
        name: "Bảng Xếp Hạng",
        src: "../asset/icon/bar-chart.svg",
        href: "./ca-nhan/ca-nhan.html"
    },
    {
        name: "Nghệ Sĩ",
        src: "../asset/icon/singer.svg",
        href: "./nghe-si/nghe-si.html"
    },
    {
        name: "Thể Loại",
        src: "../asset/icon/tag.svg",
        href: "../ca-nhan/ca-nhan.html"
    },
    {
        name: "Khu vực",
        src: "../asset/icon/flag.svg",
        href: "./ca-nhan/ca-nhan.html"
    },
    {
        name: "Cá nhân",
        src: "../asset/icon/user.svg",
        href: "./ca-nhan/ca-nhan.html"
    }
]

$(document).ready(function () {
    $("#side-bar").html(menus.map(menu => {
        return '<a href="'+ menu.href +'" class="text"><li class="side-item"><img src="' + menu.src + '" alt="home" class="icon-size">' + menu.name +'</li></a>'
    }).join(""));
    
});