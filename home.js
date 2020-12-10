var menus = [
    {
        name: "Trang Chủ",
        src: "./image/home.svg"
    },
    {
        name: "Bảng Xếp Hạng",
        src: "./image/bar-chart.svg"
    },
    {
        name: "Nghệ Sĩ",
        src: "./image/singer.svg"
    },
    {
        name: "Thể Loại",
        src: "./image/tag.svg"
    },
    {
        name: "Khu vực",
        src: "./image/flag.svg"
    },
    {
        name: "Cá nhân",
        src: "./image/user.svg"
    }
]

$(document).ready(function () {
    $("#side-bar").html(menus.map(menu => {
        return '<a href="#" class="text"><li class="side-item"><img src="' + menu.src + '" alt="home" class="img-size">' + menu.name +'</li></a>'
    }).join(""));
    
});