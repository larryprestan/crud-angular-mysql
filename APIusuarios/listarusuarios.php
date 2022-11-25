<?php
    header('Access-Control-Allow-Origin: *'); 
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    include './conexiondb.php';

    $sql="SELECT * FROM usuarios";
    $res=mysqli_query($conn,$sql);
    $listado=array();
    while($row=mysqli_fetch_assoc($res)){
        $listado[]=$row;
    }

    echo json_encode($listado);

    header('Content-Type: application/json');
?>