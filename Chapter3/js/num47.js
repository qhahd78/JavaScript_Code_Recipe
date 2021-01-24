// 배열 요소의 데이터를 처리하고 싶을 때 

// 배열.forEach(콜백함수) : 배열의 요소 데이터 콜백 함수로 실행 

const array = ['딸기', '사과', '귤'];

array.forEach((value, index) => {
    // 인덱스와 값을 순서대로 출력한다. 
    console.log(index, value); // 0 '딸기' 1 '사과' 2 '귤'
});


[1, 2, 3, 4, 5, 6, 7, 8]
 
// 짝수 배열 생성하기 
.filter((value) => value % 2 === 0)

// 배열의 짝수 값 처리 
.forEach((value) => {
    console.log(value);
});

//API 등을 통해 가져오는 출력용 데이터 배열 
const userList = [
    { id: 1, name: '곰' , address: '서울'},
    { id: 2, name: '여우', address: '대전'},
    { id: 3, name: '사자', address: '부산'}
];

// 컨테이너 
const container = document.querySelector('.container');

// userList 배열의 각 요소별 루프 처리 
// forEach : 배열 안에 있는 각 요소에 대해 처리하겠다 
userList.forEach((userData) => {
    // 각 요소 데이터를 쓰기 
    container.innerHTML += `
    <div class="card">
        <h2>${userData.name}</h2>
        <p>지역: ${userData.address}</p>
    </div>
    `;
});