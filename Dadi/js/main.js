

let N = 2;
let giocatore1 = 0;
let giocatore2 = 0;
let tiri = 1;
for(let i=0; i<N; i++){
    alert(tiri + ' tiro per il giocatore1');
    let punti1 = Math.floor(Math.random()*5 + 1);
    giocatore1 += punti1;
    alert("giocatore1 hai fatto: " + punti1);
    alert(tiri + ' tiro per il giocatore2');
    let punti2 = Math.floor(Math.random()*5 + 1);
    giocatore2 += punti2;
    alert("giocatore2 hai fatto: " + punti2);
    tiri++;
}
if(giocatore1 == giocatore2){
    let risposta = "La partita termina in parita' entrambi hanno totalizzato: " + giocatore1 + " punti";
    
}
else if(giocatore1 < giocatore2){
    let risposta = "Il giocatore2 vince! Ha totalizzato: " + giocatore2 + " punti\nIl giocatore1 ha totalizzato: " + giocatore1 + " punti";
   
}
else{
    let risposta = "Il giocatore1 vince! Ha totalizzato: " + giocatore1 + " punti\nIl giocatore2 ha totalizzato: " + giocatore2 + " punti";
        alert(risposta);
}   
   alert("Vuoi giocare un'altra partita?");	 

