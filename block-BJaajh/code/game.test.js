let getWinner = require('./game');

test('Rock, Paper equals player 2 wins', () => {
    expect(getWinner('Rock', 'Paper')).toBe(`Player 2 wins!`);
});

test('Paper, Rock equals player 1 wins', () => {
    expect(getWinner('Paper', 'Rock')).toBe(`Player 1 wins!`);
});

test('Rock, Red equals invalid guess', () => {
    expect(getWinner('Rock', 'Red')).toBe('Invalid Guess');
});

test('Scissors, Scissors equals tie', () => {
    expect(getWinner('Scissor', 'Scissor')).toBe('TIE');
});

test('2, 3 equals invalid guess', () => {
    expect(getWinner('2', '3')).toBe('Invalid Guess');    
});


