$(document).ready(function() {

    /* ------ Links botão ----- */

    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });

    $('.js--scroll-to-starts').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });


    /* ------ Navigation scroll ------ */

    $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
        if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
        ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
        // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
            scrollTop: target.offset().top
            }, 1000, function() {
          // Callback after animation
          // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
                return false;
            } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
          };
        });
      }
    }

    });


    /*------------- Menu -------- */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.icon-menu');

        nav.slideToggle(200);
        nav.css('background-color','#ffffff4f');
        nav.css('border-radius','5px');

        if(icon.hasClass('icon-menuu')) { // já ta tudo dentro da função clicar! ele assume que isso acontece se clicar!!
            icon.addClass('icon-calendar');    // --> RESOLVER ESSE ICONE AQUI
            icon.removeClass('icon-menuu'); 
        }else{
            icon.addClass('icon-menuu');
            icon.removeClass('icon-calendar');
        }

    });



/* -------- Parte navegador NÃO DEU CERTO ------- */

    /* $ ('.js--section-features').waypoint(function(direction){ 
        if(direction == "down") {
            $('nav').addClass('sticky'); //addClass é do jquery
        }else{
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    }); 
    
    */


});


