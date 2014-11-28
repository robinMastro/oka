"use strict";

var mouseX = 0;
var mouseclick = false;

var pages = ["logo","data","map","infos","eco"];
var pagesCoo = [0, -20, -40, -60, -80];
var oldPage = 0;
var currentPage = 0;
var value = pagesCoo[0];


/////////////////////////////DETECTER MOBILE/////////////////////////////////////

window.detectmob = function() {
  var check = false;
  (function(a,b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  if(check == false){}
  else{
  	window.location = "http://oka.robinmastromarino.com/mobile/"
  }
  return check;
}
//////////////////////////////LOADER/////////////////////////////////////

function loader(){
	roue.style.opacity ="0";
	setTimeout(function(){	
		var roue = document.getElementById('roue');
		roue.style.display = "none";
	},2000);
}

///////////////////////////////////////////CHANGER PAGE///////////////////////////////////// 

function toPage(index){

	if(index < 0) index = 0;
	if(index > 4) index = 4;

	oldPage = currentPage;
	currentPage = index;
	var wrap = document.getElementById("ligne1");
	var transform = 'translateX('+pagesCoo[currentPage]+'%)';
	wrap.style.MozTransform = transform;
	wrap.style.WebkitTransform = transform;
	wrap.style.OTransform = transform;
	wrap.style.msTransform = transform;
	wrap.style.transform = transform;
	moveMenu();
}

///////////////////////////////////////////BARRE MENU///////////////////////////////////// 

function moveMenu(){
	if(currentPage < oldPage){
		var newPos = document.getElementById(pages[currentPage]).offsetLeft;
		var newWidth;
		if(currentPage == 0){
			newWidth = 0;
		}
		else{
			newWidth = document.getElementById(pages[currentPage]).offsetWidth;
		}
		var lineWidth = ((document.getElementById(pages[oldPage]).offsetLeft + document.getElementById(pages[oldPage]).offsetWidth) - newPos);

		var border = document.getElementById('border-header');
		border.style.width = lineWidth+'px';
		var transform = 'translateX('+newPos+'px)';
		border.style.MozTransform = transform;
		border.style.WebkitTransform = transform;
		border.style.OTransform = transform;
		border.style.msTransform = transform;
		border.style.transform = transform;
		setTimeout(function(){
			border.style.width = newWidth+'px';
		},500);
	}
	else if(currentPage > oldPage){
		var newPos = document.getElementById(pages[currentPage]).offsetLeft;
		var newWidth = document.getElementById(pages[currentPage]).offsetWidth;
		var lineWidth = newPos - document.getElementById(pages[oldPage]).offsetLeft + newWidth;

		var border = document.getElementById('border-header');
		border.style.width = lineWidth+'px';
		setTimeout(function(){
			var transform = 'translateX('+newPos+'px)';
			border.style.MozTransform = transform;
			border.style.WebkitTransform = transform;
			border.style.OTransform = transform;
			border.style.msTransform = transform;
			border.style.transform = transform;

			border.style.width = newWidth+'px';
		},500);
	}
}


/////////////////////////////////////////////DRAG POUR DÉPLACER///////////////////////////////////////////
window.onmousemove = function(event){
	if(mouseclick && self.clicked1==false && self.clicked2==false && self.clicked3==false){
		value = pagesCoo[currentPage] - ((mouseX - event.screenX)*20/window.innerWidth);
		var wrap = document.getElementById("ligne1");
		var transform = 'translate('+value+'%,0)';
		wrap.style.MozTransform = transform;
		wrap.style.WebkitTransform = transform;
		wrap.style.OTransform = transform;
		wrap.style.msTransform = transform;
		wrap.style.transform = transform;
	}
}

window.onmousedown = function(event){
	mouseX = event.screenX;
	mouseclick = true;
	var wrap = document.getElementById("ligne1");
	wrap.style.transition="all 0";
	value = pagesCoo[currentPage];
}

window.onmouseup = function(event){
	var wrap = document.getElementById("ligne1");
	wrap.style.transition="all 0.5s ease-in-out";
	mouseclick = false;
	
	if(value - pagesCoo[currentPage] < -4){	
		toPage(currentPage+1);
	}
	else if(value - pagesCoo[currentPage] > 4){
		toPage(currentPage-1);
	}
	else{
		toPage(currentPage);
	}
	value = pagesCoo[currentPage];
}

////////////////////ANTI DRAG DES ELEMENTS DU SITE (PHOTOS TEXTES ETC)/////////////////////////////
function ffalse()
{
    return false;
}
function ftrue()
{
    return true;
}
document.onselectstart = new Function ("return false");
if(window.sidebar)
{
	document.onmousedown = ffalse;
    document.onclick = ftrue;
}

////////////////////////////////////////////////NAVIGATION CLAVIER//////////////////////////////////////
document.onkeydown = function(evt) {
    evt = evt || window.event;
    switch (evt.keyCode) {
        case 37:
          	toPage(currentPage-1);
        break;
        case 39:
        	toPage(currentPage+1);
        break;
    }
};


//////////////////////////////LIGHTBOX//////////////////////////////////////
var hoverAffiche = false;

function lightbox(event, pays){
	boolen = true;
	var affiche = document.getElementById('affiche');
	var pop = document.getElementById('pop');
	document.body.appendChild(pop);
	var infos;
	var croix = document.getElementById('croix');

	pop.style.display="block";
	affiche.style.display="block";

	if(pays == "bresil")
		infos = ["Bresil", 6.02 , "30 141 034" , "27 471 038" , "2 669 996" , "8 514 879" , "292 700" , "244 185" ];

	if(pays == "indonesie")
		infos = ["Indonésie", 0.83 , "3 484 940" , "37 609" , "3 447 331" , "1 904 569" , "220 528" , "208 701" ];

	if(pays == "colombie")
		infos = ["Colombie", 1.81 , "7 121 335" , "Non renseigné", "Non renseigné", "1 138 910" , "61 768" , "64 112" ];

	if(pays == "ethiopie")
		infos = ["Ethiopie", 2.40 , "2 675 381" , "Non renseigné", "Non renseigné", "1 104 300" , "5 298" , "12 295" ];

	if(pays == "peru")
		infos = ["Peru", 0.51 , "4 697 070" , "Non renseigné", "Non renseigné", "1 285 216" , "50 848" , "44 687" ];

	if(pays == "inde")
		infos = ["Inde", 0.09 , "4 152 533" , "912 116" ,  "3 240 417"  , "3 287 263" , "441 138" , "586 356"];

	if(pays == "guatemala")
		infos = ["Guatemala", 1.38 , "3 693 062" , "3 669 331" , "23 730" , "108 889" , "12 644" , "19 098" ];

	if(pays == "kenya")
		infos = ["Kenya", 0.07 , "616 782" , "Non renseigné", "Non renseigné", "580 367" , "8 590" , "17 192" ];

	if(pays == "nigeria")
		infos = ["Nigéria", 0.01 , "6 548" , "Non renseigné", "Non renseigné", "923 768" , "119 000" , "77 464" ];

	if(pays == "coteIvoire")
		infos = ["Côte d'Ivoire" , 0.94 , "501 938" , "Non renseigné", "Non renseigné" , "322 463" , "12 018" , "9 298" ];

	if(pays == "costaRica")
		infos = ["Costa Rica", 3.43 , "1 236 996" , "Non renseigné", "Non renseigné", "51 100" , "15 384" , "18 017" ];

	if(pays == "mexico")
		infos = ["Mexico", 1.23 , "2 139 630" , "2 111 499" , "28 131" , "1 972 550" , "365 866" , "386 188" ];

	if(pays == "cameroun")
		infos = ["Cameroun", 0.21 , "476 528" , "41 172" , "435 356" , "475 442" , "5 705" , "8 217" ];

	if(pays == "tanzanie")
		infos = ["Tanzanie", 0.06 , "794 263" , "467 995" , "326 268" , "945 203" , "7 462" , "12 875"];

	if(pays == "madagascar")
		infos = ["Madagascar", 1.31 , "136 795" , "Non renseigné", "Non renseigné", "587 041" , "2 583" , "3 863" ];

	if(pays == "venezuela")
		infos = ["Venezuela", 3.38 , "480" , "Non renseigné", "Non renseigné", "912 050" , "94 342" , "59 468" ];

	if(pays == "russie")
		infos = ["Russie", 1.56 , "1 636 762" , "280 713" , "2 116 406" , "17 075 400" , "575 344" , "411 696" ];

	if(pays == "france")
		infos = ["France", 5.47 , "4 214 583" , "2 021 026" , "7 561 29" , "551 500" , "762 680" , "857 334" ];

	if(pays == "etatsUnis")
		infos = ["États Unis", 4.24 , "23 021 498" , "1 482 701" , "1 589 195" , "9 156 119" , "2 061 296" , "2 661 162" ];

	if(pays == "australie")
		infos = ["Australie", 3.73 , "1 106 213" , "90 709" , "367 108" , "7 617 930" , "321 321" , "303 216" ];

	if(pays == "japon")
		infos = ["Japon", 3.29 , "6 947 681" , "125 049" , "471 126" , "377 829" , "965 046" , "1 020 809" ];

	if(pays == "chine")
		infos = ["Chine", 0.01 , "666 497" , "57 185" , "84 997" , "9 706 961" , "2 080 814" , "1 980 015" ];

	var h3 = affiche.getElementsByTagName('h3')[0];
	var conso = document.getElementById('conso');
	var cafeVert = document.getElementById('cafeVert');
	var cafeArabica = document.getElementById('cafeArabica');
	var cafeRobusta = document.getElementById('cafeRobusta');
	var superficie = document.getElementById('superficie');
	var exportCafe = document.getElementById('exportCafe');
	var importCafe = document.getElementById('importCafe');
	var remplace1 = document.getElementById('remplace1');
	var remplace2 = document.getElementById('remplace2');
	var remplace3 = document.getElementById('remplace3');


	if(pays == "chine" || pays == "japon" || pays== "france" || pays == "australie" || pays == "etatsUnis" || pays =="russie"){
			remplace1.textContent = "Import café vert"  ;
			remplace2.textContent = "Import café torréfié" ;
			remplace3.textContent = "Import café soluble" ;
	}
	else{
			remplace1.textContent = "Export café vert" ;
			remplace2.textContent = "Export Arabica" ;
			remplace3.textContent = "Export Robusta" ;	
	}

	if(pays == "colombie" || pays == "ethiopie" || pays== "peru" || pays == "kenya" || pays == "nigeria" || pays == "coteIvoire" || pays == "costaRica" || pays == "madagascar" || pays == "venezuela"){
		h3.textContent = infos[0];
		conso.innerHTML = infos[1]+" <span>kg</span>";
		cafeVert.innerHTML = infos[2]+" <span>60kg/sac</span>";
		cafeArabica.textContent = infos[3];
		cafeRobusta.textContent = infos[4];
		superficie.innerHTML = infos[5]+" <span>km2</span>";
		exportCafe.innerHTML = infos[6]+" <span>$</span>";
		importCafe.innerHTML = infos[7]+" <span>$</span>";	
	}
	else{
		h3.textContent = infos[0];
		conso.innerHTML = infos[1]+" <span>kg</span>";
		cafeVert.innerHTML = infos[2]+" <span>60kg/sac</span>";
		cafeArabica.innerHTML = infos[3]+" <span>60kg/sac</span>";
		cafeRobusta.innerHTML = infos[4]+" <span>60kg/sac</span>";
		superficie.innerHTML = infos[5]+" <span>km2</span>";
		exportCafe.innerHTML = infos[6]+" <span>$</span>";
		importCafe.innerHTML = infos[7]+" <span>$</span>";

	}

	
	setTimeout(function(){	
		pop.style.opacity = "1";
		affiche.style.transform = "scale(1,1)";
		affiche.style.msTransform = "scale(1,1)";
		affiche.style.WebkitTransform = "scale(1,1)";
	},100);

	var popHeight = pop.offsetHeight;
	var afficheHeight = affiche.offsetHeight;

	if(afficheHeight < popHeight){
		affiche.style.marginTop = (popHeight-afficheHeight)/2+"px";
	}

	croix.onclick = function(){
		pop.style.opacity = "0";
		affiche.style.transform = "scale(0,0)";
		affiche.style.msTransform = "scale(0,0)";
		affiche.style.WebkitTransform = "scale(0,0)";
		setTimeout(function(){
			affiche.style.display="none";
			pop.style.display="none";
		},600);
	}

	affiche.onmouseenter = function(){
		hoverAffiche = true;
	}

	affiche.onmouseleave = function(){
		hoverAffiche = false;
	}

	pop.onclick = function(){
		if (hoverAffiche == false) {
			pop.style.opacity = "0";
			affiche.style.transform = "scale(0,0)";
			affiche.style.msTransform = "scale(0,0)";
			affiche.style.WebkitTransform = "scale(0,0)";
			setTimeout(function(){
				affiche.style.display="none";
				pop.style.display="none";
			},600);
		}	
	}

}

////////////////////////////////////MONTER WRAPPER///////////////////////////
var boolen = true;
var allowAnimationMap = function(){
	if(boolen){
		animationMap();
	}
}
var animationMap = function(){

	var clickMe = document.getElementById('clickMe');
	var mapPresentation = document.getElementById('mapPresentation');
	var wordlMap = document.getElementById('wrapperMap');
	var wordlMap2 = document.getElementById('worldmap');

	if (boolen) {
		boolen = false;
		mapPresentation.style.cssText = "transform:translateY(-93%);-webkit-transform: translateY(-93%);-moz-transform: translateY(-93%);";
		wordlMap.style.cssText = "cursor:default;";
		wordlMap2.style.cssText = "cursor:default;";
		clickMe.style.cssText = "position:fixed;";
	}

	else{
		boolen = true;
		mapPresentation.style.cssText = "transform:translateY(0%);-webkit-transform: translateY(0%);-moz-transform: translateY(0%);";
		wordlMap.style.cssText = "cursor:pointer;";
		wordlMap2.style.cssText = "cursor:pointer;";
	}
}

///////////////////////ANECDOTES//////////////////
var Anecdote = function(event){
	var tabAnec = [
		"Le kopi luwak est un café récolté dans les excréments d'une civette asiatique.",
    	"Le café pousse dans les arbres !",
    	"Avant le café était filtré avec une chaussette, d’où l’expression « jus de chaussette »",
    	"La caféine a des effets bénéfiques dans la prévention de la maladie de Parkinson.",
    	"Un café n’est jamais totalement décaféiné",
    	"Chaque jour plus de 2,25 milliards de tasses de café sont consommées dans le monde",
    	"Le café est le produit le plus exporté après le pétrole  ",
    	"C’est un Belge appelé George Washington qui inventa le café instantané en 1906."
    ];

   	function melanger(){
	var random, temp;
	for( var i = 0; i<tabAnec.length; i++){
		random = Math.floor((Math.random() * tabAnec.length) + 0);
		temp = tabAnec[i];
		tabAnec[i] = tabAnec[random];
		tabAnec[random] = temp;
		}
	}
	melanger();

    var charger = document.getElementById('ChangeAnec')

    charger.style.color = "rgba(255,255,255,0)";

	setTimeout(function(){
		charger.innerHTML = tabAnec[0];
		charger.style.color = "rgba(255,255,255,1)";
	},300);		

}
