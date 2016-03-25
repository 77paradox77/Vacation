$(document).ready(function() {

  $(".fadeout").click(function(){
      $("h1").fadeOut();
  });

var submissions;
$("form").submit(function(event) {
  $(".vac1").hide();
  $(".vac2").hide();
  $(".vac3").hide();
  $(".vac4").hide();
  $(".vac5").hide();
  $(".vac6").hide();
  if ($("#q1").val() === "1" && $("#q2").val() === "1")  {
    $(".vac1").show();
  }
  else if ($("#q1").val() === "1" && $("#q2").val() === "1")  {
    $(".vac4").show();
  }
  else if ($("#q1").val() === "1" && $("#q3").val() === "1")  {
    $(".vac3").show();
  }
  else if ($("#q1").val() === "0" && $("#q3").val() === "1")  {
    $(".vac2").show();
  }
  else if ($("#q1").val() === "0" && $("#q3").val() === "0")  {
    $(".vac5").show();
  }
  else if ($("#q2").val() === "0" && $("#q3").val() === "0")  {
    $(".vac4").show();
  }
  else if ($("#q2").val() === "0" && $("#q3").val() === "1")  {
    $(".vac1").show();
  }
  else if ($("#q2").val() === "1" && $("#q3").val() === "0")  {
    $(".vac6").show();
  }
  else if ($("#q2").val() === "0" && $("#q3").val() === "1")  {
    $("vac2").show();
  }
  else {
    $("div.vacations").hide();
  }

  event.preventDefault();
});
});



// I got caught up trouble shooting technical errors a lot today. In the future I hope to add on to this project and make the bottom two questions valid in selecting more vacation destinations. Also I need to review the code above to incorporate accuracy
