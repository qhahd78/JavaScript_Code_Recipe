const today = new Date(); 

document.querySelector('#main').innerHTML = `
<h1>오늘 ${today.getMonth() +1} /${today.getDate()}의 날씨 

지금은 ${today.getHours()} 시 ${today.getMinutes()} 분 ${today.getSeconds()} 초에요</h1>

<p>천안은 눈이 와요</p>
`;