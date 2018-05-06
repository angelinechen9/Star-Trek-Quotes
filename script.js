var startindex = 1;
var endindex = 105;
var index = 1;
function file() {
	return "Images/" + index.toString() + ".jpg";
}
var previous = document.getElementById("previous");
previous.addEventListener("click", function() {
	if (index - 1 < startindex) {
		index = endindex;
	}
	else {
		index = index - 1;
	}
	var image = document.querySelector("img");
	image.src = file();
})
var next = document.getElementById("next");
next.addEventListener("click", function() {
	if (index + 1 > endindex) {
		index = startindex;
	}
	else {
		index = index + 1;
	}
	var image = document.querySelector("img");
	image.src = file();
})