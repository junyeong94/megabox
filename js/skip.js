function skip(){
        $('.skip>a').focus(function(){
            $(this).parent('.skip').css('top','0');
        });
        $('.skip>a').focusout(function(){
            $(this).parent('.skip').css('top','-50px');
        });
    }