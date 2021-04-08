const toggleMenu = ()=>{
    const menu = document.querySelector(".menu");
    
    menu.addEventListener("click",()=>{
        const ul = document.querySelector(".nav-links");
        ul.classList.toggle('active');
        menu.classList.toggle('toggle')
    })


}
toggleMenu()