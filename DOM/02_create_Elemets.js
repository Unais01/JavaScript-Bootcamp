const parent = document.querySelector('#weekdays')
const days = document.querySelector('.list-item');
// console.log(days.parentNode)
// console.log(days.nextElementSibling.nextElementSibling.innerHTML);


const names = ['unais', 'kashif', 'rehan', 'ubaid', 'danish', 'anas'];
const color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
const className = ['unais', 'kashif', 'rehan', 'ubaid', 'danish', 'anas'];
const createElement = () => {

    for (let i = 0; i < names.length; i++) {
        const div = document.createElement('div');
        div.setAttribute("class", `${className[i]}`)
        div.id = 'ctn';
        div.style.backgroundColor = color[i];
        div.style.padding = '1rem';
        div.setAttribute("color", "purple");
        div.innerHTML = `Dom Manipulation with Javascript by ${names[i]}`;
        div.style.textTransform="uppercase";
        div.style.color="black";
        div.style.margin = '1rem'
        
        document.body.appendChild(div);

    }

}
createElement();
for (let i = 0; i < names.length-1; i++) {
    
    const first =document.querySelector(`.${names[i]}`).nextSibling;
}
const button = document.createElement('button')
button.innerHTML='click here'
const second = document.querySelector('.kashif').appendChild(button);
console.log(second);



