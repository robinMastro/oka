"use strict";

var UI=
{ 
	construct: function(callback){
		var output = '';
		output+='<ul>'
		for (var i = 0; i <= model.baradress.length-1; i++) {
			output += '<li><a class="btnderoul panel" id="'+i+'_btn" href="">'+ model.baradress[i].nom +'<span class="aligntext">Distance : '+ Math.round((model.baradress[i].distbar)*1000) +' mètres</span></a><div class="slidernbslide_'+i+' slider"><p>'+model.baradress[i].textebar+'</p></div></li>';
		}
		output+='</ul>'
		document.querySelector(".tritab").innerHTML = output;
		callback.call(this);
	},
	constructOff: function(callback){
		var output = '';
		output+='<ul>'
		for (var i = 0; i <= model.baradress.length-1; i++) {
			output += '<li><a class="btnderoul panel" id="'+i+'_btn" href="">'+ model.baradress[i].nom +'</a><div class="slidernbslide_'+i+' slider"><p>'+model.baradress[i].textebar+'</p></div></li>';
		}
		output+='</ul>'
		document.querySelector(".tritab").innerHTML = output;
		callback.call(this);
	},
	fermslide: function(callback){
			document.querySelector(".tritab").classList.add("opening");
		callback.call(this);
	},
	openslide: function(){
			document.querySelector(".tritab").classList.remove("opening");
	},
	constructProcess: function (callback){
		var btn = document.getElementsByClassName("btnderoul");
		// var btn = document.getElementById("btnderoul");
		for (var j = btn.length - 1; j >= 0; j--) {
			btn[j].addEventListener('click', clickSlide, false);
		};
		callback.call(this)
	}
}