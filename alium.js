//hamburger x
function myFunction(x) {
    x.classList.toggle("change");
}

$(document).ready(function() {


  //hamburger dropdown-menu
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

/*function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(-1.264161,36.8007696),
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}*/

function initMap() {
        var myLatLng = {lat: -1.2642, lng: 36.8008};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: myLatLng
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'ALIUM LAW'
        });
      }
