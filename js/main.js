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

  // About me 모달
  $(".popup").magnificPopup({
    type: "ajax",
  });

  // 섹션_02 모달
  $(".image-popup").magnificPopup({
    type: "image",

    closeOnBgClick: true,
    closeOnContentClick: true,
    mainClass: "mfp-img-mobile",
    image: {
      verticalFit: true,
    },
  });

  // // section_02 라이트박스
  // var itemBtn = $(".section_02 li");
  // var dimm_01 = $(".dimm_01");
  // var dimmImg = dimm_01.find("img");

  // itemBtn.click(function () {
  //   var dataImg = $(this).find("img").attr("data-img");
  //   dimm_01.addClass("show");
  //   dimmImg.attr("src", dataImg);

  //   posY = $(window).scrollTop();
  //   $("html, body").addClass("not_scroll");
  //   $(".cont").css("top", -posY);
  // });

  // dimm_01.click(function () {
  //   $(this).removeClass("show");
  //   $(this).scrollTop(0);

  //   $("html, body").removeClass("not_scroll");
  //   posY = $(window).scrollTop(posY);
  // });
});
