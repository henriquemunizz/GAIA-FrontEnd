function calculateMission(event) {
    event.preventDefault()

    const missionInput = document.getElementById('mission')
    const resultBox = document.getElementById('mission-result')
    const messageText = document.getElementById('mission-message')
    const pointsText = document.getElementById('mission-points')

    const points = parseInt(missionInput.value)

    if(points <= 0 || isNaN(points)) {
        alert("Por favor, selecione uma opção")
        return
    }

    messageText.innerText = "Missão confirmada! A GAIA adicionou pontos extras."
    pointsText.innerText = "+" + points + " pontos extras"

    resultBox.classList.add('show')
}

function calculateMission(event) {
    event.preventDefault()

    const missionInput = document.getElementById('mission')
    const resultBox = document.getElementById('mission-result')
    const messageText = document.getElementById('mission-message')
    const pointsText = document.getElementById('mission-points')

    const points = parseInt(missionInput.value)

    if(points <= 0 || isNaN(points)) {
        alert("Por favor, selecione uma opção")
        return
    }

    messageText.innerText = "Missão confirmada! A GAIA adicionou pontos extras."
    pointsText.innerText = "+" + points + " pontos extras"

    resultBox.classList.add('show')
}

function buyItem(event) {
    event.preventDefault()

    const pointsInput = document.getElementById('points')
    const itemInput = document.getElementById('item')
    const resultBox = document.getElementById('shop-result')
    const messageText = document.getElementById('shop-message')
    const pointsText = document.getElementById('shop-points')

    const userPoints = parseInt(pointsInput.value)
    const itemPrice = parseInt(itemInput.value)

    if(userPoints <= 0 || isNaN(userPoints)) {
        alert("Por favor, digite uma quantidade válida de pontos")
        return
    }

    if(itemPrice <= 0 || isNaN(itemPrice)) {
        alert("Por favor, selecione um acessório")
        return
    }

    if(userPoints >= itemPrice) {
        const total = userPoints - itemPrice

        messageText.innerText = "Compra realizada com sucesso!"
        pointsText.innerText = "Pontos restantes: " + total
    } else {
        messageText.innerText = "Você não possui pontos suficientes."
        pointsText.innerText = "Faltam " + (itemPrice - userPoints) + " pontos"
    }

    resultBox.classList.add('show')
}