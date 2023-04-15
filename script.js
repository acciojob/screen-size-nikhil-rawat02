//your JS code here. If required.
let width = document.getElementById("width");
let height = document.getElementById("height");

window.addEventListener("resize" , () => {
	width.innerHTML  = "Width: " + window.innerWidth;
  height.innerHTML ="Height: " + window.innerHeight;
	
});