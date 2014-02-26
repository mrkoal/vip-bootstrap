/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'vipFont\'">' + entity + '</span>' + html;
	}
	var icons = {
		'if-wrong': '&#xe600;',
		'if-tick': '&#xe601;',
		'if-sucess': '&#xe602;',
		'if-sigh': '&#xe603;',
		'if-shopping-bag': '&#xe604;',
		'if-query': '&#xe605;',
		'if-movie': '&#xe606;',
		'if-info': '&#xe607;',
		'if-heart': '&#xe608;',
		'if-close': '&#xe609;',
		'if-card': '&#xe60a;',
		'if-add': '&#xe60b;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/if-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
