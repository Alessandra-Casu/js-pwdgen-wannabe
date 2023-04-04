//insicurissimo password generator

/*Chiedi all'utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23 */





const yourName = prompt('Inserisci il tuo nome: ');
const lastName = prompt('Inserisci il tuo cognome: ');
const color = prompt('Inserisci il tuo colore preferito: ');

const number = prompt('Inserisci il tuo numero preferito: ');


const password = yourName + lastName + color + number + '23';

console.log(password);
document.getElementById('result').innerHTML = password; 