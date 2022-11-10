const invList=["mario.rossi@gmail.com","jacopo.prudentino@gmail.com","massimo.frascati@gmail.com", "massimo.piazza@gmail.com"];
const welcome=document.getElementById("welcome");
const nope=document.getElementById("nope");

document.querySelector("button").addEventListener("click",
function(){
    const mail=document.querySelector("input").value;
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