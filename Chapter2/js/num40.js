// /어저구/.문자열  :  문자열과 어저구의 일치 여부 확인 => 진리값 반환 (True False)
// 입력한 문자가 0으로 시작해 10자리 ~ 11자리가 아니라면 경고창을 띄운다. 


// 전화번호 입력란 input
const phoneNumberText = document.querySelector('#phoneNumberText');

// 경고 메세지 띄우는 p
const warningMessage = document.querySelector('#warningMessage');

// 문자가 입력될 때마다 함수 실행. 
phoneNumberText.addEventListener('keyup', () => {
    // input 에 입력된 값. 
    const phoneNumber = phoneNumberText.value;
    // - 이 있다면 공백으로 변경. 
    const trimmedPhoneNumber = phoneNumber.replace(/-/g, '');
    // 0 으로 시작하는 10자리 혹은 11자리 번호 형식 체크 
    if (/^[0][0-9]{9,10}$/.test(trimmedPhoneNumber) === false) {
        warningMessage.innerText = '전화번호의 형식에 맞춰서 입력해주세요.';

    } else {
        warningMessage.innerText = ' ';
    }


});