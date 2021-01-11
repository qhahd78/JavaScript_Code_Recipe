// 비교연산자 

console.log('사과' == '사과') // 값이 같음. True 반환. 
console.log(10 < 30); //값이 참임. True 반환 
console.log(20 >= 30); //값이 거짓. False 반환

const array1= [1, 2, 3];
const array2 =[1, 2, 3];
console.log(array1 == array2); // False. 참조하는 곳이 다르기 때문. 

const array3 = [1, 2, 3];
const array4 = array3;
console.log(array3 == array4); // True. 참조하는 곳이 같다. 