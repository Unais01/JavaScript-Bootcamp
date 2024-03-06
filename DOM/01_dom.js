
//Elements Selectors


// /*  getElementById*/
// const heading = document.getElementById('heading');
// heading.style.color = 'purple';

// const list = document.getElementById('list');
// list.style.backgroundColor='purple';


/*  getElementsByClassName*/
// const listItem = document.getElementsByClassName('list-item');

//getElementsByTagName
// const li = document.getElementsByTagName('li');

//
// const li=document.getElementsByName('li');

// console.log(li);

const heading = document.querySelector('#ctn #heading');
heading.style.color='red'

// const li = document.querySelector('.list-item');
// li.style.background='purple';
let color = ['red','green','yellow','purple','pink','black','white']
const li = document.querySelectorAll('.list-item');
li.forEach((liItem)=>{
    let generate = Math.floor(Math.random()*7);
    liItem.style.color=color[generate]
    liItem.innerHTML="shaikh Unais";
})

                                 