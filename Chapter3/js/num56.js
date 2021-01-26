const myArray = ['곰', '사자', '여우', '원숭이'];

// 배열에서 사자를 가져온다. 
const targetUser = myArray.find((element) => element === '사자');

// 이렇게도 가능
// const targetUser = myArray.find((element) => {
//     return element === '사자'
// });

console.log(targetUser); // 사자 