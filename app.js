const p1 = {
    score: 0,
    button: document.querySelector('#p1button'),
    display: document.querySelector('#p1display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2button'),
    display: document.querySelector('#p2display')
}


const resetbutton = document.querySelector('#reset');
const select = document.querySelector('#playto');

let winningScore = select;
let isGameOver = false;

function updateScores(player, opponent)
{
    if(!isGameOver){
        player.score += 1;
    if(player.score === winningScore){
        isGameOver = true;
        player.display.classList.add('has-text-success');
        opponent.classList.add('has-text-danger');
        player.button.disabled = true;
        opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
    }
    
}






p1.button.addEventListener('click', function(){
updateScores(p1,p2)
})

p2.button.addEventListener('click', function(){
    updateScores(p2,p1)
})

resetbutton.addEventListener('click', reset)

select.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
})


function reset(){
    isGameOver = false;
    p1.score = 0;
    p2.score = 0;
    p1.display.textContent = 0;
    p2.display.textContent = 0;
    p1.display.classList.remove('has-text-danger', 'has-text-success');
    p2.display.classList.remove('has-text-success', 'has-text-danger');
    p1.button.disabled = false;
    p2.button.disabled = false;

}