const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let toReturn = '';
    let splitedString = expr.split('**********');
    splitedString.forEach(function(c){


    let word = '';
    let inArray = c.match(/.{1,10}/g);

    inArray.forEach(function(y){


    let digArray = y.match(/.{1,2}/g);
    let signsLine = '';
    digArray.forEach(function(x){
        if(x === '10') {
            signsLine = signsLine + '.';
        }
        if(x === '11') {
            signsLine = signsLine + '-';
        }

    });
        word = word + MORSE_TABLE[signsLine];
    });
       toReturn = toReturn + word + ' ';
    });
    return toReturn.trim();
}

module.exports = {
    decode
}
