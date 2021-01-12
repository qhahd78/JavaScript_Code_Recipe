// 텍스트 영역 
let textarea = document.querySelector('.textarea');

// 입력 중인 문자수 
let string_num = document.querySelector('.string_num');

//텍스트 입력할 때마다 onKeyUp() 실행
textarea.addEventListener('keyup', onKeyUp);

function onKeyUp() {
    // 입력된 테스트 
    const inputText = textarea.value;

    //문자수 반영
    string_num.innerText = inputText.length;
}