// $(document).ready(function() {
//     $(window).scroll(function(event) {
//         const s = $(this).scrollTop()
//         const w = $(this).outerWidth()
//         const h = $('.paralax-bg').outerHeight()
//         const h_b = $('.jarallax').outerHeight()
//         const p = s/h * 100 
//         const p_b = s/h_b * 100 
//         const o = 1-1/100 * p_b

//         const z_1 = 1+(w/90000 * p_b)
//         $('.jarallax').css({
//             'transform': 'scaleY(' + z_1 + ') scaleX(' + z_1 + ')',
        
            
//         });
//     });
// })

// $(document).ready(function() {
//     $(window).scroll(function(event) {
//         const s = $(this).scrollTop();
//         const w = $(this).outerWidth();
//         const h_b = $('.jarallax').outerHeight();
//         const p_b = s / h_b * 100;

//         // Рассчет смещения по горизонтали (X) и вертикали (Y)
//         const yOffset = (h_b - h_b * (1 + w / 90000 * p_b)) / 2;

//         // Применение CSS-свойств
//         $('.jarallax').css({
//             'transform': 'translateY(' + yOffset + 'px)',
//             'transition': 'transform 0.5s ease',
//         });
//     });
// });

// $(document).ready(function() {
//     $(window).scroll(function() {
//         const s = $(this).scrollTop();
//         const h_b = $('.jarallax').outerHeight();
//         const p_b = s / h_b * 100;

//         const yOffset = (h_b - h_b * (1 + $(this).outerWidth() / 90000 * p_b)) / 2;

//         // Определенная точка, после которой анимация не будет продолжаться
//         const animationEndPoint = 140;

//         if (s < animationEndPoint) {
//             // Добавление/удаление класса в зависимости от прокрутки
//             if (s > 10) {
//                 $('.jarallax').addClass('animate');
//             } else {
//                 $('.jarallax').removeClass('animate');
//             }

//             // Применение CSS-свойств
//             // $('.jarallax').css({
//             //     'transition': 'transform 5s ease, opacity 0.5s ease',
//             //     'transform': 'translateY(' + yOffset + 'px)',
               
//             // });
//         }
//     });
// });

// $(document).ready(function() {
//     $(window).scroll(function() {
//         const s = $(this).scrollTop();
//         const h_b = $('.paralax-bg').outerHeight();
//         const p_b = s / h_b * 100;

//     const yOffset = (h_b - h_b * (1 + $(this).outerWidth() / 90000 * p_b)) / 2.7;

        
//         const animationEndPoint = 140;

//         if (s < animationEndPoint) {
//             // Добавление/удаление класса в зависимости от прокрутки
//             if (s > 100) {
//                 $('.jarallax').addClass('animate');
//             } else {
//                 $('.jarallax').removeClass('animate');
//             }

//             // Применение CSS-свойств
//             $('.jarallax').css({
//                 'transition': 'transform 5s ease, opacity 0.5s ease',
//                 'transform': 'translateY(' + yOffset + 'px)',
//             });
//         }
//     });
// });


document.addEventListener("DOMContentLoaded", function () {
    const parallaxElement = document.getElementById("parallaxElement");
  
    window.addEventListener("scroll", function () {
      const scrollPosition = window.scrollY;
      const translateYValue = Math.max(-50, -scrollPosition / 2);
      parallaxElement.style.transform = "translateY(" + translateYValue + "px)";
    });
  });




