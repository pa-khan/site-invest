$(document).ready(function($) {

	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');

	var panel = $('.panel'),
			panelClass = 'panel_scroll';


	$(window).on('load scroll', function(event) {
		var wTop = $(window).scrollTop();
		if (wTop > 0) {
			panel.addClass(panelClass);
		} else{
			panel.removeClass(panelClass);
		}
	});


	$('.calc__list').slick({
		slidesToShow: 4,
		arrows: false,
		responsive: [{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				arrows: true
			}
		}]
	})

	$('.invest').tabs();


	$(".invest__nav a").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top-55+"px"}, 1500);
    return false;
	});	


  settings_slider = {
    dots: false,
    arrows: true,
    adaptiveHeight: true,
    slidesToShow: 1
    // more settings
  }
  slick_on_mobile( $('.benefit__list'), settings_slider);
  slick_on_mobile( $('.guarantees__list'), settings_slider);

// slick on mobile
  function slick_on_mobile(slider, settings){
    $(window).on('load resize', function() {
      if ($(window).width() > 767) {
        if (slider.hasClass('slick-initialized')) {
          slider.slick('unslick');
        }
        return
      }
      if (!slider.hasClass('slick-initialized')) {
        return slider.slick(settings);
      }
    });
  };


  $('.examples__show-mobile').click(function(event) {
  	$('.examples__item').slideDown(300);
  });

  new WOW().init();

  $('form .btn').click(function(event) {
		event.preventDefault();
		var form = $(this).parents('form');
				inputsRequired = form.find('.input'),
				inputsRequiredLength = inputsRequired.length,
				counter = 0;

		inputsRequired.each(function(index, el) {
			if ($(this).find('input').val().length == 18) {
				$(this).removeClass('input_error');
				counter++;
			
				
			} else {
				$(this).addClass('input_error');
				
			}
		});

		if (counter == inputsRequiredLength) {
			$.ajax({
		    type: "POST",
		    url: "order.php",
		    data: form.serialize()
				}).done(function() {
			    $.fancybox.close();
					$.fancybox.open({src  : '#popup-thanks',type : 'inline'});
			});

		}
	});


  var range1 = document.getElementById('range-1');
	noUiSlider.create(range1, {

	    range: {
	        'min': 100000,
	        'max': 10000000
	    },

	    step: 100000,

	    // Handles start at ...
	    start: [100000, 3000000],

	    connect: true,

	    pips: {
	        mode: 'values',
	        values: [100000, 5000000, 10000000],
	        density: 12
	    }
	});

	range1.noUiSlider.on('update', function (values, handle) {
	  var caseVal = Number($('#range-1 .noUi-base').width()) / 100,
	  		currentVal = Number(range1.noUiSlider.get()[1])
	  		percentCurrentVal = (currentVal / 100000) * caseVal;
	  // console.log(caseVal);
	  $('#range-1 .noUi-marker').each(function(index, el) {
	  	var left = (Number($(this).css('left').replace('px', '').replace('%', '')));
	  	if(percentCurrentVal >= left){
	  		$(this).addClass('noUi-marker-current');
	  	} else{
	  		$(this).removeClass('noUi-marker-current');
	  	}
	  });
	  $('.calc__item').each(function(index, el) {
	  	var coefficient = Number($(this).attr('data-coefficient')),
	  			percent = Number($(this).attr('data-percent')) / 100;
	  			sum = (currentVal * coefficient * percent).toFixed(0);
	  	sumHtml = $(this).find('.calc__sum span').text(sum);
	  });
	});


	var range2 = document.getElementById('range-2');
		noUiSlider.create(range2, {

		    range: {
		        'min': 100000,
		        'max': 10000000
		    },

		    step: 100000,

		    // Handles start at ...
		    start: [100000, 3000000],

		    connect: true,

		    pips: {
		        mode: 'values',
		        values: [100000, 5000000, 10000000],
		        density: 12
		    }
		});
		range2.noUiSlider.on('update', function (values, handle) {
	  var caseVal = Number($('#range-2 .noUi-base').width()) / 100,
	  		currentVal = Number(range2.noUiSlider.get()[1])
	  		percentCurrentVal = (currentVal / 100000) * caseVal;
	  // console.log(caseVal);
	  $('#range-2 .noUi-marker').each(function(index, el) {
	  	var left = (Number($(this).css('left').replace('px', '').replace('%', '')));
	  	if(percentCurrentVal >= left){
	  		$(this).addClass('noUi-marker-current');
	  	} else{
	  		$(this).removeClass('noUi-marker-current');
	  	}
	  });
	  $('.calc__item').each(function(index, el) {
	  	var coefficient = Number($(this).attr('data-coefficient')),
	  			percent = Number($(this).attr('data-percent')) / 100;
	  			sum = (currentVal * coefficient * percent).toFixed(0);
	  	sumHtml = $(this).find('.calc__sum span').text(sum);
	  });
	});

});
