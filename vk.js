// ==UserScript==
// @name MyFirstUserJS ^_^
// @description A couple of useful pieces for VK
// @author potoyalo@gmail.com
// @include *vk.com*
// ==/UserScript==

function init() {
	var ol = (document.getElementById('side_bar')).getElementsByTagName('OL')[0];
	reMName(ol, 'Приложения', 'Мои Приложения');
	reMName(ol, 'Документы', 'Мои Документы');
	//Ссылка на приложения, а не на каталог приложений:
	reMName(ol, 'href="/apps"','href="/apps?act=apps"');
	newElem(ol, "/cc", "Сокращение ссылок", 1);
	newElem(ol, "/club9390927", "My group");
	newElem(ol, "/club1024599", "7095");
	newElem(ol, "http://www.google.ru/", "Google");
	newElem(ol, "https://github.com/ArvenPK", "GitHub");
	//Поднять аудио над друзьями:
	if (document.getElementById("profile_common_friends")) replaceDiv("profile_common_friends", "profile_audios");
	else replaceDiv("profile_friends", "profile_audios");
	//Поднять блок с кнопками над подарками:
	if (document.getElementById("profile_gifts")) replaceDiv("profile_gifts", "profile_bottom_actions");
	else replaceDiv("gifts_count_module", "profile_bottom_actions");

	//alert('all ready');
}

//Дополнительные пункты меню
function newElem(ol, elink, ename, line) {
	//Линия над пунктом меню
	if (line == 1) {
		var line = document.createElement('LI');
		line.innerHTML = '<div class="more_divv"></div>';
		ol.appendChild(line);
	}
	var ne = document.createElement('LI');
	ne.innerHTML = '<a href="' + elink + '" class="left_row"><span class="left_label inl_bl">' + ename + '</span></a>';
	ol.appendChild(ne);
}

//Замена текста в левом меню
function reMName(ol, txt, retxt) {
	if (!ol) return;
	//var rt = ol.innerHTML;
	//rt = rt.replace(txt, retxt);
	//ol.innerHTML = rt;
	ol.innerHTML = (ol.innerHTML).replace(txt, retxt);
}

//Поместить div2 над div1
//Работает при открытии в новой вкладке, или после перезагрузки страницы
function replaceDiv(div1, div2) {
	var d1,	d2;
	if (!(d1 = document.getElementById(div1)) || !(d2 = document.getElementById(div2))) return;
	d1.parentNode.insertBefore(d2.parentNode.removeChild(d2),d1);
}

if (document.addEventListener) {
	document.addEventListener("DOMContentLoaded", init, false);
}
