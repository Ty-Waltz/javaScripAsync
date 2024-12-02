const publicKey = "3995c943e661a53cc3d672d32ba1c479";
const privateKey = "355ac1bdeafdc71d40e6c49ff6630ddf80b48c1c";

async function fetchMarvelCharacters() {
    const ts = Date.now();
    const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString(); 
    const apiUrl = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const data = await response.json();

        data.data.results.forEach((character) => {
            console.log(`Character: ${character.name}`);
        });

        return data.data.results;
    } catch (error) {
        console.error("Failed to fetch characters:", error);
    }
}

function displayCharacters(characters) {
    const container = document.getElementById("characters");
    container.innerHTML = '';

    characters.forEach((character) => {
        const characterDiv = document.createElement("div");
        characterDiv.classList.add("character");

        characterDiv.innerHTML = `
            <h3>${character.name}</h3>
            <img src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="${character.name}" />
            <p>${character.description || "No description available."}</p>
        `;
        container.appendChild(characterDiv);
    });
}

async function fetchCharacterUpdateUI() {
    const characters = await fetchMarvelCharacters();
    if (characters) {
        displayCharacters(characters);
    }
}

fetchCharacterUpdateUI();
