//DATA STRUCTURES

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

    {firstName: "Ada", src:"ada-lovelace.png",  image: "invent-ada.png"},
    {firstName: "Mary", src: "mary-walton.png", image: "invent-mary.png"},
    {firstName: "Heidy", src: "heidy-lamarr.png", image: "invent-heidy.png" },
]


const invents = [
    "invent-ada.png",
    "invent-heidy.png",
    "invent-mary.png",
]

const imgPath = "../images/";

//------------------------------------------------------------------------------------------------//

let randomOptions = validateOptions[Math.floor(Math.random() * validateOptions.length)];
let randomImages = imagesCard[Math.floor(Math.random() *imagesCard.length)];
let randomInvents = invents[Math.floor(Math.random() *invents.length)];
const cellsGrid = document.getElementsByClassName("grid-item");


//PLACE IMAGES ON GRID

function startGame() {

}

function placeImages() {

    const parentDiv = document.getElementById("game-grid");

    for (let i = 0; i < 9; i++) {
        parentDiv.innerHTML += `
            <div class="grid-item">
                <img class= "img-close" >
            </div>
        `;
    }
}
placeImages()



function checkIfWin () {

    const gameGrid = document.getElementById("game-grid");
    const appearImg = document.querySelector(".img-invents")
    const openImages = document.querySelectorAll(".img-open");
    
    let storeImageOpen = 0;

    for(let i = 0; i < openImages.length; i++) {
        if (openImages[i].className === "img-open" && openImages[i].src.includes(randomImages.src)){
            storeImageOpen++;
            if(storeImageOpen === 3) {
                
                appearImg.setAttribute('src', imgPath + randomImages.image)
                
            }

        }      
    }
 }
 

//RESET-START AGAIN BUTTON

const reloadBtn = document.querySelector(".reload-button");

function reloadPage () {
    reload = location.reload();
}

reloadBtn.addEventListener("click",reloadPage, false);

//START GAME

function clickStart(cellsGrid) {

    let amountClicks = 0;

    for (let i = 0; i < cellsGrid.length; i++) {

        cellsGrid[i].addEventListener("click", function () {

            amountClicks++;

            if (amountClicks > 3) {
                alert("Game Over!! You have reached a maximum of 3 clicks Good luck next time!!!");
            } else {
                const openImg = cellsGrid[i].querySelector("img");

                if (randomOptions.includes(i) && openImg.className === "img-close") {
                    openImg.className = "img-open";
                    openImg.setAttribute("src", imgPath + randomImages.src);
                } else {
                    (!randomOptions.includes(i) && openImg.className === "img-open");
                    openImg.className = "img-close";
                    openImg.setAttribute("src", "../images/100px.png");
                }

                checkIfWin()
            }
        })
    }
}
clickStart(cellsGrid)


const remove = document.querySelector("script")
remove.remove();
    
   
        

