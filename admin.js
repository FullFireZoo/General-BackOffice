import {gf} from './utils/fetch.js';
import {create} from './pages/create.js';

document.getElementById('nav').addEventListener('click',function(e){
    e.preventDefault();
    console.log(e.target.textContent);

    if(e.target.textContent === 'Create'){
        create('body')
    

    }
    document.getElementById('app').textContent = e.target.textContent;
})




