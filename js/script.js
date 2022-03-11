//script on what-we-do section
$(document).ready(function () {
    $(".col-md-4").click(function () {
      $(this).children(".hide").slideToggle("slow");
      $(this).children(".show").toggle("slow");
    });
  });
  //script for portfolio section
  $(document).ready(function () {
    $(".card").hover(function () {
      $(this).children(".overlay").fadeToggle("slow");
    });
  });