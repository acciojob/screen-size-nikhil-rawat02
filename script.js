//your JS code here. If required.
let width = document.getElementById("width");
let height = document.getElementById("height");
console.log(window.innerWidth);
window.addEventListener("resize" , () => {
	width.innerHTML  = "Width: " + window.innerWidth;
  height.innerHTML ="Height: " + window.innerHeight;
	console.log(width , height);
});