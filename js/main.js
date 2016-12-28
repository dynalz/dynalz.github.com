$(".hoverProject").click(function() {
	console.log($(this).attr('href'))
	window.location.href = "http://" + $(this).attr('href');
});