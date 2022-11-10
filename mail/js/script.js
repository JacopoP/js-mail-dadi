const invList=["mario.rossi@gmail.com","jacopo.prudentino@gmail.com","massimo.frascati@gmail.com", "massimo.piazza@gmail.com", "simone.icardi@gmail.com"];
const welcome=document.getElementById("welcome");
const nope=document.getElementById("nope");
const main=document.getElementById("main-container");
const loginMenu=document.getElementById("login-container");
const addMenu=document.getElementById("add-container");

document.getElementById("verify").addEventListener("click",
    function(){
        const mail=document.getElementById("mail").value;
        let aux=false;
        for(let i=0; i < invList.length; i++){
            if(mail === invList[i]){
                aux = true;
            }
        }
        if(aux){
            welcome.classList.remove("hide");
            if(!nope.classList.contains("hide")){
                nope.classList.add("hide")
            }
        }
        else{
            nope.classList.remove("hide");
            if(!welcome.classList.contains("hide")){
                welcome.classList.add("hide")
            }
        }
    }
);

document.getElementById("add").addEventListener("click",
    function(){
        main.classList.add("hide");
        loginMenu.classList.remove("hide");
    }
);

document.getElementById("cancel").addEventListener("click",
    function(){
        main.classList.remove("hide");
        loginMenu.classList.add("hide");
    }
);

document.getElementById("login").addEventListener("click",
    function(){
        const userMail=document.getElementById("user").value;
        const password=document.getElementById("password").value;
        if((userMail == "jacopo.prudentino@gmail.com") && (password == "password")){
            loginMenu.classList.add("hide");
            addMenu.classList.remove("hide");
        }
        else{
            alert("Nome user e/o password errati");
        }
    }
);

document.getElementById("return").addEventListener("click",
    function(){
        main.classList.remove("hide");
        addMenu.classList.add("hide");
    }
)

document.getElementById("invite").addEventListener("click",
    function(){
        const newMail = document.getElementById("new-mail").value;
        invList.push(newMail);
        console.log(invList);
    }
)