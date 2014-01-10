<?php
// http://localhost/test.php?text=احسان

// test.php file

$font = 'MyriadArabic-Regular.otf';
//$text = $_GET['text'];
$text = 'سالام دۇنيا';

// [switch to right to left] 
// try comparing of using this block and not using this block
$rtl = array();
for($i=0; $i<strlen($text); $i+=2) {
    $rtl[] = substr($text, $i, 2);
}
$rtl = array_reverse($rtl);
$rtl = implode($rtl);
$text = $rtl;
// [/switch to right to left]

$im = imagecreatetruecolor(165, 35);
$black = imagecolorallocate($im, 0, 0, 0);  
$white = imagecolorallocate($im, 255, 255, 255);
imagefilledrectangle($im, 0, 0, 500, 100, $white);  
imagettftext($im, 12, 0, 10, 20, $black, $font, $text);  
header('Content-type: image/png');  

imagepng($im);  
imagedestroy($im); 
?>