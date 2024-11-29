<?php
include('../functions/color_functions.php');

if(isset($_POST['funcion'])){ 
    $funcion = $_POST['funcion'];
}else{
    $funcion = $_GET['funcion'];
}

switch ($funcion) 
{
    
    case 'update_file':
        $respuesta=update_file($_POST['color']);
        echo $respuesta;
    break;
    case 'get_data':
        $respuesta = get_data();
        echo $respuesta;
    break;
    case 'reset':
        $respuesta = reset();
        echo $respuesta
    default:
        echo 0;
    	break; 
}
?>