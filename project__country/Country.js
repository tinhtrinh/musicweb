$(document).ready(() => {
  $.getJSON("../project__country/Country.json", (data)=> {
    var arr = data.arr;
    $("#wrapper").html(
      arr.map(i => {
        return `       
          <div id="title"> 
            <h1>${i.title__left}</h1> 
            <p>${i.title__right}</p>
          </div>
        <div id="content__row">
          <div id="item">
            <img src="${i.src1}"/>
            <h4>${i.title1}</h4> 
            <p>${i.author1}</p>
          </div>
          <div id="item">
            <img src="${i.src2} "/>
            <h4>  ${i.title2} </h4> 
            <p>${i.author2}</p>
          </div>;
          <div id="item">
            <img src="${i.src3} "/>
            <h4>${i.title3}</h4> 
            <p>${i.author3}</p>
          </div>;
          <div id="item">
            <img src="${i.src4} "/>
            <h4>${i.title4}</h4> 
            <p>${i.author4}</p>
          </div>
          `
      }));
  });
  $("#btn__backToTop").html(() => {
    window.onscroll = () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $("#btn__backToTop").css("display", "block");
      } else {
        $("#btn__backToTop").css("display", "none");
      }
    }
    $("#btn__backToTop").click(() => {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });
  })
});
