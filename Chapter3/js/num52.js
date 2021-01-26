// 배열 요소 부분 변환

// 배열 내 요소를 다른 요소로 변환 

const array3 = ['사과', '귤'];
array3.splice(1, 0, '바나나'); // 인덱스 1의 위치에서 0개의 요소를 삭제하고, '바나나' 추가 
// 인덱스 1 위치에 바나나가 들어감. 

console.log(array3);

const array4 = ['사과', '귤'];
array4.splice(1, 1, '바나나', '딸기'); // 인덱스 1의 위치에서 1개의 요소를 삭제, '바나나' , '딸기' 추가 
// 인덱스 1 위치의 귤을 삭제 후 바나나 딸기 추가 
console.log(array4); 