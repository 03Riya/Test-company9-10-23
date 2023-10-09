var myindex=0;
carousal();
function carousal(){
    var i;
    var x=document.getElementsByClassName("myslideshow");
    for(i=0;i<x.length;i++){
        x[i].style.display="none";
    }
    myindex++;
    if(myindex > x.length){myindex=1};
    x[myindex-1].style.display="block";
    setTimeout(carousal,2000);
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("myslideshow2");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

var menutoggal=document.querySelector(".menu-toggle");
var navmenu=document.querySelector(".nav-menu");
menutoggal.addEventListener('click',function(){
    navmenu.classList.toggle('show');
})