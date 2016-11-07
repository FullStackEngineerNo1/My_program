/*导航弹出时阴影覆盖*/
$(function(){
	$(".nav").find(".out").hover(function(){
		$(".cover").css("display", "block");
	},function(){
		$(".cover").css("display", "none");
	})


		/*搜索框的变化*/
				$("#input").blur = function() {
					startMove($(this), {width:330});
				}
				$("#input").focus = function() {
					startMove($(this), {width:230});
				}
				
		/*我的账户弹出	*/	
			$(".login_p").find("#Myid").hover(function(){
				$(".enter").css("display", "block");
			},function(){
				$(".enter").css("display", "none");
			})	
				
})

		/*gotop*/
		$(function(){
			$("#gotop").hover(function(){
				$("#gotop").find("img").attr("src", "images/gotop_02.png");
			},function(){
				$("#gotop").find("img").attr("src", "images/gotop_01.png");
			})
		})
		
		/*弹出/关闭二维码*/
		/*弹出*/
		$(function(){
			$("#code_up").click(function(){
				$(".code_big").css("display", "block");
			})
//		})		
		/*关闭*/
//		$(function(){
			$("#code_close").click(function(){
				$(".code_big").css("display", "none")
			})
		})
		
		/*一键gotop*/
		window.onscroll=function(){
			   var goTop=document.getElementById("gotop");
			 
			   var top= document.body.scrollTop||
				   document.documentElement.scrollTop;
				 if(top>=3000){
				    goTop.style.display="block";
				 }else{
				   goTop.style.display="none";
				 }
				 
				 goTop.onclick=function(){
				    document.documentElement.scrollTop=0;
						document.body.scrollTop=0;
				 }
			 }
		