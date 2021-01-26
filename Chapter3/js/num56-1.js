// id 와 name 키 가지는 유저 데이터 배열 


//유저 데이터 배열 (JSON 형식)
const userDataList = [
    {id: 123, name: '곰'},
    {id: 1021, name: '사자'},
    {id: 6021, name: '여우'}
];

// 입력창
const searchIdInput = document.querySelector('#search-id-input');

// 결과 표시 창 
const searchResult = document.querySelector('#search-result');

// 버튼 눌릴 때마다 이벤트 실행 
searchIdInput.addEventListener('keyup', () => {

    //검색 id 가져오기 
    const searchId = Number(event.target.value); //Number() 은 괄호 안에 들어간 값을 숫자로 변환. 
    // findUser 함수에 searchId 전달.
    findUser(searchId);
});

function findUser(searchId) {
    // data = Json 안의 값들 
    // data.id = Json 안에서 id 값을 찾는다. 
    // Json 안의 id 와 input 에 들어있는 id 가 같으면 맨 아랫줄로 
    const targetData = userDataList.find((data) => data.id === searchId);
    // 만약에 json 에 없는 데이터면 
    if (targetData == null) {
        // 유저검색결과없음 출력 
        searchResult.textContext = '유저 검색 결과 없음';
        return;
    }

    // id 가 json 에 있으면 그 id 값으ㅢ 이름 출력 
    searchResult.textContent = targetData.name;
}