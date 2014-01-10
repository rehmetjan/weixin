<?php

header("Content-Type: image/png; charset=utf8");
$im = imagecreatetruecolor(350, 330);

// Create some colors
$white = imagecolorallocate($im, 100, 255, 255);
$grey = imagecolorallocate($im, 128, 128, 128);
$black = imagecolorallocate($im, 0, 0, 0);
imagefilledrectangle($im, 0, 0, 399, 29, $white);

$font = 'arial.ttf';
//$t = '&#1573;&#1606; &#1575;&#1604;&#1583;&#1610;&#1606; &#1593;&#1606;&#1583; &#1575;&#1604;&#1604;&#1607; &#1575;&#1604;&#1573;&#1587;&#1604;&#1575;&#1605;';
$t = 'سالام';
$text=utf8_encode($t);
imagettftext($im, 20, 0, 10, 20, $black, $font, $text);
imagepng($im);
imagedestroy($im);
?>