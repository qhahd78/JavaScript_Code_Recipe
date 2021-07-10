const parentElement = document.querySelector('#parent');
// 자식요소 모두 가져오기
console.log(parentElement.children);

const firstElementChild = parentElement.firstElementChild; // 첫번째 자식요소 
console.log(firstElementChild); // 자식 요소1 
console.log(firstElementChild.nextElementSibling); // 자식요소2 
console.log(firstElementChild.parentNode); // 부모요소
