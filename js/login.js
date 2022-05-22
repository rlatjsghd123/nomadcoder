    const login = document.querySelector('#login_form');
    const input = login_form.querySelector("input");
    const h1 = document.querySelector("#greeting");

    
    const HIDE_CLASSNAME = "hide";
    const ITEM_KEY = "username";
function onLoginSubmit(e){

    e.preventDefault();
    const myName = input.value;
    login.classList.add(HIDE_CLASSNAME);
    localStorage.setItem(ITEM_KEY, myName);
    sevedKey(myName)
}

function paintGreetings(username){
    h1.innerText = `hi ${username}`
    h1.classList.remove(HIDE_CLASSNAME);
}


const sevedKey = localStorage.getItem(ITEM_KEY)

sevedKey === null ?  
    (login.classList.remove(HIDE_CLASSNAME),
    addEventListener('submit', onLoginSubmit))
: 
    paintGreetings(sevedKey);


