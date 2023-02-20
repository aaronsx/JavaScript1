function incremento()
{
	let numero = 2;
	numero++;
	document.write(numero);
}
function decremento()
 {
	let numero = 7;
	numero--;
	document.write(numero);
 }
 function exponenciacion()
 {
	let exponente = 5**2;
	document.write(exponente);
 }
 
 function Operador_modulo()
 {
	let modulo = 10 % 3;
	document.write(modulo);
 }
 function Asignacion()
 {
	let numero = 1;
	numero += 8;
	let numero2 = 9;
	numero2 -= 5;

	document.write(numero);
	document.write(numero2);

 }
 function ejercicio()
 {
	 let numero = 12;
	 numero+=5;
	 numero--;
	 let multiplicacion = 10**5;
	 let resto=57409%16789;
	 document.write("El incremento: "+numero+"<br>");
	 document.write("La multiplicacion: "+multiplicacion+"<br>");
	 document.write("El resto: "+resto);
 }
 function ejercicio2()
 {
	 let a = 3;
	console.log(a **= 2);
	console.log(a **= 0);
	console.log(a **= 'hello');
 }
 //Igualdad
 
 function distinto()
 {
	 let numero1 = 10;
	let numero2 = 10;
	let comparador = numero1 != numero2;
	document.write(comparador);

 }
 
//-----------------Comparacion-------------
function comparacion()
{
	function coche(marca, modelo, anioFabricacion) {
          this.marca  =  marca  ;
          this.modelo  =  modelo  ;
          this.anioFabricacion  =  anioFabricacion  ;
    }
    var Vehiculo = new coche('Honda', 'Civic', 2010);
	 var Vehiculo1 = new coche('Honda', 'Civic', 2010);
	 //Esto es un sinsentido porque para eso esta el instaof
    document.write("Con dos = "+Vehiculo==Vehiculo1);
    document.write("Con tres = "+Vehiculo===Vehiculo1);

}
function catodog()
{
	var a5 = 'Cat' && 'Dog';    
	var a5 = 'Dog' && "5";
	 document.write("Con ||: "+o5+"<br>");
	 document.write("Con && : "+a5+"<br>");
}