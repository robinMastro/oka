<?php include 'lib/twitteroauth.php' ;?>

<?php

  $ConsumerKey ='2YDY0fQk4UXrLpFPWYuUdwQdx';
  $ConsumerSecret ='gvaytrQQz1b3RLNVSYRd3k9UG55SU88wuuaKQIa16mVkHLkXxW';
  $AccessToken = '2860775140-CTNwuuaYTOIK0IYuTxig3b7boxD7uO3s0Is2UDf';
  $AccessTokenSecret = 'x2pS9BoqYEfVFCUkxnmiGnxDWtY8BQvSnH1St5pa7qg8T';

  $twitter = new TwitterOAuth($ConsumerKey, $ConsumerSecret, $AccessToken, $AccessTokenSecret);
  
    $Tweets = $twitter->get("https://api.twitter.com/1.1/search/tweets.json?q=rainforest%20filter%3Aimages%20exclude%3Aretweets&result_type=recent&count=10&include_entities=true");

?>

<!doctype html>
<html lang="fr">
  <head>
    <title>Oka - Découvrez les tweets</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="description" content="Oka Une histoire de café" />
    <link rel="stylesheet" type="text/css" href="../css/normalize.css" />
    <link rel="stylesheet" type="text/css" href="../css/style.css" />
          
    <!-- script typekit -->
    <script src="//use.typekit.net/wwj2psp.js"></script>
    <script>try{Typekit.load();}catch(e){}</script>
    <!-- END script typekit -->
  </head>

  <body>

    <div id="resultat">
    
      <h2>Découvrez les tweets</h2>
      
      <a href="#" class="button">Postez un Tweet</a>
      
      <a id="btnnom" class="btnstyle" href="">Populaire</a>
      <a id="btncafe" class="btnstyle" href="">Récent</a>
      <hr class="clear"/>
        <?php 
        ?>
        <div class="tritab">
            <ul>
            <?php 
                  foreach($Tweets->statuses as $tweet):
                  ?>
                  <li class="tweet">
                    <!-- <img src="<?php echo $tweet->entities->media[0]->media_url;?>" alt="user picture" /> -->
                    <!-- Image principale -->
                    
                    <!-- Texte -->
                    <a href="#" class="btnderoul panel">
                    
                      <img src="<?php echo $tweet->user->profile_image_url; ?>"alt="user picture" />
                      <!-- Image de profil -->
                      <p class="user">Nom utilisateur</p>
                    
                    </a>
                    <div class="slidernbslide_0 slider">
                      <p><?php echo $tweet->text; ?></p>
                    </div>
                  </li>
                  <?php
                  endforeach;
            ?>
            <hr class="clear" />
            </ul>
            <hr class="clear"/>
        </div><!-- *** END TRIBAT *** -->
        
    </div>

  </body>
</html>
