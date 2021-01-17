
// 이렇게 하면 가독성 떨어짐. 그러니까 템플릿 문자열 `` (백틱) 활용하기 
// const userName = '고양이';

// const tag = '<div class="container">' +'안녕하세요'+userName + '님' + '</div>';


// 문자열 결합, 변수 이용. 
const userName ='하봄';

const tag = `<div class="container"> 안녕하세요 ${userName} 님</div>`;
console.log(tag); // 결과: <div class="container"> 안녕하세요 하봄 님</div>

const str2 = `123 x 123 은 ${123*123} 입니다.`;
console.log(str2); //결과: '123 x 123 은 15129 입니다. 