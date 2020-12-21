$(document).ready(function () {
    $.getJSON("../songs.json", function (data, textStatus, jqXHR) {
            var songs = data.songs;

            $("#hot-songs").html(songs.map(song => {
                return '<a href="#" class="text"><li class="song-container">'+
                            '<img src="'+ song.image +'" alt="song-img" class="song-img-size"><br>'+
                            song.name + '<br>' +
                            song.singer + '</li></a>'
            }).join(""));
        }
    ).fail(function(){
        console.log("An error has occurred.")
    });
});