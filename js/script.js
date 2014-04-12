function calc(){
   var textValue1 = document.getElementById('input1').value;
   var textValue2 = document.getElementById('input2').value;

   document.getElementById('output').value = textValue1 / textValue2;
 }

 var doughnutData = [
  {
  value: 8,
  color:"#adcfad"
},

{
  value : 92,
  color : "#34495e"
}

];

var pieData = [
  {
  value: 100,
  color:"#adcfad"
}
];


var inView = false;

function isScrolledIntoView(elem)
{
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
}

$(window).scroll(function() {
  if (isScrolledIntoView('#indoor')) {
    if (inView) { return; }
    inView = true;
    new Chart(document.getElementById("indoor").getContext("2d")).Doughnut(doughnutData);
  } else {
    inView = false;  
  }
});


$(".calculate2").click(function() {
        $(".sub-plants").css('display', 'block'); 
});

$(document).ready(function() {

  // $("#indoor").on("inview",function(){
  // 
  //     var $this = $(this);
  // 
  //     $this.removeClass("hidden").off("inview");
  // 
  //     setTimeout(showPolarAreaChart,graphInitDelay);          
  // 
  // });


  // /* Every time the window is scrolled ... */
  // $(window).scroll( function(){    
  //     /* Check the location of each desired element */
  //     $('.graph').each( function(i){            
  //         var bottom_of_object = $(this).position().top + $(this).outerHeight();
  //         var bottom_of_window = $(window).scrollTop() + $(window).height();

  //         /* If the object is completely visible in the window, fade it it */
  //         if( bottom_of_window > bottom_of_object ){

  //             //Code to initialize the graph here.
  //             //This initialization should probably
  //             //be deferred, to ensure performance,
  //             //and the graphs should be marked as
  //             //initialized so we dont't init them
  //             //multiple times (possibly by changing
  //             //their class so .each ignores them).
  //           
  //         new Chart(ctx).Bar(data, options);
  //             
  //         }            
  //     });     
  // });    

  //   $(function() {
  //     var scrolldiv = $("#indoor-section"); //the div you want 
  //     h = $(window).height(); //calculate height of window or whatever element you want it to scroll past
  // 
  //     $(window).scroll(function() {
  //         if($(this).scrollTop() > h ) { 
  //                 $("#indoor").css('display', 'block !important'); 
  //                 
  //             }
  //         else {
  //             $(scrolldiv).css('display', 'block'); 
  //         }
  //     })
  // });

  // function indoorChart() {
  // $(window).scrollTop() > 320 {
  //    body.  // }
  // }
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




