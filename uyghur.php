<?php
/************
 *ULY to UEY convertor
 *2014.1
 *Rehmetjan Tursun
 *************/

class ULY2UEY{
	function convert($string) {
    
        $latin = array('ng', "'",        //1
                       'Gh','gh',   //2
                       'Ch','ch',   //3
                       'Sh','sh',   //4
                       'Zh','zh',   //5
                       'J','j',     //6
                       'A','a',     //7
                       'E','e',     //8
                       'B','b',     //9
                       'P','p',     //10
                       'T','t',     //11
                       'X','x',     //12
                       'K','k',     //13
                       'D','d',     //14
                       'R','r',     //15
                       'Z','z',     //16
                       'S','s',     //17
                       'F','f',     //18
                       'Q','q',     //19
                       'G','g',     //20
                       'L','l',     //21
                       'M','m',     //22
                       'N','n',     //23
                       'H','h',     //24
                       'O','o',     //25
                       'U','u',     //26
                       'Ö','ö',     //27
                       'Ü','ü',     //28
                       'W','w',     //29
                       'Ë','ë',     //30
                       'I','i',     //31
                       'Y','y',     //32
        			   );
        
        $uyghurche = array('ڭ',"ئ‍",        //1
                           'غ','غ',     //2
                           'چ','چ',     //3
                           'ش','ش',     //4
                           'ژ','ژ',     //5
                           'ج','ج',     //6
                           'ئا','ا',     //7
                           'ئە','ە',     //8
                           'ب','ب',     //9
                           'پ','پ',     //10
                           'ت','ت',     //11
                           'خ','خ',     //12
                           'ك','ك',     //13
                           'د','د',     //14
                           'ر','ر',     //15
                           'ز','ز',     //16
                           'س','س',     //17
                           'ف','ف',     //18
                           'ق','ق',     //19
                           'گ','گ',     //20
                           'ل','ل',     //21
                           'م','م',     //22
                           'ن','ن',     //23
                           'ھ','ھ',     //24
                           'ئو','و',     //25
                           'ئۇ','ۇ',     //26
                           'ئۆ','ۆ',     //27
                           'ئۈ','ۈ',     //28
                           'ۋ','ۋ',     //29
                           'ئې','ې',     //30
                           'ئى','ى',     //31
                           'ي','ي',     //32
        				);

        
        //$words = array_map('ucfirst', $words);
        $words = mb_convert_case($string,MB_CASE_TITLE,'utf-8');
        //$words = explode(' ', $words);
        //$new_str = implode(' ', $words);
        return str_replace($latin, $uyghurche, $words);
    }
}

// $txt='ti si želva (čestitke)';
// echo mb_convert_case($txt,MB_CASE_TITLE,'utf-8');


$strobj = new ULY2UEY();
echo $strobj->convert("te'liq, we sa'et, shu'ar");

?> 