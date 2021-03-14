$(document).on("scroll", function(){
    if($(document).scrollTop() > 80){
        $("#nav-sc-inv").addClass("nav-sc");
    }else{
        $("#nav-sc-inv").removeClass("nav-sc");
    }
});