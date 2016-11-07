	/*导航栏数据*/
	$(function(){
		
		
		/*最新优惠*/
		$(".navtou").css("float", "clear");
		$.ajax({
		url: "js/no1.json",
		type: "GET",
		success: function(data){
			for(var i = 0; i < data.length; i++){
				$(".popup").eq(0).append
				("<span class = 'navtou'><a href = '#' class = 'little_title'>" + data[i].title + "</a></span>");
				
			for(var j = 0; j < data[i].child.length; j++){
				$(".popup").eq(0).append(
					"<span class = 'li_child'><a href = '#' class = 'little_title'>" + data[i].child[j].title + "</a></span>");
				}
			}
		}
	})
			/*全球购*/
		$.ajax({
		url: "js/no2.json",
		type: "GET",
		success: function(data){
			for(var i = 0; i < data.length; i++){
				$(".popup").eq(1).append
				("<span class = 'navtou'><a href = '#' class = 'little_title'>" + data[i].title + "</a></span>");
	
     		for(var j = 0; j < data[i].child.length; j++){
     			for(var key in data[i].child[j]){
     				if(key=='img'){
     					var img=document.createElement('img')
     					img.src=data[i].child[j].img;
     					$(".popup").eq(1).append(img);
     					$(".popup").eq(1).append(
					"<span class = 'li_child'><a href = '#' class = 'little_title'>" + data[i].child[j].name + "</a></span>");
     				}
     				else{
     					$(".popup").eq(1).append(
					"<span class = 'li_child'><a href = '#' class = 'little_title'>" + data[i].child[j].title + "</a></span>");
     				}
     			}
//				if (data[i].child[j].) {
//					
//				} else{
//					
//				}
//				$(".popup").eq(1).append(
//					"<span class = 'li_child'><a href = '#' class = 'little_title'>" + data[i].child[j].title + "</a></span>");
			}
			}
		}
	})
			/*潮品购*/
		$.ajax({
		url: "js/no3.json",
		type: "GET",
		success: function(data){
			for(var i = 0; i < data.length; i++){0
			if (data[i].child.length > 0) {
//				for(var i = 0; i < data.length; i++){
				$(".popup").eq(2).append
				("<span class = 'navtou'><a href = '#' class = 'little_title'>" + data[i].title + "</a></span>");
				
			for(var j = 0; j < data[i].child.length; j++){
				$(".popup").eq(2).append(
					"<span class = 'li_child'><a href = '#' class = 'little_title'>" + data[i].child[j].title + "</a></span>");
				}
//			}
			} else{
//				for(var i = 0; i < data.length; i++){
				$(".popup").eq(2).append
				("<span class = 'navtou'><a href = '#' class = 'little_title'>" + data[i].title + "</a></span>");
				}
			}
			
			
			
			
			
			/*for(var i = 0; i < data.length; i++){
				$(".popup").eq(2).append
				("<span class = 'navtou'><a href = '#' class = 'little_title'>" + data[i].title + "</a></span>");
				
			for(var j = 0; j < data[i].child.length; j++){
				$(".popup").eq(2).append(
					"<span class = 'li_child'><a href = '#' class = 'little_title'>" + data[i].child[j].title + "</a></span>");
				}
			}*/
		}
	})
		
			/*护肤*/
		$.ajax({
		url: "js/no4.json",
		type: "GET",
		success: function(data){
			for(var i = 0; i < data.length; i++){
				$(".popup").eq(3).append
				("<span class = 'navtou'><a href = '#' class = 'little_title'>" + data[i].title + "</a></span>");
				
			for(var j = 0; j < data[i].child.length; j++){
				$(".popup").eq(3).append(
					"<span class = 'li_child'><a href = '#' class = 'little_title'>" + data[i].child[j].title + "</a></span>");
				}
			}
		}
	})
			
			/*护发*/
		$.ajax({
		url: "js/no5.json",
		type: "GET",
		success: function(data){
			for(var i = 0; i < data.length; i++){
				$(".popup").eq(4).append
				("<span class = 'navtou'><a href = '#' class = 'little_title'>" + data[i].title + "</a></span>");
				
			for(var j = 0; j < data[i].child.length; j++){
				$(".popup").eq(4).append(
					"<span class = 'li_child'><a href = '#' class = 'little_title'>" + data[i].child[j].title + "</a></span>");
				}
			}
		}
	})
		
		
			/*个护*/
		$.ajax({
		url: "js/no6.json",
		type: "GET",
		success: function(data){
			for(var i = 0; i < data.length; i++){
				$(".popup").eq(5).append
				("<span class = 'navtou'><a href = '#' class = 'little_title'>" + data[i].title + "</a></span>");
				
			for(var j = 0; j < data[i].child.length; j++){
				$(".popup").eq(5).append(
					"<span class = 'li_child'><a href = '#' class = 'little_title'>" + data[i].child[j].title + "</a></span>");
				}
			}
		}
	})
		
		
			/*型男*/
		$.ajax({
		url: "js/no7.json",
		type: "GET",
		success: function(data){
			for(var i = 0; i < data.length; i++){
				$(".popup").eq(6).append
				("<span class = 'navtou'><a href = '#' class = 'little_title'>" + data[i].title + "</a></span>");
				
			for(var j = 0; j < data[i].child.length; j++){
				$(".popup").eq(6).append(
					"<span class = 'li_child'><a href = '#' class = 'little_title'>" + data[i].child[j].title + "</a></span>");
				}
			}
			if (data[i].child[j].title = undefined) {
			$("li_child").css("display", "none")
		}
		}
	})
		
		
			/*彩妆*/
		$.ajax({
		url: "js/no8.json",
		type: "GET",
		success: function(data){
			for(var i = 0; i < data.length; i++){
				$(".popup").eq(7).append
				("<span class = 'navtou'><a href = '#' class = 'little_title'>" + data[i].title + "</a></span>");
				
			for(var j = 0; j < data[i].child.length; j++){
				$(".popup").eq(7).append(
					"<span class = 'li_child'><a href = '#' class = 'little_title'>" + data[i].child[j].title + "</a></span>");
				}
			}
		}
	})
		
		
			/*美体健康*/
		$.ajax({
		url: "js/no9.json",
		type: "GET",
		success: function(data){
			for(var i = 0; i < data.length; i++){
				$(".popup").eq(8).append
				("<span class = 'navtou'><a href = '#' class = 'little_title'>" + data[i].title + "</a></span>");
				
			/*for(var j = 0; j < data[i].child.length; j++){
				$(".popup").eq(8).append(
					"<span class = 'li_child'><a href = '#' class = 'little_title'>" + data[i].child[j].title + "</a></span>");
				}*/
			}
		}
	})
		
		
			/*母婴*/
		$.ajax({
		url: "js/no10.json",
		type: "GET",
		success: function(data){
			for(var i = 0; i < data.length; i++){
				$(".popup").eq(9).append
				("<span class = 'navtou'><a href = '#' class = 'little_title'>" + data[i].title + "</a></span>");
				
			for(var j = 0; j < data[i].child.length; j++){
				$(".popup").eq(9).append(
					"<span class = 'li_child'><a href = '#' class = 'little_title'>" + data[i].child[j].title + "</a></span>");
				}
			}
		}
	})
		
		
			/*时尚家居*/
		$.ajax({
		url: "js/no11.json",
		type: "GET",
		success: function(data){
			for(var i = 0; i < data.length; i++){
				$(".popup").eq(10).append
				("<span class = 'navtou'><a href = '#' class = 'little_title'>" + data[i].title + "</a></span>");
				
			for(var j = 0; j < data[i].child.length; j++){
				$(".popup").eq(10).append(
					"<span class = 'li_child'><a href = '#' class = 'little_title'>" + data[i].child[j].title + "</a></span>");
				}
			}
		}
	})
		
		
			/*品牌分类*/
		$.ajax({
		url: "js/no12.json",
		type: "GET",
		success: function(data){
			for(var i = 0; i < data.length; i++){
				$(".popup").eq(11).append
				("<span class = 'navtou'><a href = '#' class = 'little_title'>" + data[i].title + "</a></span>");
				
			for(var j = 0; j < data[i].child.length; j++){
				$(".popup").eq(11).append(
					"<span class = 'li_child'><a href = '#' class = 'little_title'>" + data[i].child[j].title + "</a></span>");
				}
			}
		}
	})
			/*content内容*/
		$.ajax({
			url:"js/content.json",
			type:"GET",
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					$(".content").eq(0).append(
						"<li class='news_pic'><p class = 'news'>" + data[i].title +"</p></li>"
					);
				for (var j = 0; j < data[i].child.length; j++) {
					console.log(1)
					$(".content").eq(0).append(
						"<li class='news_pic'><div class='in'><a href='#'><img src=" + data[i].child[j].img + "/></a><span class='news_name'>" + data[i].child[j].name +"</span></div></li>"
					)
				}
				}
				
			}
		})
		
		
		
		
		
		
		
		
		
		
		
		
	})