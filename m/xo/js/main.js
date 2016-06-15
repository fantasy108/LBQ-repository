/*Javascript*/

$(function(){
	$('.code').bind('input',function(){
		if($('.mobile').val() && $('.code').val()){
			$('.btn .enter').addClass('cur')
		}else{
			$('.btn .enter').removeClass('cur')
		}
	})

	var flag = true;
	var obj = $('.get_code');
	obj.bind('click',function(){
		if(flag){
			flag = false;
			var second = 60
			obj.text('等待 '+ second +' s...')
			var time = setInterval(function(){
				if(second==0){
					clearInterval(time)
					obj.text('重新发送')
					flag = true
				}else{
					second--
					obj.text('等待 '+ second +' s...')
				}
			},1000)
		}
	})

	var html = ''
	$('.photoList>li').each(function(){
		html += '<li><div class="big_img"><img src="'+$(this).children('img').attr('data')+'" alt=""></div></li>'
	})
	$('#thelist').append(html)

	var photo = $('.photoList li')
	var len = photo.length
	photo.each(function(){
		var index = photo.index(this)
		if((index+1)%4==0)$(this).css('margin-right','0')
	})	
	photo.live('click',function(){
		var _index = photo.index(this)
		var _height = $(document).height()
		$('.bg').css('height',_height)
		$('#wrapper,.bg').show()
		var img_len = $('.photoList>li').length
		var li_width = $('#thelist>li').width()
		$('#scroller').css('width',img_len*li_width) 
		loaded()
		myScroll.scrollToElement($('#thelist>li').eq(_index)[0],0)
	})

	$('.bg').live('click',function(){
		$('#wrapper,.bg').hide()
	})	
})

var myScroll;
function loaded() {
	myScroll = new iScroll('wrapper', {
		snap: true,
		momentum: false,
		hScrollbar: false,
	});
}

