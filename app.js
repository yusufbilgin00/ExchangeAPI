const amount = document.getElementById('amount')
const firstSelect = document.getElementById('firstSelect')
const secondSelect = document.getElementById('secondSelect')

const currency = new Currency(
    firstSelect.options[firstSelect.selectedIndex].textContent,
    secondSelect.options[secondSelect.selectedIndex].textContent    
)
const ui = new UI(firstSelect, secondSelect)

eventListeners()

function eventListeners(){
    amount.addEventListener('input', exchangeCurrency)
    firstSelect.addEventListener('change', () => {
        currency.firstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent)
        ui.changeFirstCurrency()
        exchangeCurrency()
    })
    secondSelect.addEventListener('change', () => {
        currency.secondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent)
        ui.changeSecondCurrency()
        exchangeCurrency()
    })
}

function exchangeCurrency(){
    currency.exchange()
    .then(response => {
        ui.takeİnformation(response)
    })
    .catch(error => console.log(error))

    currency.saveAmount(amount)
}