
$(function(){

$(".banner img").hide();
if($(".banner").find("img").length != 0){
    $(".banner").backstretch($(".banner").find("img").attr("src"));
}

    $(".subNav").hide();
    $(".cateList li:last-child").add(".contactList li:last-child").css("border","none");
    $(".litJobList").each(function(){
        $(this).find("li:odd").addClass("bgGray")
    })
    $(".searchCityList .mainList li:first-child").find("a").addClass("all");
    $(".jobsTable tr:even").addClass("bgGray");
    $("li.item").hover(function(){
        if($(this).has(".subNav")){
            $(this).find(".subNav").slideDown(200);
        }
    },function(){
        $(".subNav").stop().slideUp(200);
    })
    if($(".internaldiv ").length > 0){
        $(".login").html($(".internaldiv ").html()+$(".login").html());
    }
});
