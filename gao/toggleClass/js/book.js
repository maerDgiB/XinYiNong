
$(".circle").click(function(){
	$(this).toggleClass("selected");
})


/*
 * $(function(){})
 * 这个当你在body前面引用的JS的使用才要用到
 * 因为会在DOM结构渲染好时候绑定事件
 * 我说过不要用.click这样的事件绑定
 * $(this) 不理解看我的   https://baixiaoji.github.io/2017/03/19/%E6%80%BB%E7%BB%93this%E6%8C%87%E5%90%91%E9%97%AE%E9%A2%98/
 * 看book-zou文件
 *  11/04 你还有 11 天 
 *  不要再找借口了  
 */