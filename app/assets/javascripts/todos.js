# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

$(function(){
  $("form").submit(function(event){
    event.preventDefault();

	var action = $(this).attr('action');
  var method = $(this).attr('method');
	// .serializeArray() can be called on any form element (and here, $(this) is our form)
	var data = $(this).serializeArray();

	$.ajax({
      method: method,
      url: action,
      data: data
      dataType: 'script'
    });
    
  });
});