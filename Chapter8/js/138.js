// .box 클래스를 가진 모든 요소의 list 가 boxList 에 저장. 
const boxList = document.querySelectorAll(".box");

// 리스트 각각에 대하여 forEach 문 실행.
// boxList.forEach((targetBox) => {
//     console.log(targetBox)
// })

// for 문으로 출력하기 
const boxLength = boxList.length
for (let index = 0; boxLength; index++) {
    console.log(index)
}