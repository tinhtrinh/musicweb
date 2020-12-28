$(document).ready(() => {
    $.getJSON("../project__country/Country.json", (data)=> {
            var arr = data.arr;
  
            $("#wrapper").html(arr.map(i => {
                var innerHTML = '';
                innerHTML+='<div id="title"> <h1>' + i.title__left + '</h1> <p>' + i.title__right + '</p></div>';
                innerHTML+='<div id="content__row"><div id="item">';
                innerHTML+='<img src="' + i.src1 + '"/><h4>' + i.title1 + '</h4> <p>';
                innerHTML+='</p></div><div id="item"><img src="' + i.src2 + '"/><h4>' + i.title2 + '</h4> <p>' + i.author2 + '</p></div>';
                innerHTML+='<div id="item"><img src="' + i.src3 + '"/><h4>' + i.title3 + '</h4> <p>' + i.author3 + '</p></div>';
                innerHTML+='<div id="item"><img src="' + i.src4 + '"/><h4>' + i.title4 + '</h4> <p>' + i.author4 + '</p></div></div>';
                return innerHTML;
            }));
        }
    ).fail(function(){
        console.log("An error has occurred.")
    });
  });