var pageCounter = 0;
var beginning = document.getElementById("beginning");
var end = document.getElementById("end");
window.onload = function() {
	beginning.innerHTML = pages[0];
}
function goto(page) {
	pageCounter += 1;
	end.innerHTML = pages[page];
	smoothScroll.animateScroll(document.querySelector("#end"));
	setTimeout(function () {
		beginning.innerHTML = pages[page];
		end.innerHTML = "";
		$(".girb").remove();
	}, 500);
}
function hatch() {
	girb();
}
function shake() {
	document.getElementById("egg").className = "egg animated jello";
}
function stopShake() {
	document.getElementById("egg").className = "egg";
}
smoothScroll.init();
