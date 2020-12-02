$(function () {
  // 해더 텍스트 다운
  ScrollReveal().reveal(".top_ani", {
    origin: "top",
    duration: 1000,
    distance: "200px",
    delay: 300,
  });

  // 풀페이지;
  $("#fullpage").fullpage({
    navigation: true,
    menu: ".nav",
    anchors: ["page1", "page2", "page3", "page4", "page5"],
    responsive: 0,
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

    $(".app_06").magnificPopup({
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

    $(".app_07").magnificPopup({
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

    $(".app_08").magnificPopup({
      type: "image",
      closeOnBgClick: true,
      closeOnContentClick: true,

      callbacks: {
        open: function () {
          fullpage_api.setAllowScrolling(false);
        },
        close: function () {
          fullpage_api.setAllowScrolling(true);
        },
      },
    });

    $(".app_09").magnificPopup({
      type: "image",
      closeOnBgClick: true,
      closeOnContentClick: true,

      callbacks: {
        open: function () {
          fullpage_api.setAllowScrolling(false);
        },
        close: function () {
          fullpage_api.setAllowScrolling(true);
        },
      },
    });

    $(".app_10").magnificPopup({
      type: "image",

      closeOnBgClick: true,
      closeOnContentClick: true,

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
    autoplaySpeed: 2000,
    arrows: true,
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
});
