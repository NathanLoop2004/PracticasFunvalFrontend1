let buttonDM = document.querySelector('#buttonDM');

buttonDM.addEventListener("click", switchDarkMode);

function switchDarkMode(){
    document.documentElement.classList.toggle("dark")
};