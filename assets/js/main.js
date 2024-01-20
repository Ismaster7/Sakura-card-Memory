

const cards = [
    1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9
]

let openCards = [


]

let shuffleCards = cards.sort(() =>{
    Math.random() > 0.5 ? 2 : -1;
})

function sortear(){
    for(let i = 0; i < cards.length; i++){
        let box = document.createElement("div");
        box.className = "item";
        box.innerHTML = shuffleCards[i];
      // let imagem = document.createElement("img")
       //imagem.src = `url(../image/cartas/1.jpg)`
       //${shuffleCards[i]}
       //imagem.style.backgroundSize = "cover";
     box.style.backgroundImage = `url('../image/cartas/${i}.jpg')`;
        document.querySelector(".game").appendChild(box)
     //   box.appendChild(imagem)
    }
    
}



let carta = new Image()
function trazerCarta(numeroCarta){

}

function main(){
sortear(    )
}

main()