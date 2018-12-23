"use strict";
//mobile menu
var selectorButton = document.querySelector('#menu-button'); // button selector
var selectorMenu = document.querySelector('.mob__menu'); // menu selector
var body = document.body;
selectorButton.onclick = function() {
	selectorMenu.classList.toggle('mob__menu-active');
	selectorButton.classList.toggle('header__item-active');
	body.classList.toggle('disabled-scroll');
	scrollLock.toggle();
}

var selectorMenuItem = document.querySelectorAll('.mob__menu-item');
for(i = 0; i < selectorMenuItem.length; i++) {
	selectorMenuItem[i].onclick = function() {
		selectorMenu.classList.remove('mob__menu-active');
		selectorButton.classList.remove('header__item-active');
		body.classList.remove('disabled-scroll');
		scrollLock.show()
	}
}

var callback = document.querySelectorAll('.callback');
var popup = document.querySelector('.popup')
var popupBg = document.querySelector('.popup-bg')
var popupClose = document.querySelector('.popup__container-close')


for (i = 0; i < callback.length; i++) {
	callback[i].onclick = function() {
		popup.classList.toggle('popup-opened');
		popupBg.classList.toggle('popup-bg-opened');
		body.style.overflow = "hidden";
		scrollLock.hide()
	}
}

popupBg.onclick = function() {
	popup.classList.toggle('popup-opened');
	popupBg.classList.toggle('popup-bg-opened');
	body.style.overflow = "auto";
	scrollLock.show()
}

popupClose.onclick = function() {
	popup.classList.toggle('popup-opened');
	popupBg.classList.toggle('popup-bg-opened');
	body.style.overflow = "auto";
	scrollLock.show()
}

//send mail
var sendPopup = function sendMail(selector) {
	return fetch('popup.php', {
		method: 'POST',
		body: new FormData(document.querySelector(selector))
	}).catch(function (error) {
		alertify.error("Ошибка. Повторите отправку позже");
	});
};

// form for sendPopup method with yandex counter
var sendMessage = function() {
	document.querySelector(".popup__container-form-button"); // button selector
	document.querySelector(".popup__container-form").onsubmit = function(n) { //menu selector
		n.preventDefault(), sendPopup(".popup__container-form").then(function(e) { //menu selector
			return alertify.success('Ваша заявка отправленна, Мы свяжемся с вами в ближайшее время!')/*, yaCounter********.reachGoal('****', function () {})*/.then(form.reset());
		})
	};
}
sendMessage();

//send contacts
var sendMail = function sendMail(selector) {
	return fetch('mail.php', {
		method: 'POST',
		body: new FormData(document.querySelector(selector))
	}).catch(function (error) {
		alertify.error("Ошибка. Повторите отправку позже");
	});
};

// form for sendMail method with yandex counter
var sendContacts = function() {
	if (document.querySelector(".contactsform__container-form-button") != null) {
		document.querySelector(".contactsform__container-form-button"); // button selector
		document.querySelector(".contactsform__container-form").onsubmit = function(n) { //menu selector
			n.preventDefault(), sendMail(".contactsform__container-form").then(function(e) { //menu selector
				return alertify.success('Ваша заявка отправленна, Мы свяжемся с вами в ближайшее время!')/*, yaCounter********.reachGoal('****', function () {})*/.then(form.reset());
			})
		};
	}
}
sendContacts();

//smoothscroll
new SmoothScroll('a[href*="#"]', {
    speed: 1500,
    after: function() {
        document.querySelector("body").style.overflow = "", document.querySelector("body").style.paddingRight = "0px"
    }
});


// mask for "tel" input
var input = document.querySelectorAll('input[type="tel"]')
var mask = new Inputmask("+7 (999) 999-99-99");
for (var i = 0; i < input.length; i++){
var input = document.querySelectorAll('input[type="tel"]')
	mask.mask(input[i]);
}

//close by "esc" button
window.onkeydown = function( event ) {
	if ( event.keyCode == 27 ) {
		selectorMenu.classList.remove('mob__menu-active');
		selectorButton.classList.remove('header__item-active');
		body.classList.remove('disabled-scroll');
		popup.classList.toggle('popup-opened');
		popupBg.classList.toggle('popup-bg-opened');
		body.style.overflow = "auto";
		scrollLock.show()
	}
};

