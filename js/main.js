$(".wrapper button")
	.each(function(){
		$(this).attr('title',$(this).attr('class'));
	})
	.hover(function(event){
		$(".wrapper .ele").filter(":not(."+$(this).attr('class')+")").addClass('unactive');
	},function(){
		$(".wrapper .ele").removeClass('unactive');
	});

$(".wrapper .ele:not(:empty)").each(function(index, el) {
	var ele=el.innerHTML;
	el.innerHTML="<a href='html5.html#"+ele+"'>"+ele+"</a>";
});
