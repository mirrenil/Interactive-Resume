window.addEventListener('load', main);

/** Program starts */
function main() {
  countDown();
  clickToScroll();
  clickToScrollDown();
  addEventListeners();
}

function addEventListeners() {
  document.getElementById('contactInfo').addEventListener('mouseover', mouseOver);
  document.getElementById('contactInfo').addEventListener('mouseout', mouseOut);
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

/** If you click the arrow the page scrolls down to the main content */
function clickToScrollToMain() {

  const arrow = document.querySelector("main");

  arrow.addEventListener('click', function() {
      window.scrollTo({behavior: "smooth"});
  });
  
}

/** If you click on Contact in the left corner the page will scroll down to the footer */
function clickToScrollToFooter() {

  const contact = document.querySelector("footer");

  contact.addEventListener('click', function() {
    window.scrollTo({behavior: "smooth"});
  });
}
/**
 * Changes font size when you mouse over.
 * @param {MouseEvent} event 
 */
 function mouseOver() {
    document.getElementById("contactInfo").style.fontSize = '150%';
}

function mouseOut () {
    document.getElementById("contactInfo").style.color = '100%';
}

