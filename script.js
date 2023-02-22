let inputs = document.querySelectorAll('.element');
let container = document.querySelector('.container');
let start = document.querySelector('.start');
let h1 = document.querySelector('h1');
let line = document.querySelector('.line');
let winnerText = document.querySelector('.winner');
let bg = document.querySelector('.bg');
let move = true; // circle or cross (true = cross)
let game = false;
let score = 0;

function gameStart (){
    start.classList.add('display_none');
    container.classList.remove('display_none');
    h1.innerHTML = 'Сейчас ходит крестик';
    move = true;
    line.classList.add('display_none');
    bg.classList.add('display_none');
    inputs.forEach(element => {
        if (element.classList.contains('cross')){
            element.classList.remove('cross');
        } else if (element.classList.contains('circle')){
            element.classList.remove('circle');
        }
    })
}

function gameEnd (winner){
    start.style = 'position: fixed; top: 50%; z-index: 20;';
    start.classList.remove('display_none');
    start.innerHTML = 'Играть снова';
    bg.classList.remove('display_none');
    h1.innerHTML = '';
    score = 0;
    if (winner == 'Ничья'){
        winnerText.innerHTML = winner;
    } else{
        winnerText.innerHTML = `Победил ${winner}!`;
    }
}

let win = (array, type) => {
    if (array[0].classList.contains(type) && array[1].classList.contains(type) && array[2].classList.contains(type)){
        line.style = 'top: 15%';
        return true;
    } else if (array[3].classList.contains(type) && array[4].classList.contains(type) && array[5].classList.contains(type)){
        line.style = 'top: 48.5%';
        return true;
    } else if (array[6].classList.contains(type) && array[7].classList.contains(type) && array[8].classList.contains(type)){
        line.style = 'bottom: 15%';
        return true;
    } else if (array[0].classList.contains(type) && array[3].classList.contains(type) && array[6].classList.contains(type)){
        line.style = 'transform: rotate(90deg); top: 48.4%; left: -33.5%;';
        return true;
    } else if (array[1].classList.contains(type) && array[4].classList.contains(type) && array[7].classList.contains(type)){
        line.style = 'transform: rotate(90deg); top: 48.4%; left: 0;';
        return true;
    } else if (array[2].classList.contains(type) && array[5].classList.contains(type) && array[8].classList.contains(type)){
        line.style = 'transform: rotate(90deg); top: 48.4%; left: 33.5%;';
        return true;
    } else if (array[0].classList.contains(type) && array[4].classList.contains(type) && array[8].classList.contains(type)){
        line.style = 'transform: rotate(45deg); top: 49%; left: -16%; width: 800px;';
        return true;
    } else if (array[2].classList.contains(type) && array[4].classList.contains(type) && array[6].classList.contains(type)){
        line.style = 'transform: rotate(135deg); top: 49%; left: -16%; width: 800px;';
        return true;
    } else {
        return false;
    }
}

start.addEventListener('click', () => {
    gameStart();
})

inputs.forEach(element => {
    element.addEventListener('click', () => {
        if (!element.classList.contains('cross') && !element.classList.contains('circle')){
            if (move == true){
                element.classList.add('cross');
                move = false;
                h1.innerHTML = 'Сейчас ходит нолик';
            } else {
                element.classList.add('circle');
                move = true;
                h1.innerHTML = 'Сейчас ходит крестик';
            }

            // inputs.forEach((input) => {
            //     if (!input.classList.contains('cross') && !input.classList.contains('circle')){
            //         draw = false;
            //         // return;
            //     } else {
            //         draw = true;
            //     }
            //     console.log(draw);
            // });
            score++;
            if (win(inputs, 'cross')){
                gameEnd('крестик');
                line.classList.remove('display_none');
            } else if (win(inputs, 'circle')){
                gameEnd('нолик');
                line.classList.remove('display_none');
            } else if (score == 9){
                gameEnd('Ничья');
            }
        }
    })
});

