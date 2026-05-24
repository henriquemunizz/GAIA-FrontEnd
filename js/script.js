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