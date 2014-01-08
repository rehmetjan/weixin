/* Author:  Muhammad Abdulla (muhammad@yulghun.com)
 * Version: 1.2 (Feb. 7, 2009)
 * License: GPL
 */

var imode = 0; 
var qmode = 0; 

var km = new Array ( 128 ); 
var cm = new Array ( 256 ); 

var PRIMe = 233; 
var PRIME = 201; 
var COLo  = 246; 
var COLO  = 214; 
var COLu  = 252; 
var COLU  = 220; 
var HAMZA = 0x0626;
var CHEE  = 0x0686;
var GHEE  = 0x063A;
var NGEE  = 0x06AD;
var SHEE  = 0x0634;
var SZEE  = 0x0698;


var OQUOTE = 0x00AB; 
var CQUOTE = 0x00BB; 

var RCQUOTE = 0x2019; 

var BPAD = 0x0600;


function gac ( ascii )
{
   var str = "" + ascii;
   return str.charCodeAt(0);
}


function gas ( code )
{
   return String.fromCharCode(code);
}

var i;
var inited = false;

function bedit_init ( ) {
  var i;
  if ( inited ) {
    return;
  }

  inited = true;

  
  for ( i = 0; i < km.length; i++ ) {
    km[i] = 0;
  }

  
  km[gac('a')] = 0x06BE;
  km[gac('b')] = 0x0628;
  km[gac('c')] = 0x063A;
  km[gac('D')] = 0x0698;
  km[gac('d')] = 0x062F;
  km[gac('e')] = 0x06D0;
  km[gac('F')] = 0x0641;
  km[gac('f')] = 0x0627;
  km[gac('G')] = 0x06AF;
  km[gac('g')] = 0x06D5;
  km[gac('H')] = 0x062E;
  km[gac('h')] = 0x0649;
  km[gac('i')] = 0x06AD;
  km[gac('J')] = 0x062C;
  km[gac('j')] = 0x0642;
  km[gac('K')] = 0x06C6;
  km[gac('k')] = 0x0643;
  km[gac('l')] = 0x0644;
  km[gac('m')] = 0x0645;
  km[gac('n')] = 0x0646;
  km[gac('o')] = 0x0648;
  km[gac('p')] = 0x067E;
  km[gac('q')] = 0x0686;
  km[gac('r')] = 0x0631;
  km[gac('s')] = 0x0633;
  km[gac('T')] = 0x0640; 
  km[gac('t')] = 0x062A;
  km[gac('u')] = 0x06C7;
  km[gac('v')] = 0x06C8;
  km[gac('w')] = 0x06CB;
  km[gac('x')] = 0x0634;
  km[gac('y')] = 0x064A;
  km[gac('z')] = 0x0632;
  km[gac('/')] = 0x0626;

  for ( i = 0; i < km.length; i++ ) {
    if ( km[i] != 0 ) {
      var u = gac(gas(i).toUpperCase());
      if ( km[u] == 0 ) {
        km[u] = km[i];
      }
    }
  }
  
  
  km[gac(';')] = 0x061B;
  km[gac('?')] = 0x061F;
  km[gac(',')] = 0x060C;
  km[gac('<')] = 0x203A; 
  km[gac('>')] = 0x2039; 
  km[gac('"')] = OQUOTE;

  
  km[gac('{')] = gac ( '}' );
  km[gac('}')] = gac ( '{' );
  km[gac('[')] = gac ( ']' );
  km[gac(']')] = gac ( '[' );
  km[gac('(')] = gac ( ')' );
  km[gac(')')] = gac ( '(' );

  
  km[gac('}')] = 0x00AB;
  km[gac('{')] = 0x00BB;

  
  for ( i = 0; i < cm.length; i++ ) {
    cm[i] = 0;
  }

  cm[gac('a')] = 0x0627;
  cm[gac('b')] = 0x0628;
  cm[gac('c')] = 0x0643;
  cm[gac('d')] = 0x062F;
  cm[gac('e')] = 0x06D5;
  cm[gac('f')] = 0x0641;
  cm[gac('g')] = 0x06AF;
  cm[gac('h')] = 0x06BE;
  cm[gac('i')] = 0x0649;
  cm[gac('j')] = 0x062C;
  cm[gac('k')] = 0x0643;
  cm[gac('l')] = 0x0644;
  cm[gac('m')] = 0x0645;
  cm[gac('n')] = 0x0646;
  cm[gac('o')] = 0x0648;
  cm[gac('p')] = 0x067E;
  cm[gac('q')] = 0x0642;
  cm[gac('r')] = 0x0631;
  cm[gac('s')] = 0x0633;
  cm[gac('t')] = 0x062A;
  cm[gac('u')] = 0x06C7;
  cm[gac('v')] = 0x06CB;
  cm[gac('w')] = 0x06CB;
  cm[gac('x')] = 0x062E;
  cm[gac('y')] = 0x064A;
  cm[gac('z')] = 0x0632;

  cm[PRIMe] = 0x06D0; 
  cm[PRIME] = 0x06D0; 
  cm[COLo]  = 0x06C6; 
  cm[COLO]  = 0x06C6; 
  cm[COLu]  = 0x06C8; 
  cm[COLU]  = 0x06C8; 

  for ( i = 0; i < cm.length; i++ ) {
    if ( cm[i] != 0 ) {
      var u = gac(gas(i).toUpperCase());
      if ( cm[u] == 0 ) {
        cm[u] = cm[i];
      }
    }
  }

  
  cm[gac(';')] = 0x061B;
  cm[gac('?')] = 0x061F;
  cm[gac(',')] = 0x060C;
}

