$(function () {
  // go_top 버튼
  var goTop = $(".go_top");
  $(window).scroll(function () {
    var scrollTopValue = $(document).scrollTop();

    if (scrollTopValue > 1000) {
      goTop.fadeIn();
    } else {
      goTop.fadeOut();
    }
  });

  goTop.click(function () {
    $("html, body").animate({ scrollTop: 0 }, 400);
  });

  // go_down 버튼
  var goDown = $(".go_down");

  goDown.click(function () {
    $("html, body").animate({ scrollTop: 900 }, 400);
  });

  // 스크롤 애니메이션
  ScrollReveal().reveal(".top_ani", {
    origin: "top",
    duration: 1000,
    distance: "200px",
    delay: 300,
  });

  // 풀페이지
  $("#fullpage").fullpage({
    navigation: true,
    menu: ".nav",
    anchors: ["page1", "page2", "page3", "page4", "page5"],
    responsive: 0,
  });

  // 프로필 모달
  $(".profile").magnificPopup({
    type: "ajax",
  });

  // 웹디자인 모달
  $(".image-popup").magnificPopup({
    type: "image",

    closeOnBgClick: true,
    closeOnContentClick: true,
    mainClass: "mfp-img-mobile",
    image: {
      verticalFit: true,
    },
  });

  // 배너 슬릭
  $(".banner_slick").slick({
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  });
});
