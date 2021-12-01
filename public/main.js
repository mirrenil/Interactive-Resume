window.addEventListener('load', main);

/** Program starts */
function main() {
  countDown();
  clickToScroll();
  clickToScrollDown();
  addEventListeners();
}

function addEventListeners() {
  const div = document.getElementById('image-text');
  div.addEventListener('mouseover', showHiddenText);
  // Hur får jag denna att funka på iphone?
  div.addEventListener('ontouchmove', showHiddenText);
  //div.addEventListener('mouseout', hideHiddenText);
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
/**
 * Shows the hidden text behind the img when you put your mouse over.
 * @param {MouseEvent} event 
 */
function showHiddenText(event) {
  event.target.querySelector('#contactInfo').style.display = 'block';
  //event.target.querySelector('img').style.visibility = 'hidden';
}

function hideHiddenText(event) {
  event.target.querySelector('#contactInfo').style.display = 'none';
  //event.target.querySelector('img').style.display = 'block';
}

// Trying to make a function whcih will work for iphone users

document.getElementById('#image-text').addEventListener('touchstart',touchScreen);

function touchScreen() {
  document.getElementsById('#span').innerHTML = 'Miranda Nilhag +46735415683 miranda.nilhag@medieinstitutet.se';
}