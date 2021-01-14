// 검색어
// 검색어 id 가져와서 변수에 저장
const searchWordText = document.querySelector('#search-word-input');

// 지역리스트 
// 검색어 다 가져와서 변수에 저장. 
const prefectureList = document.querySelectorAll('#prefecture-list button');

// 문자가 입력될 때마다 데이터 체크
// keyup 이벤트가 searchWordText에 입력되면 다음 함수를 실행
searchWordText.addEventListener('keyup', () => {

    // 입력한 검색어 변수에 저장
    const searchWord = searchWordText.value;

    // 지역 리스트의 루프 처리 
    // element 는 각 요소에 해당. 
    prefectureList.forEach((element) => {
        
        //검색어가 없으면 모든 요소를 표시 
        // 공백이면 hide 클래스 지우기. 
        if (!searchWord || searchWord === '') {
            element.classList.remove('hide');
            return;
        }

        // 데이터 name 가져오기 
        const prefectureName = element.dataset.name;

        // 데이터 영문 name 가져오기 
        const phonetic = element.dataset.phonetic;

        // 검색어와 첫번째 글자 일치 여부에 따라 hide 클래스 사용 결정 
        // hide 클래스가 사용된 요소는 화면에 표시되지 않음 . 
        if(
            searchWord.charAt(0) === prefectureName.charAt(0) || //한글 data값 이랑 서치바에 넣은 값이랑 같은지 확인 
            searchWord.charAt(0) === phonetic.charAt(0) //영어 data값 이랑 서치바에 넣은 값이랑 같은지 확인 
        ) {
            // 같으면 화면에 보이게.
            // 검색어의 첫번째 글자가 일치하는 경우 hide 클래스를 제거하고 화면에 보이게 하기. 
            element.classList.remove('hide');
        } else {
            // 다르면 화면에서 사라지게 
            // 검색어의 첫번째 글자가 일치하지 않는 경우 hide 클래스 추가하고 화면에서 사라지게 하기. 
            element.classList.add('hide');
        }
    });
});