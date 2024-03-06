const parent = document.querySelector('#weekdays')
const days = document.querySelector('.list-item');
// console.log(days.parentNode)
// console.log(days.nextElementSibling.nextElementSibling.innerHTML);

const div = document.createElement('div')
div.className='fluid-container';
div.id = 'ctn';
div.style.backgroundColor = 'red';
div.style.padding = '1rem';
div.setAttribute("color","purple")
div.innerHTML ="Dom Manipulation with Javascript";
document.body.appendChild(div)

console.log(div);