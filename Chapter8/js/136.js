document.querySelector('#foo');

// list 클래스요소 안에 2번쨰 .item 선택
const choice = document.querySelector('.list .item:nth-child(2)');
choice.innerHTML = " 바뀐다. ";

// 만약 요소가 하나 이상이면 가장 첫번째 요소 반환. 