$(document).ready(function(){

    $(window).scroll(function(){
        let x=$(window).scrollTop();
        let homeHeight= $('#home').outerHeight();
        if(x>=homeHeight){
            $('.navbar').addClass('bg-dark');
            $('.navbar').removeClass('bg-transparent');
            $('.btn-up').fadeIn(1000);
        }else{
            $('.navbar').addClass('bg-transparent');
            $('.navbar').removeClass('bg-dark');
            $('.btn-up').fadeOut(1000);
        }
    
    });

    $('.btn-up').click(function(){
        $('body,html').animate({
            scrollTop:0},3000);
    });

    $('.navbar .nav-link').click(function(e){
        let x=$(e.target).attr('href');
        console.log(e.target);
        let offs= $(x).offset().top;
        $('body,html').animate({
            scrollTop:offs},2000)
    });

    


    let colors=['#f1c40f','#ff206e','#c0392b','#2980b9','#6ab04c','#f39c12'];
    for(let i=0;i<6;i++){
        $('.options li').eq(i).css('backgroundColor',colors[i]);
    }

    $('.options i').click(function(){  
        let infoWidth=$('.options-slide').outerWidth();
        let x=$('.options').offset().left;
        if(x==0){
            $('.options').animate({left:-infoWidth},2000);
        }else{
            $('.options').animate({left:0},2000);
        }  
    });

    $('.options li').click(function(e){
        let bg=$(e.target).css('backgroundColor');
        $('html').attr('style',`--mainColor:${bg}`);
    });

    $('.options img').click(function(e){
        let img=$(e.target).attr('src');
        $('.header').css('backgroundImage',`url(${img})`);
        $(e.target).css('transform','scale(1.2)');
        $(e.target).siblings().css('transform','scale(1)');
    });
    
    $(".owl-carousel").owlCarousel({
        items:5,
        loop:true,
        margin:20,
    });

});

