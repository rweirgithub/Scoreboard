let homeScore = document.getElementById("home-score")
let awayScore = document.getElementById("away-score")
let hPoints = 0
let aPoints = 0

function add1Home() {
    hPoints += 1
    homeScore.textContent = hPoints
}

function add2Home() {
    hPoints += 2
    homeScore.textContent = hPoints
}

function add3Home() {
    hPoints += 3
    homeScore.textContent = hPoints
}

function add1Away() {
    aPoints += 1
    awayScore.textContent = aPoints
}

function add2Away() {
    aPoints += 2
    awayScore.textContent = aPoints
}

function add3Away() {
    aPoints += 3
    awayScore.textContent = aPoints
}

function reset() {
    hPoints = 0
    aPoints = 0
    homeScore.textContent = 0
    awayScore.textContent = 0
}