var mySwiper = new Swiper('.swiper-container-whatwedo', {
	slidesPerView: 3,
	slidesPerColumn: 3,
	spaceBetween: 40,
	allowTouchMove: false,
	grabCursor: false,
	breakpoints: {
	  768: {
		slidesPerView: 1,
		spaceBetween: 20,
		slidesPerColumn: 1,
		allowTouchMove: true,
		grabCursor: true,
	  },
	  1220: {
		slidesPerView: 2,
		spaceBetween: 20,
		slidesPerColumn: 2,
		allowTouchMove: true,
		grabCursor: true,
	  }
	},
	pagination: {
	el: '.swiper-container-whatwedo .swiper-pagination',
	clickable: true,
	},
});

var swiper = new Swiper('.swiper-container-clients', {
	slidesPerView: 3,
	slidesPerColumn: 2,
	spaceBetween: 30,
	nested: true,
	allowTouchMove: false,
	grabCursor: false,
	breakpoints: {
		600: {
			slidesPerView: 1,
			slidesPerColumn: 1,
			allowTouchMove: true,
			grabCursor: true,
		},
		850: {
			slidesPerView: 2,
			slidesPerColumn: 2,
			allowTouchMove: true,
			grabCursor: true,
		},
		1260: {
			slidesPerView: 3,
			spaceBetween: 20,
			slidesPerColumn: 2,
			allowTouchMove: true,
			grabCursor: true,
		}
	},
	pagination: {
		el: '.swiper-container-clients .swiper-pagination',
		clickable: true,
	},
});

var linered = document.querySelector('.whoweare__progress-linered');
if (linered != null) {
$(document).scroll(function(){
	checkPosition();
	checkPosition2();
	checkPosition3();
});
checkPosition();
checkPosition2();
checkPosition3();
$(window).resize(function(){
	checkPosition();
	checkPosition2();
	checkPosition3();
});
}

function checkPosition(){
	var linered = $('.whoweare__progress-linered');
	var image1 = $('#image1');
	var dotcenter1 = $('#dotcenter1');
	var arrowleft1 = $('#arrowleft-red1');
	var arrowright1 = $('#arrowright-red1');
	var div_position = $('#dot1').offset();
	var div_top = div_position.top;
	var div_left = div_position.left;
	var div_width = $('#dot1').width();
	var div_height = $('#dot1').height();
	var top_scroll = $(document).scrollTop();
	var left_scroll = $(document).scrollLeft();
	var screen_width = $(window).width();
	var screen_height = $(window).height();
	var see_x1 = left_scroll;
	var see_x2 = screen_width + left_scroll;
	var see_y1 = top_scroll;
	var see_y2 = screen_height + top_scroll;
	var div_x1 = div_left;
	var div_x2 = div_left + div_height;
	var div_y1 = div_top;
	var div_y2 = div_top + div_width;
	if( div_x1 >= see_x1 && div_x2 <= see_x2 && div_y1 >= see_y1 && div_y2 <= see_y2 ){
		linered.css('height', '17%')
		image1.css('filter','grayscale(0%)');
		arrowleft1.css('width', '35px')
		arrowright1.css('width', '35px')
		arrowleft1.css('transform', 'translateX(25px)')
		arrowright1.css('transform', 'translateX(-25px)')
		dotcenter1.css('opacity', '1')
	}
}

function checkPosition2(){
	var linered = $('.whoweare__progress-linered');
	var image2 = $('#image2');
	var dotcenter2 = $('#dotcenter2');
	var arrowleft2 = $('#arrowleft-red2');
	var arrowright2 = $('#arrowright-red2');
	var div_position = $('#dot2').offset();
	var div_top = div_position.top;
	var div_left = div_position.left;
	var div_width = $('#dot2').width();
	var div_height = $('#dot2').height();
	var top_scroll = $(document).scrollTop();
	var left_scroll = $(document).scrollLeft();
	var screen_width = $(window).width();
	var screen_height = $(window).height();
	var see_x1 = left_scroll;
	var see_x2 = screen_width + left_scroll;
	var see_y1 = top_scroll;
	var see_y2 = screen_height + top_scroll;
	var div_x1 = div_left;
	var div_x2 = div_left + div_height;
	var div_y1 = div_top;
	var div_y2 = div_top + div_width;
	if( div_x1 >= see_x1 && div_x2 <= see_x2 && div_y1 >= see_y1 && div_y2 <= see_y2 ){
		linered.css('height', '60%')
		image2.css('filter','grayscale(0%)');
		arrowleft2.css('width', '35px')
		arrowright2.css('width', '35px')
		arrowleft2.css('transform', 'translateX(25px)')
		arrowright2.css('transform', 'translateX(-25px)')
		dotcenter2.css('opacity', '1')
	}
}

