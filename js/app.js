
particlesJS('particles-js',

{
  "particles": {
    "number": {
      "value": 47,
      "density": {
        "enable": true,
        "value_area": 1026
      }
    },
    "color": {
      "value": "#61babc"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true,
  "config_demo": {
    "hide_card": false,
    "background_color": "#08182f",
    "background_image": "",
    "background_position": "50% 50%",
    "background_repeat": "no-repeat",
    "background_size": "cover"
  }
}

);

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

});

/* Author: Praveenkumar C */




// $(document).ready(function() {
//     $('#home-card1').mouseover(function() {
//         $('#sub-leftcard1').removeClass('hide-sub-homecard');
//         $('#sub-leftcard1').addClass('sub-leftcard1');
//     });
//     $('#home-card1').mouseout(function() {
//         $('#sub-leftcard1').removeClass('sub-leftcard1');
//         $('#sub-leftcard1').addClass('hide-sub-homecard');
//     })
//     $('#home-card1').mouseover(function() {
//         $('#sub-leftcard2').removeClass('hide-sub-homecard');
//         $('#sub-leftcard2').addClass('sub-leftcard2');
//     });
//     $('#home-card1').mouseout(function() {
//         $('#sub-leftcard2').removeClass('sub-leftcard2');
//         $('#sub-leftcard2').addClass('hide-sub-homecard');
//     })
//     $('#home-card1').mouseover(function() {
//         $('#sub-leftcard3').removeClass('hide-sub-homecard');
//         $('#sub-leftcard3').addClass('sub-leftcard3');
//     });
//     $('#home-card1').mouseout(function() {
//         $('#sub-leftcard3').removeClass('sub-leftcard3');
//         $('#sub-leftcard3').addClass('hide-sub-homecard');
//     })

//     $('#home-card2').mouseover(function() {
//         $('#sub-centercard1').removeClass('hide-sub-homecard');
//         $('#sub-centercard1').addClass('sub-centercard1');
//     });
//     $('#home-card2').mouseout(function() {
//         $('#sub-centercard1').removeClass('sub-centercard1');
//         $('#sub-centercard1').addClass('hide-sub-homecard');
//     })
//     $('#home-card2').mouseover(function() {
//         $('#sub-centercard2').removeClass('hide-sub-homecard');
//         $('#sub-centercard2').addClass('sub-centercard2');
//     });
//     $('#home-card2').mouseout(function() {
//         $('#sub-centercard2').removeClass('sub-centercard2');
//         $('#sub-centercard2').addClass('hide-sub-homecard');
//     })
//     $('#home-card2').mouseover(function() {
//         $('#sub-centercard3').removeClass('hide-sub-homecard');
//         $('#sub-centercard3').addClass('sub-centercard3');
//     });
//     $('#home-card2').mouseout(function() {
//         $('#sub-centercard3').removeClass('sub-centercard3');
//         $('#sub-centercard3').addClass('hide-sub-homecard');
//     })
//     $('#home-card2').mouseover(function() {
//         $('#sub-centercard4').removeClass('hide-sub-homecard');
//         $('#sub-centercard4').addClass('sub-centercard4');
//     });
//     $('#home-card2').mouseout(function() {
//         $('#sub-centercard4').removeClass('sub-centercard4');
//         $('#sub-centercard4').addClass('hide-sub-homecard');
//     })

//     $('#home-card3').mouseover(function() {
//         $('#sub-rightcard1').removeClass('hide-sub-homecard');
//         $('#sub-rightcard1').addClass('sub-rightcard1');
//     });
//     $('#home-card3').mouseout(function() {
//         $('#sub-rightcard1').removeClass('sub-rightcard1');
//         $('#sub-rightcard1').addClass('hide-sub-homecard');
//     })
//     $('#home-card3').mouseover(function() {
//         $('#sub-rightcard2').removeClass('hide-sub-homecard');
//         $('#sub-rightcard2').addClass('sub-rightcard2');
//     });
//     $('#home-card3').mouseout(function() {
//         $('#sub-rightcard2').removeClass('sub-rightcard2');
//         $('#sub-rightcard2').addClass('hide-sub-homecard');
//     })
//     $('#home-card3').mouseover(function() {
//         $('#sub-rightcard3').removeClass('hide-sub-homecard');
//         $('#sub-rightcard3').addClass('sub-rightcard3');
//     });
//     $('#home-card3').mouseout(function() {
//         $('#sub-rightcard3').removeClass('sub-rightcard3');
//         $('#sub-rightcard3').addClass('hide-sub-homecard');
//     })
//     $('#home-card3').mouseover(function() {
//         $('#sub-rightcard4').removeClass('hide-sub-homecard');
//         $('#sub-rightcard4').addClass('sub-rightcard4');
//     });
//     $('#home-card3').mouseout(function() {
//         $('#sub-rightcard4').removeClass('sub-rightcard4');
//         $('#sub-rightcard4').addClass('hide-sub-homecard');
//     });



//     function timelineDotLooping() {
//         var $datalist = $('#home-work-dot .work-dot');
//         $.each($datalist, function(index){
//             var self = this;
//             setTimeout(function () {

//                 $(self).addClass('purple-work-dot');
//                 $(self).parent().prev().find('.work-dot').removeClass('purple-work-dot');
//                 if(index == 0) {
//                     $datalist.last().removeClass('purple-work-dot');
//                 }
//                 // for infinite times
//                 if(index == $datalist.length-1) {
//                     setTimeout(function () {
//                         timelineDotLooping();
//                     }, 3000);
//                 }
//             }, index*3000);
//         });
//     }
//     timelineDotLooping();

// });