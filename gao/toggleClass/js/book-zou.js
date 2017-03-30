$(".circle").on("click",function(){
	// console.log($(this).hasClass("selected"));
	if(!$(this).hasClass("selected")){
		$(this).addClass("selected")
	}else{
		$(this).removeClass("selected")
	}
})