/* creo una lista chiedo un numero al utente;
 cerco se il numero del utente ha una posizione nella lista
 se si stampo un messaggio seno stampo un altro   */
const email = ['franco@gmail.com', 'franca@gmail.com', 'francesca@gmail.com', 'francesco@gmail.com'];
 const grandezza_array = email.length ;
 let mail_utente = (prompt('Inserisci un email'));

 let puoi_accedere = false
 for(let i = 0; i < grandezza_array; i++) {
	 alert(email[i] + "=" + mail_utente); 
  //	alert("i = " + i + "; email[i] = email[" + i + "]; -->" + email[i]);
  	if(email[i] == mail_utente) {
        poui_accedere = true;
     }
    
}

if ( poui_accedere == true){
    alert("Email  trovata"); 
    
}else{
    alert('pussa via');
}





/* for(let i = 0; i < grandezza_array; i++) {
	 
  	if(email[i] == mail_utente) {
    	alert("Email trovata");
        

    }else if(email[i] != mail_utente){
        alert("Email non trovata"); 
        
        
    }
 }

console.log(mail_utente)
        console.log(email[i]) 





 if (  number < 0 || number < indiceMassimo) {
    console.log('sei nelle lista');
} else {
    console.log("non sei nella lista");
}
 console.log(indiceMassimo)*/
 
 
