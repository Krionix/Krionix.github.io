$(function() {
  $('.owl-carousel').owlCarousel({
	loop:true, //Зацикливаем слайдер
	nav:false,
	autoplay: true, //Отключил навигацию
	autoplayHoverPause:true, //Пауза при навидении мыши
	smartSpeed:1000, //Время движения слайда
	autoplayTimeout:6000, //Время смены слайда
	responsive:{ //Адаптация в зависимости от разрешения экрана
		0:{
			items:1
		},
		600:{
			items:1
		},
		1000:{
			items:1
		},
		1210:{
		    items:3,
			center: true,
			autoWidth: true,
		},
		1920:{
			items:3,
			center: true,
			autoWidth: true,
		},
	}
  });

  $(".popup").magnificPopup({type:"image"});
  $(".popup_c").magnificPopup({});


  $(window).resize(function(){
    if($(window).width() < 540) 
    $('.m_text').removeClass("col-xs-8")
    $('.m_text').addClass("col-xs-12")
  });

  $(window).ready(function(){
    if($(window).width() < 540) 
    $('.m_text').removeClass("col-xs-8")
    $('.m_text').addClass("col-xs-12")
  });

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
