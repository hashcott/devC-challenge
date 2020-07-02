// Define  Ui

let usd = document.querySelector("input[name='usd']");
let vnd = document.querySelector("input[name='vnd']");

usd.addEventListener('keyup', (e) => {
  let usdValue = e.target.value;
  vnd.value = usdValue * 23000;
})



vnd.addEventListener('keyup', (e) => {
  let vndValue = e.target.value;
  usd.value = vndValue / 23000;
})