const cardNumber = document.querySelector("#number")
const cardBackground = document.querySelector(".card-background")
const price = document.querySelector("#price")
const button = document.querySelector("#pay-button")
let isValidCard = false
const payCard = document.querySelector('#if-valid')
payCard.style.display = 'none'
const gameOver = document.querySelector('#game-over')
gameOver.style.display = 'none'
const notGameOver = document.querySelector('#not-game-over')

// region create image element
const bankImage = document.createElement("img")
bankImage.classList.add('bank-image')
bankImage.style.display = 'none'
cardBackground.appendChild(bankImage)

// endregion

//region create card object

const card = {
    number: '',
    expiration: '',
    ccv: '',
    money: 500000
}

//endregion

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
        cardNumber.classList.remove("input-fail");
        bankImage.style.display = 'block'
    }
    if (parseInt(validCardNumber[0]) === 5) {
        bankImage.src = banks.mastercard
        cardNumber.classList.remove("input-fail");
        bankImage.style.display = 'block'
    }
    if (parseInt(validCardNumber[0]) === 6) {
        bankImage.src = banks.maestro
        cardNumber.classList.remove("input-fail");
        bankImage.style.display = 'block'
    }
    if(!([4,5,6].includes(parseInt(validCardNumber[0])))){
        bankImage.style.display = 'none'
        cardNumber.classList.add("input-fail");
    }

    if (validCardNumber.length === 16 && [4,5,6].includes(parseInt(validCardNumber[0]))) {
        cardNumber.classList.add("input-success");
        isValidCard = true;
        payCard.style.display = 'block'
        card.number = validCardNumber.join('')
    }
    else{
        cardNumber.classList.remove("input-success")
    }
    let i = 0;
    for (i in validCardNumber) {
        if (i % 4 === 3 && i < 13) {
            validCardNumber[i] = `${validCardNumber[i]} `
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

//region priceValidation
const validatePrice = () => {

    const isValid = (character) => {
        const validNumbers = '1234567890';
        return validNumbers.includes(character);
    }

    const toValidate = price.value.split('')

    const validPrice = toValidate.filter(isValid).slice(0, 16)
    price.value = validPrice.join('')

}

price.addEventListener('input', validatePrice)
//endregion

//region button event
const balance = document.querySelector('#current-balance')
balance.innerHTML = card.money

const pay = () => {
    if (price.value <= card.money) {
        card.money -= price.value
        balance.innerHTML = `${card.money}`

    }else{
        notGameOver.style.display = 'none';
        gameOver.style.display = 'block';
    }
    setTimeout(function(){
        cardNumber.value = '';
        price.value = '';
        window.location.reload()
    }, 3000);
}


button.addEventListener('click',pay)
//endregion