const line = document.querySelector('#line');
const lineLength = line.getTotalLength();

line.style.strokeDasharray = lineLength + ' ' + lineLength;
line.style.strokeDashoffset = lineLength;
window.addEventListener('scroll', scrollHandler)
function scrollHandler() {
// 현재 스크롤된 위치 까지의 높이값
const scrollTop = document.documentElement.scrollTop;
// 스크롤될 수 있는 전체 높이값
const scrollHeight = document.documentElement.scrollHeight;
// 화면(뷰포트)의 높이값
const clientHeight = document.documentElement.clientHeight;

// % 구하기
// 전체가 scrollHeight - clientHeight인 이유
// 스크롤할 수 있는 전체 높이값에서 현재 화면높이만큼 빼 줘야지 가장 밑의 스크롤까지 갔을 때 100%가 됨
const scrollPercentage = scrollTop / (scrollHeight - clientHeight)
// 스크롤 위치에 따른 길이 구해줌
const drawLength = lineLength * scrollPercentage

// stroke-dashoffset 속성값을 바꿔주면서 구현
// 스크롤 가장 위일 때 : 원래길이 - 0 (아무것도 안보임)
// 스크롤 가장 아래일 때 : 원래길이 - 원래길이 (전체 보임)
line.style.strokeDashoffset = lineLength - drawLength;
}