
// стрелка вверх

 $(window).scroll(function () {
      if ($(this).scrollTop() != 0)
         $('#toTop').fadeIn();
      else
         $('#toTop').fadeOut();
   });
   $('#toTop').click(function () {
      $('body,html').animate({
         scrollTop: 0
      }, 800);
   });

   // якорь

    $('ul.menu a[href^="#"').click(function () {
      var target = $(this).attr('href');
      $('html, body').animate({
         scrollTop: $(target).offset().top
      }, 500);
      $('ul.menu a[href^="#"').css({
         'color': ''
      });
      $(this).css({
         'color': 'red'
      });
      return false;
   });


    // Липкая Шапка

$(window).on('scroll', function () {
  var scroll = $(window).scrollTop();
  if (scroll < 345) {
    $(".header").removeClass("fixed");
  } else {
    $(".header").addClass("fixed");
  }
});


               // счетчик 


$('.num1').countTo({
        from: 0,
        to: 83,
        speed: 2500,
        refreshInterval: 50,
        formatter: function (value, options) {
            return value.toFixed(options.decimals)+"K";
        },
        onUpdate: function (value) {
            console.debug(this);
        },
        onComplete: function (value) {
            console.debug(this);
        }
    });
$('.num2').countTo({
        from: 0,
        to: 567,
        speed: 2500,
        refreshInterval: 50,
        formatter: function (value, options) {
            return value.toFixed(options.decimals);
        },
        onUpdate: function (value) {
            console.debug(this);
        },
        onComplete: function (value) {
            console.debug(this);
        }
    });
$('.num3').countTo({
        from: 0,
        to: 144,
        speed: 2500,
        refreshInterval: 50,
        formatter: function (value, options) {
            return value.toFixed(options.decimals);
        },
        onUpdate: function (value) {
            console.debug(this);
        },
        onComplete: function (value) {
            console.debug(this);
        }
    });



            // СЛАЙДЕР


$('.people_info').slick({
  autoplay: true,
  autoplaySpeed: 4000,
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


                // АКАРДИОН


const acc = document.querySelectorAll(".accordion-item i");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
     const isOpenthis = this.parentNode.parentNode.classList.value.indexOf('show') !== -1;
    for (let b = 0; b < acc.length; b++) {
      acc[b].parentNode.parentNode.classList.remove('show');
      acc[b].classList.remove('fa-minus');
      acc[b].classList.add('fa-plus');
    }
    /* Переключение между добавлением и удалением "active" class, 
    выделить кнопку, управляющую панелью */
   if(!isOpenthis) {
      this.parentNode.parentNode.classList.add("show");
      this.classList.remove('fa-plus');
      this.classList.add('fa-minus');
   };
  });
}



                      // Попап


$('.show_popup').click(function() { // Вызываем функцию по нажатию на кнопку
    var popup = $('#' + $(this).attr("rel")); // Связываем rel и popup_id
    $(popup).show(); // Открываем окно
    $('.overlay_popup').show(); // Открываем блок заднего фона
})
$('.overlay_popup').click(function() { // Обрабатываем клик по заднему фону
    $('.overlay_popup, .popup').hide(); // Скрываем затемнённый задний фон и основное всплывающее окно
})



$('.show_popups').click(function() { // Вызываем функцию по нажатию на кнопку
    var popups = $('#' + $(this).attr("rel")); // Связываем rel и popup_id
    $(popups).show(); // Открываем окно
    $('.overlay_popups').show(); // Открываем блок заднего фона
})
$('.overlay_popups').click(function() { // Обрабатываем клик по заднему фону
    $('.overlay_popups, .popups').hide(); // Скрываем затемнённый задний фон и основное всплывающее окно
})


              // СМЕНА ЦВЕТА 

$(document).ready(function() {
  $('.icon1').addClass('icon_clr')
  $('.icon').on('click', function() {
    $('.icon').removeClass('icon_clr');
    $(this).addClass('icon_clr');
  });
});



$(document).ready(function() {
  $('.1line').addClass('player_line')
  $('.icon').on('click', function() {
    $('.line').removeClass('player_line');
    $(this).find('.line').addClass('player_line');
   
  });
});



                // Меню выбора цвета


$(document).ready(function(){
  $('.color_icon').click(function () {
    $(".hidden").toggleClass('color_hidden');
    });
  });

            // Смена изображения телефона 

$(".icon2, .icon3").bind("click", function() {
      $(".phone1").removeClass("phone_active").addClass("phone_not_active");
      $(".phone2").removeClass("phone_not_active").addClass("phone_active");
});


$(".icon1, .icon4, .icon5, .icon6").bind("click", function() {
      $(".phone2").removeClass("phone_active").addClass("phone_not_active");
      $(".phone1").removeClass("phone_not_active").addClass("phone_active");
});



            // смена цвета страницы 


$('.select_green').on("click", function () {
      $('link[href="css/main.css"]').attr('href', 'css/main.green.css');
       $('img').each( function(){$(this).attr('src', $(this).attr('src').replace('img', 'img/green/')); });
  });


$('.select_red').on("click", function () {
      $('link[href="css/main.green.css"]').attr('href', 'css/main.css');
      $('img').each( function(){$(this).attr('src', $(this).attr('src').replace('img/green/', 'img')); });
  });




                // БУРГЕР 


 $('.menu-icon').click(function () {
      $('nav').slideToggle(500);
      $('ul.menu').css({
         'display': 'flex',
         'flex-direction': 'column'
      });
      if ($('.menu-icon').html() == '<i class="fas fa-bars"></i>') {
         $(this).html('<i class="fas fa-times"></i>');
      } else {
         $(this).html('<i class="fas fa-bars"></i>');
      }
   });
