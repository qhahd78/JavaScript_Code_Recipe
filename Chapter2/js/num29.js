const myString = 'JavaScript를 배우자';



//문자열이 존재할 때 
const a1 = myString.indexOf('JavaScript');
console.log(a1); // 결과 = 0

const a2 = myString.indexOf('배우자');
console.log(a2); // 결과 = 12 

const a3 = myString.indexOf('a');
console.log(a3); // 결과 = 1

// 문자열 존재 x 
const b1 = myString.indexOf('HTML');
console.log(b1); // 결과 = -1 

const b2 = myString.indexOf('j');
console.log(b2); // 결과 = -1 (대소문자 구별. 대문자 없어서 인식 못함.)


// index 4부터 센다. 없으니까 결과 -1 
const c1 = myString.indexOf('JavaScript', 4);
console.log(c1); // 결과 = -1 


// index 0부터 센다. 있으니까 결과 0 (index 번호 0 이 결과)
const c2 = myString.indexOf('JavaScript', 0);
console.log(c2); 



const targetString = 'JavaScript를 배우자'; 

// Html 에서 클래스 result1 을 찾는다. 찾아서 JavaScript 인덱스를 넣는다. 
document.querySelector('.result1').innerHTML
= targetString.indexOf('JavaScript');

document.querySelector('.result2').innerHTML
=targetString.indexOf('배우자');

document.querySelector('.result3').innerHTML
=targetString.indexOf('a');