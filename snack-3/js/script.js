// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
const automobili = [
	{ marca: "Toyota", modello: "Yaris", alimentazione: "ibrida" },
	{ marca: "Volkswagen", modello: "Golf", alimentazione: "benzina" },
	{ marca: "BMW", modello: "i3", alimentazione: "elettrico" },
	{ marca: "Fiat", modello: "Panda", alimentazione: "metano" },
	{ marca: "Renault", modello: "Clio", alimentazione: "diesel" },
	{ marca: "Tesla", modello: "Model S", alimentazione: "elettrico" },
	{ marca: "Ford", modello: "Focus", alimentazione: "benzina" },
	{ marca: "Audi", modello: "A3", alimentazione: "diesel" },
	{ marca: "Mercedes-Benz", modello: "EQC", alimentazione: "elettrico" },
	{ marca: "Opel", modello: "Corsa", alimentazione: "gpl" },
];
//creo 3 array vuoti per poi poter pushare ad ognuno l'array dedicato
const autoBenzina = []
const autoDiesel = []
const restoAuto = []
//con il ciclo for andiamo a prendere solo l'alimentazione che ci interessa
for (let i = 0; i < automobili.length; i++){
	if (automobili[i].alimentazione === "benzina"){
		autoBenzina.push(automobili[i])
	}else if (automobili[i].alimentazione === "diesel"){
		autoDiesel.push(automobili[i])
	}else {
		restoAuto.push(automobili[i])
	}
}
// adesso stampiamo ad ogni auto l'alimentazione dedicata
console.log("auto a benzina ", autoBenzina);
console.log("auto a diesel ", autoDiesel);
console.log("resto auto ", restoAuto);