

$(function() {

    $('.menu a').each(function() {
        if ( $(this).parent('li').children('ul').size() > 0 ) {
            $(this).append('<span class="dwn">▼</span>');
        }           
    });
		
});
