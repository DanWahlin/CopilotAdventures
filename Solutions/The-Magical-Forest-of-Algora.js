const loxMoves = ["Twirl", "Leap", "Spin", "Twirl", "Leap"];
const drakoMoves = ["Spin", "Twirl", "Leap", "Leap", "Spin"];

const effects = {
  "TwirlTwirl": "Fireflies light up the forest.",
  "LeapSpin": "Gentle rain starts pouring.",
  "SpinLeap": "A rainbow appears in the sky.",
};

function danceEffect(loxMove, drakoMove) {
  return effects[loxMove + drakoMove] || "A mysterious effect takes place.";
}

function simulateDance(loxMoves, drakoMoves) {
  const states = [];

  for (let i = 0; i < 5; i++) {
    states.push(danceEffect(loxMoves[i], drakoMoves[i]));
  }

  return states;
}

console.log(simulateDance(loxMoves, drakoMoves));
