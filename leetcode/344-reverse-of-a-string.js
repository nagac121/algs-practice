/**
 * andrei sol 
 */

// ------------------------------
// MY SOL - USING SPLIT()
// ------------------------------
function strReverse(str) {
  return str.split('').reverse().join(''); // ereht iH
}
// console.log(strReverse("Hi there"))
/**
  convert str to array. split('') splits arr by char because of single space ie ''
  reverse() is js api
  join arr and convert into a string. since join by nothing, rev comes.
  join('') even joins even spaces also
 *  */

/////////////////
// ANDREI SOLS //
/////////////////
// SOL 1: USING 'FOR'
// --------------------
function reverse(str) {
  if (!str || typeof str != 'string' || str.length < 2) return str;

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join('');
}
reverse('Timbits Hi')

// ------------------------------
// SOL 2: USING 'SPLIT()'
// ------------------------------
function reverse2(str) {
  //check for valid input
  return str.split('').reverse().join('');
}


/****************************************************
 SOL 3 BY ANDREI: USING SPREAD OP ... -- FOLLOW THIS
 ****************************************************/
 const reverse3 = str => [...str].reverse().join('');
 // spread op, spreads the arr
 reverse3('Timbits Hi')