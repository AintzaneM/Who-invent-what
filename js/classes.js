// -able to click cards
// -flip cards
// -situation Won
// -situation Fall


//DATA STRUCTURE

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

const imagesCard = [

    {firstName: "Ada", src:"./images/ada-lovelace.png" },
    {firstName: "Mary", src: "./images/mary-walton.png" },
    {firstName: "Heidy",src: "./images/heidy-lamarr.png" },

]

let invents = [
    {src : "images/invent-ada.png"},
    {src : "images/invent-heidy.png"},
    {src : "images/invent-mary.png"},


]



//------------------------------------------------------------------------------------------------//

let randomOptions = validateOptions[Math.floor(Math.random() * validateOptions.length)];
let randomImages = imagesCard[Math.floor(Math.random() *imagesCard.length)];
const cellsGrid = document.getElementsByClassName("grid-item");


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

function clickStart (cellsGrid){

    for(let i = 0; i<cellsGrid.length; i++) {
            
         cellsGrid[i].addEventListener("click", function(){
                
            let counter = 0;
            counter++;
            if(counter > 3) {
                windows.alert("Game Over" )
            }


               


            const openImg = cellsGrid[i].querySelector("img");


                if (randomOptions.includes(i) && openImg.className === "img-close") {
                    openImg.className = "img-open"
                    openImg.setAttribute("src", randomImages.src)
                    


                } else {
                    (!randomOptions.includes(i) && openImg.className === "img-open"  )
                    openImg.className = "img-close";

                    openImg.setAttribute("src", "./images/100px.png")
                }



        })
    }
}
clickStart(cellsGrid)

const myobj = document.querySelector("script");
myobj.remove();

// function invents(){


// }


// let gameActive = true;
// let currentPlayer = " x ";
// let statusGame = ["","","","","","","","",""]
// const displayStatus = document.querySelector(".game-status")

// const winningMessage = () => `Player ${currentPlayer} has won`;
// const drawMessage = () => `Game ended in a draw`;






// function winningConditions () {
//     let roundWon = false;

//     for(let i =0; i<= 7; i ++)  {
//         const winCondition = winningConditions[i];

//         let a = statusGame[winCondition[0]];
//         let b = statusGame[winCondition[1]];
//         let c = statusGame[winCondition[2]];

//         if ( a === "" || b=== "" || c === "") {
//             continue;
//         }
//         if (a === b && b === c) {
//             roundWon = true;
//             break
//         }

//     }
//     if (roundWon) {
//         grid.innerHTML = winningMessage();
//         gameActive = false;
//         return
//     }
// }







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

