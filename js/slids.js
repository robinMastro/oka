"use strict";
this.test = document.getElementById("selectorCoffee");

this.btn1pos=50;
this.btn2pos=50;
this.btn3pos=50;
this.cacheSlider=((window.innerWidth*20)/100)+150;

document.getElementById("btn1").style.left= ((300*this.btn1pos)/100)+"px";
document.getElementById("btn2").style.left= ((300*this.btn2pos)/100)+"px";
document.getElementById("btn3").style.left= ((300*this.btn3pos)/100)+"px";


var self = this;

function init(){
	self.clicked1=false;
	self.clicked2=false;
	self.clicked3=false;
	self.cacheSlider=((window.innerWidth*20)/100)+150;
}

var choiceCaf=
{
	drag1 : function(e){
		e.preventDefault();
		document.getElementById("btn1").style.left=e.offsetX+"px";
		document.getElementById("sliderRange1").style.width=((e.offsetX)/3)+"%";
		self.btn1pos=parseInt(e.offsetX/3);
		self.clicked1=true;
	},
	drag2 : function(e){
		e.preventDefault();
		document.getElementById("btn2").style.left=e.offsetX+"px";
		document.getElementById("sliderRange2").style.width=((e.offsetX)/3)+"%";
		self.btn2pos=parseInt(e.offsetX/3);
		self.clicked2=true;
	},
	drag3 : function(e){
		e.preventDefault();
		document.getElementById("btn3").style.left=e.offsetX+"px";
		document.getElementById("sliderRange3").style.width=((e.offsetX)/3)+"%";
		self.btn3pos=parseInt(e.offsetX/3);
		self.clicked3=true;
	},
	move : function (e){

		e.preventDefault();

		if(self.clicked1==true)
		{
			document.getElementById("btn1").style.left=e.offsetX+"px";
			document.getElementById("sliderRange1").style.width=((e.offsetX)/3)+"%";
			self.btn1pos=parseInt(e.offsetX/3);
		}
		if(self.clicked2==true)
		{
			document.getElementById("btn2").style.left=e.offsetX+"px";
			document.getElementById("sliderRange2").style.width=((e.offsetX)/3)+"%";
			self.btn2pos=parseInt(e.offsetX/3);
		}
		if(self.clicked3==true)
		{
			document.getElementById("btn3").style.left=e.offsetX+"px";
			document.getElementById("sliderRange3").style.width=((e.offsetX)/3)+"%";
			self.btn3pos=parseInt(e.offsetX/3);
		}
		switch(true){
			case self.btn2pos>45 && self.btn2pos<=70 && self.btn3pos<=20:
				document.getElementById("coffeeName").innerHTML = "Le Cappuccino";
				document.getElementById("coffeeQuote2").innerHTML = "Cappuccino";
				document.getElementById("coffeeDescription").innerHTML = "Le cappuccino est un café expresso dans une grande tasse avec du lait préalablement chauffé à la vapeur jusqu'à le faire mousser. Il est parfois saupoudré d'un peu de chocolat amer.";
				document.getElementById("force").innerHTML = "29" + "<span>%</span>";
				document.getElementById("lait").innerHTML = "70" + "<span>%</span>";
				document.getElementById("sucre").innerHTML = "1" + "<span>%</span>";
				document.getElementById("calorie").innerHTML = "567,5" + "<span>kcl</span>";
				document.getElementById("prix").innerHTML = "0,50" + "<span>€</span>";
				document.getElementById("grainsTasse").innerHTML = "6" + "<span>grains par tasse</span>";

				break;
			case self.btn2pos>70 && self.btn3pos<=20:
				document.getElementById("coffeeName").innerHTML = "Le Latte Machiato";
				document.getElementById("coffeeQuote2").innerHTML = "Latte Machiato";
				document.getElementById("coffeeDescription").innerHTML = "Le latte macchiato est une boisson chaude réalisée à partir d'un expresso, de lait chaud et de mousse de lait. Il a été créé en Italie pour que les enfants puissent boire du café.";
				document.getElementById("force").innerHTML = "38" + "<span>%</span>";
				document.getElementById("lait").innerHTML = "37" + "<span>%</span>";
				document.getElementById("sucre").innerHTML = "25" + "<span>%</span>";
				document.getElementById("calorie").innerHTML = "1 159" + "<span>kcl</span>";
				document.getElementById("prix").innerHTML = "0,45" + "<span>€</span>";
				document.getElementById("grainsTasse").innerHTML = "6" + "<span>grains par tasse</span>";
				break;
			case self.btn1pos>20 && self.btn2pos<=45 && self.btn3pos<=20:
				document.getElementById("coffeeName").innerHTML = "L'Expresso Machiato crème brulé";
				document.getElementById("coffeeQuote2").innerHTML = "Expresso Machiato crème brulé";
				document.getElementById("coffeeDescription").innerHTML = "L'expresso macchiato, est un café expresso avec une petite couche de mousse de lait et du sirop saveur crème brulée.";
				document.getElementById("force").innerHTML = "32" + "<span>%</span>";
				document.getElementById("lait").innerHTML = "54" + "<span>%</span>";
				document.getElementById("sucre").innerHTML = "14" + "<span>%</span>";
				document.getElementById("calorie").innerHTML = "252,4" + "<span>kcl</span>";
				document.getElementById("prix").innerHTML = "0,70" + "<span>€</span>";
				document.getElementById("grainsTasse").innerHTML = "6" + "<span>grains par tasse</span>";
				break;
			case self.btn1pos<=20 && self.btn2pos<=45 && self.btn3pos<=20:
				document.getElementById("coffeeName").innerHTML = "Le Café Viennois Spéculoos";
				document.getElementById("coffeeQuote2").innerHTML = "Café Viennois Spéculoos";
				document.getElementById("coffeeDescription").innerHTML = "Le café viennois est une boisson chaude, composée d'un simple ou double expresso, généralement assez léger surmonté de lait battu avec de la crème fouettée, puis parsemé de speculoos en morceaux.";
				document.getElementById("force").innerHTML = "27" + "<span>%</span>";
				document.getElementById("lait").innerHTML = "62" + "<span>%</span>";
				document.getElementById("sucre").innerHTML = "11" + "<span>%</span>";
				document.getElementById("calorie").innerHTML = "2 174" + "<span>kcl</span>";
				document.getElementById("prix").innerHTML = "2,35" + "<span>€</span>";
				document.getElementById("grainsTasse").innerHTML = "20" + "<span>grains par tasse</span>";
				break;
			case self.btn1pos<=10 && self.btn2pos>45 && self.btn3pos>20:
				document.getElementById("coffeeName").innerHTML = "Le Café liégeois";
				document.getElementById("coffeeQuote2").innerHTML = "Café liégeois";
				document.getElementById("coffeeDescription").innerHTML = "Plus souvent associé à un dessert glacé, le café liégeois peut aussi devenir une boisson chaude surmonté d'une crème chantilly.";
				document.getElementById("force").innerHTML = "7" + "<span>%</span>";
				document.getElementById("lait").innerHTML = "64" + "<span>%</span>";
				document.getElementById("sucre").innerHTML = "29" + "<span>%</span>";
				document.getElementById("calorie").innerHTML = "948" + "<span>kcl</span>";
				document.getElementById("prix").innerHTML = "1,70" + "<span>€</span>";
				document.getElementById("grainsTasse").innerHTML = "3" + "<span>grains par tasse</span>";
				break;
			case self.btn1pos>20 && self.btn2pos>45 && self.btn2pos<=70 && self.btn3pos>20:
				document.getElementById("coffeeName").innerHTML = "Le White Moka";
				document.getElementById("coffeeQuote2").innerHTML = "White Moka";
				document.getElementById("coffeeDescription").innerHTML = "Le white Moka est un subtil mélange entre du café et du chocolat blanc. Cela fait de lui une boisson parfaitement équilibrée ; ni trop fort ni trop sucré.";
				document.getElementById("force").innerHTML = "32" + "<span>%</span>";
				document.getElementById("lait").innerHTML = "54" + "<span>%</span>";
				document.getElementById("sucre").innerHTML = "14" + "<span>%</span>";
				document.getElementById("calorie").innerHTML = "1 674" + "<span>kcl</span>";
				document.getElementById("prix").innerHTML = "2,40" + "<span>€</span>";
				document.getElementById("grainsTasse").innerHTML = "20" + "<span>grains par tasse</span>";
				break;
			case self.btn1pos>10 && self.btn1pos<=30 && self.btn2pos>70 && self.btn3pos>20:
				document.getElementById("coffeeName").innerHTML = "Le Café Crème noisette";
				document.getElementById("coffeeQuote2").innerHTML = "Café Crème noisette";
				document.getElementById("coffeeDescription").innerHTML = "Le café crème noisette est un café melangé avec de la mouse de lait et une pointe de sirop de noisette qui lui donne son gout si particulier.";
				document.getElementById("force").innerHTML = "22" + "<span>%</span>";
				document.getElementById("lait").innerHTML = "68" + "<span>%</span>";
				document.getElementById("sucre").innerHTML = "10" + "<span>%</span>";
				document.getElementById("calorie").innerHTML = "2 818" + "<span>kcl</span>";
				document.getElementById("prix").innerHTML = "2,45" + "<span>€</span>";
				document.getElementById("grainsTasse").innerHTML = "20" + "<span>grains par tasse</span>";
				break;
			case self.btn1pos<=40 && self.btn2pos<=45 && self.btn3pos>20:
				document.getElementById("coffeeName").innerHTML = "Le Latte Caramel";
				document.getElementById("coffeeQuote2").innerHTML = "Latte Caramel";
				document.getElementById("coffeeDescription").innerHTML = "Le latte Caramel est une boisson chaude réalisée à partir d'un expresso de mousse de lait. Afin de lui rajouté une saveur sucrée du sirop de caramel est incorporé à la boisson.";
				document.getElementById("force").innerHTML = "30" + "<span>%</span>";
				document.getElementById("lait").innerHTML = "40" + "<span>%</span>";
				document.getElementById("sucre").innerHTML = "30" + "<span>%</span>";
				document.getElementById("calorie").innerHTML = "687" + "<span>kcl</span>";
				document.getElementById("prix").innerHTML = "1,75" + "<span>€</span>";
				document.getElementById("grainsTasse").innerHTML = "12" + "<span>grains par tasse</span>";
				break;
			case self.btn1pos>40 && self.btn2pos<=45 && self.btn3pos>20:
				document.getElementById("coffeeName").innerHTML = "Le Café Moka";
				document.getElementById("coffeeQuote2").innerHTML = "Café Moka";
				document.getElementById("coffeeDescription").innerHTML = "Le café moka est café expresso melangé avec de la mousse de lait puis agrémenté de chocolat. Bien que semblable au Cappuccino les deux ont un gout bien différent.";
				document.getElementById("force").innerHTML = "43" + "<span>%</span>";
				document.getElementById("lait").innerHTML = "41" + "<span>%</span>";
				document.getElementById("sucre").innerHTML = "16" + "<span>%</span>";
				document.getElementById("calorie").innerHTML = "244,6" + "<span>kcl</span>";
				document.getElementById("prix").innerHTML = "0,60" + "<span>€</span>";
				document.getElementById("grainsTasse").innerHTML = "6" + "<span>grains par tasse</span>";
				break;
			case self.btn1pos>10 && self.btn1pos<=20 && self.btn2pos>45 && self.btn2pos<=70 && self.btn3pos>20:
				document.getElementById("coffeeName").innerHTML = "l'Orange coffee";
				document.getElementById("coffeeQuote2").innerHTML = "Orange coffee";
				document.getElementById("coffeeDescription").innerHTML = "L'orange cofee est une boisson froide ou chaude (au choix!) qui mêle le gout du café et de l'orange.";
				document.getElementById("force").innerHTML = "20" + "<span>%</span>";
				document.getElementById("lait").innerHTML = "65" + "<span>%</span>";
				document.getElementById("sucre").innerHTML = "15" + "<span>%</span>";
				document.getElementById("calorie").innerHTML = "1 140" + "<span>kcl</span>";
				document.getElementById("prix").innerHTML = "0,55" + "<span>€</span>";
				document.getElementById("grainsTasse").innerHTML = "8" + "<span>grains par tasse</span>";
				break;
		}
	},
	drop : function (){
		self.clicked1=false;
		self.clicked2=false;
		self.clicked3=false;
	}
}


document.getElementById("balizSlidestop1").addEventListener('mousedown', choiceCaf.drag1, false);
document.getElementById("balizSlidestop2").addEventListener('mousedown', choiceCaf.drag2, false);
document.getElementById("balizSlidestop3").addEventListener('mousedown', choiceCaf.drag3, false);
self.test.onmousemove = function() {choiceCaf.move(event)};
document.addEventListener('mouseup', choiceCaf.drop, false);

