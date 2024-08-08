console.log("Script running...")
// Task 1: Intro section
// Implement the DOM manipulation code flow such that when you click the "Click for location" button, the text below says "1300 Boynton Ave (moving soon!)"
// Make sure to add whatever IDs/classes you need to select the necessary elements
let loca = document.getElementById("location")
let pTag = document.querySelector("#locationText")

console.log(loca)
console.log(pTag)
loca.addEventListener("click", function(event){
  pTag.textContent="1300 Boynton Ave (moving soon!)"
})



// Task 2: Our Values section
// Implement the DOM manipulation code flows for each of the SCORE <h3> tags such that when you click on them, the text changes to the full value
// S -> Self-awareness, C -> Consistency, O -> Ownership, R -> Resilience, E -> Excellence

let s = document.getElementById("sChange")
let c = document.getElementById("cChange")
let o = document.getElementById("oChange")
let r = document.getElementById("rChange")
let e = document.getElementById("eChange")

s.addEventListener("click", function(event){
  s.textContent="Self-awareness"
})

c.addEventListener("click", function(event){
  c.textContent="Consistency"
})

o.addEventListener("click", function(event){
  o.textContent="Ownership"
})

r.addEventListener("click", function(event){
  r.textContent="Resilience"
})

e.addEventListener("click", function(event){
  e.textContent="Excellence"
})



// Task 3: Uniform section
// Implement the DOM manipulation code flows for each of the images such that when your mouse is over the image, it displays the back image and when it is off the image, it displayes the front image
// First image: Mouse over -> joggers-front.webp, mouse off -> joggers-back.webp
// Second image: Mouse over -> sweater-front.webp, mouse off -> sweater-back.webp
let image = document.querySelector("#jog")
let image2 = document.querySelector("#sweat")

console.log(image)
console.log(image2)

image.addEventListener("mouseover", function(event){
  console.log("mouse over")
 image.src ="joggers-back.webp"
})

image.addEventListener("mouseout", function(event){
 image.src ="joggers-front.webp"
})

image2.addEventListener("mouseover", function(event){
 image2.src ="sweater-back.webp"
})

image2.addEventListener("mouseout", function(event){
 image2.src ="sweater-front.webp"
})



// EXTRA CREDIT
// Implement the DOM manipulation code flows for each of the SCORE <h3> tags such that when your mouse is over them, the text color changes to #3ab54b (and back to black when it is off it)








