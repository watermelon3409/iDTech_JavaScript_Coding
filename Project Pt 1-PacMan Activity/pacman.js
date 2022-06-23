const pacArray = ['./images/PacMan1.png', './images/PacMan2.png']
const pacArrayReverse = ['./images/PacMan3.png', './images/PacMan4.png']
let img = document.getElementById('PacMan')
let pageWidth = window.innerWidth
let i=0
let pos=0
let direction = "forward"
function Run(){
    console.log(i)
    if((pageWidth-img.width)<=pos){
        direction = "reverse"
    }
    else if(pos<=0){
        direction = "forward"
    }
    if(direction=="forward"){
        pos=pos+20
        img.src=pacArray[i]
    }else{
        pos=pos-20
        img.src=pacArrayReverse[i]
    }
    img.style.left=pos+'px'
    if(i==0){
        i++
    }else{
        i--
    }
}
setInterval(Run,200)