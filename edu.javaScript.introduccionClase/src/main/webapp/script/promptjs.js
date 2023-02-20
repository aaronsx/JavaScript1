
function ejemploComPrompt() {
  let text;
  let name = prompt("Como te llamas?", "Nombre");
  switch(name) {
    case "Aaron":
      text = "Hola buenas Aaron como estas?";
      break;
    case "Juan":
      text = "JUANNNNNNNNN";
      break;
    case "PEPE":
      text = "El pepe y su compa el sech";
      break;
    default:
      text = "Lo siento no te conozco";
  }
  document.getElementById("nombre").innerHTML = text;
}