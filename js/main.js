//CHOOSE RANDOM POSITION

let validateOptions = [
    [0,3,6],
    [0,4,8],
    [0,1,2],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    
]



let randomOptions = validateOptions[Math.floor(Math.random()*validateOptions.length)];

//console.log(randomOptions)

//CHIOOSE RANDOM IMAGES
let images = [
    ["images/ada-lovelace.png"],
    ["images/heidy-lamarr.png"],
    ["images/mary-walton.png"],
]

let randomImages = images[Math.floor(Math.random()*images.length)];
console.log(randomImages)

//ENABLE CLICKS CELLS

const cells = document.getElementsByClassName("grid-item")
for (let i=0; i< cells.length; i++) {
    cells[i].addEventListener('click',function(){
        console.log(i)
    })
}




//








