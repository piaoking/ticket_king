$(".wodeyouhuiquan").click(function () {
    window.location.href = "users/youhuiquan/?page=2";
});
$(".wodeyue").click(function () {
    window.location.href = "users/balance/?page=3";
});
$(".gerenxinxi").click(function () {
    window.location.href = "users/name/?userId=1&page=4";
});
$(".shouhuodizhi").click(function () {
    window.location.href = "users/add/?userId=1&page=5";
});
$(".mimaguanli").click(function () {
    window.location.href = "users/update/?userId=1&page=6";
});
$(".wodepiaowang").click(function () {
    window.location.href = "users/home/?userId=1&page=7";
});
$(".wodedingdan").click(function () {
    window.location.href = "users/goorders/?userId=1&page=1";
});

function init(){
    var page = GetQueryString('page');
    if(page == '1'){
        $(".wodedingdan").addClass("dianjibianse");
    }else if (page == '2'){
        $(".wodeyouhuiquan").addClass("dianjibianse");
    }else if (page == '3'){
        $(".wodeyue").addClass("dianjibianse");
    } else if (page == '4'){
        $(".gerenxinxi").addClass("dianjibianse");
    } else if (page == '5'){
        $(".shouhuodizhi").addClass("dianjibianse");
    }else if (page == '6'){
        $(".mimaguanli").addClass("dianjibianse");
    }else if (page == '7'){
        $(".wodepiaowang").addClass("active");
    }
    var select = GetQueryString('select');
    if(select == 0){
        $("#selectid").val(0);
    }else if(select == 1){
        $("#selectid").val(1);
    }else if(select == 2){
        $("#selectid").val(2);
    }
}
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
    var context = "";
    if (r != null)
        context = r[2];
    reg = null;
    r = null;
    return context == null || context == "" || context == "undefined" ? "" : context;
}