const truths = [
    "What is your biggest fear?",
    "Have you ever lied to get out of a situation?",
    "What is the most embarrassing thing you've done?",
    "If you could change one thing about yourself, what would it be?",
    "What is your guilty pleasure?"
];

const dares = [
    "Do 20 push-ups.",
    "Sing a song chosen by the group.",
    "Dance with no music for 1 minute.",
    "Imitate a celebrity until someone guesses who you are.",
    "Let someone tickle you for 30 seconds."
];

function getRandomTruth() {
    const randomIndex = Math.floor(Math.random() * truths.length);
    return truths[randomIndex];
}

function getRandomDare() {
    const randomIndex = Math.floor(Math.random() * dares.length);
    return dares[randomIndex];
}

document.getElementById("truthButton").onclick = function() {
    const truth = getRandomTruth();
    document.getElementById("result").innerText = "Truth: " + truth;
};

document.getElementById("dareButton").onclick = function() {
    const dare = getRandomDare();
    document.getElementById("result").innerText = "Dare: " + dare;
};
