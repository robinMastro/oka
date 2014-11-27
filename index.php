<!DOCTYPE html>
<html lang="fr">
    <head>
        <title>Oka - Une histoire de café</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <meta name="description" content="Oka Une histoire de café" />
        <link rel="stylesheet" type="text/css" href="css/normalize.css" />
        <link rel="stylesheet" type="text/css" href="css/style.css" />
        
        <!-- script typekit -->
        <script src="//use.typekit.net/wwj2psp.js"></script>
        <script>try{Typekit.load();}catch(e){}</script>
        <!-- END script typekit -->
        
        <script src="js/main.js"></script>
    </head>
    <body onload="loader(); Anecdote()">
      <div id="roue">
        <div class="windows8">
          <div class="wBall" id="wBall_1">
            <div class="wInnerBall"></div>
          </div>
          <div class="wBall" id="wBall_2">
            <div class="wInnerBall"></div>
          </div>
          <div class="wBall" id="wBall_3">
            <div class="wInnerBall"></div>
          </div>
          <div class="wBall" id="wBall_4">
            <div class="wInnerBall"></div>
          </div>
          <div class="wBall" id="wBall_5">
            <div class="wInnerBall"></div>
          </div>
          <p>CHARGEMENT</p>
        </div>  
        
      </div>      
        
        <div id="page-wrap">
            
            <header>
              <div id="nav-bar">
                <h1><a id="logo" onclick="toPage(0)" href="#"><img src="images/logo-oka.png" alt="Oka logo"/></a></h1>
                <nav id="menu">
                  <div id="border-header"></div>
                  <ul>
                    <li id="data" onclick="toPage(1)">Boissons</li>
                    <li id="map" onclick="toPage(2)">Le café dans le monde</li>
                    <li id="infos" onclick="toPage(3)">Infos utiles</li>
                    <li id="eco" onclick="toPage(4)">Eco-responsable</li>
                  </ul>
                </nav>
              </div><!-- *** END NAV BAR *** -->
            </header>
            
            <div id="ligne1">
            
              <!-- PAGE HOMEPAGE -->
                <?php include 'homepage.php';?>      
              <!-- END PAGE HOMEPAGE -->
              
              <!-- PAGE DATA -->
                <div class="individual" id="page-data">
              
                <section class="presentation">
                  <div class="wrapper titreHome">
                  
                    <h2>Boissons gourmandes</h2>
                    <p>Oka vous fait découvrir des saveurs</p>                    
                  </div><!-- *** END WRAPPER *** -->
                </section><!-- *** END PRESENTATION *** -->
                
                <section id="choixCoffee">
                  <div class="wrapper">
                  
                    <h3>Découverte de saveurs</h3> 
                    <p class="introTitle">Essayez toutes les combinaisons possible afin de trouver la recette qui vous conviendra le mieux. Bien sur, le mieux c'est de toutes les essayer !</p>                   
                    <div id="selectorCoffee">
                    
                      <h4>Force</h4>
                      <ul id="forceChoix" class="sliderChoix">
                        <li class="sliderSegment"></li>
                        <li class="sliderSegment"></li>
                        <li class="sliderSegment"></li>
                        <li class="sliderSegment segment-last"></li>
                        <li class="sliderRange" id="sliderRange1"></li>
                        <li class="sliderHitBox" id="balizSlidestop1"></li>
                        <li><a class="sliderPoint" id="btn1" href="#"></a></li>
                      </ul>
                      
                      <h4>Lait</h4>
                      <ul id="laitChoix" class="sliderChoix">
                        <li class="sliderSegment"></li>
                        <li class="sliderSegment"></li>
                        <li class="sliderSegment"></li>
                        <li class="sliderSegment segment-last"></li>
                        <li class="sliderRange" id="sliderRange2"></li>
                        <li class="sliderHitBox" id="balizSlidestop2"></li>
                        <li><a class="sliderPoint" id="btn2" href="#"></a></li>
                      </ul>
                      
                      <h4>Sucre</h4>
                      <ul id="sucreChoix" class="sliderChoix">
                        <li class="sliderSegment"></li>
                        <li class="sliderSegment"></li>
                        <li class="sliderSegment"></li>
                        <li class="sliderSegment segment-last"></li>
                        <li class="sliderRange" id="sliderRange3"></li>
                        <li class="sliderHitBox" id="balizSlidestop3"></li>
                        <li><a class="sliderPoint" id="btn3" href="#"></a></li>
                      </ul>
                      
                    </div><!-- *** END SELECTOR COFFEE *** -->
                    
                    <div id="coffeeSec">
                      
                      <img src="images/cup.png" alt="coffee selectionner"/>
                    
                    </div>
                    
                    <hr class="clear"/>
                    
                  </div><!-- *** END WRAPPER *** -->
                </section><!-- *** END CHOIX COFFEE *** -->
                
                <section id="dataCoffee">
                  <div class="wrapper">
                  
                  <ul>
                    <li>
                      <p><strong>Force</strong></p>
                      <p id="force">32<span>%</span></p>
                    </li>
                    <li>
                      <p><strong>Lait</strong></p>
                      <p id="lait">54<span>%</span></p>
                    </li>
                    <li>
                      <p><strong>Sucre</strong></p>
                      <p id="sucre">14<span>%</span></p>
                    </li>
                    <li>
                      <p><strong>Prix</strong></p>
                      <p id="prix">2,40<span>€</span></p>
                    </li>

                    <li>
                      <p><strong>Calories</strong></p>
                      <p id="calorie">1 674<span>kcl</span></p>
                    </li>
                    <li>
                      <p><strong>Nombre de grains de café</strong></p>
                      
                      <ul id="numberGrain">
                        <li><img src="images/coffeegrain.png" alt=" "/></li>
                        <li><img src="images/coffeegrain.png" alt=" "/></li>
                        <li><img src="images/coffeegrain.png" alt=" "/></li>
                        <li><img src="images/coffeegrain.png" alt=" "/></li>
                        <li><img src="images/coffeegrain.png" alt=" "/></li>
                        
                        <li><img src="images/coffeegrain.png" alt=" "/></li>
                        <li><img src="images/coffeegrain.png" alt=" "/></li>
                        <li><img src="images/coffeegrain.png" alt=" "/></li>
                        <li><img src="images/coffeegrain.png" alt=" "/></li>
                        <li><img src="images/coffeegrain.png" alt=" "/></li>
                        
                        <li><img src="images/coffeegrain.png" alt=" "/></li>
                        <li><img src="images/coffeegrain.png" alt=" "/></li>
                        <li><img src="images/coffeegrain.png" alt=" "/></li>
                        <li><img src="images/coffeegrain.png" alt=" "/></li>
                        <li><img src="images/coffeegrain.png" alt=" "/></li>
                        
                        <li><img src="images/coffeegrain.png" alt=" "/></li>
                        <li><img src="images/coffeegrain.png" alt=" "/></li>
                        <li><img src="images/coffeegrain.png" alt=" "/></li>
                        <li><img src="images/coffeegrain.png" alt=" "/></li>
                        <li><img src="images/coffeegrain.png" alt=" "/></li>
                      </ul>
                      
                      <p id="grainsTasse">20<span>grains par tasse</span></p>
                    </li>
                  
                  </ul>
                  
                  <hr class="clear" />
                  
                  <div id="coffeeText">
                  
                    <p><strong id="coffeeName">Le White Moka</strong></p>
                    <p id="coffeeDescription">Le white Moka est un subtil mélange entre du café et du chocolat blanc. Cela fait de lui une boisson parfaitement équilibrée ; ni trop fort ni trop sucré.</p>
                  
                  </div><!-- *** END COFFEETEXT *** -->
                  
                  <div id="coffeeQuote">
                    <p id="coffeeQuote2">White Moka</p>
                  </div><!-- *** END COFFEE QUOTE *** -->
                  
                  <hr class="clear"/>
                  
                  </div><!-- *** END WRAPPER *** -->
                </section><!-- *** END DATACOFFEE *** -->
                             
              </div><!-- *** END PAGE DATA *** -->
              
              
                <!-- PAGE MAPMONDE -->
                  <?php include 'map.php';?> 
                <!-- END PAGE MAPMONDE -->
                
                <!-- PAGE MAPMONDE -->
                  <?php include 'info.php';?> 
                <!-- END PAGE MAPMONDE -->

              
              <!-- PAGE HOMEPAGE -->
                <?php include 'eco.php';?>      
              <!-- END PAGE HOMEPAGE -->
              
              
                
            </div><!-- *** END LIGNE1 *** -->
          </div><!-- *** END PAGE WRAPPER *** -->
          
          
          <script type="text/javascript" src="js/slids.js"></script>
	</body>
	
</html>