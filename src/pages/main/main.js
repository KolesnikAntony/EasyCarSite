
let calcBtn = document.getElementById('calc');

calcBtn.onclick = calculate;

let calculate =() => {
    let firstPayIn = document.getElementById('first-in').value;
    let originalPrice = document.getElementById('price-car').value;
    let period =document.getElementById('period').value;
    console.log( firstPayIn);
    console.log( originalPrice);
    console.log( period);

}


