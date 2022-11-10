const uDice= document.getElementById("user");
const cDice= document.getElementById("cpu");
const w= document.getElementById("w");
const p= document.getElementById("p");
const l= document.getElementById("l");
let k=true;
document.querySelector("button").addEventListener("mouseover",
    function(){
        k=true;
        let id = null;
        clearInterval(id);
        id = setInterval(frame, 60);
        function frame() {
            if (k==false) {
                clearInterval(id);
            }
            else {
                uDice.classList.remove("d1","d2","d3","d4","d5","d6");
                cDice.classList.remove("d1","d2","d3","d4","d5","d6");

                let uN=Math.floor(Math.random() *6) + 1;
                let cN=Math.floor(Math.random() *6) + 1;

                switch(uN){
                    case 1: uDice.classList.add("d1");
                    break;
                    case 2: uDice.classList.add("d2");
                    break;
                    case 3: uDice.classList.add("d3");
                    break;
                    case 4: uDice.classList.add("d4");
                    break;
                    case 5: uDice.classList.add("d5");
                    break;
                    case 6: uDice.classList.add("d6");
                    break;
                }


                switch(cN){
                    case 1: cDice.classList.add("d1");
                    break;
                    case 2: cDice.classList.add("d2");
                    break;
                    case 3: cDice.classList.add("d3");
                    break;
                    case 4: cDice.classList.add("d4");
                    break;
                    case 5: cDice.classList.add("d5");
                    break;
                    case 6: cDice.classList.add("d6");
                    break;
                }
            }
        }
    }
);

document.querySelector("button").addEventListener("mouseout",
function(){
    k=false;
}
);

document.querySelector("button").addEventListener("click",
    function(){
        k=false;
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
        let cN=Math.floor(Math.random() *6) + 1;

        // cambio numero dado user
        switch(uN){
            case 1: uDice.classList.add("d1");
            break;
            case 2: uDice.classList.add("d2");
            break;
            case 3: uDice.classList.add("d3");
            break;
            case 4: uDice.classList.add("d4");
            break;
            case 5: uDice.classList.add("d5");
            break;
            case 6: uDice.classList.add("d6");
            break;
        }

        // cambio numero dado cpu
        switch(cN){
            case 1: cDice.classList.add("d1");
            break;
            case 2: cDice.classList.add("d2");
            break;
            case 3: cDice.classList.add("d3");
            break;
            case 4: cDice.classList.add("d4");
            break;
            case 5: cDice.classList.add("d5");
            break;
            case 6: cDice.classList.add("d6");
            break;
        }

        // risultato
        if(uN>cN){
            w.classList.remove("hide")
        }
        else if(uN<cN){
            l.classList.remove("hide")
        }
        else if(uN==cN){
            p.classList.remove("hide")
        }
    }
)