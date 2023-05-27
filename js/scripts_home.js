document.getElementById('about').addEventListener('mouseenter', (event)=>{
    document.getElementById('dropbg').classList.add('nav-overlay-raised');
    document.getElementById('dropbg').classList.add('nav-overlay-active');
    document.getElementById('about-sub').classList.add('show');
});



document.getElementById('about').addEventListener('mouseleave', (event)=>
{
    document.getElementById('dropbg').classList.remove('nav-overlay-raised');
    document.getElementById('dropbg').classList.remove('nav-overlay-active');
    document.getElementById('about-sub').classList.remove('show');


});


document.getElementById('services').addEventListener('mouseenter', (event)=>{
    document.getElementById('dropbg').classList.add('nav-overlay-raised');
    document.getElementById('dropbg').classList.add('nav-overlay-active');
    document.getElementById('services-sub').classList.add('show');
});



document.getElementById('services').addEventListener('mouseleave', (event)=>
{
    document.getElementById('dropbg').classList.remove('nav-overlay-raised');
    document.getElementById('dropbg').classList.remove('nav-overlay-active');
    document.getElementById('services-sub').classList.remove('show');


});


document.getElementById('contact').addEventListener('mouseenter', (event)=>{
    document.getElementById('dropbg').classList.add('nav-overlay-raised');
    document.getElementById('dropbg').classList.add('nav-overlay-active');
    document.getElementById('contact-sub').classList.add('show');
});



document.getElementById('contact').addEventListener('mouseleave', (event)=>
{
    document.getElementById('dropbg').classList.remove('nav-overlay-raised');
    document.getElementById('dropbg').classList.remove('nav-overlay-active');
    document.getElementById('contact-sub').classList.remove('show');


});