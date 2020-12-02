// 풀페이지;
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
