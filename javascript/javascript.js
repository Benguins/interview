// Button start
let mybutton = document.getElementById("btnTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// Button End


// Owl start
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})
  });
// Owl End


// Nav start
function navClick() {
  document.getElementById("sofas_Fabric").classList.toggle("show");
  document.getElementById("sofas_Leather").classList.toggle("show");
}
function navClick01() {
  document.getElementById("sofas_Leather").classList.toggle("show");
}
function navClick02() {
  document.getElementById("sofas_Corner").classList.toggle("show");
}
function navClick03() {
  document.getElementById("sofas_Recliners").classList.toggle("show");
}
function navClick04() {
  document.getElementById("sofas_Chair").classList.toggle("show");
}
function navClick05() {
  document.getElementById("sofas_Footstools").classList.toggle("show");
}
function navClick06() {
  document.getElementById("sofas_Floring").classList.toggle("show");
}
function navClick07() {
  document.getElementById("beds_Bases").classList.toggle("show");
}
function navClick08() {
  document.getElementById("beds_Matresses").classList.toggle("show");
}
function navClick09() {
  document.getElementById("beds_Bed_Frames").classList.toggle("show");
}
function navClick10() {
  document.getElementById("beds_Headboards").classList.toggle("show");
}
function navClick11() {
  document.getElementById("beds_Pillows").classList.toggle("show");
}
function navClick12() {
  document.getElementById("beds_Dining_Dining_Sets").classList.toggle("show");
}
function navClick13() {
  document.getElementById("beds_Dining_Dining_Tables").classList.toggle("show");
}
function navClick14() {
  document.getElementById("beds_Dining_Dining_Chairs").classList.toggle("show");
}
function navClick15() {
  document.getElementById("beds_Dining_Living_Room").classList.toggle("show");
}
function navClick16() {
  document.getElementById("beds_Dining_Storage").classList.toggle("show");
}
function navClick17() {
  document.getElementById("beds_Dining_Floring").classList.toggle("show");
}
function navClick18() {
  document.getElementById("beds_Bedroom_Wardrobes").classList.toggle("show");
}
function navClick19() {
  document.getElementById("beds_Bedroom_Chest_Of_Drawes").classList.toggle("show");
}
function navClick20() {
  document.getElementById("beds_Bedroom_Bed_Frames").classList.toggle("show");
}
function navClick21() {
  document.getElementById("beds_Bedroom_Bedroom_Furnature").classList.toggle("show");
}
function navClick22() {
  document.getElementById("beds_Bedroom_Accessories").classList.toggle("show");
}
function navClick23() {
  document.getElementById("beds_Bedroom_Wiemann").classList.toggle("show");
}














window.onclick = function(event) {
  event.preventDefault();
  if (!event.target.matches('.navbar_Section01_Bottom_Div_Links_Click_Btn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
// Nav End