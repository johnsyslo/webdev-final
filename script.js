document.cookie = "cart=[]" + "; expires=60*60*24*365";

function addToCart(item){
    var allCookies = (document.cookie);
    var editedCart = allCookies.push(item)
    alert(editedCart)
    document.cookie = editedCart + "; expires=60*60*24*365";
    showCookies()
}

function showCookies(){
    console.log("no")
    var x = document.cookie;
    alert(x)
}