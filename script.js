const qrhedader=document.getElementsByClassName("qr-header")[0];
const qrinput=document.getElementById("qr-text");
const qrbody=document.getElementsByClassName("qr-body")[0];
const qrfooter=document.getElementsByClassName("qr-footer")[0];
const generatebtn=document.getElementById("generate");
const downloadbtn=document.getElementById("download");
const size=document.getElementById("size");

qrcodeheight=window.innerHeight;
qrcodewidth=window.innerWidth;

generatebtn.addEventListener("click",()=>{
  qrbody.innerHTML="Generating QR";
    if(qrinput.value.length>0){
        // showLoadingIndicator();
        setTimeout(() => {
            qrcodegenerate();
            // hideLoadingIndicator();
        }, 1000);
        
    }else{
      setTimeout(()=>{
        qrbody.innerHTML="Please Enter data to generate";
      },1000);
      alert("No data");
    }
});

// function showLoadingIndicator() {
//     const loadingIndicator = document.createElement("div");
//     loadingIndicator.className = "loading-indicator";
//     loadingIndicator.textContent = "Generating QR Code...";
//     qrbody.appendChild(loadingIndicator);
//   }

//   function hideLoadingIndicator() {
//     const loadingIndicator = document.querySelector(".loading-indicator");
//     if (loadingIndicator) {
//       qrbody.removeChild(loadingIndicator);
//     }
//   }

function qrcodegenerate(){
    qrbody.innerHTML="";
    new QRCode(qrbody, {
        text: qrinput.value,
        width: 100,
        height: 100,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
};

downloadbtn.addEventListener("click",()=>{
  let img=document.querySelector('.qr-body img');

  if(img!=null){
    const qrCodeDataURL = img.src;
    const a = document.createElement("a");
    a.href = qrCodeDataURL;
    a.download = "qrcode.png"; // You can specify the desired filename here
    a.click();
  }else{
    alert("Nothing to download");
  }
});
