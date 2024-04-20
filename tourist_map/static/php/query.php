<?php
    $servername = "localhost";
    $username = "root",
    $password = "";
    $database = "db.sqlite3"

    $conn = mysqli_connect($servername, $username, $password, $database);
    $sql = "select * from map_touristobject";
    $result = mysqli_query($conn, $sql);
    $data = mysqli_fetch_all($result, MYSQLI_ASSOC);




?>