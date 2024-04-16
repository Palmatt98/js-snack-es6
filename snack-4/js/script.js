// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un’età.
// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.

const persone = [{
	nome: "luca",
	cognome: "verde",
	età: 18

},
{
	nome: "pasquale",
	cognome: "palmieri",
	età: 15

},
{
	nome: "luigi",
	cognome: "rossi",
	età: 23

}
]

const maggiorenne = []

for (let i = 0; i < persone.length; i++){
	if(persone[i].età >= 18){
		maggiorenne.push(persone[i].nome + persone[i].cognome + "sei maggiorenne puoi guidare")
		console.log(maggiorenne);
	}
}