class Currency{
    constructor(firstSelect, secondSelect){
        this.firstSelect = firstSelect
        this.secondSelect = secondSelect
        this.url = "https://api.exchangeratesapi.io/latest?base="

        this.amount = null
    }
    exchange(){
        return new Promise((resolve, reject) => {
            fetch(this.url + this.firstSelect)
            .then(res => res.json())
            .then(data => {
            const parity = data.rates[this.secondSelect]
            const amount1 = Number(this.amount)

            let total = parity * amount1
            resolve(total.toFixed(2))
            })
            .catch(err => reject(err))
            })
    }
    saveAmount(amount){
        this.amount = amount.value
    }
    firstCurrency(option){
        this.firstSelect = option
    }
    secondCurrency(option){
        this.secondSelect = option
    }
}