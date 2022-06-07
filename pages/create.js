export function create (element){
    const div = document.createElement('div');
        div.className = 'create';
        div.innerHTML = `<h1>Create a new user</h1>`
        document.querySelector(element).appendChild(div);
}