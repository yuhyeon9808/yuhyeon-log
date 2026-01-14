$(document).ready(function () {
  // 풀페이지 초기화
  $('#fullpage').fullpage({
    // 네비게이션 설정
    navigation: true,
    navigationPosition: 'right',

    // 스크롤 및 속도
    scrollingSpeed: 1000,
    autoScrolling: true,
    fitToSection: true,

    // 반응형 (태블릿/모바일에서는 일반 스크롤)
    responsiveWidth: 1024,

    // 섹션 로드 후 이벤트
    afterLoad: function (origin, destination, direction) {
      // CSS 애니메이션 트리거는 클래스 기반으로 자동 수행됨
      console.log('Section ' + destination.index + ' 활성화');
    },
  });
});
