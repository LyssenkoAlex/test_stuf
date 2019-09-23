
function check(str, bracketsConfig) {

    let chArr = str.split('');
    let g = new Map();
    let toReturn = true;

    chArr.forEach(function(m){
       bracketsConfig.forEach(function(y){
           y.forEach(function(x){


           if(g.get(x) == null){
               g.set(x, 1);
           }
           else {
               let counter = g.get(x);
               g.set(x, counter++)
           }
       }) ;
       });
    });

    bracketsConfig.forEach(function(r){
        if(g.get(r[0]) !== g.get(r[1])) {
            toReturn = false;
        }
    })

    return isValid(str);
}

function isValid(str) {
    if (str.length <= 1)
        return false;

    let matchingOpeningBracket, ch;
    let stack = [];

    let openingBrackets = ['[', '{', '(', '|'];
    let closingBrackets = [']', '}', ')', '|'];

    console.log('str', str);

    for (let i = 0; i < str.length; i++) {
        console.log('i', i)
        ch = str[i];

        if (closingBrackets.indexOf(ch) > -1) {
            matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(ch)];
            console.log('matchingOpeningBracket', matchingOpeningBracket);
            console.log('stack', stack);
            if (stack.length === 0 || (stack.pop() !== matchingOpeningBracket)) {
                return false
            }
        } else {
            stack.push(ch)
            console.log('push', stack)
        }
    }

    return (stack.length === 0)
}

module.exports =  {
    check
}
