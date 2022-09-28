let inputData = document.querySelector(".data")
let submitBtn = document.querySelector("#submit")
let qrImg = document.querySelector("img")

qrImg.style.marginTop = '10%'


submitBtn.addEventListener("click", () => {
    let data = inputData.value
    let newSrc =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}`;
    qrImg.src = newSrc
    qrImg.style.display = 'block'
})