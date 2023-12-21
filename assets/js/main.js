let name1 = prompt('Nome Utente');
console.log("nome:",name1);
let name2 = prompt('Cognome Utente');
console.log("cognome:",name2);
let color = prompt('Colore preferito');
console.log("colore:",color);
let number = Math.floor(Math.random(0)*100);
console.log("numero:",number);

console.log("password:",name1 + name2 + color + number);

document.getElementById('passGenerated').innerHTML='<p> Password:' + " " + name1 + name2 + color + number + '</p>';