module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let turns = Number((2 ** disksNumber - 1).toPrecision(17));
    let seconds = Number((turns/ (turnsSpeed / 3600)).toPrecision(17));

    let result = {turns: turns, seconds: seconds};

    return result;
}