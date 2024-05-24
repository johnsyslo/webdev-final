alert(localS)

function getCartItems() {
    let cookie = document.cookie.split(';').find(row => row.includes('cart='));
    if (cookie) {
        return JSON.parse(cookie.split('=')[1]);
    } else {
        return [];
    }
}

 function addToCart(item) {
    let items = getCartItems();
    items.push(item);

    let expiryDate = new Date();
    expiryDate.setTime(expiryDate.getTime() + (7 * 24 * 60 * 60 * 1000));
    document.cookie = `cart=${JSON.stringify(items)};expires=${expiryDate.toUTCString()};path=/`;

    updateCartDisplay();
}

function removeFromCart(item) {
    let items = getCartItems();
    items = items.filter(item.id => item.dataset.itemId !== item);

    let expiryDate = new Date();
    expiryDate.setTime(expiryDate.getTime() + (7 * 24 * 60 * 60 * 1000));
    document.cookie = `cart=${JSON.stringify(items)};expires=${expiryDate.toUTCString()};path=/`;

    updateCartDisplay();
}

function updateCartDisplay() {
    let cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    let items = getCartItems();
    items.forEach(item => {
        let cartItem = document.createElement('li');
        cartItem.className = 'list-group-item d-flex justify-content-between lh-condensed';

        let removeButton = document.createElement('button');
        removeButton.className = 'btn btn-danger';
        removeButton.innerHTML = 'x';
        removeButton.onClick = removeFromCart(item)

        if (item == 'orange-ball') var itemName = 'Orange Ball';
        if (item == 'pink-ball') var itemName = 'Pink Ball';
        if (item == 'teal-ball') var itemName = 'Teal Ball';

        cartItem.innerHTML = itemName;
        cartItem.dataset.itemId = item;
        
        cartItems.appendChild(cartItem);
        cartItems.appendChild(removeButton);
    });
}
updateCartDisplay();