function ak2uni ( akstr )
{
  var str = akstr;
  var akdif = String.fromCharCode(0x0622, 0x0623, 0x0624, 0x0626, 0x0629, 0x062B, 0x062D, 0x0630, 0x0635, 0x0636, 0x0638, 0x0649, 0x0639, 0x0647, gac('{'), gac('}'));
  var akuni = String.fromCharCode(0x0698, 0x06C6, 0x06CB, 0x06D0, 0x06D5, 0x06AD, 0x0686, 0x06C7, 0x067E, 0x06AF, 0x0626, 0x06C8, 0x0649, 0x06BE, CQUOTE, OQUOTE);

  for(var i = 0; i < akdif.length; i++ ) {
     str = str.replace(new RegExp(akdif.substr(i,1), "g"), akuni.substr(i,1));
  }

  return str;
}

function uly2uy ( ustr )
{
  var str = "";
  var i, cur, prev, next, ch;
  var ccode, ncode;
  var wdbeg = true;

  var bd = '`';  
  var ed = '`';  

  var verbatim = false;

  var uly = ustr;

  
  var regExp = /(\w+[p|s]:\/\/\S*)/gi;
  uly = uly.replace(regExp, bd + "$1" + ed );

  
  regExp = /([\s|(]+\w+\.\w+\.\w+\S*)/g;
  uly = uly.replace(regExp, bd + "$1" + ed );

  
  regExp = /([\s|(|,|.]+\w+\.(com|net|org|cn)[\s|)|\.|,|.|$])/g;
  uly = uly.replace(regExp, bd + "$1" + ed );

  
  regExp = /(\w+@\w+\.\w[\w|\.]*\w)/g;
  uly = uly.replace(regExp, bd + "$1" + ed );

  if ( !inited ) {
    bedit_init();
  }

  for ( i = 0; i < uly.length; i++ ) {
    ch = 0;
    cur    = uly.charAt(i);
    next   = uly.charAt(i+1);
    ccode  = uly.charCodeAt(i);
    ncode  = uly.charCodeAt(i+1);

    if ( verbatim == true ) {
      if ( cur == ed ) { 
        verbatim = false;
      } else {
        str += cur; 
      }
      continue;
    }

    if ( cur == bd ) {
      verbatim = true;
      continue;
    }

    if ( cur == '|' && ( prev == 'u' ) && ( next == 'a' || next == 'e' ) ) {
      wdbeg = false;
      continue;
    }

    
    if ( wdbeg == true ) {
      if ( isvowel(cur) ) {
        str += gas(HAMZA);
      }
    } else {
      if ( cur == '\'' || ccode == RCQUOTE ) {
        if ( isvowel(next) ) {
          wdbeg = false; 
          str += gas(HAMZA);
          continue;
        } else if ( isalpha(ncode) ) {
          continue;
        }
      }
    }

    
    if ( isvowel(cur) || !isalpha(ccode) ) {
      wdbeg = true;
    } else { 
      wdbeg = false;
    }

    switch ( cur ) { 
      case 'c':
      case 'C':
        if ( next == 'h' || next == 'H' ) {
          ch = CHEE;
        }    
        break;
     case 'g':
     case 'G':
       if ( next == 'h' || next == 'H' ) {
         ch = GHEE;
       }
       break;
     case 'n': 
     case 'N': 
       if ( next == 'g' || next == 'G' ) { 
         tmpch = uly.charAt(i+2); 
         if ( tmpch != 'h' && tmpch != 'H' ) {
           ch = NGEE;
         }
       }
       break;
     case 's':
     case 'S':
       if ( next == 'h' || next == 'H' ) {
         ch = SHEE;
       } else if ( next == 'z' || next == 'Z' ) { 
         ch = SZEE;
       }
       break;
     default:
       break;
    }

    if ( ch != 0 ) {
      i++; 
      str += gas(ch);
    } else if ( ccode < cm.length && cm[ccode] ) {
      str += gas( cm[ccode] ); 
    } else {
      str += gas(ccode); 
    }

    prev = cur;
  }

  return str;
}


function isvowel ( ch )
{
  var code = gac ( ch ); 

  if ( ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' ||
       ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U' ) {
   return true;
  }

  if ( code == PRIMe || code == PRIME || code == COLo ||
     code == COLO || code == COLu || code == COLU ) {
   return true;
  } 

  return false;
}

function isalpha ( code )
{
  if ( (gac('A') <= code && code <= gac('Z')) || (gac('a') <= code && code <= gac('z')) ) {
    return true;
  }
  return false;
}

function AttachEvent(obj, evt, fnc, useCapture){
  if (!useCapture) useCapture = false;

  if (obj.addEventListener) {
    obj.removeEventListener(evt, fnc, useCapture);
    obj.addEventListener(evt, fnc, useCapture);
    return true;
  } else if (obj.attachEvent) {
    obj.detachEvent( "on" + evt, fnc);
    return obj.attachEvent( "on" + evt, fnc);
  }
}


function attachEvents ( )
{    
  if ( typeof(attachAll)=="undefined" || attachAll == null ) {
     attachAll = false;
  }
  if ( typeof(bedit_allow) != "undefined" && bedit_allow && bedit_allow.length != 0 ) {
    allowed_names = bedit_allow.split ( ':' );
  } else {
    allowed_names = new Array();
  }    
  if ( typeof(bedit_deny) != "undefined" && bedit_deny && bedit_deny.length != 0 ) {
    denied_names = bedit_deny.split ( ':' );
  } else {
    denied_names = new Array();;
  }      
     
  var tas = document.getElementsByTagName("TEXTAREA"); 
  var tfs = document.getElementsByTagName("INPUT"); 

  for ( i = 0; i < tas.length; i++ ) {
    if ( shouldAttach(tas[i].name) ) {
      AttachEvent ( tas[i], 'keypress', naddchar, false );
      AttachEvent ( tas[i], 'keydown', proc_kd, false );
    }
  }

  for ( i = 0; i < tfs.length; i++ ) {
    if ( tfs[i].type.toLowerCase() == "text" && shouldAttach(tfs[i].name)) {
      AttachEvent ( tfs[i], 'keypress', naddchar, false );
      AttachEvent ( tfs[i], 'keydown', proc_kd, false );
    }
  }
}

function shouldAttach ( name )
{
  var j;
  if ( attachAll == true ) {
    for ( j = 0; j < denied_names.length; j++ ) {
      if ( name == denied_names[j] ) {
        return false;
      }
    }
    return true;
  } else { 
    for ( j = 0; j < allowed_names.length; j++ ) {
      if ( name == allowed_names[j] ) {
        return true;
      }
    }
    return false;
  }
}

/* for Mozilla/Opera (taken from dean.edwards.name) */
if (document.addEventListener) {
  document.addEventListener("DOMContentLoaded", bedit_onLoad, false);
}

/* for Internet Explorer */
/*@cc_on @*/
/*@if (@_win32)
  document.write("<script id=__ie_onload defer src=javascript:void(0)><\/script>");
  var script = document.getElementById("__ie_onload");
  script.onreadystatechange = function() {
    if (this.readyState == "complete") {
      bedit_onLoad(); 
    }
  };
/*@end @*/

/* for webkit-based browsers */
if (/WebKit/i.test(navigator.userAgent)) { 
  var _timer = setInterval(function() {
    if (/loaded|complete/.test(document.readyState)) {
      bedit_onLoad(); 
    }
  }, 100);
}


old_onLoad = null;
add_onLoad();

function add_onLoad()
{
  old_onLoad = window.onload;
  window.onload = bedit_onLoad;
}

function bedit_onLoad()
{
  
  if (arguments.callee.done) return; 
  arguments.callee.done = true;
  
  if (_timer) clearInterval(_timer);

  bedit_init();
  attachEvents();
  if ( old_onLoad ) {
    old_onLoad();
  }
}

function addchar(content, event) 
{
  return naddchar(event);
}

function proc_kd_ctrl_k ( source, ev )
{
  imode = 1 - imode;
  return true; 
}

function proc_kd_ctrl_j ( source, ev )
{
  var t = gsel(source);
  if ( t == "" ) {
     return false;
  } else {
    ins(source, ak2uni(t)); 
    return true;
  }
}

function proc_kd_ctrl_u ( source, ev )
{
  var t = gsel(source);
  if ( t == "" ) {
     return false;
  } else {
    ins(source, uly2uy(t)); 
    return true;
  }
}

function proc_kd_ctrl_t ( source, ev )
{
  if ( source.style.direction == "ltr" ) {
    source.style.direction = "rtl";
  } else {
    source.style.direction = "ltr";
  }
  return true;
}

function proc_kd(event)
{
  var x = false; 

  var e = event ? event : window.event;
  var k = e.keyCode ? e.keyCode : e.which;
  var s =  e.srcElement ? e.srcElement : e.target; 

  if ( e.ctrlKey) {
    var f = false;
    for(var az = gac('A'); az <= gac('Z'); az++ ) {
      eval('if ( k == ' + az + ' && typeof proc_kd_ctrl_' + gas(az).toLowerCase() + ' == "function" ) { x = ' +  'proc_kd_ctrl_' + gas(az).toLowerCase() + '(s, e); f=true;}'); 
      if(f) break;
    }
  }

  if ( x ) {
    e.cancelBubble = true;
    if(e.preventDefault) e.preventDefault();
    if(e.stopPropagation) e.stopPropagation();
    e.returnValue = false;
    return false;
  }

  return true;
}

function gsel(source)
{
  var s = source;

  if ( document.all ) { 
    return document.selection.createRange().text;
  } else {
    var ss = s.selectionStart;
    var se = s.selectionEnd;
    if ( ss < se ) {
       return s.value.substring (ss, se);
    }
  }

  return "";
}

function ins(source, str)
{
  var s = source;

  if ( document.selection && document.selection.createRange) {
    document.selection.createRange().text = str;
  } else {
    
    var ss  = s.selectionStart;
    var se  = s.selectionEnd;

    
    var sTop, sLeft;
    if (s.type == 'textarea' && typeof s.scrollTop != 'undefined') {
      sTop = s.scrollTop;
      sLeft = s.scrollLeft;
    }

    s.value = s.value.substring (0, ss) + str + s.value.substr(se);

    if (typeof sTop != 'undefined') {
      s.scrollTop = sTop;
      s.scrollLeft = sLeft;
    }

    s.setSelectionRange(ss + str.length, ss + str.length );
  }
}


function naddchar(event)
{
  var e = event ? event : window.event;
  var k = e.keyCode ? e.keyCode : e.which;
  var s =  e.srcElement ? e.srcElement : e.target; 

  if ( !inited ) {
    bedit_init();
  }

  if ( !e.ctrlKey && !e.metaKey && imode == 0 && k < km.length && km[k] != 0 ) {
    if ( e.keyCode && !e.which ) {
      e.keyCode = km[k];
    } else {
      ins(s, gas(km[k]));

      if(e.preventDefault) e.preventDefault();
      if(e.stopPropagation) e.stopPropagation();
    }

    if ( k == gac('"') ) { 
      km[k] = qmode ? OQUOTE : CQUOTE;
      qmode = 1 - qmode;
    }

    if ( ! e.keyCode || e.which ) {
      return false;
    }
  } 

  
  if (/opera/i.test(navigator.userAgent) && e.ctrlKey) {
    var x = false;
    for(var az = gac('A'); az <= gac('Z'); az++ ) {
      eval('if(k == ' + az + ' && typeof proc_kd_ctrl_' + gas(az).toLowerCase() + ' == "function" ) { x = true }'); 
      if(x) break;
    }
    if(x) {
      e.preventDefault();
      return false;
    }
  }

  e.returnValue = true;
  return true;
}




var U_I_E=false;
attachAll = true;
bedit_allow="" ;
bedit_deny="share_link:slink:seccodeverify:secanswer:price:readperm:email:qq:icq:yahoo:msn:site:alipay:taobao:bdaynew:sitenew:icqnew:qqnew:yahoonew:alipaynew:taobaonew:msnnew:emailnew:seccodeverify";
bedit_deny=bedit_deny+"nqemail";
if(U_I_E) bedit_deny=bedit_deny+":nqusername:username:user_name:usernamenew";
