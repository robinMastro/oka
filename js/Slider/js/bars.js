"use strict";
document.getElementById("btncafe").addEventListener('click', btncafe, false);
document.getElementById("btnnom").addEventListener('click', btnnom, false);
document.getElementById("btncafe").addEventListener('click', prevent, false);
document.getElementById("btnnom").addEventListener('click', prevent, false);
var self = this;
var init = 0;
function btncafe(e) {
	UI.fermslide(function(){
		setTimeout(function(){
			model.getList(function(userPos){
				//Recupere la liste des bars
				model.getPosition(function(userPos){
				// Récupere la position de l'utilisateur
					for (self.i = model.baradress.length -1; i >= 0; i--) {
					// Boucle pour chaque bar
						model.getGpsBar(i,model.baradress[i].adresse, userPos,function(i,userPos, barPos){
						// Transforme l'adresse en coord gps
							model.calculBar(i,userPos,barPos,function(i){
							//Calcule la distance entre la pos de l'utilisateur et le bar
								if (i == 0)
								{
									model.triBar(function(){
										UI.construct(function(){
											UI.constructProcess(function(){
												setTimeout(function(){UI.openslide()}, 500);
											});
										});
									});
								}
							});

						});
					};
				});
			});
		}, 500);
	});
}
function btnnom(e) {
	UI.fermslide(function(){
		setTimeout(function(){
		// Récupere la position de l'utilisateur
			UI.constructOff(function(){
				UI.constructProcess(function(){
					setTimeout(function(){UI.openslide()}, 500);
				});
			});;}, 500);
	});
}

function prevent(e) {
	e.preventDefault();
	//Désactive les réactions de base de btncafe (redirection vers ne page vu que c'est un a)
}