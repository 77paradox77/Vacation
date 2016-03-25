$(document).ready(function() {



$("form").submit(function(event) {
  if ($("#q1").val() === "1" && $("#q2").val() === "1")  {
    $(".vac3").show();
  }
  else if ($("#q1").val() === "1" && $("#q2").val() === "1")  {
    $(".vac3").show();
  }
  else if ($("#q1").val() === "1" && $("#q3").val() === "1")  {
    $(".vac3").show();
  }
  else if ($("#q1").val() === "0" && $("#q3").val() === "1")  {
    $(".vac2").show();
  }
  else if ($("#q1").val() === "0" && $("#q3").val() === "0")  {
    $(".vac1").show();
  }
  else if ($("#q2").val() === "0" && $("#q3").val() === "0")  {
    $(".vac2").show();
  }
  else if ($("#q2").val() === "1" && $("#q3").val() === "1")  {
    $(".vac1").show();
  }
  else if ($("#q2").val() === "1" && $("#q3").val() === "0")  {
    $(".vac3").show();
  }
  else if ($("#q2").val() === "0" && $("#q3").val() === "1")  {
    $("vac1").show();
  }
  else {
    $(".vacations").hide();
  }

  event.preventDefault();
});
});
