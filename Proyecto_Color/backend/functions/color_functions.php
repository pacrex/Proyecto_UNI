<?php

function update_file($color){
    $color_json = file_get_contents('../functions/data.json');
    $decoded_json = json_decode($color_json, true);
    $decoded_json[$color] += 1;
    file_put_contents('../functions/data.json',json_encode($decoded_json));
    return "{$color} got updated";
}

function get_data(){
    $color_json = file_get_contents('../functions/data.json');
    $decoded_json = json_decode($color_json, true);
    return json_encode($decoded_json);
}
function reset(){
    $color_json = file_get_contents('../functions/data.json');
    $decoded_json = json_decode($color_json, true);
    foreach ($decoded_json as $color) {
        $color = 0
    }
    file_put_contents('../functions/data.json',json_encode($decoded_json));
    return "{$color} got updated";
}
?>