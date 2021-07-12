const container = document.querySelector('.container');
const myBox1 = document.querySelector('#myBox1');
const myBox2 = document.querySelector('#myBox2');
const box2 = document.querySelector('#box2');

// myBox1 을 container 맨 앞에 추가 
setTimeout(() => {
    container.insertBefore(myBox1, container.firstElementChild);
}, 3000)

// myBox2 를 box2 안에 추가 
setTimeout(()=> {
    container.insertBefore(myBox2, box2);
}, 4000);