let arrows = document.getElementsByClassName('arrow');
let answers = document.getElementsByClassName('answer');
for (let i = 0; i < arrows.length; i++) {
  arrows[i].addEventListener("click", function(){

    let currentAnswer = answers[i].style.display;

    if (currentAnswer === '' || currentAnswer === 'none') {
      currentAnswer = 'block'
    } else {
      currentAnswer = 'none'
    }

  })
}