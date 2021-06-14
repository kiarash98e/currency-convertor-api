getCurrency()
.then((currency)=>{
    console.log(currency)

    currencyApp()
    
    for (const key in currency) {
        function calculatCurrency(amount,fromCurrency,toCurrency) {
            console.log(currency[key][fromCurrency],currency[key][toCurrency])
            let base = (1/(currency[key][fromCurrency]))
            let result = (base*(currency[key][toCurrency])).toFixed(4)
            if (isNaN(result)) {
                console.log("error")
            }
            let endAmount = amount*result
            $(".currency-item").append(`${amount} ${fromCurrency} === ${endAmount} ${toCurrency}`)
        }
        const getBtn = document.querySelector(".get-rate")
        getBtn.addEventListener("click",function  (e) {
            e.preventDefault()
            const fromCurrency = document.querySelector(".from-currency").value
            const toCurrency = document.querySelector(".to-currency").value
            const exchangeAmount = document.querySelector(".amount").value
            calculatCurrency(exchangeAmount,fromCurrency,toCurrency)
            validInput(fromCurrency,toCurrency,exchangeAmount)
            setTimeout(()=>{
                location.reload()
            },3000)
        })
        function validInput (inputFrom,inputTo,inputAmount) {
            if (inputAmount == "" || inputFrom == "" || inputTo == "") {
                $(".input-error").addClass("show")
                $(".currency-item").html(" ")
            }
            else{
                $(".input-error").removeClass("show")
            }
        }
    }
})
.catch((err) => {
    console.log(err)
})

