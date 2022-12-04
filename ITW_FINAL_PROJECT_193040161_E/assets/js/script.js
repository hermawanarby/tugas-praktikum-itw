$(document).ready(function()
    {
    $(".page-scroll").on('click', function(event) 
        {      
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate(
            {
            scrollTop: $(hash).offset().top - 50
            }, 1000);
        });
    
    $(window).scroll(function()
        {
        var y = $(window).scrollTop();

        if(y >= 585)
            {  
            $('#navbarTest').slideDown(500).css('background-image','linear-gradient(45deg, #0066ff, #9900ff)');
            }
        else
            {
            $('#navbarTest').css('background-image','none')
            }
        });

    });
