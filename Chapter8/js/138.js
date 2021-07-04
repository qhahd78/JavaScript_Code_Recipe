// .box 클래스를 가진 모든 요소의 list 가 boxList 에 저장. 
// const boxList = document.querySelectorAll(".box");

// 리스트 각각에 대하여 forEach 문 실행.
// boxList.forEach((targetBox) => {
//     console.log(targetBox)
// })

// for 문으로 출력하기 
// const boxLength = boxList.length
// for (let index = 0; boxLength; index++) {
//     console.log(index)
// }

// box 클래스 가져오기 . 하나하나를 targetBox 로 지정. 
document.querySelectorAll('.box').forEach((targetBox)=> {
    // 클릭 이벤트시, targetBox 의 텍스트 값을 가져온다. 
    targetBox.addEventListener('click', () => {
        alert(`${targetBox.textContent}`)
    })
})