function checkPosition3(){
	var line = $('.whoweare__progress-line');
	var linered = $('.whoweare__progress-linered');
	var image3 = $('#image3');
	var dotcenter3 = $('#dotcenter3');
	var arrowleft3 = $('#arrowleft-red3');
	var arrowright3 = $('#arrowright-red3');
	var div_position = $('#dot3').offset();
	var div_top = div_position.top;
	var div_left = div_position.left;
	var div_width = $('#dot3').width();
	var div_height = $('#dot3').height();
	var top_scroll = $(document).scrollTop();
	var left_scroll = $(document).scrollLeft();
	var screen_width = $(window).width();
	var screen_height = $(window).height();
	var see_x1 = left_scroll;
	var see_x2 = screen_width + left_scroll;
	var see_y1 = top_scroll;
	var see_y2 = screen_height + top_scroll;
	var div_x1 = div_left;
	var div_x2 = div_left + div_height;
	var div_y1 = div_top;
	var div_y2 = div_top + div_width;
	if( div_x1 >= see_x1 && div_x2 <= see_x2 && div_y1 >= see_y1 && div_y2 <= see_y2 ){
		line.css('background-color', '#cd0000');
		linered.css('height', '100%')
		image3.css('filter','grayscale(0%)');
		arrowleft3.css('width', '35px')
		arrowright3.css('width', '35px')
		arrowleft3.css('transform', 'translateX(25px)')
		arrowright3.css('transform', 'translateX(-25px)')
		dotcenter3.css('opacity', '1')
	}
}

$( ".whatwedo__block" )
.mouseenter(function() {
$( ".whatwedo__block" ).not(this).css('opacity','.25');
$( ".whatwedo__block" ).not(this).css('filter','grayscale(100%)');
})
.mouseleave(function() {
$( ".whatwedo__block" ).not(this).css('opacity', '1');
$( ".whatwedo__block" ).not(this).css('filter','grayscale(0%)');
});

$( ".clients__slider-item" )
.mouseenter(function() {
$( ".clients__slider-item" ).not(this).css('opacity','.25');
$( ".clients__slider-item" ).not(this).css('filter','grayscale(100%)');
})
.mouseleave(function() {
$( ".clients__slider-item" ).not(this).css('opacity', '1');
$( ".clients__slider-item" ).not(this).css('filter','grayscale(0%)');
});

$( ".selectedwork__slider-slide" )
.mouseenter(function() {
$( ".selectedwork__slider-slide" ).not(this).css('opacity','.25');
$( ".selectedwork__slider-slide" ).not(this).css('filter','grayscale(100%)');
})
.mouseleave(function() {
$( ".selectedwork__slider-slide" ).not(this).css('opacity', '1');
$( ".selectedwork__slider-slide" ).not(this).css('filter','grayscale(0%)');
});

$( ".ournews__blocks-block" )
.mouseenter(function() {
$( ".ournews__blocks-block" ).not(this).css('opacity','.25');
$( ".ournews__blocks-block" ).not(this).css('filter','grayscale(100%)');
})
.mouseleave(function() {
$( ".ournews__blocks-block" ).not(this).css('opacity', '1');
$( ".ournews__blocks-block" ).not(this).css('filter','grayscale(0%)');
});


$( ".newsdetail__grid-item" )
.mouseenter(function() {
$( ".newsdetail__grid-item" ).not(this).css('opacity','.25');
$( ".newsdetail__grid-item" ).not(this).css('filter','grayscale(100%)');
})
.mouseleave(function() {
$( ".newsdetail__grid-item" ).not(this).css('opacity', '1');
$( ".newsdetail__grid-item" ).not(this).css('filter','grayscale(0%)');
});

