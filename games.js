function loadGames(endpoint, containerId, limit = 36) {

fetch(endpoint)
.then(res => res.json())
.then(data => {

const container = document.getElementById(containerId)

data.slice(0, limit).forEach(game => {

const card = document.createElement("div")
card.className = "game-card"

card.innerHTML = `
<a href="${game.link}" target="_blank">
<img src="${game.thumb}" alt="${game.name}">
<p>${game.name}</p>
</a>
`

container.appendChild(card)

})

})
.catch(err => console.log(err))

}
