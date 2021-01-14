const targetString = 'JavaScript를 배우자';

// true false 로 결과 나옴. 
document.querySelector('.result1').innerHTML
=targetString.includes('JavaScript'); // true

document.querySelector('.result2').innerHTML
=targetString.includes('배우자'); // true



const myString = 'JavaScript를 배우자';

const a1 = 'JavaScript를 배우자'.includes('JavaScript');
console.log(a1); // 결과 true

const a2 = 'JavaScript를 배우자'.startsWith('배우자');
console.log(a2); // 결과 false // 배우자로 시작 되면 true

const a3 = 'JavaScript를 배우자'.endsWith('배우자');
console.log(a3); // 결과 true // 배우자로 끝나니까 true