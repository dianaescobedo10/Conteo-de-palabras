let initialText = "En las vacaciones de este año primero fui diez días a un hotel con mi familia, en el hotel de al lado estaba un amigo y todos los días salíamos juntos a la piscina, a la playa, etc.En el hotel había un bufete donde íbamos a desayunar, almorzar y cenar, por la noche paseábamos por el paseo marítimo mientras nos tomábamos un helado, algunos días íbamos a otras playas que estaban más lejos del hotel, algunas eran salvajes, tenían el agua cristalina y había muchos peces y plantas, otros días los pasábamos en la piscina que era muy grande.";
let textArray = initialText.split(' ');

let wordsList = {};

textArray.forEach(function(word){
    word = clearString(word);
    if(wordsList[word]) {
        wordsList[word] += 1;
    } else{
        wordsList[word] = 1;
    }
});

let wordsListSize = Object.keys(wordsList).length;

console.log(wordsList);
document.write("El texto contiene " +textArray.length+ " palabras en total. </br>");
document.write("En el texto hay " +wordsListSize+ " palabras diferentes. </br>");

function clearString(string){
    let replace = string.toLowerCase().replace(/[,.!;]/g, '');
    return replace;
}

function contarPalabra (initialText, subcadena){
    let contardorOcurrencias = 0;
    let posicion = 0;

    while((posicion = initialText.indexOf(subcadena, posicion)) !== -1){
        ++contardorOcurrencias;
        posicion += subcadena.length;
    }
    return contardorOcurrencias;
}

console.log(contarPalabra(initialText, 'la'));
document.write("La palabra seleccionada se repite: " +contarPalabra(initialText, 'la')+ " veces." );