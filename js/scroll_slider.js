
var blackCoeff = 1.25;	// ����������� ����������

var sectionList = null;
var blackList = null;
var counter;

function buildStyles() {
	var styles = 'body {' +
					'position: relative;' +
				 '}' +
				 
				 '.black {' +
					'position: absolute;' +
					'top: 0;' +
					'left: 0;' +
					'background: black;' +
					'opacity: 0;' +
					'display: none;' + 
				 '}' +
				 
				 'section {' +
					'position: relative;' +
				 '}' +
				 
				 'section.fixed {' +
					'position: fixed;' +
					'top: 0;' +
				 '}';

	$('head').append('<style id="sticky-stack-styles" type="text/css">' + styles + '</style>');
}

$(window).on('scroll', function() {
	var windowScrollPos = $(window).scrollTop();
	var tmpCounter = counter;
	
	counter = 0;
	
	for (var i = 0; i < sectionList.length; i++) {
		if (windowScrollPos >= sectionList.eq(i).offset().top) {
			counter++;
		}
	}
	
	blackList.css({ "opacity": 0, "display": "none", });
	
	if (counter > 1  && tmpCounter > 0) {
		var opacity = (windowScrollPos / sectionList.eq(counter < sectionList.length ? counter : counter - 1).offset().top - 1) * (-counter * blackCoeff);
		
		blackList.eq(counter - 2).css({ "opacity": opacity, "display": (opacity <= 0.16 ? "none" : "block"), });
	}
	
	if (windowScrollPos > sectionList.eq(sectionList.length - 2).offset().top + sectionList.eq(sectionList.length - 2).height()) {
		sectionList.removeClass("fixed");
		return;
	}
	
	if (counter != tmpCounter) {
		sectionList.removeClass("fixed");
		
		if (counter < 1 || (tmpCounter == 2 && counter == 1)) {
			return;
		}
		
		sectionList.eq(counter == 1 ? counter : counter - 1).addClass("fixed");
	}
});

$(document).ready(function () {
	$("footer").before('<section style="height: 100vh;"></section>');
	
	sectionList = $("section");
	
	for (var i = 0; i < sectionList.length; i++) {
		var zIndex = (sectionList.length - i) * 2;
		var width = sectionList.eq(i).width();
		var height = sectionList.eq(i).height();
		
		sectionList.eq(i).css("z-index", zIndex);
		
		if (i == 0) {
			continue;
		}
		
		sectionList.eq(i).prepend('<div class="black" style="width: ' + width + 'px; min-height: ' + height + 'px; z-index: ' + (zIndex + 1) + '"></div>');
	}
	
	blackList = $(".black");
	
	buildStyles();
});