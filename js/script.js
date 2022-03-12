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
  //script for contact section
  $(document).ready(function(){
  $("form#form").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    alert("Dear " + name + "  we have received your message. Thank you for reaching out to us. we will get back to you ASAP");
    document.getElementById("form").reset();
});
  });