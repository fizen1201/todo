$('ul').on('click',"li", function(){
	$(this).toggleClass("onclick");

});


$('ul').on('click',"span", function(){
	$(this).parent().fadeOut(1000, function(){
		$('this').remove();
	});
});

$("input[type='text']").keypress(function(event){
	if (event.which === 13) {
	var input = $(this).val();
	$(this).val("");
	$('ul').append("<li><span><i class='fas fa-trash-alt'></i>  </span>"+ input+"</li>");
	}
   
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle(20);
});







