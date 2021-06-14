async function getCurrency () {
    let dataCurrency = []
    await $.ajax({
        type: "get",
        url: "http://api.exchangeratesapi.io/v1/latest?access_key=0e41941249bf7ae90fb3e78795c67a8b", 
         success(response) {
            dataCurrency.push(response["rates"])
        },
        error(err){
            console.log(err)
        },
    })
    return dataCurrency
}