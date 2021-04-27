function getWinner(guess1, guess2) {
    let arr = ['Rock', 'Paper', 'Scissor'];
    if(!arr.includes(guess1) || !arr.includes(guess2)){
        return 'Invalid Guess';
    }
    if(guess1 === guess2)  {
        return 'TIE';
    }
    if((guess1 === 'Paper' && guess2 === 'Rock') || 
       (guess1 === 'Rock' && guess2 === 'Scissor') ||
       (guess1 === 'Scissor' && guess2 === 'Paper') ) {
           return `Player 1 wins!`; 
       }
    if((guess2 === 'Paper' && guess1 === 'Rock') || 
       (guess2 === 'Rock' && guess1 === 'Scissor') ||
       (guess2 === 'Scissor' && guess1 === 'Paper') ) {
        return `Player 2 wins!`; 
    }  
}

module.exports = getWinner;