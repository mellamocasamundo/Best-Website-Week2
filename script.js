// if you want to change something on a DIFFERENT element, you have to call it by name (it's "id")
// https://www.w3schools.com/jsref/met_document_getelementbyid.asp
	
// "el" stands for the "element" that was just clicked
function allOpaque(el){
	el.classList.add("opaque");
	document.getElementById("pats-logo").classList.add("opaque");
}

// "el" stands for the "element" that was just clicked
function removeColor(el){
	document.getElementById("rams-column").classList.remove("rams-blue");
	document.getElementById("pats-column").classList.remove("pats-silver");
	
}

function showTrophy(el){
	el.classList.remove("rams-logo");
	el.src("images/lombardi_trophy.jpg");
}