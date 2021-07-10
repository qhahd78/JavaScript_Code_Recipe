// box 클래스를 가진 요소를 가져와 boxList 에 저장(array 형태로)
const boxList = document.getElementsByClassName('box');

for (let index =0; index < boxList.length; index++) {
    console.log(boxList[index].textContent);
};
