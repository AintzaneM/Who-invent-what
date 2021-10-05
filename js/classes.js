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


const imagesCard = [

    {src: "../images/ada-lovelace.png" },
    {src: "../images/ada-lovelace.png" },
    {src: "../images/ada-lovelace.png" },
    {src: "../images/100px.png"},
    {src: "../images/100px.png"},
    {src: "../images/100px.png"},
    {src: "../images/100px.png"},
    {src: "../images/100px.png"},
    {src: "../images/100px.png"},

]

//CHOOSE RANDOM IMAGES


const frontImageCard = [
    {firstName : "WhoInvent?" , src: "../images/who-invent-what.png"}

]
// console.log(imagesCard[0].src)




//INVENTSARRAY

let invents = [
    {FirstName : "InventAda", src : "images/invent-ada.png"},
    {FirstName : "InventHeidy", src : "images/invent-heidy.png"},
    {FirstName : "InventMary", src : "images/invent-mary.png"},


]
//console.log(invents)



//PLACE IMAGES ON GRID

function placeImages(imagesCard) {

    const parentDiv = document.getElementById("game-grid")

    for (let i = 0; i < imagesCard.length; i++) {
        parentDiv.innerHTML += `
            <div class="grid-item">
                <div class= "img-close" />
            </div>
        `;
    }
}
placeImages(imagesCard)

//BOTON CLICK-START


const cellsGrid = document.getElementsByClassName("grid-item");


function clickStart (cellsGrid){

    for(let i = 0; i<cellsGrid.length; i++) {
        cellsGrid[i].addEventListener("click", function(){
            const openImg = cellsGrid[i].querySelector("div");
           
            //console.log(randomImages)
            


             if(openImg.className === "img-open"){
                 openImg.className = "img-close"
                 //openImg.src = "../images/who invent what.png"
                 //openImg.removeAttribute("src", "randomImages]");



             } else if (openImg.className === "img-close"){
                 openImg.className = "img-open" 
                 let randomImages = imagesCard[Math.floor(Math.random() * imagesCard.length)];
                 //console.log(openImg.style.backgroundImage = randomImages);
                 openImg.style.backgroundImage = "url('../images)"
                 openImg.setAttribute("src", " i")
                 //openImg.src = " "
                 //document.openImg.style.backgroundImage === imagesCard[i]
                 
                 //randomImages.innerHTML
                //  imagesCard[i].innerHTML
                

                
                    //console.log(randomImages)  

             }

            

        })
    }
}
clickStart(cellsGrid)




// checkPosition()
// //     for (image in validateOptions){
//         document.div.style.backroundImage= "url(../images/ada-lovelace.png) "

//     }
// }
// checkPosition()
//document.body.style.backgroundImage = "url('img_tree.png')";


//ENABLE CLICKS CELLS





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

