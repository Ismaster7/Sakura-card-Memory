
const cards = [
    {
        numero: 1,
        imagem: "background-image: url('./assets/image/cartas/1.jpg')",
    },
    {
        numero: 1,
        imagem: "background-image: url('./assets/image/cartas/1.jpg')",
    },
    {
        numero: 2,
        imagem: "background-image: url('./assets/image/cartas/2.jpg')",
    },
    {
        numero: 2,
        imagem: "background-image: url('./assets/image/cartas/2.jpg')",
    },
    {
        numero: 3,
        imagem: "background-image: url('./assets/image/cartas/3.jpg')",
    },
    {
        numero: 3,
        imagem: "background-image: url('./assets/image/cartas/3.jpg')",
    },
    {
        numero: 4,
        imagem: "background-image: url('./assets/image/cartas/4.jpg')",
    },
    {
        numero: 4,
        imagem: "background-image: url('./assets/image/cartas/4.jpg')",
    },
    {
        numero: 5,
        imagem: "background-image: url('./assets/image/cartas/5.jpg')",
    },
    {
        numero: 5,
        imagem: "background-image: url('./assets/image/cartas/5.jpg')",
    },
    {
        numero: 6,
        imagem: "background-image: url('./assets/image/cartas/6.jpg')",
    },
    {
        numero: 7,
        imagem: "background-image: url('./assets/image/cartas/7.jpg')",
    },
    {
        numero: 7,
        imagem: "background-image: url('./assets/image/cartas/7.jpg')",
    },
    {
        numero: 8,
        imagem: "background-image: url('./assets/image/cartas/8.jpg')",
    },
    {
        numero: 8,
        imagem: "background-image: url('./assets/image/cartas/8.jpg')",
    },
    {
        numero: 9,
        imagem: "background-image: url('./assets/image/cartas/9.jpg')",
    },
    {
        numero: 9,
        imagem: "background-image: url('./assets/image/cartas/9.jpg')",
    },
    {
        numero: 6,
        imagem: "background-image: url('./assets/image/cartas/6.jpg')",
    },

]

let openCards = [
]


let shuffleCards = cards.sort(() =>{
   return Math.random() > 0.5 ? 2 : -1;
})

function sortear(){
    for(let i = 0; i < cards.length; i++){
        let box = document.createElement("div");
        box.className = "item";
        box.innerHTML = shuffleCards; //[i]
        box.style = cards[i].imagem;
        box.onclick = handleClick;
        document.querySelector("#game").appendChild(box)
        box.textContent = cards[i].numero;

    }
    
}

function handleClick(){
    if(openCards.length < 2){
        this.classList.add("boxOpen");
        openCards.push(this)
    }
    if(openCards.length == 2){
        setTimeout(checkMatch, 500);
    }
};

function checkMatch(){
    if(openCards[0].innerHTML === openCards[1].innerHTML){
        console.log("vitoria")
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    }else{
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    openCards = [];
    if(document.querySelectorAll(".boxMatch").length === cards.length){
        alert("Parabens ! Você venceu.");
        window.location.reload();
    }
}

let carta = new Image()
function trazerCarta(numeroCarta){

}

function main(){
sortear()
}

main()