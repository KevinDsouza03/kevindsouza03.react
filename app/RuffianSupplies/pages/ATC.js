function addToCart(productId) {
    
    const quantityInput = document.getElementById('id_quantity');
    const atcButton = document.querySelector('.atc-btn');

    
    const nameElement = document.querySelector('.item-header');
    const imgElement = document.querySelector('.item-img');

    
    const quantity = parseInt(quantityInput.value) % 50;

    const priceElement = document.querySelector('.price');
    const floatMatch = priceElement.textContent.match(/\d+\.\d+/);
    price = 0.0;
    if (floatMatch) {
        price = parseFloat(floatMatch[0]);
        console.log(price)
    }

    const cartData = JSON.parse(localStorage.getItem('cart')) || {};

    
    const productInfo = {
        quantity,
        name: nameElement.textContent,
        img: imgElement.src,
        price: price
    };

    
    cartData[productId] = productInfo;

    
    localStorage.setItem('cart', JSON.stringify(cartData));

   
    alert(`Added ${quantity} of ${productInfo.name} to the cart.`);
}
