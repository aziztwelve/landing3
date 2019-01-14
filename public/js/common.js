$(document).ready(function () {
  var width = $(window).width();
  $(window).resize(function () {
    width = $(window).width();
  });
  $(".fancybox").fancybox();
  if (width > 975) {
    $(".s_gallery .img").each(function () {
      var random = Math.floor(Math.random() * (9 - 3) + 3);
      $(this).attr("style", "-webkit-animation-delay: ." + random + "s; -moz-animation-delay: ." + random + "s; -o-animation-delay: ." + random + "s; animation-delay: ." + random + "s;");
    });
    $(".s_aboutProduct .item").animated("fadeIn", "fadeOut");
    $(".s_info .wrap").animated("fadeInRight", "fadeOut");
    $(".s_step .item").animated("fadeInLeft", "fadeOut");
    $(".s_gallery .img").animated("zoomIn", "fadeOut");
    $(".s_form form").animated("fadeInRight", "fadeOut");
    $.stellar();
  }
  var device = $("html").attr("class");
  if (device.indexOf("desktop") != -1) {
    $('input[name=phone]').maskinp("+9 (999) 999-99-99");
  }
  $(".s_katalog .btn").click(function () {
    var title = $(this).parent().find('h3').html();
    $('.popup#form2 p .title').html(title);
    $('.popup#form2 input[name="form"]').val("Заказать мишку “" + title + "“");
  });
  $("form").submit(function (e) {
    e.preventDefault;
    var f = $(this);
    $('.ierror', f).removeClass('ierror');
    var name = $('input.name', f).val();
    var phone = $('input.phone', f).val();
    var error = false;
    if (name == '') {
      $('input.name', f).addClass('ierror');
      error = true;
    }
    if (phone == '') {
      $('input.phone', f).addClass('ierror');
      error = true;
    }
    if (error) {
      return false;
    }
   
  });
  var s_aboutProduct = $(".s_aboutProduct").offset().top - 55;
  $(window).scroll(function () {
    if ($(window).scrollTop() > s_aboutProduct) {
      if ($("nav").hasClass("nav_fixet") == false) {
        $("nav").addClass("nav_fixet");
      }
    } else $("nav").removeClass("nav_fixet");
  });
  $(".scroll a, .header_main .scroll").click(function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top - 50;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });
  jQuery(window).scroll(function () {
    var $sections = $('section,header');
    $sections.each(function (i, el) {
      var top = $(el).offset().top;
      var bottom = top + $(el).height();
      var scroll = $(window).scrollTop() + 100;
      var id = $(el).attr('id');
      if (scroll > top && scroll < bottom) {
        $('.menu li.active').removeClass('active');
        $('.menu a[href="#' + id + '"]').parent().addClass('active');
      }
    })
  });
  $(".menu_small button").click(function () {
    $(".menu").slideToggle();
  });
  $(".menu a").click(function () {
    if (width < 975) {
      $(".menu").css("display", "none");
      $(".c-hamburger").removeClass("is-active");
    }
  });
  if (!$.browser.safari) {
    (function () {
      "use strict";
      var toggles = document.querySelectorAll(".c-hamburger");
      for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
      };

      function toggleHandler(toggle) {
        toggle.addEventListener("click", function (e) {
          e.preventDefault();
          (this.classList.contains("is-active") === true) ? this.classList.remove("is-active"): this.classList.add("is-active");
        });
      }
    })();
  }
});