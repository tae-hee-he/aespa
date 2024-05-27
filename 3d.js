    const moveImgSqc = new Array();

// 이미지 파일 경로를 배열에 저장합니다.
for (let i = 1; i < 7; i++) {
 moveImgSqc.push(`./img/aespa${i}.png`);
}

function preloading(movepreImgs) {
    let moveimgTotal = movepreImgs.length;
    for (let i = 1; i < moveimgTotal; i++) {
        let moveimg = new Image();
        moveimg.src = movepreImgs[i];
    }
}
preloading(moveImgSqc);

// 현재 이미지 인덱스를 저장할 객체를 생성합니다.
const moveimg = { movecrntImg: 0 },
    // 'craft' 클래스를 가진 HTML 엘리먼트를 선택하여 이미지를 표시합니다.
    moveimgTag = document.querySelector('.move');
    let tween_craft = TweenMax.to(moveimg,0.5, {
    movecrntImg: moveImgSqc.length - 1,
    roundProps: 'movecrntImg',
    repeat:7,	
    immediateRender: true,
  // Tween 업데이트 시마다 실행되는 콜백 함수입니다.
  onUpdate: function () {
        // craftimgTag의 'src' 속성을 현재 이미지의 경로로 설정합니다.
        moveimgTag.setAttribute('src', moveImgSqc[moveimg.movecrntImg]);

        // translateY 변환을 적용하여 파랄랙스 효과를 만듭니다.
        //저의 경우는 Y축으로 올리기 위해 설정하였습니다.
    
    }
});
const craftcontroller = new ScrollMagic.Controller();
// 크래프트 애니메이션을 위한 ScrollMagic 씬을 생성합니다.
new ScrollMagic.Scene({
    duration: 5000, // 씬의 지속 시간
    triggerElement: '.wrap', // 씬을 트리거하는 엘리먼트
    triggerHook: 0 // 트리거 지점, 0은 뷰포트의 맨 위를 의미합니다.
})
    .setTween(tween_craft) // TweenMax 애니메이션을 설정합니다.
    .addTo(craftcontroller) // 씬을 컨트롤러에 추가합니다.
 
//