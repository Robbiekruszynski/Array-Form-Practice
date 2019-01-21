$(document).ready(function(){

  $("#btn-holder").click(function(event) {

  var=nameInput = $("#name").val();
  var=genderInput =$("#gender").val();
  var=ageInput = $("#age") .val();
  var=jobInput = $("#job").val()
  var=schoolInput = $("#school").val();

  $(".name").text(nameInput);
  $(".gender").text(genderInput);
  $(".age").text(ageInput);
  $(".job").text(jobInput);
  $(".school").text(schoolInput);

});
