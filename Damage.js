//0 HEALTH, 1 STRENGTH, 2 MAGIC, 3 DEFENSE, 4 MAGICDEFENSE, 5 ACCURACY, 6 EVASION, 7 CRITCHANCE, 8 CRITMULTIPLIER

const charTraits = [100, 20, 30, 12, 10, 90, 5, 50, 1.2]

const charWeapon = [0, 5, 10, 0, 0, 5, 1, 0, 0.05]

const charTotals = [[charTraits[0] + charWeapon[0]], [charTraits[1] + charWeapon[1]], [charTraits[2] + charWeapon[2]], [charTraits[3] + charWeapon[3]], [charTraits[4] + charWeapon[4]], [charTraits[5] + charWeapon[5]], [charTraits[6] + charWeapon[6]], [charTraits[7] + charWeapon[7]], [charTraits[8] + charWeapon[8]]]


const enemyStats = [100, 5, 5, 5, 5, 90, 5, 8, 1.1]


//calculate hit

const evaCalc = Math.floor(Math.random() * 100)
const accCalc = Math.floor(Math.random() * 100)

const hitOrMiss = () => {
    if (evaCalc <= enemyStats[6]) { return "Miss"}
    else if (evaCalc  > enemyStats[6]) {
        if (accCalc <= charTotals[5]) { return "Hit"}
        else if (accCalc > charTotals[5]) { return "Miss"}
    }
}

//calculate crit
const crit = () => {
    if (Math.floor(Math.random() * 100) > charTotals[7]) { return "Normal"}
    else  { return "Crit"}
}

//calculate damage

const physDamage = () => {
    if (hitOrMiss() === "Miss") { return 0 }
    else {
        if (crit() === "Normal") { return charTotals[1] - enemyStats[3]}
        else  { return Math.floor((charTotals[1] - enemyStats[3]) * charTotals[8])}
    }
}

const magDamage = () => {
    if (hitOrMiss() === "Miss") { return 0 }
    else {
        if (crit() === "Normal") { return charTotals[2] - enemyStats[4]}
        else  { return Math.floor((charTotals[2] - enemyStats[4]) * charTotals[8])}
    }
}

const damageDone = [magDamage(), physDamage()]


const playerChoice = (userInput) => {

    if (userInput === "Physical") { return `You hit for : ${damageDone[1]} physical damage. Your enemy has ${enemyStats[0] - damageDone[1]} health left`}
    else if (userInput === "Magic") { return ` You hit for : ${damageDone[0]} magic damage. Your enemy has ${enemyStats[0] - damageDone[0]} health left.` }
    else { return "Please choose either: Physical or Magic"}
}



console.log(playerChoice("Physical"))