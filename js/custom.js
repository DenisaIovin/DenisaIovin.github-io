// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// isotope js
$(window).on('load', function () {
    $('.filters_menu li').click(function () {
        $('.filters_menu li').removeClass('active');
        $(this).addClass('active');

        var data = $(this).attr('data-filter');
        $grid.isotope({
            filter: data
        })
    });

    var $grid = $(".grid").isotope({
        itemSelector: ".all",
        percentPosition: false,
        masonry: {
            columnWidth: ".all"
        }
    })
});

// nice select
$(document).ready(function() {
    $('select').niceSelect();
  });

/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});


function showReservationDetails() {
    var name = document.querySelector("input[placeholder='Nume']").value;
    var phoneNumber = document.querySelector("input[placeholder='Numar de telefon']").value;
    var email = document.querySelector("input[placeholder='Email']").value;
    var numPersons = document.querySelector(".nice-select").value;
    var reservationDate = document.querySelector("input[type='date']").value;
  

    if (!isValidPhoneNumber(phoneNumber)) {
      alert("Te rog introdu un număr de telefon valid cu 10 cifre.");
      return;
    }
  
    if (!isValidReservationDate(reservationDate)) {
      alert("Te rog introdu o dată validă!");
      return;
    }
  
    var details = "Nume: " + name + "\nNumăr de telefon: " + phoneNumber + "\nEmail: " + email + "\nPersoane: " + numPersons + "\nData rezervării: " + reservationDate;
  
    alert("Rezervare confirmată!\n\n" + details);
  }
  

  function isValidPhoneNumber(phoneNumber) {
    var phoneNumberRegex = /^\d{10}$/; 
    return phoneNumberRegex.test(phoneNumber);
  }

  function isValidReservationDate(reservationDate) {
    var currentDate = new Date();
    var selectedDate = new Date(reservationDate);
  
    return selectedDate >= currentDate;
  }

  document.querySelector(".btn_box button").addEventListener("click", showReservationDetails);
  