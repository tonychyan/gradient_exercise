var $browser;
var $body;
$(document).ready(function() {
	$browser = $.browser;
	$body = $('body');
	$('button').click(grad);
});

function grad(event) {
	$(document).mousemove(function(e) {
		if ($browser.webkit) {
			$body.css('background-image', '-webkit-radial-gradient(' + e.pageX + 'px ' + e.pageY + 'px, circle, #FFFFFF, #000000)');
		} else if ($browser.mozilla) { 
			$body.css('background-image', '-moz-radial-gradient(' + e.pageX + 'px ' + e.pageY + 'px, circle, #FFFFFF, #000000)');
		} else if ($browser.opera) {
			$body.css('background-image', '-o-radial-gradient(' + e.pageX + 'px ' + e.pageY + 'px, circle, #FFFFFF, #000000)');
		} else if ($browser.msie) {
			$body.css('background-image', '-ms-radial-gradient(' + e.pageX + 'px ' + e.pageY + 'px, circle, #FFFFFF, #000000)');
		}
	});
}

