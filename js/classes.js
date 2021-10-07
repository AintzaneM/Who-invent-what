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

//console.log(imagesCard.firstName)

const invents = [
    {firstName: "Ada", src : "images/invent-ada.png"},
    {firstName: "Mary", src : "images/invent-heidy.png"},
    {firstName: "Heidy",src : "images/invent-mary.png"},


]

//console.log(invents)


//------------------------------------------------------------------------------------------------//

let randomOptions = validateOptions[Math.floor(Math.random() * validateOptions.length)];
let randomImages = imagesCard[Math.floor(Math.random() *imagesCard.length)];
//console.log(randomImages.firstName)
let randomInvents = invents[Math.floor(Math.random() *invents.length)];
//console.log(randomInvents)

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
    
    let amountClicks = 0;

    for(let i = 0; i<cellsGrid.length; i++) {
            
         cellsGrid[i].addEventListener("click", function(){

            amountClicks++;   
           
            if(amountClicks > 3) {        
                alert("Game Over")

            } else {  
                const openImg = cellsGrid[i].querySelector("img");


                if (randomOptions.includes(i) && openImg.className === "img-close") {
                    openImg.className = "img-open"
                    openImg.setAttribute("src", randomImages.src)
                    const inventImg = document.querySelector(".img-invents");
                    inventImg.style.display = randomInvents.src
                    console.log(randomInvents.src)

                

                }  else {
                     (!randomOptions.includes(i) && openImg.className === "img-open"  )
                    openImg.className = "img-close";

                    openImg.setAttribute("src", "./images/100px.png")
            }

            }
       

           

                // for(let i= 0 ; i < randomInvents; i++) {
                    
                //     for(let j=0 ; j < randomImages; j++) {
            
                //        if (openImg.className = "img-open" && randomInvents.src === randomImages.src){                          
                //            inventImg.setAttribute("src", invents.src)

                          
            
                //        }
                            
                    
                        
                //     }
                // }
                     



        })
    }
}
clickStart(cellsGrid)





const myobj = document.querySelector("script");
myobj.remove();

// function inventsImages(){
    


// // }


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

