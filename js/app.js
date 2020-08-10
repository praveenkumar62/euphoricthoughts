$(document).ready(function() {

  $('#home-work span').hide();

  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
          $('#sub-leftcard1').removeClass('hide-sub-homecard');
          $('#sub-leftcard1').addClass('sub-leftcard1');
          $('#sub-leftcard2').removeClass('hide-sub-homecard');
          $('#sub-leftcard2').addClass('sub-leftcard2');
          $('#sub-leftcard3').removeClass('hide-sub-homecard');
          $('#sub-leftcard3').addClass('sub-leftcard3');

          $('#sub-centercard1').removeClass('hide-sub-homecard');
          $('#sub-centercard1').addClass('sub-centercard1');
          $('#sub-centercard2').removeClass('hide-sub-homecard');
          $('#sub-centercard2').addClass('sub-centercard2');
          $('#sub-centercard3').removeClass('hide-sub-homecard');
          $('#sub-centercard3').addClass('sub-centercard3');
          $('#sub-centercard4').removeClass('hide-sub-homecard');
          $('#sub-centercard4').addClass('sub-centercard4');

          $('#sub-rightcard1').removeClass('hide-sub-homecard');
          $('#sub-rightcard1').addClass('sub-rightcard1');
          $('#sub-rightcard2').removeClass('hide-sub-homecard');
          $('#sub-rightcard2').addClass('sub-rightcard2');
          $('#sub-rightcard3').removeClass('hide-sub-homecard');
          $('#sub-rightcard3').addClass('sub-rightcard3');
          $('#sub-rightcard4').removeClass('hide-sub-homecard');
          $('#sub-rightcard4').addClass('sub-rightcard4');
      } else {
          $('#sub-leftcard1').removeClass('sub-leftcard1');
          $('#sub-leftcard1').addClass('hide-sub-homecard');
          $('#sub-leftcard2').removeClass('sub-leftcard2');
          $('#sub-leftcard2').addClass('hide-sub-homecard');
          $('#sub-leftcard3').removeClass('sub-leftcard3');
          $('#sub-leftcard3').addClass('hide-sub-homecard');

          $('#sub-centercard1').removeClass('sub-centercard1');
          $('#sub-centercard1').addClass('hide-sub-homecard');
          $('#sub-centercard2').removeClass('sub-centercard2');
          $('#sub-centercard2').addClass('hide-sub-homecard');
          $('#sub-centercard3').removeClass('sub-centercard3');
          $('#sub-centercard3').addClass('hide-sub-homecard');
          $('#sub-centercard4').removeClass('sub-centercard4');
          $('#sub-centercard4').addClass('hide-sub-homecard');

          $('#sub-rightcard1').removeClass('sub-rightcard1');
          $('#sub-rightcard1').addClass('hide-sub-homecard');
          $('#sub-rightcard2').removeClass('sub-rightcard2');
          $('#sub-rightcard2').addClass('hide-sub-homecard');
          $('#sub-rightcard3').removeClass('sub-rightcard3');
          $('#sub-rightcard3').addClass('hide-sub-homecard');
          $('#sub-rightcard4').removeClass('sub-rightcard4');
          $('#sub-rightcard4').addClass('hide-sub-homecard');
      }

      if (document.body.scrollTop > 1350 || document.documentElement.scrollTop > 1350) {
          $('#process-img1').addClass('animate-slideToLeft');
      } else {
          $('#process-img1').removeClass('animate-slideToLeft');
      }

      if (document.body.scrollTop > 1925 || document.documentElement.scrollTop > 1925) {
          $('#process-img2').addClass('animate-slideToRight');
      } else {
          $('#process-img2').removeClass('animate-slideToRight');
      }

      if (document.body.scrollTop > 2600 || document.documentElement.scrollTop > 2600) {
          $('#home-work span').each(function(index) {
              var newlist = $(this);
              setTimeout(function() {
                  $(newlist).fadeIn();
              }, index*700);
          }); 
      }
  }

  $('.services-table td').each(function() {
    $(this).on('mouseover', function() {
        $(this).find('p').addClass('active');
    });
    $(this).on('mouseout', function() {
        $(this).find('p').removeClass('active');
    });
  });

    
  // work process infinite timeline
  function timelineDotLooping() {
      var $datalist = $('#home-work-dot .work-dot');
      $.each($datalist, function(index){
          var self = this;
          setTimeout(function () {

              $(self).addClass('purple-work-dot');
              $(self).parent().prev().find('.work-dot').removeClass('purple-work-dot');
              if(index == 0) {
                  $datalist.last().removeClass('purple-work-dot');
              }
              if(index == $datalist.length-1) {
                  setTimeout(function () {
                      timelineDotLooping();
                  }, 2000);
              }
          }, index*2000);
      });
  }
  timelineDotLooping();

//   Product Engg Services 
  function servicesInteractiveOne() {
    var $servicesList = $('#services-interactive1 .services-circle')
    $servicesList.each(function(index) {
        var items = $(this);
        setTimeout(function() {
            $('#services-interactive1 .animate-scaleUp').removeClass('animate-scaleUp');
            $(items).addClass('animate-scaleUp');
            
            if(index == $servicesList.length-1) {
                setTimeout(function() {
                    servicesInteractiveOne();
                }, 4000);
            }
        },index*4000);
        
    });
  }
  function servicesInteractiveTwo() {
    var $servicesList2 = $('#services-interactive2 .services-circle');
    $servicesList2.each(function(index) {
        var items = $(this);
        setTimeout(function() {
            $('#services-interactive2 .animate-scaleUp').removeClass('animate-scaleUp');
            $(items).addClass('animate-scaleUp');

            if(index == $servicesList2.length-1) {
                setTimeout(function() {
                    servicesInteractiveTwo();
                }, 4000);
            }
        },index*4000)
    })
  }
  
  servicesInteractiveOne();
  setTimeout(function() {
    servicesInteractiveTwo();
  },2000);


//   Enabling tooltip
$('[data-toggle="tooltip"]').tooltip();

});


/* Author: Praveenkumar C */