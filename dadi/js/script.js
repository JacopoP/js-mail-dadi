const uDice= document.getElementById("user");
const cDice= document.getElementById("user");
const w= document.getElementById("w");
const p= document.getElementById("p");
const l= document.getElementById("l");
document.querySelector("button").addEventListener("click",
    function(){

        uDice.classList.remove("d1","d2","d3","d4","d5","d6");
        cDice.classList.remove("d1","d2","d3","d4","d5","d6");

        if(!l.classList.contains("hide")){
            l.classList.add("hide")
        }
        if(!p.classList.contains("hide")){
            p.classList.add("hide")
        }
        if(!w.classList.contains("hide")){
            w.classList.add("hide")
        }

        let uN=Math.floor(Math.random() *6) + 1;
        let uC=Math.floor(Math.random() *6) + 1;
        console.log(uN, uC)

        if(uN>uC){
            w.classList.remove("hide")
        }
        else if(uN<uC){
            l.classList.remove("hide")
        }
        else if(uN==uC){
            p.classList.remove("hide")
        }
    }
)