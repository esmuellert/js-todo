
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

$(".mov0").click(function(){
  $("ul").show();
});

$(".mov1").click(function(){
  $("ul").show();
  $(".a").hide();
});

$(".mov2").click(function(){
  $("ul").show();
  $(".b").hide();

});
});
