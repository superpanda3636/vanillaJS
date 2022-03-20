const loginForm = document.body.querySelector("#login-form");
const loginInput = document.body.querySelector("#login-form input");
loginInput.style.top = "1%";
loginInput.style.left = "5%";
loginInput.style.position = "absolute";
loginInput.style.fontSize = "20px";
loginInput.style.fontFamily = "Georgia";

const loginButton = document.body.querySelector("#login-form button");
loginButton.innerText = "Login";
loginButton.style.top = "1.3%";
loginButton.style.left = "17%";
loginButton.style.position = "absolute";

const greeting = document.body.querySelector("#greeting");
greeting.style.zIndex = "2";
greeting.style.color = "white";

const LOGIN_ITEM_KEY = "username";

function onLoginBtnClick(event) {
    event.preventDefault();
    
    const inputUsername = loginInput.value;
    const storageUsername = localStorage.getItem(LOGIN_ITEM_KEY);

    if (storageUsername === null){
        if (inputUsername === null || inputUsername === ""){
            alert("You need to put username !");
            loginInput.focus();
            return;
        }
        doLogin(inputUsername);
    }else{
        doLogout();
    }
}

function setLogin(){

    const storageUsername = localStorage.getItem(LOGIN_ITEM_KEY);

    if (storageUsername !== null){
        doLogin(storageUsername);
    }
}

function doLogin(username){
    loginInput.innerText = "";
    loginInput.classList.add("hidden");
    loginButton.innerText = "Logout";
    loginButton.style.fontSize = "15px";
    loginButton.style.fontFamily = "Georgia";
    greeting.innerText=`Hi, ${username} !`;
    greeting.style.fontSize = "30px";
    greeting.style.fontFamily = "Georgia";
    localStorage.setItem(LOGIN_ITEM_KEY, username);
}


function doLogout(){
    loginInput.classList.remove("hidden");
    loginInput.innerText = "";
    loginButton.innerText = "Login";
    greeting.innerText="";
    localStorage.removeItem(LOGIN_ITEM_KEY);
}

setLogin();
loginButton.addEventListener("click", onLoginBtnClick);