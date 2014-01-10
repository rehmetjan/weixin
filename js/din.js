/*
copyright ©2008-2009 Kellen Parker
*/

function getResultsDin(){
	var dIn = document.getElementById('dquery').value;

	var dOut = dIn.
	replace(/ٱلله/g, 'Allah').
	replace(/لله/g, 'llah').
	replace(/السّ/g, 'as-s').
	replace(/الصّ/g, 'as&#803;-s&#803;').
	replace(/التّ/g, 'at-t').
	replace(/الثّ/g, 'at&#817;-t&#817;').
	replace(/الشّ/g, 'a&scaron;-&scaron;').
	replace(/الرّ/g, 'ar-r').
	replace(/الزّ/g, 'az-z').
	replace(/الدّ/g, 'ad-d').
	replace(/الذّ/g, 'ad&#817;-d&#817;').
	replace(/الطّ/g, 'at&#803;-t&#803;').
	replace(/الظّ/g, 'az&#803;-z&#803;').
	replace(/النّ/g, 'an-n').
	replace(/الس/g, 'as-s').
	replace(/الص/g, 'as&#803;-s&#803;').
	replace(/الت/g, 'at-t').
	replace(/الث/g, 'at&#817;-t&#817;').
	replace(/الش/g, 'a&scaron;-&scaron;').
	replace(/الر/g, 'ar-r').
	replace(/الز/g, 'az-z').
	replace(/الد/g, 'ad-d').
	replace(/الذ/g, 'ad&#817;-d&#817;').
	replace(/الط/g, 'at&#803;-t&#803;').
	replace(/الظ/g, 'az&#803;-z&#803;').
	replace(/الن/g, 'an-n').
	replace(/ٱلس/g, 'as-s').
	replace(/ٱلص/g, 'as&#803;-s&#803;').
	replace(/ٱلت/g, 'at-t').
	replace(/ٱلث/g, 'at&#817;-t&#817;').
	replace(/ٱلش/g, 'a&scaron;-&scaron;').
	replace(/ٱلر/g, 'ar-r').
	replace(/ٱلز/g, 'az-z').
	replace(/ٱلد/g, 'ad-d').
	replace(/ٱلذ/g, 'ad&#817;-d&#817;').
	replace(/ٱلط/g, 'at&#803;-t&#803;').
	replace(/ٱلظ/g, 'az&#803;-z&#803;').
	replace(/ٱلن/g, 'an-n').
	replace(/ٱلسّ/g, 'as-s').
	replace(/ٱلصّ/g, 'as&#803;-s&#803;').
	replace(/ٱلتّ/g, 'at-t').
	replace(/ٱلثّ/g, 'at&#817;-t&#817;').
	replace(/ٱلشّ/g, 'a&scaron;-&scaron;').
	replace(/ٱلرّ/g, 'ar-r').
	replace(/ٱلزّ/g, 'az-z').
	replace(/ٱلدّ/g, 'ad-d').
	replace(/ٱلذّ/g, 'ad&#817;-d&#817;').
	replace(/ٱلطّ/g, 'at&#803;-t&#803;').
	replace(/ٱلظّ/g, 'az&#803;-z&#803;').
	replace(/ٱلنّ/g, 'an-n').
	replace(/مٰ/g, 'm&#257;').
	replace(/ا/g, '&#257;').
	replace(/ٱ/g, 'a').
	replace(/أ/g, 'a').
	replace(/إ/g, 'i').
	replace(/ا/g, '&#257;').
	replace(/آ/g, '&#257;').
	replace(/ب/g, 'b').
	replace(/ة/g, '&#688;').
	replace(/ت/g, 't').
	replace(/ث/g, 't&#817;').
	replace(/ج/g, 'j').
	replace(/ح/g, 'h&#803;').
	replace(/خ/g, 'h&#814;').
	replace(/د/g, 'd').
	replace(/ذ/g, 'd&#817;').
	replace(/ر/g, 'r').
	replace(/ز/g, 'z').
	replace(/س/g, 's').
	replace(/ش/g, '&scaron;').
	replace(/ص/g, 's&#803;').
	replace(/ض/g, 'd&#803;').
	replace(/ط/g, 't&#803;').
	replace(/ظ/g, 'z&#803;').
	replace(/ع/g, '&#703;').
	replace(/غ/g, '&#289;').
	replace(/ف/g, 'f').
	replace(/ق/g, 'q').
	replace(/ك/g, 'k').
	replace(/ل/g, 'l').
	replace(/م/g, 'm').
	replace(/ن/g, 'n').
	replace(/ه/g, 'h').
	replace(/و/g, '&#363;').
	replace(/ى/g, '&#257;').
	replace(/ي/g, '&#299;').
	replace(/ﺀ/g, '&#702;').
	replace(/ـٰ/g, '&#257;').
	replace(/ّ/g, '').
	replace(/ْ/g, '').
	replace(/َ/g, 'a').
	replace(/ِ/g, 'i').
	replace(/ُ/g, 'u').
	replace(/ً/g, '<sup>an</sup>').
	replace(/ٍ/g, '<sup>in</sup>').
	replace(/ٌ/g, '<sup>un</sup>').
	replace(/١/g, '1').
	replace(/٢/g, '2').
	replace(/٣/g, '3').
	replace(/٤/g, '4').
	replace(/۴/g, '4').
	replace(/٥/g, '5').
	replace(/۵/g, '5').
	replace(/٦/g, '6').
	replace(/۶/g, '6').
	replace(/٧/g, '7').
	replace(/٨/g, '8').
	replace(/٩/g, '9').
	replace(/٠/g, '0').
	replace(/x/g, 'x');	

	document.getElementById('dhtml_out').value = dOut;
	document.getElementById('dtext_out').innerHTML = dOut;

	}
