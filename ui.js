class UI{
    constructor(firstSelect, secondSelect){
        this.firstSelect = firstSelect
        this.secondSelect = secondSelect

        this.result = document.getElementById('currency-money')
        this.firstCurrency = document.querySelector('.firstCurrency')
        this.secondCurrency = document.querySelector('.secondCurrency')
    }
    takeİnformation(response){
        this.result.value = response
    }
    changeFirstCurrency(){
        this.firstCurrency.textContent = this.firstSelect.options[this.firstSelect.selectedIndex].textContent
    }
    changeSecondCurrency(){
        this.secondCurrency.textContent = this.secondSelect.options[this.secondSelect.selectedIndex].textContent
    }
}