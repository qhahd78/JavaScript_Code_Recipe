// 초단위용 element
const secondElement = document.querySelector('.second');

// 15초를 목표치로 지정
const goalTime = new Date().getTime() + 15 * 1000;


update();

function update() {
    // 현재 시각
    const currentTime = new Date().getTime();

    // 목표치까지 남은 시간 
    const leftTime = goalTime - currentTime;

    //남은 시간이 0초 미만이면 타이머 정지.
    // 초 단위 표시. 밀리초는 소수점 두 자리까지 . 
    secondElement.innerText = (leftTime / 1000).toFixed(2);

    // 프레임에서 update() 재실행
    requestAnimationFrame(update);
}