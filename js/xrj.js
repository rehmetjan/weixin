/*
copyright ©2008-2009 Kellen Parker
*/

function showBlog() {
	document.getElementById('blg').style.display='block';
	document.getElementById('lft').style.display='none';
	document.getElementById('container').style.left='736px';
	document.getElementById('cal').style.left='740px';
}

function hideBlog() {
	document.getElementById('blg').style.display='none';
	document.getElementById('lft').style.display='block';
	document.getElementById('container').style.left='14px';
	document.getElementById('cal').style.left='20px';
}

function close_em() { // collapse all columns, return to 2000px
	//document.getElementById('blog').style.display='block';
    document.getElementById('din').style.display='none';
    document.getElementById('pin').style.display='none';
	document.getElementById('gwo').style.display='none';
    document.getElementById('uly').style.display='none';
    document.getElementById('uey').style.display='none';
    document.getElementById('nci').style.display='none';
    document.getElementById('ads').style.display='none';
    document.getElementById('eng').style.display='none';
    document.getElementById('glo').style.display='none';
    document.getElementById('container').style.width='1100px';
        }

function dinj() {
    close_em();
    document.getElementById('din').style.display='block';
    document.getElementById('container').style.width='1400px';
        }

function pinj() {
    close_em();
    document.getElementById('pin').style.display='block';
    document.getElementById('container').style.width='1400px';
        }
		
function gwoj() {
    close_em();
    document.getElementById('gwo').style.display='block';
    document.getElementById('container').style.width='1400px';
        }

function ulyj() {
    close_em();
    document.getElementById('uly').style.display='block';
    document.getElementById('container').style.width='1400px';
        }
		
function ueyj() {
    close_em();
    document.getElementById('uey').style.display='block';
    document.getElementById('container').style.width='1400px';
        }

function ncij() {
    close_em();
    document.getElementById('nci').style.display='block';
	document.getElementById('container').style.width='1700px';
        }

function adsj() {
    close_em();
    document.getElementById('ads').style.display='block';
    document.getElementById('container').style.width='1700px';
        }

function engj() {
    close_em();
    document.getElementById('eng').style.display='block';
    document.getElementById('container').style.width='1400px';
        }

function glosj() {
    close_em();
    document.getElementById('glo').style.display='block';
    document.getElementById('container').style.width='1700px';
        }

//function backTo() {
//if (window.name == "GlossaryTable")
//	self.close();
//		else location="submit.html";
//} 

function loadForScreenshot() {
showBlog();
glosj();
fillitin('jumu`a<br/><br/>','主麻日<br/>聚礼','zhǔ mā rì<br/>jù lǐ',' يوم الجمعة <br/>جمعة‎','<br/>نماز جمعه','<br/>جۈمە نامىزى','<br/>jüme namizi','friday prayer');
}

function fillitin(en,han,pin,ar,per,ey,ly,des)  {
Box = document.pertab
document.getElementById('english').innerHTML = en;
document.getElementById('hanzi').innerHTML = han;
document.getElementById('pinyin').innerHTML = pin;
document.getElementById('arabic').innerHTML = ar;
document.getElementById('persian').innerHTML = per;
document.getElementById('ueyz').innerHTML = ey;
document.getElementById('ulyz').innerHTML = ly;
document.getElementById('description').innerHTML = des;
}