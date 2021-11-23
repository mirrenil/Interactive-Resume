window.addEventListener('load', main);

/** Program starts */
function main() {
  countDown();
  clickToScroll();
  clickToScrollDown();
}
/** This is a function which counts down until graduation */
function countDown() {
  let countDownDate = new Date("May 31, 2023 12:00:00").getTime();

  let x = setInterval(function () {
    const now = new Date().getTime();

    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("count-down").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  }, 1000);
}

/** If you click on Contact the page will scroll down to the footer where my contact info is */
function clickToScroll() {

  const contact = document.querySelector("footer");

  contact.addEventListener('click', function() {
    window.scrollTo({behavior: "smooth"});
  });
}
/** If you click the arrow the page scrolls down to the main content */
function clickToScrollDown() {

    const arrow = document.querySelector("main");

    arrow.addEventListener('click', function() {
        window.scrollTo({behavior: "smooth"});
    });
    
}

function hideImg(contactInfo, img) {
    let div = document.getElementById(contactInfo);
    if (div.style.display === "none") {
        div.style.display = "block";
        img.src = "/public/assets/IMG_0978.jpeg"
    } else if (div.style.display === "block") {
        div.style.display = "none";
        img.src = "/public/assets/IMG_0978.jpeg"
    }
}