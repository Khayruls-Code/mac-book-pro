const bestPrice = document.getElementById('bestPrice')
const totalPrice = document.getElementById('totalPrice')
const mainPrice = document.getElementById('mainPrice')

//all price function
function perticularPrice(priceId, price){
    const getPrice = document.getElementById(priceId);
    let priceValue = getPrice.innerText = price;
    return priceValue;
}

//total price function
function totalPriceCount(){
    return getId('bestPrice') + getId('memoryPrice') + getId('storagePrice') + getId('deliveryCost')   ///sum of all cost
}

//get single price function
function getId(id){
    let priceId = document.getElementById(id)
    return parseFloat(priceId.innerText);
}


//click event added here for all the particular button
function eventAction(btnId, priceId, price){
    document.getElementById(btnId).addEventListener('click', function(){
        perticularPrice(priceId, price)
        totalPrice.innerText = totalPriceCount()
        mainPrice.innerText = totalPriceCount()
    })
}

eventAction('memory8GB', 'memoryPrice', 0)

eventAction('memory16GB', 'memoryPrice', 180)

eventAction('SSD256GB', 'storagePrice', 0)

eventAction('SSD512GB', 'storagePrice', 100)

eventAction('SSD1TB', 'storagePrice', 180)

eventAction('costFree', 'deliveryCost', 0)

eventAction('withCharge', 'deliveryCost', 20)


//promo code functionality

document.getElementById('applyBtn').addEventListener('click', function(){
    const codeInput = document.getElementById('codeInput');
    const codeInputValue = codeInput.value;
    if(codeInputValue == 'stevekaku'){
        let percent = getId('mainPrice') * 20/100
        let afterPercent = getId('mainPrice') - percent
        mainPrice.innerText = afterPercent;
        codeInput.value = ''
        codeInput.setAttribute('disabled', true)
    }else{
        alert('Invailed')
    }
})