$(window).on('load scroll', function(){

  //animatedのclassを持った要素をセレクタに指定
  var elem = $('.animated');

  elem.each(function () {

    //data属性からアニメーション名を取得
    var isAnimate = $(this).data('animate');
    //animated要素に位置を取得
    var elemOffset = $(this).offset().top;
    //現在のスクロールポジションを取得
    var scrollPos = $(window).scrollTop();
    //ウィンドウの高さを取得
    var wh = $(window).height();

    //animated要素がウィンドウ内の中央位置にきたら処理
    if(scrollPos > elemOffset - wh + (wh / 2)){
      $(this).addClass(isAnimate);
    }else{
      $(this).removeClass(isAnimate);
    }
  });

});


 // ハンバーガー
$(document).ready(function(){
  $("#sp_navi_btn").click(function(){
    $(".mainNav_list_sp2").slideToggle();
  });
});






  /*→が変わるドロップダウン*/
jQuery(function ($) {
$('.article-title').on('click', function () {

  $(this).next().slideToggle(200);
  /*矢印の向きを変更*/
  $(this).toggleClass('open');
});

});


jQuery(function ($) {
  //コンテンツを非表示に
  $(".accordion-content").css("display", "none");
  
  //タイトルがクリックされたら
  $(".accordion-title").click(function () {
    //".open"はaccordion-titleでもOK
    //クリックしたaccordion-title以外の全てのopenを取る
    $(".accordion-title").not(this).removeClass("open");
    //クリックされたtitle以外のcontentを閉じる
    $(".accordion-title").not(this).next().slideUp(300);
    //thisにopenクラスを付与
    $(this).toggleClass("open");
    //thisのcontentを展開、開いていれば閉じる
    $(this).next().slideToggle(300);
  });
});



$(document).ready(function(){
    $('.owl-carousel').owlCarousel(
        {   
            slideSpeed: 1000,
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true,
        }
    );
});

   //ヘッダースクロール

 // スクロールイベント
window.addEventListener( "scroll", function() {

  var headerElement = document.getElementById( "header" ) ; // `#header`セレクタを取得
  var rect = headerElement.getBoundingClientRect() ; // 
  var y = rect.top + window.pageYOffset ; // Y方向 (縦)にスクロール量を取得（pageYOffset：windowオブジェクト。現在表示位置のY座標を取得）
  if (y > 0) { // 変数yの値が0よりも
    headerElement.classList.remove('hidden'); // 大きければhiddensセレクタを削除する
  } else {
    headerElement.classList.add('hidden'); // そうでなければhiddensセレクタを追加する
  }
} ) ;

