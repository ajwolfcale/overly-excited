let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the",
"light", "of", "the", "moon"];

let walrus = "";

function addExcitement(walrus){
    for (let i = 0; i < sentence.length; i++) {
        walrus += " ";
        walrus += sentence[i];
        if ((i+1) % 3 === 0) {
            walrus += "!";
        }
        if ((i+1) % 6 === 0) {
            walrus += "!";
        }
        if ((i+1) % 9 === 0) {
            walrus +="!!";
        }
        if ((i+1) % 12 === 0) {
            walrus += "!!";
        }
        console.log(walrus);
    }
}

addExcitement(walrus);