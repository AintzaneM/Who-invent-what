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

    {firstName: "Ada", src:"./images/ada-lovelace.png" },
    {firstName: "Mary", src: "./images/mary-walton.png" },
    {firstName: "Heidy",src: "./images/heidy-lamarr.png" },
]


const invents = [
    "./images/invent-ada.png",
    "./images/invent-heidy.png",
    "./images/invent-mary.png",
]

//------------------------------------------------------------------------------------------------//

let randomOptions = validateOptions[Math.floor(Math.random() * validateOptions.length)];
let randomImages = imagesCard[Math.floor(Math.random() *imagesCard.length)];
let randomInvents = invents[Math.floor(Math.random() *invents.length)];
const cellsGrid = document.getElementsByClassName("grid-item");



//PLACE IMAGES ON GRID

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


// function placeInvents() {
//     const parentDiv = document.getElementById("game-invent");
//     // for (let i = 0; i > 3; i++) {
//         parentDiv.innerHTML +=`
//             <div id="game-invent">
//                 <img class= "appear-invent" >
//             </div>
//         `;      
//     //}

// }


// function displayInvents () {

//     const gameGrid = document.getElementById("game-grid");
    

//     //const openImages = document.getElementsByClassName("img-open");
//     const inventImgParent = document.getElementById("game-invent"); 
//     const inventImg = document.getElementsByClassName("img-invents");
    
//     let storeImageOpen = []

//     for(let i = 0; i < cellsGrid.length; i++) {
        
//         storeImageOpen++

//         const openImg = document.getElementsByClassName(".img-open");
//         console.log(openImg)

//         if (openImg.className === "img-open" && openImg.src === randomImages[i].src){
            
//             //inventImg.className = "appear-invent"

            
            
//             console.log(randomImages.src)
//         }
          
          
            
//         //     //inventImgParent.className("appear-invent");

//         //     //console.log(openImages.src)

            

            
    
            
    
        

//     }

   

     
// }
// displayInvents()  





//RESET-START AGAIN BUTTON

const reloadBtn = document.querySelector(".reload-button");

function reloadPage () {
    reload = location.reload();
}

reloadBtn.addEventListener("click",reloadPage, false);



//START GAME

function clickStart (cellsGrid){
    
    let amountClicks = 0;

    for(let i = 0; i<cellsGrid.length; i++) {
        //console.log(cellsGrid[i])
            
        cellsGrid[i].addEventListener("click", function(){
            amountClicks++;

                if(amountClicks > 3) {
                    alert("Game Over!! You have reached a maximum of 3 clicks Good luck next time!!!");
                    } else { 

                        const openImg = cellsGrid[i].querySelector("img");
                        const appearImg = document.querySelectorAll("img-invents")
                        
                        

                            if (randomOptions.includes(i) && openImg.className === "img-close" ) {
                                
                                openImg.className = "img-open";
                                openImg.setAttribute("src", randomImages.src);
                                


                            } else {
                                (!randomOptions.includes(i) && openImg.className === "img-open");
                                openImg.className = "img-close";
                                openImg.setAttribute("src", "./images/100px.png");
                                
                            }
                
                        }

        })
    
    }
}
clickStart(cellsGrid)


const remove = document.querySelector("script")
remove.remove();
    
   
        

