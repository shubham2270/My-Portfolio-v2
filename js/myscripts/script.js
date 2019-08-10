//   NAV BAR TOOGLER
const navbarToggler = document.querySelector(".navbar-toggler");
const navbarMenu = document.querySelector(".navbar ul");
const navbarLinks = document.querySelectorAll(".navbar a");
const style = getComputedStyle(document.body);
const primaryColor = style.getPropertyValue("--color-normal");

navbarToggler.addEventListener("click", navbarTogglerClick);

function navbarTogglerClick() {
  navbarToggler.classList.toggle("open-navbar-toggler");
  navbarMenu.classList.toggle("open");
}

navbarLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));

function navbarLinkClick() {
  if (navbarMenu.classList.contains("open")) {
    navbarToggler.click();
  }
}


//INSERT BACKGROUNG COLOR IN NAVBAR ON SCROLL
$(window).scroll(function () {
  if ($(document).scrollTop() > 200) {
    $("#navbg").css("background-color", primaryColor);
  } else {
    $("#navbg").css("background-color", "transparent ");
  }
});

// Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon 
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "menu") {
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
}
 


// Script for model
const openModel = document.getElementsByClassName('openModel')[0];
const openModel1 = document.getElementsByClassName('openModel');
const bgModel = document.getElementsByClassName('bg-model')[0];

let modelContent = document.getElementsByClassName('model-content')[0];
const navbar = document.getElementsByClassName('navbar')[0];
const imageOverlay = document.getElementsByClassName('img-overlay');


const popModel = (e) => {
  e.preventDefault();
  navbar.style.transform = 'translateY(-65px)';
  bgModel.style.display = 'flex';
}




let animationEffect = 'fadeIn';
//Add and removes the animate.css class on hovering on website images
const slideUpLink = () => {
  Array.from(openModel1).forEach((item) => {
    item.classList.add(animationEffect);
  })
  
}
const slideDownLink = () => {
  Array.from(openModel1).forEach((item) => {
    item.classList.remove(animationEffect);
  })
} 


//loop over the element list and add eventlisetner to the item
Array.from(openModel1).forEach((item) => {
  item.addEventListener('click', popModel);
})


Array.from(imageOverlay).forEach((item) => {
  item.addEventListener('mouseenter', slideUpLink);
})
Array.from(imageOverlay).forEach((item) => {
  item.addEventListener('mouseleave', slideDownLink);
})


// Script for model end