const cardNumber = document.querySelector("#number")
//const bankImage = document.querySelector("#bank-image")
const cardBackground = document.querySelector(".card-background")

// region create image element
const bankImage = document.createElement("img")
bankImage.classList.add('bank-image')
bankImage.style.display = 'none'
cardBackground.appendChild(bankImage)

// endregion

const card = {
    number: '',
    expiration: '',
    ccv: ''
}

const banks = {
    visa: 'images/visa.png',
    mastercard: 'images/mastercard.png',
    maestro: 'images/maestro.png'
}

// region cardNumber validation
const validateCardNumber = () => {

    const isValid = (character) => {
        const validNumbers = '1234567890';
        return validNumbers.includes(character);
    }

    const toValidate = cardNumber.value.split('')

    const validCardNumber = toValidate.filter(isValid).slice(0, 16)

    if (parseInt(validCardNumber[0]) === 4) {
        bankImage.src = banks.visa
        bankImage.style.display = 'block'
    }
    if (parseInt(validCardNumber[0]) === 5) {
        bankImage.src = banks.mastercard
        bankImage.style.display = 'block'
    }
    if (parseInt(validCardNumber[0]) === 6) {
        bankImage.src = banks.maestro
        bankImage.style.display = 'block'
    }
    if(!([4,5,6].includes(parseInt(validCardNumber[0])))){
        bankImage.style.display = 'none'
    }

    if (validCardNumber.length === 16) {
        cardNumber.classList.add("input-success");
        card.number = validCardNumber.join('')
    }
    else{
        cardNumber.classList.remove("input-success")
    }
    let i = 0;
    for (i in validCardNumber) {
        if (i % 4 === 3 && i < 13) {
            validCardNumber[i] = `${validCardNumber[i]}-`
        }
    }
    cardNumber.value = validCardNumber.join('')

}

cardNumber.addEventListener('input', (event) => {
        if(event.inputType === "deleteContentBackward"){
            cardNumber.classList.remove("input-success")
        }
        if (event.inputType !== "deleteContentBackward") {
            validateCardNumber()
        }
    }
)
// endregion