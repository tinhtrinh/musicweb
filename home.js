var menus = [
    {
        name: "Trang Chủ",
        src: "./icon/home.svg"
    },
    {
        name: "Bảng Xếp Hạng",
        src: "./icon/bar-chart.svg"
    },
    {
        name: "Nghệ Sĩ",
        src: "./icon/singer.svg"
    },
    {
        name: "Thể Loại",
        src: "./icon/tag.svg"
    },
    {
        name: "Khu vực",
        src: "./icon/flag.svg"
    },
    {
        name: "Cá nhân",
        src: "./icon/user.svg"
    }
]

$(document).ready(function () {
    $("#side-bar").html(menus.map(menu => {
        return '<a href="#" class="text"><li class="side-item"><img src="' + menu.src + '" alt="home" class="icon-size">' + menu.name +'</li></a>'
    }).join(""));
    
});