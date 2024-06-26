  
function sustitucion(textoPlano) {
    var mapaSustitucion = {
        'a': '1', 'b': '2', 'c': '3', 'd': '4', 'e': '5',
        'f': '6', 'g': '7', 'h': '8', 'i': '9', 'j': '10',
        'k': '11', 'l': '12', 'm': '13', 'n': '14', 'o': '15',
        'p': '16', 'q': '17', 'r': '18', 's': '19', 't': '20',
        'u': '21', 'v': '22', 'w': '23', 'x': '24', 'y': '25', 'z': '26',
        '0': '27', '1': '28', '2': '29', '3': '30', '4': '31', '5': '32',
        '6': '33', '7': '34', '8': '35', '9': '36',
        '?': '37', '!': '38', '.': '39',
        ',': '40', ':': '41', ';': '42', '-': '43', '+': '44',
        '*': '45', '/': '46', '=': '47', '(': '48', ')': '49',
        '[': '50', ']': '51', '{': '52', '}': '53', '<': '54',
        '>': '55', '|': '56', '&': '57', '%': '58', '@': '59'
    };

    textoPlano = textoPlano.toLowerCase();

    var textoCifrado = '';

    for (var i = 0; i < textoPlano.length; i++) {
        var char = textoPlano[i];
        if (mapaSustitucion[char]) {
            textoCifrado += mapaSustitucion[char];
        } else {
            textoCifrado += char;
        }
    }

    return textoCifrado;
}

function transposicion(textoPlano) {
    return textoPlano.split('').reverse().join('');
}

function cifrar() {
    var selectValor = document.getElementById('select-cifrado').value;
    var textoPlano = document.getElementById('text-plano').value;
    var textoCifrado;

    if (selectValor === 'sustitucion') {
        textoCifrado = sustitucion(textoPlano);
    } else if (selectValor === 'transposicion') {
        textoCifrado = transposicion(textoPlano);
    }  

    document.getElementById('text-cifrado').value = textoCifrado;
}

document.getElementById('select-cifrado').addEventListener('change', function() {

    document.getElementById('text-cifrado').value = '';
});
