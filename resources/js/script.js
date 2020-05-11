$(document).ready(function() {
    
    /* For the sticky navigation */
    $('.js--section-involvement').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
          offset: '60px;'
    });
    
    
    
    /* for self scrolling to different section */
    
    $('.js--scrolltoabout').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-aboutme').offset().top}, 1000);
    });
    
    
    
    
    /* for navigation scroll*/
    
            $('a[href*="#"]')
          // Remove links that don't actually link to anything
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
                  if ($target.is(":focus")) { 
                    return false;
                  } else {
                    $target.attr('tabindex','-1'); 
                    $target.focus(); 
                  };
                });
              }
            }
          });
    
    /* Animation on scroll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    }, {
        offset:'50%;'
    });
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animate__animated animate__slideInRight');
    }, {
        offset:'50%;'
    });
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animate__animated animate__pulse');
    }, {
        offset:'50%;'
    });
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animate__animated animate__jackInTheBox');
    }, {
        offset:'50%;'
    });
     $('.js--wp-5').waypoint(function(direction) {
        $('.js--wp-5').addClass('animate__animated animate__zoomIn');
    }, {
        offset:'50%;'
    });
    $('.js--wp-6').waypoint(function(direction) {
        $('.js--wp-6').addClass('animate__animated animate__slideInLeft');
    }, {
        offset:'50%;'
    });
    $('.js--wp-7').waypoint(function(direction) {
        $('.js--wp-7').addClass('animate__animated animate__slideInRight');
    }, {
        offset:'50%;'
    });
    $('.js--wp-8').waypoint(function(direction) {
        $('.js--wp-8').addClass('animate__animated animate__lightSpeedInLeft');
    }, {
        offset:'100%;'
    });
    $('.js--wp-9').waypoint(function(direction) {
        $('.js--wp-9').addClass('animate__animated animate__lightSpeedInRight');
    }, {
        offset:'100%;'
    });
    
    
    /*MOBILE NAVIGATION*/
    $('.js--nav-icon').click(function() {
         var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });
    
    
    
    
});