// 함수 

function myFunction(a) {
    const result = a+2;
    return result;
}

// 파라미터의 개수는 제한 x 콤마로 구분해 전달. 
function calcSum(a, b, c) {
    const result = a+b+c;
    return result;
}

//파라미터가 없는 함수도 만들 수 있다. 
// 함수에서 반환되는 결과를 '반환값', 또는 '결과 반환값' 이라고 하며, return 으로 처리한다. 

function myFunction() {
    console.log('안녕하세요');
    return 100; 
}

//반환값이 없으면 반환값 자체를 생략할 수도 있다. 
function myFunction() {
    console.log('안녕하세요');
}

// return 구문으로 함수가 종료되기 때문에 return 의 아랫부분은 코드를 입력해도 
// 실행되지 않는다 .

function myFunction () {
    return 100; 

    //여기부터는 실행 안 됨 
    console.log('안녕하세요');
}

// return 구문은 하나의 함수 내에서 몇 번이라도 사용 가능. 

function myFunction(a, b) {
    //a 가 100 이상이면 a 반환
    if(a >= 100) {
        return a;
    }

    return b;
}

// 정의한 함수를 실행하려면 함수명 뒤에 () 붙이기. 
//파라미터 있으면 () 안에 적기. 

//함수 정의
function calcFuction(price, tax) {
    const result = price + price * tax ;
    return result;
}

//함수 실행하고, 반환값을 myResult에 대입. 
const myResult = calcFuction(100, 0.1);
console.log(myResult); //결과 110

//전달할 파라미터 없으면 () 안에는 입력 x 

function myFunction() { 
    console.log('안녕하세요?');
}

//myFunction 실행 
myFunction(); // 결과 안녕하세요