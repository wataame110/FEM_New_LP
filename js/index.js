
//スクロールした際の動きを関数でまとめる
function PageTopAnime() {

    var scroll = $(window).scrollTop(); //スクロール値を取得
    if (scroll >= 100){//100pxスクロールしたら
      $('#cv_fix').removeClass('hide');   // DownMoveというクラス名を除去して
      $('#cv_fix').addClass('show');      // UpMoveというクラス名を追加して出現
    }else{//それ以外は
        if($('#cv_fix').hasClass('show')){//UpMoveというクラス名が既に付与されていたら
            $('#cv_fix').removeClass('show'); //  UpMoveというクラス名を除去し
            $('#cv_fix').addClass('hide');  // DownMoveというクラス名を追加して非表示
        }
    }

    var wH = window.innerHeight; //画面の高さを取得
    var footerPos =  $('#check_last').offset().top; //footerの位置を取得
    if(scroll+wH >= (footerPos)) {
      var pos = (scroll+wH) - footerPos //スクロールの値＋画面の高さからfooterの位置＋10pxを引いた場所を取得し
      $('#cv_fix').removeClass('show');
      $('#cv_fix').addClass('hide'); //#pagetopに上記の値をCSSのbottomに直接指定してフッター手前で止まるようにする
    }else{//それ以外は
        // if($('#cv_fix').hasClass('hide')){//UpMoveというクラス名がついていたら
        // $('#cv_fix').addClass('show');
        // }
    }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

//スムーススクロール
if (window.matchMedia( '(max-width: 800px)' ).matches) {
    //画面幅769px以上の場合
    var adjust = 45;
}
$(function(){
    $('a[href^="#"]').click(function() {
        var adjust = 0;
        var speed = 800;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - adjust;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });
});

//ヘッダー追従アニメーション
$(function() {
    let target = $(".header__wrap").offset().top;
    var headNav = $(".header__wrap");
    $(window).on("scroll", function() {
        let currentPos = $(window).scrollTop();
        if(currentPos > target) {
            headNav.css({'top':'-100px','opacity':'0'});
            headNav.addClass('fix');
            headNav.animate({
                top:'0',
                opacity:1
            }, 400)
        }
        else {
            headNav.removeClass('fix');
        }
    });
});

//アニメーション
var scrollin = 10;
$(window).on('load scroll', function() {
    $('.fadein__bottom').each(function(){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + scrollin){
            $(this).addClass('scrollin');
        }
    });
    $('.fadein__left').each(function(){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 100){
            $(this).addClass('scrollin');
        }
    });

    $('.fadein__right').each(function(){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 100){
            $(this).addClass('scrollin');
        }
    });
    
});