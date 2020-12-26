$(document).ready(() => {

    $.getJSON("artists.json", (data) => {
        var artists = data.artists;
        output(artists);
    })

});

function output(artists) {
    for (var i = 0; i < artists.length/4 + 1; i++) {
        var innerHTML = '';
        innerHTML += '<tr id="tr-' + i + '">';
        innerHTML += '</tr>';  
        $('#table-artists').html($('#table-artists').html() + innerHTML);
    }
    var i = 0;
    artists.map(artist => {

        var innerHTML = '';
        innerHTML += '<td class="td-row2" width=200 align=center>'
        innerHTML += '<img class="img-avatar" src="' + artist.avatar + '"> <br>'
        innerHTML += '<p class="p-name"> ' + artist.name + ' <br> </p>'
        innerHTML += '<p class="p-follower"> ' + toString(artist.followers) + ' Follower <br> </p>'
        innerHTML += '<button class="' + (artist.followed === true ? 'button-followed' : 'button-follow') + '"> ' + (artist.followed === true ? '✓ Followed' : 'Follow +') + ' </button>'
        innerHTML += '</td>'

        $('#tr-' + (parseInt(i / 4))).html($('#tr-' + (parseInt(i / 4))).html() + innerHTML);
        i++;
    });
}

function toString(follower) {
    var result = follower;

    if (follower >= 10000 && follower < 100000) result = `${parseInt((follower / 1000))}K`;
    if (follower >= 100000 && follower < 1000000) result = `${parseInt((follower / 1000))}K`;
    if (follower >= 1000000 && follower < 10000000) result = `${parseInt((follower / 1000000))}M`;
    if (follower >= 10000000 && follower < 100000000) result = `${parseInt((follower / 1000000))}M`;
    if (follower >= 10000000 && follower < 100000000) result = `${parseInt((follower / 1000000))}M`;

    return result;
}