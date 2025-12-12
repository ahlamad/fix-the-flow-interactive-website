// Selecteer de buttons die je nodig hebt
let matchSystemButton = document.querySelector('.match-system-button')
let darkModeButton = document.querySelector('.dark-mode-button')
let lightModeButton = document.querySelector('.light-mode-button')
let applyButton = document.querySelector('.save.button')

// Voeg de click event toe aan de buttons met callback functies
matchSystemButton.addEventListener('click', matchSystemMode)
lightModeButton.addEventListener('click', lightMode)
darkModeButton.addEventListener('click', darkMode)
applyButton.addEventListener('click', saveMode)


// Match system mode wordt uitgevoerd door CSS doordat classes worden verwijderd
function matchSystemMode() {
    document.body.classList.remove('dark-mode')
    document.body.classList.remove('light-mode')
    document.querySelector('.save-button').textContent = "Click here to save!"
    document.querySelector('.mode-title').textContent = "Match System"
    document.querySelector('.mode-description').textContent = "SnappThis will always match your appareance settings."
}

// Functie die de styling van de applicatie verandert door een class toe te voegen, nadat er op geklikt wordt
// Dark mode wordt toegevoegd als thema na de klik
function darkMode() {
    document.body.classList.remove('light-mode')
    document.body.classList.add('dark-mode')
    document.querySelector('.save-button').textContent = "Click here to save!"
    document.querySelector('.mode-title').textContent = "Dark Mode"
    document.querySelector('.mode-description').textContent = "SnappThis will always use a dark mode."
}
// Light mode wordt toegevoegd als thema na de klik
function lightMode() {
    document.body.classList.remove('dark-mode')
    document.body.classList.add('light-mode')
    document.querySelector('.save-button').textContent = "Click here to save!"
    document.querySelector('.mode-title').textContent = "Light Mode"
    document.querySelector('.mode-description').textContent = "SnappThis will always use a light mode."

}

function saveMode() {

}

// Button die opslaat wat de gebruiker heeft gekozen met localStorage
