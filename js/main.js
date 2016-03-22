$(".wrapper button")
	.each(function(){
		$(this).attr('title',$(this).attr('class'));
	})
	.hover(function(event){
		$(".wrapper .ele").filter(":not(."+$(this).attr('class')+")").addClass('unactive');
	},function(){
		$(".wrapper .ele").removeClass('unactive');
	});
