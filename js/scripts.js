







function pingPong(num) {
  for (var i = 1; i <= num; i ++) {
    if (i % 3 === 0 && i % 5 === 0)
      $("#ping-list").append("<li>PING-PONG!</li>");
    else if (i % 3 === 0)
      $("#ping-list").append("<li>PING!</li>");
    else if (i % 5 === 0)
      $("#ping-list").append("<li>PONG!</li>");
    else
      $("#ping-list").append("<li>" + i + "!</li>");

  }

}

$(document).ready(function() {
  $("form#ping").submit(function(event) {
    event.preventDefault();
    var baseNum = parseInt($("input#number1").val());
    pingPong(baseNum);


  });
});
