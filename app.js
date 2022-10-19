const img = document.querySelector(".img")
const body = document.querySelector("body")

// Another Way below

// const color = ['#C8FFD4','#FDFDBD','red','orange','purple','yellow','blue','green','pink','black']

body.style.backgroundColor = '#C8FFD4'

img.addEventListener('click', changeB)

function changeB(){
    document.body.style.backgroundColor= 'rgb('+ Math.floor(Math.random()*255)+
    ','+ Math.floor(Math.random()*255)+
    ',' + Math.floor(Math.random()*255)+')';

    //Part of Another Way
    // const colorIndex = parseInt(Math.random()*color.length)
    // body.style.backgroundColor = color[colorIndex]
}



