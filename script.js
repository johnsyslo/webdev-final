function refreshCart() {
    localStorage.setItem('teal-ball', document.getElementById('quantity1').value)
    localStorage.setItem('orange-ball', document.getElementById('quantity2').value)
    localStorage.setItem('pink-ball', document.getElementById('quantity3').value)
}

function addToCart() {
    refreshCart();
}

function updateCartDisplay() {
    var itemQuantity = getTotalItems();
    document.getElementById('cart-total-items').innerHTML = itemQuantity;

    let tealBall = document.getElementById('teal-ball-cart');
    let orangeBall = document.getElementById('orange-ball-cart');
    let pinkBall = document.getElementById('pink-ball-cart');

    let tealBallAmount = localStorage.getItem('teal-ball')
    let orangeBallAmount = localStorage.getItem('orange-ball')
    let pinkBallAmount = localStorage.getItem('pink-ball')

    tealBall.innerHTML = tealBallAmount.toString() + 'x Teal Ball' + ' --- $' + (tealBallAmount*24.99).toFixed(2).toString();
    orangeBall.innerHTML = orangeBallAmount.toString() + 'x Orange Ball' + ' --- $' + (orangeBallAmount*19.99).toFixed(2).toString();
    pinkBall.innerHTML = pinkBallAmount.toString() + 'x Pink Ball' + ' --- $' + (pinkBallAmount*24.99).toFixed(2).toString();

    let total = (tealBallAmount*24.99) + (orangeBallAmount*19.99) + (pinkBallAmount*24.99)
    var taxes = total * .10;
    total = total + taxes;
    document.getElementById('taxes').innerHTML = 'Taxes: $' + taxes.toFixed(2);
    document.getElementById('total-price').innerHTML = 'Total: $' + total.toFixed(2);
}

function getTotalItems() {
    var totalOrangeBall = localStorage.getItem('orange-ball');
    var totalTealBall = localStorage.getItem('teal-ball');
    var totalPinkBall = localStorage.getItem('pink-ball');

    var totalItems = parseInt(totalOrangeBall) + parseInt(totalTealBall) + parseInt(totalPinkBall);
    return totalItems;
}

updateCartDisplay();