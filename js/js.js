//Prueba de js

function vigenere() {
	var l,i,k,trans,word,srg,cifrado,test;
	var patt=/[^a-zA-Z - \s]/;
	var patt2=/[^a-zA-Z]/;
	
	//do {
		word = document.getElementById("input1").value;
		console.log(word);
		if (word === "" || patt.test(word)) {alert("no ingresaste palabras o no utilizaste unicamente letras"); return;}//{word = prompt("Ingresar palabras: ");}
		//else if (typeof word === "object") {return;}
		//else {alert("solo letras y espacios");}//{word = prompt("Por favor ingresá únicamente palabras: ");}
//		}
	//while (patt.test(word) || word === "" || typeof word === "object");		
	
//	do {
		srg = document.getElementById("input2").value;
		if (srg === "" || patt2.test(srg)) {alert("no ingresaste cifrado válido"); return;} //{srg = prompt("Ingresar el cifrado de Vigenere elegido: ");}
		//else if (typeof srg === "object") {return;}
//		else {alert("únicamente letras");}//{srg = prompt("El cifrado no puede contener espacios ni números: ");}
//		}	
//	while (patt2.test(srg) || srg === "" || typeof srg === "object");
	
	for (i = 0, k = 0, trans = "", cifrado = ""; i < word.length; i++) {
		test = srg.charCodeAt(k % srg.length);
		if (word.charAt(i) === " ") {cifrado += " "}
		else if (word.charCodeAt(i) > 96) {
			if (test < 97) {test += 32}
			l = (((word.charCodeAt(i) - 97) + (test - 97)) % 26 + 97);
			trans += word.charAt(i) + " &#8594 "+ String.fromCharCode(l) + "<br>";
			cifrado += String.fromCharCode(l);
			k++;}
		else {
			if (test > 96) {test -= 32}
			l = (((word.charCodeAt(i) - 65) + (test - 65)) % 26 + 65);
			trans += word.charAt(i) + " &#8594 "+ String.fromCharCode(l) + "<br>";
			cifrado += String.fromCharCode(l);
			k++;}
	}
	document.getElementById("prueba").innerHTML = trans + cifrado;
}
