// input 가져옴
const nameInput = document.querySelector('.name-input');

// 경고창 띄울 p 가져옴 
const warningMessage = document.querySelector('.warning-message');

//input 에 값이 들어오면 아래의 함수를 실행한다. 
nameInput.addEventListener('input', () => {
    //input 의 value 값 변수로 가져옴 
    const inputStr = nameInput.value;
    //input 의 value 값을 소문자로 변경해 변수로 지정. 
    const normalStr = inputStr.toLowerCase();

    // 소문자로 변경한 그 값이 text를 포함하고 있다면, 
    if(normalStr.includes('test') === true) {
        // p 에 경고문을 출력해준다. 
        warningMessage.textContent = '<test> 가 포함되어 있어요'; 
        //포함 안 하면 공백으로 남겨둔다. 

    } else {
        warningMessage.textContent ='';
    }
});