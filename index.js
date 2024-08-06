const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passOne = document.getElementById("password-one")
const passTwo = document.getElementById("password-two") 
const lengthSelect = document.getElementById("lengthSelect")
const generateButton = document.getElementById("generateButton")

if (lengthSelect.options.length === 0) {
    for (let i = 1; i <= 20; i++) {
        const option = document.createElement("option")
        option.value = i
        option.text = i
        lengthSelect.add(option)
    }
}

function randomCharacter() {
    let randomIndex = Math.floor( Math.random() * characters.length)
    return characters[randomIndex]
}

function generatePassword(length) {
    let password = ""
    for (let i = 0; i < length; i++) {
        password += randomCharacter()
    }
    return password 
}

generateButton.addEventListener("click", function() {
    const passwordLength = parseInt(lengthSelect.value, 10)
    passOne.textContent = generatePassword(passwordLength)
    passTwo.textContent = generatePassword(passwordLength)
})

passOne.addEventListener("click", copyToClipboard)
passTwo.addEventListener("click", copyToClipboard)

function copyToClipboard(event) {
    const passwordText = event.target.textContent
    
    navigator.clipboard.writeText(passwordText)
    .then(() => {
        event.target.classList.add("copied")
        setTimeout(() => {
            event.target.classList.remove("copied")
        }, 1000)
    })
    .catch(err => {
        console.error("Failed to copy: ", err)
    })
}