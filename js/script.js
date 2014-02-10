$(document).ready(function() {

  $('#back').animate({opacity: 0}, 0).css({'background-image': 'url(http://vaughnroyko.com/jsfiddle/back.png)'}).animate({opacity: 1}, 2500);

  // $('li').mouseenter(function() {
  //   $(this).siblings().stop().animate({ opacity:0.2 });
  //   $('.popup').stop().animate({ color: "#fff" }, 1500);    
  // }).mouseleave(function() {
  //   $(this).siblings().stop().animate({ opacity: 1 });
  //   $('.popup').next().animate({ color: "#809bab" }, 1500);
  // });

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
  });

  });




