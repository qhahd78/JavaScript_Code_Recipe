// 해시 데이터 보관 

const hashes = {}; 

// URL의 파라미터를 배열로 가져오기
const parameters = location.search.split(/& | \?/).filter((value) => {
    return value.includes('=');
});

// hashes[key]=value 의 형태로 객체에 보관
parameters.forEach((parameter) => {
    // hoge=fuga를 ['hoge', 'fuga'] 배열로 정리 
    const parameterList = parameter.split('=');
    const key = parameterList[0];
    // value를 디코딩 
    const value = decodeURIComponent(parameterList[1]);

    hashes
})