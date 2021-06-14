function currencyApp () {
    $(".box").append(
        `
            <div class="input-error">please fill out all the inputs filed</div>
            <div class="invalid-code">invalid currency code</div>
            <form>
                <input type="text" class="from-currency" placeholder="from currency code">
                <input type="text" class="to-currency" placeholder="to currency code">
                <input type="number" class="amount" placeholder="exchange amount">
                <button class="get-rate">Get rate</button>
            </form>
            <ul class="currency-list">
                <li class="currency-item"></li>
            </ul>
        `
    )
}