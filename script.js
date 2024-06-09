const QRContainer = document.getElementById("QRcontainer");
const qrText = document.getElementById("qrText");
const qrImage = document.getElementById("qrImage");

const QRButton = document.getElementById("generate-btn");

function GenerateQR(){
if (qrText.value.trim() !== "") {
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    QRContainer.classList.remove("empty-container"); // Remove class to adjust height
} else {
    qrImage.src = ""; // Clear QR code if input is empty
    QRContainer.classList.add("empty-container"); // Add class to set default height
}
}

QRContainer.classList.add("empty-container");

QRButton.addEventListener("click", GenerateQR);

// function GenerateQR(){
//     qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;

// }


