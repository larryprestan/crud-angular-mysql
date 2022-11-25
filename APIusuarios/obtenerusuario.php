<?php
    header('Access-Control-Allow-Origin: *'); 
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    include './conexiondb.php';

    $id=$_GET['id'];

    $sql="SELECT * FROM usuarios WHERE id='$id' ";
    $res=mysqli_query($conn,$sql);
    $datos=mysqli_fetch_assoc($res);
    $usuario=array();
    $usuario[]=$datos;
    echo json_encode($usuario);

    header('Content-Type: application/json');
?>