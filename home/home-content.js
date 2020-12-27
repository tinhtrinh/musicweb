$(document).ready(function () {
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