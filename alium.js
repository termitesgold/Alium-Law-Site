
//hamburger x
function myFunction(x) {
    x.classList.toggle("change");
}

//hamburger dropdown-menu
$(document).ready(function() {
  $('.hamburger').click(function (){
    //$(".hidden-nav").fadeToggle("slow").toggleClass("menu-hide");

    $('.hidden-nav').animate({height: 'toggle'});
  });

//hover menu items dropdown
  $('li').hover(function(){
    $(this).children('ul').stop().slideToggle(400);

});

// More jQuery code goes in here later
});
