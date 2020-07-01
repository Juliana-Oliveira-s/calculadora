function botao(num){
	var valor= document.calc.visor.value;
	document.calc.visor.value =valor + num;
}
function reset(){
	document.getElementById('visor').value='';
	
	
}

function calcule(){
	var resultado= 0;
	resultado= document.getElementById('visor').value
	document.getElementById('visor').value='';
	document.getElementById('visor').value = eval(resultado);
	alert(resultado);
	
}
igual: botaoIgual.addEventListener("click", function () {
		memoria.textContent = acumulador;
		resultado = eval(acumulador);
		placeholder.textContent = resultado;
		acumulador = "";
		phText = "";
	})