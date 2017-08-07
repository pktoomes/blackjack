/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

//define aArray outside of for loop

function handValue (hand) {

  var aceHighArray = [0];
  var jkqArray = [0];
  var aceLowArray = [0];
  var numArray = [0];
   for(let i = 0; i < hand.length; i++){
     if(hand[i] === 'K'){
      jkqArray.push(10);
     }
     else if(hand[i] === 'Q'){
       jkqArray.push(10);
     }
     else if(hand[i] === 'J'){
      jkqArray.push(10);
     }
     else if(hand[i] === 'A'){
     aceHighArray.push(1);
     aceLowArray.push(11);
     }
     else{
       numArray.push(hand[i]);
     }
}
  var newJKQArray = jkqArray.map(Number);
  var newAceHighArray = aceHighArray.map(Number);
  var newAceLowArray = aceLowArray.map(Number);
  var newNumArray = numArray.map(Number);
  var handNum = newNumArray.reduce(function (a, b){
    return a + b;} )
    console.log(handNum);
  var handFace = newJKQArray.reduce(function (a, b){
    return a + b;} )
  var numFace = handNum + handFace;
  console.log( numFace);
  var aceLow = newAceLowArray.reduce(function (a, b){
    return a + b;})
    console.log(aceLow);
  var aceHigh = newAceHighArray.reduce(function (a, b){
      return a + b;})
  if(numFace <= 10){
    var handValue = numFace + aceLow;
    console.log('low' , handValue);
  }
  else {
    var handValue = numFace + aceHigh;
    console.log('high', handValue);
  }
  return handValue;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
