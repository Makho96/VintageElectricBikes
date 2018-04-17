$(document).ready(function(){

    function ImageCounter() {
        var imageArr = $('.Side-Image');
        for(var i = 0 ; i<imageArr.length;i++)
        {
            if($(imageArr[i]).hasClass('active-image'))
            {
                $('.current-image-number').html(i+1);
            }
        }
        $('.total-image-number').html(imageArr.length.toString());
    }

    ImageCounter();

    $('.owl-container-slider').owlCarousel({
       items:1,
       loop:true
    });

    var rellax = new Rellax('.rellax');

    $('.gallery').owlCarousel({
        items:3,
        loop:true,
        nav:false,
        autoplay:true,
        margin:10
    });

    $('.slider').owlCarousel({
        items:1,
        loop:true,
        autoplay:false,
        nav:true
    });

    // $('.outlaw-slider .slider').owlCarousel({
    //    item:1,
    //    loop:true,
    //    autoplay:false,
    //    nav:true,
    //    responsive:{
    //        0:{
    //            items:1
    //        }
    //    }
    // });

    $('.collection').owlCarousel({
        items:4,
        stagePadding:25,
        nav:false,
        pagination: false,
        responsive:{
            1367:{
                items:4,
                stagePadding:25,
                nav:false
            },
            1025:{
                items:4,
                stagePadding:0,
                nav:false
            },
            768:{
                items:3,
                stagePadding:0,
                nav:false
            },
            361:{
              items:1,
              stagePadding:25,
              nav:false
            },
            0:{
                items:1,
                stagePadding:0,
                nav:false
            }
        }
    });

    $('.Cruz').owlCarousel({
        items:3,
        stagePadding:150,
        responsive:{
            1367:{
                items:3,
                stagePadding:150
            },
            1024:{
                items:3,
                stagePadding:50
            },
            768:{
                items:3,
                stagePadding:0
            },
            361:{
              items:1,
              stagePadding:25
            },
            0:{
                items:1,
                stagePadding:0
            }
        }

    });

    $('.Scrambler').owlCarousel({
        items:1,
        stagePadding:500,
        responsive: {
            1367: {
                items: 1,
                stagePadding: 500
            },
            1023: {
                items: 1,
                stagePadding: 300
            },
            0:{
              items:1,
              stagePadding:0
            }
        }
    });

    $('.owl-theme .owl-dots .owl-dot').click(function () {

        var arrImage = $('.slider-image');
        var arrDots = $('.owl-theme .owl-dots .owl-dot');

    });

	$('.up-arrow').click(function(){
		var counter = $(this).siblings('.quantity').html();
		counter++;
        $(this).siblings('.quantity').html(counter);
        var priceChanger = $(this).parent().parent().siblings().children().children().children('.price-changer');
        var price = priceChanger.attr('data-price');
        var finalPrice = price*counter;
        var strFinalPrice = (finalPrice.toString()).split('');

        for(var i = strFinalPrice.length-3;i>0;i-=3){
            strFinalPrice.splice(i,0,',');
        }
        var strFroPrice="";
        for(var i =0;i<strFinalPrice.length;i++){
            strFroPrice+=strFinalPrice[i];
        }

        priceChanger.html("$ "+strFroPrice)  ;


	});
	
	$('.down-arrow').click(function(){
		var counter = $(this).siblings('.quantity').html();
		counter--;
        var priceChanger = $(this).parent().parent().siblings().children().children().children('.price-changer');
        var price = priceChanger.attr('data-price');

		if(counter <= 1){

			$(this).siblings('.quantity').html(1);

            var finalPrice = price*1;
            var strFinalPrice = (finalPrice.toString()).split('');

            for(var i = strFinalPrice.length-3;i>0;i-=3){
                strFinalPrice.splice(i,0,',');
            }
            var strFroPrice="";
            for(var i =0;i<strFinalPrice.length;i++){
                strFroPrice+=strFinalPrice[i];
            }

            priceChanger.html("$ "+strFroPrice);
		}
		else{
			$(this).siblings('.quantity').html(counter);

			var finalPrice = price*counter;
            var strFinalPrice = (finalPrice.toString()).split('');

            for(var i = strFinalPrice.length-3;i>0;i-=3){
                strFinalPrice.splice(i,0,',');
            }
            var strFroPrice="";
            for(var i =0;i<strFinalPrice.length;i++){
                strFroPrice+=strFinalPrice[i];
            }
            priceChanger.html("$ "+strFroPrice);
		}

	});

    // $('.choose-color').hover(function () {
    //     $(this).children('.radio-circle').children('.radio-circle-2').css({
    //         width:'100%',
    //         height:'100%'})
    // },function () {
    //     $(this).children('.radio-circle').children('.radio-circle-2').css({
    //         width:'0',
    //         height:'0'})
    // });


    // $('.choose-color').mouseout(function () {
    //     $(this).children('.radio-circle').children('.radio-circle-2').css({
    //         width:'0',
    //         height:'0'
    //     });
    // });

    $('.choose-color').click(function () {

        var attrName = $(this).children($('input[type="radio"]')).attr("name");
        var sameName = $('.choose-color').children('input[type="radio"]');

        for(var i=0; i<sameName.length;i++){
            if($(sameName[i]).attr("name")===attrName){
                $(sameName[i]).parent('.choose-color').removeClass('active-color');
                $(sameName[i]).siblings('.radio-circle').children('.radio-circle-2').css(
                    {width:'0%',
                    height:'0%'}
                    )
            }
        }
        $(this).children('.radio-circle').children('.radio-circle-2').css({
           width:'100%',
           height:'100%'
        });
        $(this).addClass('active-color');

        if($(this).children('.radio-text').attr('data-price') && !$(this).children('.radio-text').hasClass('added')){
            var oldPrice = parseFloat($('.build-price').html());
            var detPrice = parseFloat($(this).children('.radio-text').attr('data-price'));

            $('.build-price').each(function() {
                var $this = $(this),
                    countTo = oldPrice + detPrice;
                $({ countNum: $this.text()}).animate({
                        countNum: countTo
                    },
                    {
                        duration: 500,
                        easing:'linear',
                        step: function() {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $this.text(this.countNum);
                        }

                    });

            });
            $(this).children('.radio-text').addClass('added');
            $(this).siblings('.choose-color').children('.radio-text').removeClass('added');
        }
        else if(!$(this).children('.radio-text').attr('data-price')) {
            var oldPrice = parseFloat($('.build-price').html());
            if ($(this).siblings('.choose-color').children('.radio-text').attr('data-price')) {
                var detPrice = parseFloat($(this).siblings('.choose-color').children('.radio-text').attr('data-price'));
                $('.build-price').each(function () {
                    var $this = $(this),
                        countTo = oldPrice - detPrice;
                    $({countNum: $this.text()}).animate({
                            countNum: countTo
                        },
                        {
                            duration: 500,
                            easing: 'linear',
                            step: function () {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function () {
                                $this.text(this.countNum);
                            }

                        });
                });
                $(this).siblings('.choose-color').children('.radio-text').removeClass('added');
            }
        }

        if($(this).children('.radio-circle-3').attr('data-color')==="f86065"){
            $('.frames').css({display:'none'});
            $('.red-frame').css({display:'block'});
        }
        else if($(this).children('.radio-circle-3').attr('data-color')==="56a2d0"){
            $('.frames').css({display:'none'});
        }
        else if($(this).children('.radio-circle-3').attr('data-color')==="696d6f"){
            $('.frames').css({display:'none'});
            $('.gray-frame').css({display:'block'});
        }
        else if($(this).children('.radio-circle-3').attr('data-color')==="339180"){
            $('.frames').css({display:'none'});
            $('.green-frame').css({display:'block'});
        }

    });

    $('.tires').click(function () {
       if($(this).hasClass('tire-creme')){
           $('.black-tires').css({display:'none'});
       }
       else if($(this).hasClass('tire-black')){
           $('.black-tires').css({display:'block'});
       }
    });

    $('.owl-theme .owl-nav [class*=owl-next]').click(function () {
        var arrImage = $('.slider-image');
        var currIndex=0;
        for(var i = 0 ; i<arrImage.length;i++)
        {
            if($(arrImage[i]).hasClass('active-image'))
            {
                currIndex = i;
            }
        }
        $('.slider-image').removeClass('active-image');
        if((currIndex+1)==arrImage.length){
            currIndex = -1;
        }
        $(arrImage[currIndex+1]).addClass('active-image');
    });

    $('.owl-theme .owl-nav [class*=owl-prev]').click(function () {
        var arrImage = $('.slider-image');
        var currIndex=0;
        for(var i = 0 ; i<arrImage.length;i++)
        {
            if($(arrImage[i]).hasClass('active-image'))
            {
                currIndex = i;
            }
        }
        $('.slider-image').removeClass('active-image');
        if((currIndex-1)==-1){
            currIndex = arrImage.length;
        }
        $(arrImage[currIndex-1]).addClass('active-image');
    });


    $('.play-button').click(function () {
       $('.video-vimeo-container').css({display:"block"});
    });

    $('.video-vimeo button').click(function () {
        $('.video-vimeo-container').css({display:"none"});
    });


    $('.persons span').click(function () {
        var bg = $(this).css('background-image');
        bg = bg.replace(/.*\s?url\([\'\"]?/, '').replace(/[\'\"]?\).*/, '');
        var index = bg.search('Assets');
        bg = bg.substring(index,bg.length);
        $('.profile-picture').css({backgroundImage:'url("'+bg+'")'});

    });


    $('.pointers').click(function () {
        if($(this).hasClass('scrambler-pointer')){
            $('.pointers').removeClass('active-scrambler-pointer');
            $(this).addClass("active-scrambler-pointer");
        }
       $('.pointers').removeClass('active-pointer');
       $(this).addClass("active-pointer");
    });

    $('.more-detail').click(function () {
       $(".detailes-block").slideDown();
    });





    var topPosition;
    topPosition =$('header .Container').position().top + $('header .Container').outerHeight();

    if($('.builder-form .builderContent h2').length) {
        var topHeadPosition;
        topHeadPosition = $('.builder-form .builderContent h2').position().top + 300;
    }

    $(window).scroll(function () {

        if($('.builder-form .builderContent h2').length) {
            if($(document).scrollTop()> topHeadPosition){
                $('.pos-fixed').css({
                    position:'fixed',
                    top:'0',
                    right:'5%'
                })
            }
            if($(document).scrollTop()<= topHeadPosition){
                $('.pos-fixed').css({
                    position:'relative',
                    top:'0',
                    right:'5%'
                })
            }
        }

            if($(document).width()>768) {

                $('.not-scrollable').attr('data-rellax-speed','5');

                if ($(document).scrollTop() <= topPosition) {
                    $('header .Container').css({transform: 'translate(0,0)'});
                }
                if ($(document).scrollTop() > topPosition) {
                    $('header .Container').css({transform: 'translate(0,-50vh)'});
                }
            }
            else if($(document).width()<=768){
                $('.not-scrollable').attr('data-rellax-speed','0').css({transform:"translate(0,0,0)"});

            }



            var position;
            if($('header').hasClass('scrollable')) {
                var a = $('.index-moto-image').css('transform');

                var b = a.indexOf('(');
                var c = a.indexOf(',');

                var d = a.substr(b,c);
                c =d.indexOf(',');

                d = d.substr(1,c-1);


                var calculation = 1 + $(document).scrollTop() / 2500;
                if (calculation >= d + 0.2) {
                    calculation = d + 0.2;
                }
                $('.index-moto-image').css({'transform': 'scale(' + calculation + ')'});

                if ($('.index-moto-image').hasClass('outlaw-image')) {
                    $('.index-moto-image.outlaw-image').css({transform: 'scale(' + calculation + ') translate3d(0,-29%,0)'});
                }
                else if ($('.index-moto-image').hasClass('cruz-image')) {
                    $('.index-moto-image.cruz-image').css({transform: 'scale(' + calculation + ') translate3d(0,-20%,0)'});
                }

                position = $('.fourt-block').position().top;
                var opacity;
                var range = 900;
                if ($(document).scrollTop() > position) {
                    var scrollTop = $(document).scrollTop();
                    var height = $('.person').height() + 100;
                    var offset = height / 0.5;
                    var calc = 4 - (scrollTop - offset + range) / range;
                    opacity = ((1 - calc) + 0.2);
                    $('.persons-left span').css({
                        'opacity': opacity
                    });
                    $('.person-right span').css({'opacity': opacity});
                }
        }
    });
    $(function() {
        var contentChanger = 0;
        $('.chosen-price .selected-type').not('.product-types ul li').on('click', function() {

            if (contentChanger == 0) {
                $('.arrow-down').css({transform:'translate(0,-50%) rotate(-180deg)'});
                $('.type-selector').slideToggle();
                $('.inside-gallery').css({opacity:'0'});
                contentChanger = 1;
            }

            else if (contentChanger == 1) {
                $('.arrow-down').css({transform:'translate(0,-50%) rotate(0deg)'});
                $('.type-selector').slideToggle();
                $('.inside-gallery').css({opacity:'1'});

                contentChanger = 0;
            }

        })
    });

    $('.product-types ul li').click(function () {
        var arr = $('.product-types ul li');
        $('.selected-type p').html($(this).html());
        var Price = $(this).html();
        Price = Price.substring(($(this).html()).indexOf('$'),($(this).html()).length);
        $('.chosen-price > p').html(Price);
        for(var i =0; i< arr.length; i++){
            $(arr[i]).css({display:'block'});
            if($(arr[i]).html()===$(this).html()){
                $(arr[i]).css({display:'none'});
            }
        }

    });

    $(function () {
        var contentChanger = 0;
        $('.burger').click(function () {
           if(contentChanger ==0 ) {
               $(this).css({transform:'rotate(0deg)'});
               $('.burger .square').css({transform:'rotate(180deg)'});
               contentChanger = 1;
               $('.burger-menu').css({width:'100%'});
               $('.burger-menu li a').css({fontSize:'20px'});
               $('.burger-menu .close').css({display:'inline-block'})
           }
           else if(contentChanger == 1){
               $(this).css({transform:'rotate(45deg)'});
               $('.burger .square').css({transform:'rotate(0deg)'});
               contentChanger = 0;
               $('.burger-menu li a').css({fontSize:'0'});
               $('.burger-menu').css({width:'0'});
               $('.burger-menu .close').css({display:'none'})
           }
        });
        $('.close').click(function () {
            $('.burger').css({transform:'rotate(45deg)'});
            $('.burger .square').css({transform:'rotate(0deg)'});
            $('.burger-menu li a').css({fontSize:'0'});
            $('.burger-menu').css({width:'0'});
            $('.burger-menu .close').css({display:'none'});
            contentChanger = 0;

        });
    });


    $('.inside-gallery .gallery-image .owl-item').dblclick(function () {
        $('.Gallery').css({display:'block'});
    });

    $('.Side-Image').click(function () {
        var bg = $(this).css('background-image');
        bg = bg.replace(/.*\s?url\([\'\"]?/, '').replace(/[\'\"]?\).*/, '');
        var index = bg.search('Assets');
        bg = bg.substring(index,bg.length);
        $('.Main-Image').css({backgroundImage:'url("'+bg+'")'});
        $('.Side-Image').removeClass('active-image');
        $(this).addClass('active-image');
    });

    $('.next-arrow').click(function () {
        var ImageArr = $('.Side-Image');
        var currIndex=0;

        for(var i = 0 ; i<ImageArr.length; i++)
        {
            if($(ImageArr[i]).hasClass('active-image'))
            {
                currIndex = i;
            }
        }
        if((currIndex+1)===ImageArr.length){
            currIndex = -1;
        }
        $('.Side-Image').removeClass('active-image');
        var bg = $(ImageArr[currIndex+1]).css('background-image');
        bg = bg.replace(/.*\s?url\([\'\"]?/, '').replace(/[\'\"]?\).*/, '');
        var index = bg.search('Assets');
        bg = bg.substring(index,bg.length);
        $('.Main-Image').css({backgroundImage:'url("'+bg+'")'});
        $(ImageArr[currIndex+1]).addClass('active-image');
        $('.current-image-number').html(currIndex + 2);
        if(currIndex+2>ImageArr.length){
            currIndex = 1;
        }
    });

    $('.prev-arrow').click(function () {
        var ImageArr = $('.Side-Image');
        var currIndex=0;
        for(var i = 0 ; i<ImageArr.length;i++)
        {
            if($(ImageArr[i]).hasClass('active-image'))
            {
                currIndex = i;
            }
        }
        if((currIndex-1)==-1){
            currIndex = ImageArr.length;
        }
        $('.current-image-number').html(currIndex);
        $('.Side-Image').removeClass('active-image');
        var bg = $(ImageArr[currIndex-1]).css('background-image');
        bg = bg.replace(/.*\s?url\([\'\"]?/, '').replace(/[\'\"]?\).*/, '');
        var index = bg.search('Assets');
        bg = bg.substring(index,bg.length);
        $('.Main-Image').css({backgroundImage:'url("'+bg+'")'});
        $(ImageArr[currIndex-1]).addClass('active-image');
    });
});