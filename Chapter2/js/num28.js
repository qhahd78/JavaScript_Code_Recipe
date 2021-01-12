// 문자열의 양끝 공백 처리하기 
// 문자열 사이의 공백은 안 됨 


const targetString1 = "    안녕     "
const trimmedSting1 = targetString1.trim();
console.log(trimmedSting1);

const targetString2 = "사과를 먹었어요 \n";
const trimmedSting2 = targetString2.trim();
console.log(trimmedSting2); 