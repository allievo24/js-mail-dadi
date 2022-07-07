/* creo una lista chiedo un numero al utente;
 cerco se il numero del utente ha una posizione nella lista
 se si stampo un messaggio seno stampo un altro   */
const numeri = [1, 5, 10, 20];
const indiceMassimo = numeri.length - 1;
let number = parseInt(prompt('Inserisci un numero'));



if (  number < 0 || number < indiceMassimo) {
    console.log('sei nelle lista');
} else {
    console.log("non sei nella lista");
}
 console.log(indiceMassimo)