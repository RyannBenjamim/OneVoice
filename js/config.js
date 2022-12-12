const containerSentimentos = document.querySelector(".container")
const imagenUrl = document.querySelector('.imagenUrl')
const cardText = document.querySelector('.cardText')
const btnAdcionar = document.querySelector('.btnAdcionar')

// ------------------- Adicionar novo card ------------------- //

btnAdcionar.addEventListener('click', () => {
    alert("foiiiiiii")
    const div = document.createElement('div')

    div.classList.add('sentimento-box')
    div.innerHTML = `
        <img src="${imagenUrl.value}" alt="${cardText.value}">
        <p class="info">${cardText.value}</p>
    `
    containerSentimentos.appendChild(div)
})