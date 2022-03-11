$(document).ready(function () {
    $(".col-md-4").click(function () {
      $(this).children(".hide").slideToggle("slow");
      $(this).children(".show").toggle("slow");
    });
  });
  