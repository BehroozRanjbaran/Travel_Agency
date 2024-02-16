Array.from(document.getElementsByTagName('input')).forEach((e , i) =>{
    e.addEventListener('keyup' , (el)=>{
        if (e.value.length> 0){
            document.getElementsByClassName('bi-caret-down-fill')[i].style.transform = "rotate(180deg)";
        } else {
            document.getElementsByClassName('bi-caret-down-fill')[i].style.transform = "rotate(0deg)";
        }
    })
})


let menu-btn = document.getElementsByClassName('bi-three-dots')[0];
let menu-bx = document.getElementById('menu-bx');

menu-btn.addEventListener('click' , ()=> {
    menu-bx.classList.toggle('ul_active');
})