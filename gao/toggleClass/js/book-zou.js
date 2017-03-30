/*
面向过程的写法
	$(".circle").on("click",function(){
		// console.log($(this).hasClass("selected"));
		if(!$(this).hasClass("selected")){
			$(this).addClass("selected")
		}else{
			$(this).removeClass("selected")
		}
	})
*/


/*
 * 考虑到可能今后会用到类似方法
 * 1. 将重复的封装（形似）
 */

function toggle(ele,className){
	// 先判断这个元素有没有这个类
	var hasClass =  ele.hasClass(className);
	if(!hasClass){
		ele.addClass(className)
	}else{
		ele.removeClass(className)
	}
}

$(".circle").on("click",function(){
	toggle($(this),"selected")
})