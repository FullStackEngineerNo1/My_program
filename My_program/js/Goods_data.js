$(function(){
$.ajax({
	type:"get",
	url:"js/goods.json",
	
	success: function(data){
			for(var i = 0; i < data.length; i++){
				$(".goods_list").append
				("<div class = 'single'><div class='float'><img src =" + data[i].img + "/><div class='rush'>" + '立即抢购' +"</div></div><a href = 'Goods_detail.html'>" + data[i].name + "</a><p class='price'>" + data[i].price + "</p><p>" + data[i].reference_price + "<span class='collect'>"+ data[i].collect + "</span><span class='cost'>" + data[i].cost +"</span></p></div>");			
			}
	$(".float").hover(function(){
		var  i = $(".float").index($(this));			
				$(".rush").eq(i).animate({ top: "-54"})
			}, function(){
		var  i = $(".float").index($(this));		  	
				$(".rush").eq(i).animate({ top: "-4"});
		})
		}
	})


});
	

