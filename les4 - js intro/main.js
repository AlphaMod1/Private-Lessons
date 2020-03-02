console.log('Hello pasauli');

console.log(2 + 2);

var name = 'nibba';

console.log(name);

var a = 5;
var b = 2;

var c = a + b;

c = 4;

console.log(c);


console.log('-------------------------');


var number = 123;

var string = '123';

console.log(number + 250 + string);


console.log('-------------------------');


var age = 18;

if(age >= 18){
    console.log('you can BUY alc');
}


var name = 'Tauras';

if(name == 'Tauras'){
    console.log('You may pass to the cum dungion');
}
else{
    console.log('You are not allowed to be in the cum dungion');
}

console.log('-------------------------');

basketOfTara = 5;

if(basketOfTara > 20){
    console.log('you win more then 2 eu');
}
else if(basketOfTara == 15){
    console.log('you won 1.5 eu');
}
else{
    console.log('you won less then 2 eu');
    
}



var basketOfTara = 25;
var name = 'Kristis';

if(basketOfTara > 20 && name != 'Tauras'){
    console.log('You won a medal');
}
else{
    console.log('Im calling the police again');
}

var giftBasket = 'space lube';

if(giftBasket == 'space lube' || giftBasket == 'v-bucks'){
    console.log('you are in');
}
else{
    console.log('gtfo of my lawn');
}

// || &&

// == === 
// > < <= >=
// != !== 


a = 121;

b = 123;

if(a === b){
    console.log('IT IS EQ');
}


var a = 5;
var b = 6;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a ^ b); // negalima


console.log(Math.pow(a, b));
console.log(Math.sqrt(9));

console.log('-------------------------');

var a = 5;

a += 3;
a -= 3;
a *= 3;
a /= 3;

console.log(a);

var a = 5;

a++;

console.log(--a);










var size = 19;
var board = document.getElementById('board');
var htmlText = '';
var isWhite = true;

for(var i = 0; i < size; i++){
    htmlText += '<div class="row">';
    for(var j = 0; j < size; j++){
        htmlText += '<div class="'+ (isWhite ? 'white' : 'black') +'"></div>';
        isWhite = !isWhite;
    }
    htmlText += '</div>';
}

board.innerHTML = htmlText;


var a = false;


var b = a ? 5 : -5;

if(a == true){
    var b = 5;
}
else{
    var b = -5;
}


console.log(b);


var c ='';
