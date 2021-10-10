// Get QR
function getQR() {
    var user_url = document.getElementById("inputBox").value;
    const link = "https://www.qrtag.net/api/qr.svg?url=" + user_url;
    document.getElementById("showQrImg").innerHTML = `<img class="styleQr" src=${link}>`;
    user_url.innerText = " ";
}