var wow = new WOW(
	{
	  boxClass:     'wow',      // animated element css class (default is wow)
	  animateClass: 'animated', // animation css class (default is animated)
	  offset:       0,          // distance to the element when triggering the animation (default is 0)
	  mobile:       true,       // trigger animations on mobile devices (default is true)
	  live:         true,       // act on asynchronously loaded content (default is true)
	  callback:     function(box) {
		// the callback is fired every time an animation is started
		// the argument that is passed in is the DOM node being animated
	  },
	  scrollContainer: null,    // optional scroll container selector, otherwise use window,
	  resetAnimation: true,     // reset animation on end (default is true)
	}
);
wow.init();

var swiper3 = new Swiper('.swiper-container-selectedwork', {
	slidesPerView: 2,
	spaceBetween: 40,
	allowTouchMove: true,
	grabCursor: true,
	breakpoints: {
		768: {
			slidesPerView: 1,
		},
		1260: {
			slidesPerView: 2,
			spaceBetween: 20,
		}
	},
	pagination: {
		el: '.selectedwork__slider .swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.g-wrapper .swiper-button-next',
		prevEl: '.g-wrapper .swiper-button-prev',
	},
})

$('.ourteam__slider').slick({
	centerMode: true,
	centerPadding: '0px',
	slidesToShow: 5,
	focusOnSelect: true,
	dots: true,
	infinite: true,
	initialSlide: 2,
	responsive: [
	{
		breakpoint: 1260,
		settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '0px',
			slidesToShow: 3
		}
	},
	{
		breakpoint: 767,
		settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '0px',
			slidesToShow: 1
		}
	}
	]
});

var swiper5 = new Swiper('.swiper-container-wetakepridein', {
	slidesPerView: 4.5,
	spaceBetween: 20,
	nested: true,
	grabCursor: true,
	breakpoints: {
		600: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		1260: {
			slidesPerView: 3,
		}
	},
	pagination: {
		el: '.wetakepridein__slider .swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.g-wrapper .swiper-button-next',
		prevEl: '.g-wrapper .swiper-button-prev',
	},
})

//pretty fixed nav
const fixedNavigationMenu = function() {
	var e = document.querySelector(".header"); //menu selector
	var t = document.querySelectorAll(".header__item-link");
	window.onscroll = function() {
		for(var i = 0; i < t.length; i++) {
			window.pageYOffset > 0 ? (t[i].style.lineHeight = "58px") : (t[i].style.lineHeight = "");
		}
		window.pageYOffset > 0 ? (e.style.height = "60px") : (e.style.height = "");
	}
}
fixedNavigationMenu();

const stopVideo = function() {
	var homeBlock = document.querySelectorAll('.home__block');
	var homeShowrel = document.querySelector('.home-showrel');
	var stopButton = document.querySelector('.home__block-buttonstop');
	if (stopButton)
	stopButton.onclick = function() {
		if (document.querySelector('.elem').paused) {
			for (i = 0; i < homeBlock.length; i++) {
				$('.home__block').animate({
					opacity: 0,
				});
			}
			homeShowrel.style.backGroundColor = "transparent";
			document.querySelector('.elem').play();
		} else {
			document.querySelector('.elem').pause();
		}
	}
}
stopVideo();

var video = document.querySelector('.elem')
if (video != null) {
var myvid = $('.elem')[0];
$(window).scroll(function(){
	if($(window).width() > 767) {
	var scroll = $(this).scrollTop();
	scroll > 0 ? myvid.pause() : myvid.play()
	}
})}

$('.careers__blocks-title').next().hide();
$('.careers__blocks-title').click(function(){
	$(this).next().slideToggle({duration: 0});
	$(this).toggleClass('open');
	$('.careers__blocks-title').not(this).next().stop(true,true).slideUp({duration: 0});
	$('.careers__blocks-title').not(this).removeClass('open');
	$(this).parent().toggleClass('open');
	$('.careers__blocks-separator').not(this).removeClass('open');
	$('.careers__blocks-title').not(this).parent().removeClass('open');
});

