// box 클래스를 가진 요소를 가져와 boxList 에 저장(array 형태로)
const boxList = document.getElementsByClassName('box');

// for 문을 돌면서 array 에 있는 요소 하나씩 선택, 콘솔에 출력 
for (let index =0; boxList.length; index++) {
    console.log(boxList)
    console.log(boxList[index])
}