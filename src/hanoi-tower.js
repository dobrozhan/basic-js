module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let turns = Number((2 ** disksNumber - 1));
    let seconds = Number((turns/ (turnsSpeed / 3600)));

    let result = {turns: turns, seconds: seconds};

    return result;
}