// 인코딩 하면 한글만 이상하게 바뀜. 

const a = encodeURI('http://aaa.com/고양이룰루랄ㄹ라옹이봄이.html');
console.log(a);

document.querySelector('#tweetButton').addEventListener('click', () => {
    // 트윗 내용 가져오기 
    let tweetText = document.querySelector('#tweetTextArea').value;

    // #JavaScript 와 빈칸을 트윗 내용에 추가. 
    // value 에 해시태그 값 추가. 
    tweetText += ' #멋사파이팅';

    // 인코딩
    const encodedText = encodeURIComponent(tweetText) ;

    console.log(encodedText)
    // 링크 작성 
    const tweetURL =
        `https://twitter.com/intent/tweet?text=${encodedText}`;

    window.open(tweetURL);
});


