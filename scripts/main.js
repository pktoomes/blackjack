/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/



function handValue (hand) {
  let K = 10;
  let Q = 10;
  let J = 10;
  let A = 11 || 1;

  for(let i = 0; i < hand.length; i++){
      if(hand[i] != A){
      let sumHand = hand.reduce(function(a, b){return a + b;});
      console.log(sumHand);
  }
  else{
    let aArray = [];
    hand.pop(hand[i]);
    aArray.push(hand[i]);
    for(let i = 0; i < hand.length; i++){
      let sumHand = hand[i];
      sumHand += hand[i+1];
    }
      if(sumHand > 10){
        A = 1;
        let sumAArray = aArray[i];
        sumAArray += aArray[i+1];

      }
      else{
        A = 11;
        let sumAArray = aArray[i];
      }
      handValue = sumAArray + sumHand;
  }
}
  return handValue;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
