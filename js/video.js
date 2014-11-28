'use strict';

var player={};

player.video=document.getElementById('video');
player.video2=document.getElementById('video2');
player.video3=document.getElementById('video3');

player.button=document.getElementById('button');
player.button2=document.getElementById('button2');
player.button3=document.getElementById('button3');


player.pB=document.getElementById('progressBar');
player.button.classList.add('loading');
player.video.load();
this.choiceVid=0;
var self=this;

player.setVideoTime = function(e) {
	e.stopPropagation();
	//console.log(e); 
	player.video.currentTime=e.offsetX*player.video.duration/this.offsetWidth;
}

player.playProgress = function() {
	var self=this;
	var progress=self.currentTime*100/self.duration;
}

player.playPause = function(e){
	if(e.type=='canplaythrough'){
		player.video.removeEventListener('canplaythrough',player.playPause,false);
	}
	player.button.classList.remove('loading');
	//var self=this;
		if(player.video.paused && self.choiceVid==1)
		{
		player.video.play();

		player.video2.pause();
		player.button2.classList.add('play');
		document.getElementById('postextVid2').classList.remove('postextHaute');
		player.video3.pause();
		player.button3.classList.add('play');
		document.getElementById('postextVid3').classList.remove('postextHaute');

		player.button.classList.remove('play');
		document.getElementById('postextVid').classList.add('postextHaute');
		}
		else if(player.video2.paused && self.choiceVid==2)
		{
		player.video2.play();

		player.video.pause();
		player.button.classList.add('play');
		document.getElementById('postextVid').classList.remove('postextHaute');
		player.video3.pause();
		player.button3.classList.add('play');
		document.getElementById('postextVid3').classList.remove('postextHaute');

		player.button2.classList.remove('play');
		document.getElementById('postextVid2').classList.add('postextHaute');
		}
		else if(player.video3.paused && self.choiceVid==3)
		{
		player.video3.play();

		player.video.pause();
		player.button.classList.add('play');
		document.getElementById('postextVid').classList.remove('postextHaute');
		player.video2.pause();
		player.button2.classList.add('play');
		document.getElementById('postextVid2').classList.remove('postextHaute');

		player.button3.classList.remove('play');
		document.getElementById('postextVid3').classList.add('postextHaute');
		}
		else{
		if(self.choiceVid==1)
		{
			console.log('test');
		player.video.pause();
		player.button.classList.add('play');
		document.getElementById('postextVid').classList.remove('postextHaute');
		}
		else if(self.choiceVid==2)
		{
		player.video2.pause();
		player.button2.classList.add('play');
		document.getElementById('postextVid2').classList.remove('postextHaute');
		}
		else if(self.choiceVid==3)
		{
			console.log('test');
		player.video3.pause();
		player.button3.classList.add('play');
		document.getElementById('postextVid3').classList.remove('postextHaute');
		}
	}
	
}

document.getElementById('videoJs1').addEventListener('click',function(){self.choiceVid=1;},false);
document.getElementById('videoJs1').addEventListener('click',player.playPause,false);

document.getElementById('videoJs2').addEventListener('click',function(){self.choiceVid=2;},false);
document.getElementById('videoJs2').addEventListener('click',player.playPause,false);

document.getElementById('videoJs3').addEventListener('click',function(){self.choiceVid=3;},false);
document.getElementById('videoJs3').addEventListener('click',player.playPause,false);

// console.log(player); 

//e = récupération de TOUTES les variables au moment ou l'event est récupéré