$('.careers__blocks-title').click(function() {
	var timeoutID = window.setTimeout(slowAlert, 0);
})
function slowAlert() {
	var block = document.querySelectorAll('.careers__blocks.open');
	for (i = 0; i < block.length; i++) {
			var Height = '58';

		block[i].scrollIntoView(true);
		var scrolledY = window.scrollY;
		if(scrolledY){
			window.scroll(0, scrolledY - Height);
		}
	}
}
function clearAlert() {
	window.clearTimeout(timeoutID);
}

if($(window).width() < 767) {
$('.careers__blocks-block__contaiter-title').next().hide();
$('.careers__blocks-block__contaiter-title').click(function(){
	$(this).next().slideToggle("slow");
	$(this).toggleClass('open');
	$('.careers__blocks-block__contaiter-title').not(this).next().stop(true,true).slideUp();
	$('.careers__blocks-block__contaiter-title').not(this).removeClass('open');
	$(this).parent().toggleClass('open');
	$('.careers__blocks-block__contaiter-title').not(this).parent().removeClass('open');
});
}

//Переменная для включения/отключения индикатора загрузки
var spinner = $('.ymap-container').children('.loader');
//Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
var check_if_load = false;
//Необходимые переменные для того, чтобы задать координаты на Яндекс.Карте
var myMapTemp, myPlacemarkTemp;

//Функция создания карты сайта и затем вставки ее в блок с идентификатором &#34;map-yandex&#34;
function init () {
  var myMapTemp = new ymaps.Map("map-yandex", {
	center: [55.703980, 37.625758], // координаты центра на карте
	zoom: 15, // коэффициент приближения карты
	controls: ['zoomControl', 'fullscreenControl'] // выбираем только те функции, которые необходимы при использовании
  });
  var myPlacemarkTemp = new ymaps.GeoObject({
	geometry: {
		type: "Point",
		coordinates: [55.703980, 37.625758] // координаты, где будет размещаться флажок на карте
	}
  });
  myMapTemp.geoObjects.add(myPlacemarkTemp); // помещаем флажок на карту

  // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
  var layer = myMapTemp.layers.get(0).get(0);

  // Решение по callback-у для определения полной загрузки карты
  waitForTilesLoad(layer).then(function() {
	// Скрываем индикатор загрузки после полной загрузки карты
	spinner.removeClass('is-active');
  });
}

// Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов)
function waitForTilesLoad(layer) {
  return new ymaps.vow.Promise(function (resolve, reject) {
	var tc = getTileContainer(layer), readyAll = true;
	tc.tiles.each(function (tile, number) {
	  if (!tile.isReady()) {
		readyAll = false;
	  }
	});
	if (readyAll) {
	  resolve();
	} else {
	  tc.events.once("ready", function() {
		resolve();
	  });
	}
  });
}

function getTileContainer(layer) {
  for (var k in layer) {
	if (layer.hasOwnProperty(k)) {
	  if (
		layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
		|| layer[k] instanceof ymaps.layer.tileContainer.DomContainer
	  ) {
		return layer[k];
	  }
	}
  }
  return null;
}

// Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
function loadScript(url, callback){
  var script = document.createElement("script");

  if (script.readyState){  // IE
	script.onreadystatechange = function(){
	  if (script.readyState == "loaded" ||
			  script.readyState == "complete"){
		script.onreadystatechange = null;
		callback();
	  }
	};
  } else {  // Другие браузеры
	script.onload = function(){
	  callback();
	};
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}

// Основная функция, которая проверяет когда мы навели на блок с классом &#34;ymap-container&#34;
var ymap = function() {
  $('.ymap-container').mouseenter(function(){
	  if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем

		  // Чтобы не было повторной загрузки карты, мы изменяем значение переменной
		check_if_load = true;

		// Показываем индикатор загрузки до тех пор, пока карта не загрузится
		spinner.addClass('is-active');

		// Загружаем API Яндекс.Карт
		loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function(){
		   // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
		   ymaps.load(init);
		});
	  }
	}
  );
}

$(function() {

  //Запускаем основную функцию
  ymap();

});
