
/*
 * 面向过程编程
 */
$(".circle").on("click",function(){
	toggle($(this),"selected")
})

/*
  1. 两个参数 第一个元素  第二个是类名
    这个元素去切换这个类
*/
function toggle(ele,className){
	var hasClass = ele.hasClass(className)
	if(!hasClass){
		ele.addClass(className)
	}else{
		ele.removeClass(className)
	}
}


$(".span").on("click",function(){
	toggle($(this),"active")
})

