var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

//Para convertir frase en minuscula
function mayus(message) {
    var messageLow;
    messageLow = message.toLowerCase();
    return messageLow;
}

// Para encriptar el mensaje que obtenemos de la funcion mayus
function encrypted(message) {
    message = mayus(message);
    var phrase = "";
    var letter;
    for (let i = 0; i < message.length; i++) {
        for (let x = 0; x < plainAlphabet.length; x++) {
            if (message[i] === plainAlphabet[x]) {
                letter = encryptedAlphabet[x];
                phrase = phrase + letter;
            }
        }
    }
    return phrase;
}
//Para desencriptar el mensaje que obtenemos de la funcion encrypted
function decrypted(encryptedMessage) {
    var letter;
    var phrase = "";
    for (let i = 0; i < encryptedMessage.length; i++) {
        for (let x = 0; x < encryptedAlphabet.length; x++) {
            if (encryptedMessage[i] === encryptedAlphabet[x]) {
                letter = plainAlphabet[x];
                phrase = phrase + letter;
            }
        }
    }
    return phrase;
}

//Visualización en pantalla

document.getElementById("encryptButton").addEventListener("click", encrypt);
function encrypt() {
    var message = document.getElementById("encrypt").value;
    document.getElementById("decrypt").innerHTML = encrypted(message);
}

document.getElementById("decryptButton").addEventListener("click", decrypt);
function decrypt() {
    var message = document.getElementById("decrypt").value;
    document.getElementById("encrypt").innerHTML = decrypted(message);
}








