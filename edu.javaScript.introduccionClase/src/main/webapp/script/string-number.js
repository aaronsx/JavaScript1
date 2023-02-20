//¿Qué ocurre en el siguiente ejemplo?
function primerejemplo ()
{
	let num1 = "2";
	let num2 = "3";
	let suma= num1 + num2;
	document.write(suma);
}
//y, ¿en este?
function segundoejemplo ()
{
	let num1 = 2;
	let num2 = "3";
	let suma= num1 + num2;
	document.write(suma);
}

function tercerejemplo ()
{
	//El Number lo que hace es pasarte todo a numero 
	let num1 = "7";
	let num2 = "5";
	let operacion = Number(num1) + Number(num2);
	document.write(operacion);

}
function cuartoejemplo ()
{
	 
	let texto = "No soy un número";
	let conversion= Number(texto);
	document.write(typeof(conversion) + " " + conversion);
	//En el typeof sale number porque lo estas forzando y sale nan porque es la ausencia de valor 
}
//Ejercicio
function ejercicio1 ()
{
	let num1=1;
	let num2=5; 
	let num3=12;
	let concatenacion=String(num1)+String(num2)+String(num3);
	let suma= num1+num2+num3;
	document.write("La concatenacion es: "+concatenacion+" Suma de los tre valores:"+suma+" El tipo de datos de la concatenacion es: "+typeof(concatenacion)+" y de la suma: "+typeof(suma));
	
}




