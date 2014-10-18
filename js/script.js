$(function(){
	var timer=null;
	var i=1;
	function info(){
		$('.top-nav>ul>li').on('click',top_nav);
		$('.top-nav>ol>li').on('mouseover',top_ol);
		$('.nav>ul>li').on('mouseover',nav_ul);
		$('.nav1>ol>li').on('mouseover',nav1_ol);
		$('.phone>ul>li').on('mouseover',phone_ul);
		$('.banimg>ul>li').hover(banimg_ul,banimg_ul1);
		dingshi();
		$('.banimg>ul>li').eq(0).css('opacity','1');
		$('.banimg>div>img').eq(0).css('display','block');
		$('.content>ol>li').on('mouseover',conshow_ol);
		$('.ltitle>li').hover(sltitle,hltitle);
	}

	function top_nav(){
		var index=$(this).index();
		$('.top-nav>ol').show().css('left',$(this).outerWidth(true)*index+'px');
	}
	function top_ol(){
		$(this).addClass('hui').siblings().removeClass('hui');
	}
	function nav_ul(){
		var name=$(this).attr('name');
		var len=$('.nav1>ol>li').length;
		$(this).addClass('lv').siblings().removeClass('lv');
		$(this).find('span').addClass('span').parents('li').siblings().find('span').removeClass('span');
		for(var i=0;i<len;i++){
			var name1=$('.nav1>ol>li').eq(i).attr('name');
			if(name1==name){
				$('.nav1>ol>li').eq(i).addClass('xlv');
			}else{
				$('.nav1>ol>li').eq(i).removeClass('xlv');
			}
		}
	}
	function nav1_ol(){
		$(this).addClass('xlv').siblings().removeClass('xlv');
	}
	function phone_ul(){
		var index=$(this).index();
		$(this).addClass('huang').siblings().removeClass('huang');
		$('.content>ol').eq(index).addClass('con-show').siblings().removeClass('con-show');
	}
	function banimg_ul(){
		clearInterval(timer);
		var index=$(this).index();
		i=index;
		$('.banimg>div>img').eq(index).fadeIn().siblings().fadeOut();
		$(this).animate({'opacity':1},300).siblings().animate({'opacity':0.5},300)
	}
	function banimg_ul1(){
		dingshi();
	}
	function dingshi(){
		timer=setInterval(function(){
			var len=$('.banimg>ul>li').length;
			$('.banimg>div>img').eq(i).fadeIn().siblings().fadeOut();
			$('.banimg>ul>li').eq(i).animate({'opacity':1},300).siblings().animate({'opacity':0.5},300);
			i++;
			if(i>=len){
				i=0;
			}
		},1000)
	}
	function conshow_ol(){
		$(this).css('font-weight','bold').siblings().css('font-weight','normal');
	}
	function sltitle(){
		var index=$(this).index();
		var h=$(this).height();
		$('.lcontent').show().css('top',index*h);
		$('.lcontent>div').eq(index).show().siblings().hide();

	}
	function hltitle(){
		$('.lcontent').hide();
		$('.lcontent>div').hide();
	}



	info();
})