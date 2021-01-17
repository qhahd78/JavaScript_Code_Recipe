// 시간
const hourElement = document.querySelector('.hour');
// 분
const minuteElement = document.querySelector('.minute');
//초
const secondElement = document.querySelector('.second');

//update 함수 실행. 
update();

// 현재시간 표기 

function update() {
    const currentTime = new Date();

    // 시간 단위 표기
    const hour = currentTime.getHours();
    hourElement.innerText = addZeroPadding(hour);

    // 분단위 표기
    const minute = currentTime.getMinutes();
    minuteElement.innerText = addZeroPadding(minute);

    //초단위 표기 
    const second = currentTime.getSeconds();
    secondElement.innerText = addZeroPadding(second);

    // 자기 자신을 불러와 update  값이 바뀔 때마다 함수가 재실행됨. 리뉴얼 계속 돼서 실시간으로 보임. 
    requestAnimationFrame(update);
}


// 파라미터 num 이 10 미만의 한 자리 숫자면 앞에 0을 붙인 문자열을 반환 . 
function addZeroPadding(num) {
    return String(num).padStart(2, '0');
}