<?php include 'lib/twitteroauth.php' ;?>

<?php

  $ConsumerKey ='2YDY0fQk4UXrLpFPWYuUdwQdx';
  $ConsumerSecret ='gvaytrQQz1b3RLNVSYRd3k9UG55SU88wuuaKQIa16mVkHLkXxW';
  $AccessToken = '2860775140-CTNwuuaYTOIK0IYuTxig3b7boxD7uO3s0Is2UDf';
  $AccessTokenSecret = 'x2pS9BoqYEfVFCUkxnmiGnxDWtY8BQvSnH1St5pa7qg8T';

  $twitter = new TwitterOAuth($ConsumerKey, $ConsumerSecret, $AccessToken, $AccessTokenSecret);
  
    $Tweets = $twitter->get("https://api.twitter.com/1.1/search/tweets.json?q=rainforest%20filter%3Aimages%20exclude%3Aretweets&result_type=recent&count=100&include_entities=true");

?>

<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <title>Twitter</title>
    <meta name="robots" content="noindex,nofollow" />
    <link href="css/style.css" rel="stylesheet">
  </head>

  <body>

    <div id="resultat">
        <?php 
              foreach($Tweets->statuses as $tweet):
              ?>
              <p class="tweet">
                <img src="<?php echo $tweet->entities->media[0]->media_url;?>" alt="user picture" />
                <br/><span><?php echo $tweet->text ?></span>
              </p>
              <?php
              endforeach;
        ?>

    </div>

  </body>
</html>
