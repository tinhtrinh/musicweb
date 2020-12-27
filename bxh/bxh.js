$(document).ready(function () {
    $.getJSON("../songs.json", function (data, textStatus, jqXHR) {
        var songs = data.songs;

        $("#wrapper").html(songs.map((song) => {
            return '<div class="component">'+
                        '<div class="stt">' + song.id + '</div>'+
                        '<div class="image">'+
                            '<img src="'+ song.image +'" class="img-responsive" alt="Image">' +
                        '</div>'+
                        '<div class="name">'+
                            '<div class="name_song">' + song.name + '</div>'+
                            '<div class="performer">' + song.singer + '</div>'+
                        '</div>'+
                        '<div class="icon">'+
                            '<i class="fa fa-play"></i><i class="fa fa-heart-o"></i><i class="fa fa-ellipsis-h"></i>'+
                        '</div>'+
                    '</div>'
        }));
        }
    );

    
});