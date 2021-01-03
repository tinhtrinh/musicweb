$(document).ready(function () {
    $("#dk").click(function (e) { 
        e.preventDefault();
        var tdn = $("#tdk").val();
        var mk = $("#mk").val();

        if(tdn === "admin" && mk == "123"){
            window.location.assign("../ca-nhan/ca-nhan.html");
        }else alert("Sai tên hoặc mật khẩu")
       
    });
});