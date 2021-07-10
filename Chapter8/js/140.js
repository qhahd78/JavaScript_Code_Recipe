const themeChangeButton = document.querySelector(".theme-change-button");

themeChangeButton.addEventListener('click', () => {
    // body 변경 
    console.log('함냐')
    document.body.classList.toggle('theme-dark')
})