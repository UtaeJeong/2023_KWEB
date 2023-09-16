let total = 0;

const itemPrice = {
    apple: 700,
    orange: 800,
    lemon: 900,
};

for (const button of document.getElementsByClassName('add-to-cart'))
{
    button.addEventListener('click', event => {
        const item = event.target.parentNode.parentNode.getAttribute('id');

        total = total + itemPrice[item];
        document.getElementById('cost').innerText = total;
    });
}
