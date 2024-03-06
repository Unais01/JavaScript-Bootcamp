
// const li = document.createElement('li');
// // const li = document.querySelector('.list');
// li.innerHTML = "JS";
// document.querySelector('.list').appendChild(li);

const displayLang=(langName)=>{
    const ul = document.querySelector('.list');
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${langName}`));
    ul.appendChild(li);
}

displayLang("JavaScript");
displayLang("C++");
displayLang("Java");
displayLang("Data Structure And Algorithms");
displayLang("GoLang");

//Edit
//unoptimised
// const li = document.querySelector('.list li:nth-child(1)');
const li = document.querySelector('.list li:last-child');
// li.innerHTML = 'Typescript'; ------>unoptimised
const newLi = document.createElement('li');
// const text = document.createTextNode('TypeScript');
// newLi.appendChild(text);
newLi.appendChild(document.createTextNode('TypeScript'));
li.replaceWith(newLi);



//remove
const ref = document.querySelector('.list li:last-child');
ref.remove()


