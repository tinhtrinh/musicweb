// $(document).ready(function () {
//     $("#group").html(groups.map(group => {
//         return '<li>'+
//         '</li>'
//     }));
// });

$(document).ready(function () {
    $.getJSON("../songs.json", function (data, textStatus, jqXHR) {
            console.log(data);
        }
    ).fail(function(){
        console.log("An error has occurred.")
    });
});