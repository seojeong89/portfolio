$(function () {
  // 해더 텍스트 다운
  // ScrollReveal().reveal(".top_ani", {
  //   origin: "top",
  //   duration: 1000,
  //   distance: "200px",
  //   delay: 300,
  // });

  // 해더 텍스트
  var typed = new Typed("#heade_typed", {
    stringsElement: "#header",
    typeSpeed: 100,
    startDelay: 1000,
    backSpeed: 30,
    showCursor: false,
  });

  // 풀페이지;
  $("#fullpage").fullpage({
    navigation: true,
    menu: ".nav",
    anchors: ["page1", "page2", "page3", "page4", "page5"],
    responsive: 990,
  });

  // 프로필 모달
  // $(".profile").magnificPopup({
  //   type: "ajax",
  // });

  // 프로필 모달 - 스크롤
  $(".profile").magnificPopup({
    type: "ajax",

    callbacks: {
      open: function () {
        fullpage_api.setAllowScrolling(false);
      },
      close: function () {
        fullpage_api.setAllowScrolling(true);
      },
    },
  });

  // 섹션_03 앱 갤러리
  {
    $(".app_01").magnificPopup({
      delegate: "a",
      type: "image",
      tLoading: "Loading image #%curr%...",
      mainClass: "mfp-img-mobile",
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1],
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function (item) {
          return item.el.attr("title") + "<small>by Marsel Van Oosten</small>";
        },
      },

      callbacks: {
        open: function () {
          fullpage_api.setAllowScrolling(false);
        },
        close: function () {
          fullpage_api.setAllowScrolling(true);
        },
      },
    });

    $(".app_02").magnificPopup({
      delegate: "a",
      type: "image",
      tLoading: "Loading image #%curr%...",
      mainClass: "mfp-img-mobile",
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1],
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function (item) {
          return item.el.attr("title") + "<small>by Marsel Van Oosten</small>";
        },
      },

      callbacks: {
        open: function () {
          fullpage_api.setAllowScrolling(false);
        },
        close: function () {
          fullpage_api.setAllowScrolling(true);
        },
      },
    });

    $(".app_03").magnificPopup({
      delegate: "a",
      type: "image",
      tLoading: "Loading image #%curr%...",
      mainClass: "mfp-img-mobile",
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1],
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function (item) {
          return item.el.attr("title") + "<small>by Marsel Van Oosten</small>";
        },
      },

      callbacks: {
        open: function () {
          fullpage_api.setAllowScrolling(false);
        },
        close: function () {
          fullpage_api.setAllowScrolling(true);
        },
      },
    });

    $(".app_04").magnificPopup({
      delegate: "a",
      type: "image",
      tLoading: "Loading image #%curr%...",
      mainClass: "mfp-img-mobile",
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1],
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function (item) {
          return item.el.attr("title") + "<small>by Marsel Van Oosten</small>";
        },
      },

      callbacks: {
        open: function () {
          fullpage_api.setAllowScrolling(false);
        },
        close: function () {
          fullpage_api.setAllowScrolling(true);
        },
      },
    });

    $(".app_05").magnificPopup({
      delegate: "a",
      type: "image",
      tLoading: "Loading image #%curr%...",
      mainClass: "mfp-img-mobile",
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1],
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function (item) {
          return item.el.attr("title") + "<small>by Marsel Van Oosten</small>";
        },
      },

      callbacks: {
        open: function () {
          fullpage_api.setAllowScrolling(false);
        },
        close: function () {
          fullpage_api.setAllowScrolling(true);
        },
      },
    });
  }
  // 앱 갤러리 끝

  // 섹션_04 배너 슬릭
  $(".banner_slick").slick({
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {},
    ],
  });

  // 섹션_04 배너 갤러리
  $(".banner_slick").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1],
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function (item) {
        return item.el.attr("title") + "<small>by Marsel Van Oosten</small>";
      },
    },

    callbacks: {
      open: function () {
        fullpage_api.setAllowScrolling(false);
      },
      close: function () {
        fullpage_api.setAllowScrolling(true);
      },
    },
  });

  // ====================
  // 메뉴
  var bars = $(".bars");
  var menu = $(".menu");

  bars.on("click", function () {
    menu.toggleClass("active");

    // if ($(this).find("i").hasClass("xi-bars")) {
    //   $(this).find("i").attr("class", "xi-close");
    // } else {
    //   $(this).find("i").attr("class", "xi-bars");
    // }
  });
});
