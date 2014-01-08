<?php
/************
 *uyghurche convertor
 *2014.1
 *************/
//usage:
//TODO

class Convert{

	

	function Uconvert($string) {
    
        $persian = array('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 
        				 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
						 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
						 'y', 'z', 'ö', 'ü', 'gh', 'sh', 'o', 'p'
        				 );
        $num = range(0, 9);
        $uyghurche = array('ا', 'ب', 'س', 'د', 'ە', 'ف', 'گ', 'ھ', 
        				   'ى', 'ج', 'ك', 'ل', 'م', 'ن','و', 'پ', 
        				   'چ', 'ر', 'س', 'ت', 'ۇ','ۈ', 'ۋ', 'خ', 
        				   'ي', 'ز', 'ۆ', 'ۈ', 'غ', 'ش', 'غ', 'گ'
        				   );
        
        return str_replace($persian, $uyghurche, $string);
    }

}
$strobj = new Convert();
echo $strobj->Uconvert('yaxshimusiz, alimjan, abcdefgh');

?> 