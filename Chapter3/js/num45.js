// 다수의 데이터를 다룰 때 배열을 사용한다. 

const array1 = []; // 빈 배열 
const array2 = [0, 2, 3]; //0, 2, 8 이 들어 있는 데이터 타입 
const array3 = ['곰', '토끼']; // 곰, 여우가 들어 있는 데이터 타입 
const array4 = [1, '곰', false]; // 곰 여우가 들어 있는 데이터 타입 
console.log(array4); // 콘솔에 array 4 출력 

// 배열 안에 배열도 가능 
const array5 = [[1, 1, 1], [2, 2, 2]];
const array6 = [{ id: 1, name: '곰'}, { id: 2, name: '곰'}]; // 두 개의 객체가 들어감. 
console.log (array6); // 배열 전체를 출력 
console.log(array6[0]); // 0번 객체를 출력 