<?php
	//PDO
    /* Connexion à une base ODBC avec l'invocation de pilote */
    $dsn = "mysql:host=localhost;dbname=oka;charset=utf8";
    $user = 'root';
    $password = 'root'; // Pour WAMP
    try {
        $dbh = new PDO($dsn, $user, $password);

        $dbh->query("SET NAMES utf8"); // permet de gérer les accents dans MySQL
        $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);//
    } catch (PDOException $e) {
    echo 'Connexion échouée : ' . $e->getMessage();
    $msg ='ERREUR PDO dans ' . $e->getFile() . ' Ligne ' . $e->getLine() . ' : ' . $e->getMessage(); 
    die ($msg);
    }
    //PDO
	$requeteSearch= "SELECT * FROM cafe_bar ORDER BY `nom` ASC";
    try {
        $result=$dbh->query($requeteSearch); //query envoi un objet de la class PDOStatement
        //$resultFetch = $resultQuery->fetch(PDO::FETCH_OBJ);
        $result->setFetchMode(PDO::FETCH_OBJ);
        if( $result->rowCount() >0) {

            echo(json_encode($result->fetchAll()));
            // while ($data = $result->fetch()) {
            //     echo(json_encode($data,JSON_FORCE_OBJECT|JSON_UNESCAPED_UNICODE)).',';
            // }
        }  
    }
    catch(Exception $e) { // try
    	echo "<br/> erreur sur la requete SELECT ";
	}
?>