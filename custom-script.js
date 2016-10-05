

$(function() {
	
// jQuery automatic add arrow in parent menu item
    $('nav > ul li a').each(function() {
        if ( $(this).parent('li').children('ul,.mega-menu-container').size() > 0 ) {
            $(this).append('<span class="parent-angle">▼</span>');
        }           
    });
		
});


