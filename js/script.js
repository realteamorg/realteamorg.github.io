$(document).ready(function(){
    
    //Seleziona lingua
    color=["#222222","#eb3812"];
    
    $("#it").css("color",color[1]);
    
    $('#it').click(function(){
        $("#it").css("color",color[1]);
        $("#en").css("color",color[0]);
    });
    $('#en').click(function(){
        $("#it").css("color",color[0]);
        $("#en").css("color",color[1]);
    });
    
    $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
    });
    
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 1250);
        return false;
    });
        
    $('#back-to-top').tooltip('show');
});