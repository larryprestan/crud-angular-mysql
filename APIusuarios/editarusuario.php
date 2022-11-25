<?php
    header('Access-Control-Allow-Origin: *'); 
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    include './conexiondb.php';

    $id=$_GET['id'];
    $json = file_get_contents('php://input');
    $usuario = json_decode($json);
    $nombre = $usuario->nombre;
    $direccion = $usuario->direccion;
    $telefono = $usuario->telefono;

    if(!empty($nombre) && !empty($direccion) && !empty($telefono)){
        $sql="UPDATE usuarios SET nombre='$nombre', direccion='$direccion', telefono='$telefono' WHERE id='$id' ";
        $res=mysqli_query($conn,$sql);
        if($res){
            echo json_encode("editado");
        }
    }

    header('Content-Type: application/json');
?>