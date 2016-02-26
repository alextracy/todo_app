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