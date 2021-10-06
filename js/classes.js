// -able to click cards
// -flip cards
// -situation Won
// -situation Fall


//CHOOSE RANDOM POSITION

const validateOptions = [
    [0, 3, 6],
    [0, 4, 8],
    [0, 1, 2],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
]

let randomOptions = validateOptions[Math.floor(Math.random() * validateOptions.length)];

const imagesCard = [

    {src:"../images/ada-lovelace.png" },
    {src: "../images/mary-walton.png" },
    {src: "../images/heidy-lamarr.png" },
    

]

let randomImages = imagesCard[Math.floor(Math.random() *imagesCard.length)];  


//CHOOSE RANDOM IMAGES


const frontImageCard = [
    {firstName : "WhoInvent?" , src: "../images/who-invent-what.png"}

]



//INVENTSARRAY

let invents = [
    {FirstName : "InventAda", src : "images/invent-ada.png"},
    {FirstName : "InventHeidy", src : "images/invent-heidy.png"},
    {FirstName : "InventMary", src : "images/invent-mary.png"},


]
//console.log(invents)



//PLACE IMAGES ON GRID

function placeImages() {

    const parentDiv = document.getElementById("game-grid")

    for (let i = 0; i < 9; i++) {
        parentDiv.innerHTML += `
            <div class="grid-item">
                <img class= "img-close" >
            </div>
        `;
    }
}
placeImages()

//BOTON CLICK-START


const cellsGrid = document.getElementsByClassName("grid-item");

function clickStart (cellsGrid){

    for(let i = 0; i<cellsGrid.length; i++) {
        
        cellsGrid[i].addEventListener("click", function(){
            
            const openImg = cellsGrid[i].querySelector("img"); 

                if (randomOptions.includes(i) && openImg.className === "img-close") {
                    openImg.className = "img-open"
                    openImg.setAttribute("src", randomImages.src)               

                } else {
                    (!randomOptions.includes(i) && openImg.className === "img-close"  )
                    openImg.className = "img-open";
            
                    openImg.setAttribute("src", "../images/100px.png")
                   
                }  

        })
    }
}
clickStart(cellsGrid)









// -----------------------------------------------------X-----------------------------------//



//     class Game {
//         constructor () {

//         }

//         startGame();
//         .addEventListener();
//     }


//     class Cards {
//         constructor () {

//         }

//         createImages();

//     }

