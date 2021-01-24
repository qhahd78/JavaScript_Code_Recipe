// 배열 요소의 데이터를 처리하고 싶을 때 

// 배열.forEach(콜백함수) : 배열의 요소 데이터 콜백 함수로 실행 

const array = ['딸기', '사과', '귤'];

array.forEach((value, index) => {
    // 인덱스와 값을 순서대로 출력한다. 
    console.log(index, value); // 0 '딸기' 1 '사과' 2 '귤'
});