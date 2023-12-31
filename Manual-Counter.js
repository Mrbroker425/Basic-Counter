let NumberE1 = document.getElementById("Number");


function Up() {
    let randomE1 = Math.ceil(Math.random()*10);
    let currentValueE1 = parseInt(NumberE1.innerText);
    NumberE1.innerText = currentValueE1 += randomE1;
}
Up()
function Down() {
    let randomE1 = Math.ceil(Math.random()*10);
    let currentValueE1 = parseInt(NumberE1.innerText);
    NumberE1.innerText = currentValueE1 -= randomE1;
    
}
Down()


