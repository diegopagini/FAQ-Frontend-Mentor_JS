let arrows = document.getElementsByClassName('arrow');
for (let i = 0; i <= arrows.length; i++) {
  arrows[i].addEventListener("click", function(){
    console.log("Me estan haciendo click")
  })
}

let answer1 = document.getElementById('answer-1');
let arrow1 = document.getElementById('arrow-1"');

arrow1.addEventListener("click", function(){
  answer1.style.display = "block";
  console.log("hola");
});