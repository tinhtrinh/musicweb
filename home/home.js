var menus = [
    {
        id: 0,
        name: "Trang Chủ",
        src: "../asset/icon/home.svg",
        href: "./home.html"
    },
    {
        id: 1,
        name: "Bảng Xếp Hạng",
        src: "../asset/icon/bar-chart.svg",
        href: "../bxh/bxh.html"
    },
    {
        id: 2,
        name: "Nghệ Sĩ",
        src: "../asset/icon/singer.svg",
        href: "../nghe-si/nghe-si.html"
    },
    {
        id: 3,
        name: "Khu vực",
        src: "../asset/icon/flag.svg",
        href: "/project__country/Country.html"
    }
]


$(document).ready(function () {
    $("#side-bar").html(menus.map(menu => {
        return `
        <a href="${menu.href}" class="text">
            <div class="side-item">
            <img src="${menu.src}" alt="home" class="icon-size"/>${menu.name}
            </div>
        </a>
        `
    }).join("") + 
    `<a href="../dang_nhap/login.html" class="text">
        <li class="side-item">
            <img src="../asset/icon/user.svg" class="icon-size">Cá Nhân
        </li>
    </a>`);

    $("#end").click((e) => {
        e.preventDefault();
        $("#playMusicBar").css("visibility", "hidden");
    });

    $("#s-input").keyup((e) => {
        var code = e.key;
        if (code === "Enter") $("#iframe").attr("src", "../result/result.html");
    });

    $("li .song-container").click(function (e) { 
        e.preventDefault();
        console.log($("li"));
    });

    var myIndex = 0;
    carousel();

    function carousel() {
        var i;
        var x = $(".slide");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
        }
        myIndex++;
        if (myIndex > x.length) {myIndex = 1}    
        x[myIndex-1].style.display = "block";  
        setTimeout(carousel, 5000);
    }    
});

function load(id) {
    $("#home-content").load(menus[id].href);
    var nId = id.toString();
}

function loadSong(id){
    console.log(id);

    $.getJSON("../songs.json", function (data, textStatus, jqXHR) {
            var songs = data.songs;
            songs.forEach(song => {
                if(song.id === id) {
                    $("#musicContent").html('<img src="' + song.image + '" alt="" />'+
                                            '<div id="musicContent__text">'+
                                                '<h3>'+ song.name +'</h3>'+
                                                '<p>'+ song.singer +'</p>'+
                                            '</div>');
                }
            });
        }
    );
}