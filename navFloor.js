$(function(){
	//记录每个版块距离顶部的距离
	var arr = [];
	$('.item').each(function(index){
		arr.push($(this).offset().top)
	})

	// console.log(arr)
	var run = function(){
		$(document).on('scroll',function(){
			var juli = $(document).scrollTop();
			if(juli > 800){
				$('.aside-nav').show();
			}else{
				$('.aside-nav').hide();
			}
			//判断滚动卷去的距离
			if(juli >= arr[0] && juli <arr[1]){
				$('.aside-nav li').eq(0).addClass('now').siblings().removeClass('now');
			}else if(juli >= arr[1] && juli <arr[2]){
				$('.aside-nav li').eq(1).addClass('now').siblings().removeClass('now');
			}else if(juli >= arr[2] && juli <arr[3]){
				$('.aside-nav li').eq(2).addClass('now').siblings().removeClass('now');
			}else if(juli >= arr[3] && juli <arr[4]){
				$('.aside-nav li').eq(3).addClass('now').siblings().removeClass('now');
			}else if(juli >= arr[4] && juli <arr[5]){
				$('.aside-nav li').eq(4).addClass('now').siblings().removeClass('now');
			}else if(juli >= arr[5] && juli <arr[6]){
				$('.aside-nav li').eq(5).addClass('now').siblings().removeClass('now');
			}else if(juli >= arr[6] && juli <arr[7]){
				$('.aside-nav li').eq(6).addClass('now').siblings().removeClass('now');
			}else if(juli >= arr[7] && juli <arr[8]){
				$('.aside-nav li').eq(7).addClass('now').siblings().removeClass('now');
			}else if(juli >= arr[8] && juli <arr[9]){
				$('.aside-nav li').eq(8).addClass('now').siblings().removeClass('now');
			}else if(juli >= arr[9] && juli <arr[10]){
				$('.aside-nav li').eq(9).addClass('now').siblings().removeClass('now');
			}else if( juli >= arr[10]){
				$('.aside-nav li').eq(10).addClass('now').siblings().removeClass('now');
			}
		
		})
	}

	run();
	

	$('.aside-nav li[data-id]').on('click',function(){
		$(document).off('scroll')
		var id = $(this).attr("data-id");
        var h = $("#item-" + id).offset().top;
        $('body,html').stop().animate({ scrollTop: h }, 500,function(){
        	run()
        });
	})
	$('.aside-nav li').last().click(function(){
	 	$('body,html').stop().animate({ scrollTop: 0 }, 500);
	})

	$('.aside-nav li').hover(function(){
	 	$(this).addClass('current').siblings().removeClass('current');
	},function(){
		$('.aside-nav li').removeClass('current');
	})
})