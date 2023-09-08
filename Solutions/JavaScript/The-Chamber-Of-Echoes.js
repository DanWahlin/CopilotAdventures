const echoes = [3, 6, 9, 12];

function predictNext(echoes) {
    let difference = echoes[1] - echoes[0];
    let next = echoes[echoes.length - 1] + difference;
    return next;
} 

console.log(predictNext(echoes));

