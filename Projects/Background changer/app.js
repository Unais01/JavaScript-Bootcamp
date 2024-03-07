const box  = document.querySelectorAll('.box');
const body = document.querySelector('body');
const colorname = document.createElement('div');
colorname.setAttribute("class","colorname");
const heading = document.querySelector('#heading');
heading.appendChild(colorname);
// console.log(colorname);

box.forEach((box)=>{
    box.addEventListener("click",(e)=>{
        if(e.target.id==='red'){
            let id =e.target.id;
            body.style.backgroundColor=id;
            colorname.innerHTML=id;
            document.getElementById(id).style.border='2.5px solid black';
            
            
        }
        if(e.target.id==='green'){
            let id =e.target.id;
            body.style.backgroundColor=id;
            colorname.innerHTML=id;
            document.getElementById(id).style.border='2.5px solid black';
            
        }
        if(e.target.id==='yellow'){
            let id =e.target.id;
            body.style.backgroundColor=id;
            colorname.innerHTML=id;
            document.getElementById(id).style.border='2.5px solid black';
            
        }
        if(e.target.id==='purple'){
            let id =e.target.id;
            body.style.backgroundColor=id;
            colorname.innerHTML=id;
            document.getElementById(id).style.border='2.5px solid black';

        }
    });

});