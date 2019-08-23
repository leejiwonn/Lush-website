
/* main_image slide */

    $('.next')
    .on('click', function() {
        console.log('right');
        $('.as_box')
        .siblings('.active:not(:last-of-type)') 
        .removeClass('active')
        .next()
        .addClass('active');
    });

    $('.prev')
    .on('click', function() {
        $('.as_box')
        .siblings('.active:not(:first-of-type)')
        .removeClass('active')
        .prev()
        .addClass('active');
    });
 
$(document).ready(function () {

    var clickNum = 0;

    /* tab_menu */

    $('.tabbtn').on('click', function(){
        clickNum = 0;
        $('.tabbtn').removeClass('active');
        $(this).addClass('active');
        $('.pr_ne').css({'margin-left':'0'});
    })    

    $('.tabbtn').eq(0).on('click', function(){
        $('#work02').removeClass('selected');        
        $('#work03').removeClass('selected');
        $('#work04').removeClass('selected');   
        $('#work05').removeClass('selected');   
        $('#work06').removeClass('selected');           
        $('#work01').addClass('selected');
    })
    $('.tabbtn').eq(1).on('click', function(){
        $('#work01').removeClass('selected');        
        $('#work03').removeClass('selected');
        $('#work04').removeClass('selected');   
        $('#work05').removeClass('selected');   
        $('#work06').removeClass('selected');           
        $('#work02').addClass('selected');
    })
    $('.tabbtn').eq(2).on('click', function(){
        $('#work01').removeClass('selected');        
        $('#work02').removeClass('selected');
        $('#work04').removeClass('selected');   
        $('#work05').removeClass('selected');   
        $('#work06').removeClass('selected');           
        $('#work03').addClass('selected');
    })
    $('.tabbtn').eq(3).on('click', function(){
        $('#work01').removeClass('selected');        
        $('#work02').removeClass('selected');
        $('#work03').removeClass('selected');   
        $('#work05').removeClass('selected');   
        $('#work06').removeClass('selected');           
        $('#work04').addClass('selected');
    })

    $('.tabbtn').eq(4).on('click', function(){
        $('#work01').removeClass('selected');        
        $('#work02').removeClass('selected');
        $('#work03').removeClass('selected');   
        $('#work04').removeClass('selected');   
        $('#work06').removeClass('selected');           
        $('#work05').addClass('selected');
    })

    $('.tabbtn').eq(5).on('click', function(){
        $('#work01').removeClass('selected');        
        $('#work02').removeClass('selected');
        $('#work03').removeClass('selected');   
        $('#work04').removeClass('selected');   
        $('#work05').removeClass('selected');           
        $('#work06').addClass('selected');
    })


    /* product slide */

    $('.next').on('click', function(){
        console.log($(this).parent().find('li').length);
        var listNum = $(this).parent().find('li').length;
        if(clickNum < listNum - 5){
            clickNum++;
            $(this).parent().find('.pr_ne').stop().animate({'margin-left':clickNum * -222+'px'});
        } else {
            return false;
        }
    })
    $('.prev').on('click', function(){
        if(clickNum > 0){
            clickNum--;
            $(this).parent().find('.pr_ne').stop().animate({'margin-left':clickNum * -222+'px'});
        } else {return false;}
    })

});

/* top */

jQuery(document).ready(function($){
	
	var offset = 300,
		offset_opacity = 1200,
		scroll_top_duration = 700,
		$back_to_top = $('.cd-top');

	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});

/* quick menu */

var quickBox = $('.quickBox');
var quick_top = 30;
quickBox.css('top', $(window).height());

$(document).ready(function(){
    quickBox.animate({"top":$(document).scrollTop()+quick_top+"px"}, 400);
    $(window).scroll(function(){
        if($(document).scrollTop() < 1780){
            quickBox.stop();
            quickBox.animate({"top":$(document).scrollTop()+quick_top+"px"},400);
        } else {return false;}
    });
});

 /* product slide */

 var $slide = $('.e-slide'),
 $slideGrup = $('.slide_group'),
 $sira = $('.eve_btn');

var toplam = ($slide.length - 1),
 suan = 0,
 otomatik = true;

$sira.first().addClass('aktif-slide');

var slideTikla = function() {
// Otomatik slide durdurma
window.clearInterval(otoSlide);
otomatik = false;

var slideIndex = $sira.index($(this));

indexGuncelle(slideIndex);
};

var indexGuncelle = function(aktifSlide) {
if(otomatik) {
 if(suan === toplam) {
   suan = 0;
 } else {
   suan++;
 }
} else {
   suan = aktifSlide;
}

$sira.removeClass('aktif-slide');
$sira.eq(suan).addClass('aktif-slide');

degistir(suan);
};

var degistir = function(slideSira) {
 $slideGrup.animate({
   'top': '-' + slideSira + '00%'
 });
};

$sira.on( 'click', slideTikla);

var otoSlide = window.setInterval(indexGuncelle, 800);



  /* scroll top */

  $(document).ready(function(){

    $(window).scroll(function () {
        var scrollValue = $(document).scrollTop();
        console.log(scrollValue); });

})