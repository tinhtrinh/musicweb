var menus = [
    {
        id: 0,
        name: "Trang Chủ",
        src: "../asset/icon/home.svg",
        href: "./home-content.html"
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
        return '<a href="#" class="text side" id="' + menu.id + '"><li class="side-item"><img src="' + menu.src + '" alt="home" class="icon-size">' + menu.name +'</li></a>'
    }).join("")+ '<a href="../dang_nhap/login.html" class="text"><li class="side-item"><img src="../asset/icon/user.svg" class="icon-size">Cá Nhân</li></a>');
    
    $("#0").click(function (e) { 
        e.preventDefault();
        $("#home-content").load(menus[0].href);
    });

    $("#1").click(function (e) { 
        e.preventDefault();
        $("#home-content").load(menus[1].href);
    });

    $("#2").click(function (e) { 
        e.preventDefault();
        $("#home-content").load(menus[2].href);
    });

    $("#3").click(function (e) { 
        e.preventDefault();
        $("#home-content").load(menus[3].href);
    });

    $("#s-input").keyup(function(e){ 
        var code = e.key;
        if(code==="Enter") $("#iframe").attr("src", "../result/result.html");
    });

    $.getJSON("../songs.json", function (data, textStatus, jqXHR) {
        var songs = data.songs;

        $("#hot-songs").html(songs.map(song => {
            return '<a href="#" class="text" ><li class="song-container" id="mostListenedSong">'+
                        '<img src="'+ song.image +'" alt="song-img" class="song-img-size"><br>'+
                        + song.id + '. ' +song.name + '<br>' +
                        song.singer + '</li></a>'
        }).join(""));
    },
        $("#mostListenedSong").click(()=>{
            alert("a");
        })
    ).fail(function(){
    console.log("An error has occurred.")
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
        setTimeout(carousel, 2000);
    }    
});