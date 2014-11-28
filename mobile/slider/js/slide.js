"use strict";
self=this;
self.opentemp;
function clickSlide(e) {
	e.preventDefault();
	var valueopen = parseFloat(e.toElement.id);
	model.slideBox(valueopen, function(){
		// Ouvre le doc
	});
}