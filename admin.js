import {gf} from './utils/fetch.js';
import {create} from './pages/create.js';

document.getElementById('menu').addEventListener('click',function(e){
    e.preventDefault()
     gf('http://localhost:3000/api/v1/'+ e.target.textContent, display)
    
})

function display(data) {
   
    

    for(let info in data) {
        console.log(info)
        const li = document.createElement('li');

        li.innerHTML = `<li>${data[info].id}</li>`
        document.querySelector('ul').appendChild(li);

    }

}




