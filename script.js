document.querySelector("#underheader").value = "(Please Type A Number)"
let riktig = Math.floor(Math.random()*101)
console.log(riktig)
let forsøk = 1

document.querySelector("#button").addEventListener
("click", function () {
    let inputNumber = document.querySelector("#text").value
    let completionMessage = document.querySelector("#underheader").value

    if (inputNumber == riktig) {
        document.querySelector("#underheader").value = "Gratulerer! Du vant :D"
        console.log("Bra jobba")
        alert("Gratulerer! Du vant på " + forsøk + " forsøk :D")
    } else if (inputNumber < riktig) {
        document.querySelector("#underheader").value = "Skriv et tall høyere enn " + inputNumber
        forsøk++
    } else if (inputNumber > riktig) {
        document.querySelector("#underheader").value = "Skriv et tall lavere enn " + inputNumber
        forsøk++
    }
})

document.querySelector("#luckybutton").addEventListener
("click", function () {
    let luck = Math.floor(Math.random()*100)
    document.querySelector("#text").value = luck

    if (riktig == luck) {
        document.querySelector("#underheader").value = luck + " brought you luck!"
        alert("Gratulerer! Du vant på " + forsøk + " forsøk :D")
    } else {
        document.querySelector("#underheader").value = luck + " did not bring you luck."
        forsøk++
    }
})