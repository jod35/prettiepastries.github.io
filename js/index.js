const nav_button=document.querySelector('i');
const overlay =document.querySelector('.overlay');
const close_button=document.getElementById('close-btn');

overlay.style.display="none";


nav_button.addEventListener('click',()=>{
    overlay.style.display="flex";
    // overlay.style.height="100%";
    // overlay.style.position="absolute"
});

close_button.addEventListener('click',()=>{
    overlay.style.display="none";
})



