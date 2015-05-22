var main = function() {
	$('#orb').click(function() {
		var orb = $("#orb");
		var sky = $('#sky');
		var moonspot1 = $('#moonspot1');
		var moonspot2 = $('#moonspot2');
		var moonspot3 = $('#moonspot3');				
		if (orb.hasClass("sun")) {
			orb.removeClass("sun").addClass("moon");
			sky.removeClass("day").addClass("night");
			moonspot1.addClass("visible");
			moonspot2.addClass("visible");
			moonspot3.addClass("visible");
		} else {
			orb.removeClass("moon").addClass("sun");
			sky.removeClass("night").addClass("day");
			moonspot1.removeClass();
			moonspot2.removeClass();
			moonspot3.removeClass();					}
	});
};

$(document).ready(main);