$(window).scroll(function () {
	var s = $(window).scrollTop();	
	if(s>=1){
		$("header").addClass("header2");
	} else {
		$("header").removeClass("header2");
	}
});