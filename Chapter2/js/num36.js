// 성 입력하는 input
const familyNameText = document.querySelector('#familyNameText');

// 이름 입력하는 input
const firstNameText = document.querySelector('#firstNameText');

// 이름 전체 나오는 곳 
const fullName = document.querySelector('#fullName');

// familyNameText 에 keyup 이라는 이벤트가 일어나면 onKeyUp 함수 실행
familyNameText.addEventListener('keyup', onKeyUp)
firstNameText.addEventListener('keyup', onKeyUp)

function onKeyUp() {
    // value 값 가져와서 변수에 저장.
    const familyName =familyNameText.value;
    const firstName = firstNameText.value; 

    // fullName 에다가 아래 내용 추가 
    fullName.innerHTML = `${familyName} ${firstName}`;

}