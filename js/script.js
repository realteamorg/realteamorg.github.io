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
    
});