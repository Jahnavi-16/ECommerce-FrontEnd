const bar  = document.getElementById('bar');
const nav = document.getElementById('nav_bar');
const cross  = document.getElementById('close');
const MainImg =document.getElementById('MainImg')
const smallimg =document.getElementsByClassName('small-img')
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}

if(cross){
    cross.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}

smallimg[0].onclick=function(){
    MainImg.src = smallimg[0].src;
}
smallimg[1].onclick=function(){
    MainImg.src = smallimg[1].src;
}
smallimg[2].onclick=function(){
    MainImg.src = smallimg[2].src;
}
smallimg[3].onclick=function(){
    MainImg.src = smallimg[3].src;
}