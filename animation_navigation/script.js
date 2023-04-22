const nav = document.getElementById('nav')
const btn = document.getElementById('toggle')

console.log(btn);

btn.addEventListener('click',()=>{
    nav.classList.toggle('active')
    
})
