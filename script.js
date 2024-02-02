const qrinput = document.getElementById("qr-input");
const qrbutton = document.getElementById("qr-button");
const image = document.getElementById("qr-img");

qrbutton.addEventListener('click',()=>{
    const inputValue = qrinput.value;
    if(!inputValue ){
        alert("Please enter a valid URL")
        return;
    }
    else{
        image.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        image.alt = `QR code for ${inputValue}`;
    }
})