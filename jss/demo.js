// JavaScript Document

$(function(){
	$(".s_navlist").hide();
	$(".hamburger-menu").click(function(){
		$(this).toggleClass("open");
		$(".s_navlist").slideToggle( "800", function() {
			})
		})
	})


$(function(){
	// 先取得必要的元素並用 jQuery 包裝
	// 再來取得 $block 的高度及設定動畫時間
	var $block = $('#slideshow_abgneBlock'),
		$slides = $('ul.list', $block),
		_width = $block.width(),
		$li = $('li', $slides),
		_animateSpeed = 600;
 
	// 產生 li 選項
	var _str = '';
	for(var i=0, j=$li.length;i<j;i++){
		// 每一個 li 都有自己的 className = playerControl_號碼
		_str += '<li class="playerControl_' + (i+1) + '"></li>';
	}
 
	// 產生 ul 並把 li 選項加到其中
	// 並幫 li 加上 mouseover 事件
	$('<ul class="playerControl"></ul>').html(_str).appendTo($slides.parent()).css('left', function(){
		// 把 .playerControl 移到置中的位置
		return (_width - $(this).width()) / 2;
	}).find('li').mouseover(function(){
		var $this = $(this);
		$this.addClass('current').siblings('.current').removeClass('current');
		// 移動位置到相對應的號碼
		$slides.stop().animate({
			left: _width * $this.index() * -1
		}, _animateSpeed);
 
		return false;
	}).eq(0).mouseover();
});

//APP輪播
$(function(){
	var $block = $('#slideshow_abgneBlock_a'),
		$slides = $('ul.list', $block),
		_width = $block.width(),
		$li = $('li', $slides),
		_animateSpeed = 600;
 
	// 產生 li 選項
	var _str = '';
	for(var i=0, j=$li.length;i<j;i++){
		// 每一個 li 都有自己的 className = playerControl_號碼
		_str += '<li class="playerControl_' + (i+1) + '"></li>';
	}
 
	// 產生 ul 並把 li 選項加到其中
	// 並幫 li 加上 mouseover 事件
	$('<ul class="playerControl"></ul>').html(_str).appendTo($slides.parent()).css('left', function(){
		// 把 .playerControl 移到置中的位置
		return (_width - $(this).width()) / 2;
	}).find('li').mouseover(function(){
		var $this = $(this);
		$this.addClass('current').siblings('.current').removeClass('current');
		// 移動位置到相對應的號碼
		$slides.stop().animate({
			left: _width * $this.index() * -1
		}, _animateSpeed);
 
		return false;
	}).eq(0).mouseover();
});

/*odal 點了彈出視窗*/
$(function(){
  $("#web2017003").animatedModal({modalTarget:'modal-w2017003'});
  $("#web2017002").animatedModal({modalTarget:'modal-w2017002'});
  $("#web2017001").animatedModal({modalTarget:'modal-w2017001'});
  $("#web2016004").animatedModal({modalTarget:'modal-w2016004'});
  $("#web2016003").animatedModal({modalTarget:'modal-w2016003'});
  $("#web2016002").animatedModal({modalTarget:'modal-w2016002'});
  $("#web2016001").animatedModal({modalTarget:'modal-w2016001'});
  $("#web2015002").animatedModal({modalTarget:'modal-w2015002'});
  $("#web2015001").animatedModal({modalTarget:'modal-w2015001'});
  $("#web2014002").animatedModal({modalTarget:'modal-w2014002'});
  $("#web2014001").animatedModal({modalTarget:'modal-w2014001'});
  $("#web2013002").animatedModal({modalTarget:'modal-w2013002'});
  $("#web2013001").animatedModal({modalTarget:'modal-w2013001'});
	
  $("#app2017002").animatedModal({modalTarget:'modal-a2017002'});
  $("#app2017001").animatedModal({modalTarget:'modal-a2017001'});
  $("#app2016003").animatedModal({modalTarget:'modal-a2016003'});
  $("#app2016002").animatedModal({modalTarget:'modal-a2016002'});
  $("#app2016001").animatedModal({modalTarget:'modal-a2016001'});
  $("#app2015003").animatedModal({modalTarget:'modal-a2015003'});
  $("#app2015002").animatedModal({modalTarget:'modal-a2015002'});
  $("#app2015001").animatedModal({modalTarget:'modal-a2015001'});
  $("#app2014002").animatedModal({modalTarget:'modal-a2014002'});
  $("#app2014001").animatedModal({modalTarget:'modal-a2014001'});
	
	
	
	
//$(".close-animatedModal").click(function(){
//	$(".animatedmodalbox ").css()
//	});
})



