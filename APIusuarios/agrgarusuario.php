<?php
    header('Access-Control-Allow-Origin: *'); 
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    include './conexiondb.php';

    $json = file_get_contents('php://input');
    $usuario = json_decode($json);
    $nombre = $usuario->nombre;
    $direccion = $usuario->direccion;
    $telefono = $usuario->telefono;

    if(!empty($nombre) && !empty($direccion) && !empty($telefono)){
        $sql="INSERT INTO usuarios (nombre,direccion,telefono) VALUES ('$nombre','$direccion','$telefono')";
        $res=mysqli_query($conn,$sql);
        if($res){
            echo json_encode("agregado");
        }
    }

    header('Content-Type: application/json');
?>