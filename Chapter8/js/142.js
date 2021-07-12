const container = document.querySelector('.container');
const myBox = document.querySelector('#myBox');

// 3초 뒤 container 에 mybox 로 넣는다. 
setTimeout(()=> {
    container.appendChild(myBox)
}, 3000);