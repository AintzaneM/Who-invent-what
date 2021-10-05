// -able to click cards
// -flip cards
// -situation Won 
// -situation Fall


//CHOOSE RANDOM POSITION

let validateOptions = [
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

//console.log(randomOptions)


//CHOOSE RANDOM IMAGES
const imagesCard = [

    {firstName : "Ada" , src: "../images/ada-lovelace.png" },
    {firstName : "Heidy" , src: "../images/heidy-lamarr.png"},
    {firstName: "Mary", src: "../images/mary-walton.png"},
    {firstName : "Placeholder1", src: "../images/100px.png"},
    {firstName : "Placeholder2", src: "../images/100px.png"},
    {firstName : "Placeholder3", src: "../images/100px.png"},
    {firstName : "Placeholder4", src: "../images/100px.png"},
    {firstName : "Placeholder5", src: "../images/100px.png"},
    {firstName : "Placeholder6", src: "../images/100px.png"},
    // {firstName : "WhoInvent?" , src: "../images/who invent what.png"},
]


let randomImages = imagesCard[Math.floor(Math.random() * imagesCard.length)];
//console.log(randomImages)


// console.log(imagesCard[0].src)

//INVENTSARRAY

let invents = [
    [FirstName = "InventAda", src = "images/invent-ada.png"],
    [FirstName = "InventHeidy", src = "images/invent-heidy.png"],
    [FirstName = "InventMary", src = "images/invent-mary.png"],


]
//console.log(invents)







//PLACE IMAGES ON GRID

function placeImages(imagesCard) {
    const parentDiv = document.getElementById("game-grid")
    //console.log(parentDiv)

    for (let i = 0; i < imagesCard.length; i++) {
        parentDiv.innerHTML += `<div class="grid-item"> <img class= "img-open" src= "${imagesCard[i].src} "></div>`
    }

}
placeImages(imagesCard)




//BOTON CLICK-START
const cellsGrid = document.getElementsByClassName("grid-item");

function clickStart (cellsGrid){
        
    for(let i = 0; i<cellsGrid.length; i++) {
        cellsGrid[i].addEventListener("click", function(){
            console.log(i)
        })  
    }
}

clickStart(cellsGrid)


 

 
// // function toggleCards () {
// //     const imagesOpen = document.querySelectorAll(".img-open");
// //     this.classList.toggle('open');
// //     imagesOpen.forEach(image => imagesOpen.addEventListener("click", toggleCards));

// // }



// toggleCards ()

//ENABLE CLICKS CELLS


//console.log(imagesOpen)


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

