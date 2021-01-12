// (파라미터) => {처리내용}

// 함수의 정의 

const calcSum = (a, b, c) => {
    const result = a + b + c;
    return result; 
}

// 함수 실행 
calcSum(1, 2, 3); //결과 6


//함수 정의 
const myFunction1 = (a) => {
    return a+2;
}; 

//함수 정의 (괄호 생략)
const myFunction2 = a => {
    return a +2 ; 
}; 

// 화살표 함수의 정의가 한 줄인 경우 {} 와 return 생략 . 
const myFunction2 = (a) => a + 2;