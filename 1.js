
$(document).ready(function(){

  $("#submit").click(function(){

  $("ul").prepend('<li></li>')
    $("ul li:first").text($("#events").val());
    $("ul li:first").addClass("a");
  });

  $(document).on('click','li',function() {
    $(this).removeClass("a");
    $(this).toggleClass("b");
    if(!$(this).hasClass('b')){
      $(this).addClass('a');
    }
    });

  $(".mov0").click(function(){
    $(".a1").addClass('a');
    $(".a1").removeClass('a1');
    $(".b1").addClass('b');
    $(".b1").removeClass('b1');
    });

  $(".mov1").click(function () {
    $(".a1").addClass('a');
    $(".a1").removeClass('a1');
    $(".b1").addClass('b');
    $(".b1").removeClass('b1');
    $(".a").addClass('a1');
    $(".a").removeClass('a');
  });

  $(".mov2").click(function() {
    $(".a1").addClass('a');
    $(".a1").removeClass('a1');
    $(".b1").addClass('b');
    $(".b1").removeClass('b1');
    $(".b").addClass('b1');
    $(".b").removeClass('b');


  });


});
