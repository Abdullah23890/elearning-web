const myCarouselElement = document.querySelector('#carouselExampleCaptions');

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,   // 2 seconds
  ride: 'carousel', // auto start
  touch: true
});

function checkEmail() {
  let email = document.getElementById("email").value;

  if(email === ""){
    Swal.fire({
  title: "Email",
  text: "Plz Enter Email",
  icon: "warning"
});
return false;
  } else {
    swal.fire({
      title: "Enjoy",
      text: "Enjoy Our New Letter",
      icon: "success"
    })
return false;
  }
}