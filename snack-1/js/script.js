// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
const bici = [
{ marca: "Trek", 
	peso: 10 
},
{ marca: "Giant", 
peso: 12 
},
{ marca: "Cannondale", 
peso: 11 
},
{ marca: "Specialized", 
peso: 13 
},
{ marca: "Scott", 
peso: 9 
},
];

let littleBike = bici[0]


for (let i = 0; i < bici.length; i++){
	if (bici[i].peso < littleBike.peso) {

		littleBike = bici[i];
		console.log(bici[i]);
	}
}

//utilizzo del destructoring
const {marca, peso} = littleBike
console.log(littleBike);

document.getElementById("bici-piccola").innerHTML = `
<div>La bici più piccola è la ${marca} perchè ha un peso di ${peso} kg</div>`