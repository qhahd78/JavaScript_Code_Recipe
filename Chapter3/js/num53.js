// 배열 결합하기 

// 여러 개의 배열을 하나로 결합시키기 

const array1 = ['곰', '사자'];
const array2 = ['여우']; 
const array3 = array1.concat(array2); // array1 과 array2 을 결합해서 array3에 넣기 

console.log(array3);

// 스프레드 연산자를 사용해 [... 배열이름] 하면 요소의 데이터가 전부 표시된 배열을 가져온다. 

const array4 = ['곰', '사자'];
console.log([...array4]); // array4 내용 전부 출력 

const array5 = ['곰', '사자'];
const array6 = ['여우'];
const array7 = [...array5, ...array6]; // array 7 에 array5 와 6의 내용이 다 들어간다. 
console.log(array7); // 곰 사자 여우 다 들어간 array7

