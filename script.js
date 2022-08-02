let firstImg = document.querySelector('.firstImg')
let secondImg = document.querySelector('.secondImg')
let firstIcon = document.querySelector('.firstIcon')
let secondIcon = document.querySelector('.secondIcon')
let h2 = document.getElementsByTagName('h2')[0]
let price = document.querySelector('.price')
let one = document.querySelector('.addOne')
let quantity = document.querySelector('.quantity')
let circle = document.getElementsByTagName('span')[0]
let menuHamburger = document.querySelector(".menuHamburguer")
let a =1
let b = 0
function troca() {  
        firstImg.style.display = "none"
        secondImg.style.display = "initial"
        secondIcon.style.transform = "scale(0%)"
        firstIcon.style.transform = "scale(100%)"
        h2.innerHTML = "PASSION"
        price.innerHTML = "25$"
}
function secondChange(){
         firstImg.style.display = "initial"
        secondImg.style.display = "none"
        firstIcon.style.transform = "scale(0%)"
        secondIcon.style.transform = "scale(100%)"
        h2.innerHTML = "COSINESS"
        price.innerHTML = "15$"
}
function add(){
a+=1
one.innerHTML = a
}
function less(){
if(a > 0){
a-=1
one.innerHTML = a
}
}
function addBag(){
        if(a == 0){
        circle.style.transform = "scale(0%)"
        } else{
        circle.style.transform = "scale(100%)"
        quantity.innerHTML = +a
        }
}

function Hamburguer(){
if(b == 0){
 menuHamburger.classList.add('moveMenu')
 return b = 1
} else{
 menuHamburger.classList.remove('moveMenu')
 return b = 0
}
}