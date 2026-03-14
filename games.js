function loadGames(type, containerId){

fetch("https://tyroneunblockedgames.com/generate_github_games_json.php?type="+type)

.then(res => res.json())

.then(data => {

const container = document.getElementById(containerId)

container.innerHTML=""

data.forEach(game => {

const card = document.createElement("div")

card.className="game-card"

card.innerHTML = `
<a href="${game.link}" target="_blank">
<img src="${game.thumb}" alt="${game.name}">
<h3>${game.name}</h3>
</a>
`

container.appendChild(card)

})

})

}
