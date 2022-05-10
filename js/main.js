jQuery(function ($) {
  "use strict",
    //#main-slider
    $(function () {
      $("#main-slider.carousel").carousel({
        interval: 1000,
      });
    });

  /*$('.flexslider').flexslider({
        animation: "slide",
        controlNav: "thumbnails",
        prevText: "",
        nextText: ""
    });
	
  / *
      Slider 2
  * /
  $('.slider-2-container').backstretch([
    "assets/img/slider/5.jpg"
  , "assets/img/slider/6.jpg"
  , "assets/img/slider/7.jpg"
  ], {duration: 3000, fade: 750});*/

  // accordian
  $(".accordion-toggle").on("click", function () {
    $(this)
      .closest(".panel-group")
      .children()
      .each(function () {
        $(this).find(">.panel-heading").removeClass("active");
      });

    $(this).closest(".panel-heading").toggleClass("active");
  });

  //Initiat WOW JS
  new WOW().init();

  // portfolio filter
  $(window).load(function () {
    "use strict";
    var $portfolio_selectors = $(".portfolio-filter >li>a");
    var $portfolio = $(".portfolio-items");
    $portfolio.isotope({
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
    });

    $portfolio_selectors.on("click", function () {
      $portfolio_selectors.removeClass("active");
      $(this).addClass("active");
      var selector = $(this).attr("data-filter");
      $portfolio.isotope({ filter: selector });
      return false;
    });
  });

  // Contact form
  var form = $("#main-contact-form");
  form.submit(function (event) {
    event.preventDefault();
    var form_status = $('<div class="form_status"></div>');
    $.ajax({
      url: $(this).attr("action"),

      beforeSend: function () {
        form.prepend(
          form_status
            .html(
              '<p><i class="fa fa-spinner fa-spin"></i> Enviando mensaje...</p>'
            )
            .fadeIn()
        );
      },
    }).done(function (data) {
      form_status
        .html('<p class="text-success">' + data.message + "</p>")
        .delay(3000)
        .fadeOut();
    });
  });

  //goto top
  $(".gototop").click(function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $("body").offset().top,
      },
      500
    );
  });

  //Pretty Photo
  $("a[rel^='prettyPhoto']").prettyPhoto({
    social_tools: false,
  });
  // $(".dropdown-title").click(function () {
  //   $(".flotante").html(`<ul class="dropdown">
  // 						<li><a href="#">Alquiler</a></li>
  // 						<li><a href="#">Venta</a></li>
  // 					</ul>`);
  // 	clear();
  // });
  // function clear() {
  //   $(".flotante").html(" ");
  // };
});

/*Cuando se hace click en el botón, muestra el submenu*/
function myFunction() {
  //Añade una clase al elemento que tenga el id myDropdown
  document.getElementById("myDropdown").classList.toggle("show");
}

//Cierra el submenu si se clica fuera
window.onclick = function (event) {
  if (!event.target.matches('.drop-button')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      //Busca dentro de drop-content los elementos con la clase show
      if (openDropdown.classList.contains('show')) {
        //elimina la clase show de los elementos dentro de drop-content
        openDropdown.classList.remove('show');
      }
    }
  }
}

