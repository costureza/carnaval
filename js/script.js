header=document.querySelector('.header');
navbar=document.querySelector('.header .navbar');
menuBtn=document.querySelector('#menu-btn');

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menuBtn.classList.remove('fa-xmark');
    navbar.classList.remove('active');

    if(window.scrollY > 0){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
}

var dateOFFset=(24*60*60*1000)*2;
let countDate= new Date().getTime() + dateOFFset;

function countDown(){
    let now=new Date().getTime();
    let gap=countDate -now;

    let second=1000;
    let minute=second*60;
    let hour= minute*60;
    let day= hour*24;

    let d= Math.floor(gap/(day));
    let h= Math.floor((gap%(day))/(hour));
    let m= Math.floor((gap%(hour))/(minute));
    let s= Math.floor((gap%(minute))/(second));

    document.getElementById('day').innerText=d;
    document.getElementById('hour').innerText=h;
    document.getElementById('minut').innerText=m;
    document.getElementById('seconds').innerText=s;

}

setInterval(()=>{
    countDown();
},1000);