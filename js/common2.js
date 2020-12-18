$(document).ready(function() {
  //1.메인메뉴

  $('#gnb_menu ul li ul').hide();
  // // $(".tab_menu li div").hide();
  // // $(".tab_menu li div:first").show();
  $('#gnb_menu > ul > li').on('mouseenter',function(){
    $('#gnb_menu ul li ul').not($(this).children('ul')).stop().slideUp();
    $(this).children('ul').stop().slideDown();
    $('#gnb_menu ul li a').css({color:"#000" })
    $('#header').css({backgroundColor:"rgb(255, 255, 255)"})
    $('#gnb_member ul li a').css({color:"#000"})
    // pic3.jpg 파일을 세번째 추가
    $("#header h1 a img").attr({src:"images/logob.png"})
  })
  $('#gnb_menu > ul > li > ul').on('mouseleave', function(){
    $('#gnb_menu ul li ul').stop().slideUp();
    $('#gnb_menu ul li a').css({color:"#fff"})
    $('#header').css({backgroundColor:"rgba(0, 0, 0, 0.8)"})
    $('#gnb_member ul li a').css({color:"#fff"})
    $("#header h1 a img").attr({src:"images/logo.png"})
  })

  //메인사진 슬라이드 (롤링 ok, 버튼 추가해야됨.)
// function rolling() {
//   $('#sliderList li:eq(1)').addClass('active')
//                           .css({ opacity: 0 })
//                           .animate({ opacity: 1 }, 1000, function() {
//                             $("#sliderList").append($("#sliderList li:eq(0)"))
//                             $("#sliderList li:last").removeClass('active')
//                           })
//   }
//   setInterval(rolling, 5000)

// 마진레프트 삼백 퍼센트를 어떻게 대체해야 될지?

  function nextSlider() {
    if ( parseInt($("#sliderList").css('margin-left')) == -parseInt($("#sliderList li:eq(0)").width() * 2 +1)  ) {
      return false;
    }
    else {
      $("#sliderList:not(:animated)").animate({ marginLeft: "-=100%" })
    }
  }


  $(".next").on('click', function() {
    nextSlider();
  })
  $(".prev").on('click', function() {
    if ( $("#sliderList").css('margin-left') == "0px" ) {
      return false;
    }
    else {
      $("#sliderList:not(:animated)").animate({ marginLeft: "+=100%" })
    }
  })

  //경원재 페밀리사이트 이동.
  $('#famailysite').on('click',function(){
    $('#famailysite ul').slideToggle();
  })





    // 경원재 객실 경원재객실둘러보기
    // 왜 안먹히는지... ㅠㅠㅠ 모르겠다...

    $('#roomtype ul li').on('click', function(e){
      $('#roomtype ul li figure').hide();
      $(this).children('figure').show();
      $("#roomtype ul li").removeClass('on')
      $(this).addClass("on")


      // $('#roomtype ul li figure').removeClass('imgOn')
      // $(this).children('img').addClass('imgOn')


      e.preventDefault();
    })

    //메뉴 고정
    $(window).on('scroll', function(){
       if($(this).scrollTop() >= $(window).height()){
      //if( $(this).scrollTop() >= $(window).height() ){
           $('#header').css({position:"fixed" });
       }
       else{
           $('#header').css({position:"absolute"});
           }
         });

    // //넓이가 작아질 때 실행할
    // $(window).resize(function(){
    // var width = $(window).width();
    // if (width >= 600) {
    //     // 넓이가 600px 보다 크거나 같을때 실행할 이벤트
    //     $('#famailysite').css({top:20})
    //     $('#gnb_member').css({top:20})
    //   }
    // });
    // $(window).trigger("resize");
    //

    var pos = $("#restaurant").position().top;
    $(window).scroll(function(){
      if($(this).scrollTop()>= pos -300){
        $(".dininginfo").animate({opacity:1,
                                  paddingLeft:"800px"},1000)}
    })

    var pos2 = $("#special_offer").position().top;
    $(window).scroll(function(){
      if($(this).scrollTop()>= pos2 -300){
        $(".offerinfo").animate({opacity:1,
                                  paddingLeft:"0px"},1000)}



    })


    })
