
$(document).ready(function(){

  $("#submit").click(function(){

  $("ul").prepend('<li></li>')
    $("ul li:first").text($("#events").val());
    $("ul li:first").addClass("a");
  });

  $(document).on('click','li',function() {
    $(this).removeClass("a");
    $(this).toggleClass("b");
    });


  function all(){
    $(".mov0").click(function(){
      $(".b1").removeClass("b1",function(){
        $(this).addClass("b");
      });
      $(".a1").removeClass("a1",function(){
        $(this).addClass("a");
      });
    });
  }

  $(".mov1").click(function () {
    all();
    $(".a").removeClass("a",$(this).addClass("a1"))
  });

  $(".mov2").click(function() {
    all();
    $(".b").removeClass("b",$(this).addClass("b1"));


  });


});
