// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
const squadre = [
{ nome: "Squadra 1", 
	puntiFatti: 0, 
	falliSubiti: 0 
},
{ nome: "Squadra 2", 
	puntiFatti: 0, 
	falliSubiti: 0 
},
{ nome: "Squadra 3", 
	puntiFatti: 0, 
	falliSubiti:0 
},
{ nome: "Squadra 4", 
	puntiFatti: 0, 
	falliSubiti: 0 
},
];
//generiamo una funzione per far generare numeri random per poi invocarla nel ciclo for

function numberRdm(min, max){
	return Math.floor(Math.random() * (max - min)) + min;
}
//generiamo numeri random solamente per falli subiti e punti fatti
for(let i = 0; i < squadre.length; i++){
	squadre[i].falliSubiti = numberRdm(0 , 20)
	squadre[i].puntiFatti = numberRdm(0, 50)
}
console.log(squadre);

const nomeFalli = squadre.map(( { nome, falliSubiti}) => ({nome, falliSubiti}))	
console.log("nome falli", nomeFalli);

