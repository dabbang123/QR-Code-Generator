function CreateQR() {
  var qrText = $("#text").val();
  $("#getQR").html("Generating QR");
  if (qrText != "") {
    $("#show-qrcode").addClass('border shadow');
    var qrcode = new QRious({
      element: document.getElementById("show-qrcode"),
      background: '#ffffff',
      backgroundAlpha: 1,
      foreground: '#000',
      foregroundAlpha: 1,
      level: 'H',
      padding: 10,
      size: 300,
      value: qrText
    });
  }
  $("#getQR").html("Get QR");
}