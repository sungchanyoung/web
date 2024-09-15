document.addEventListener('DOMContectLoaded', () => {
//DOMContectLoaded-js 내에서 문서 객체를 조작할 떄 사용 
header.textContent = 'HEADER ONE';
header.style.color = 'white';
header.style.backgroundColor = 'black';
header.style.padding = '10px';
});

document.addEventListener('DOMContentLoaded',() =>{
  const items = document.querySelectorAll('li');// 문서 객체를 여러개 추출하여 배열로 읽음 
  // querySelector()문서 객체를 한개를 추출하여 배열로 읽음 
  items.forEach(item => {
    item.textContent = 'List ITEM';
    item.style.color = 'pink';
    item.style.backgroundColor = 'black';
    item.style.listStyle = 'none';//클래스 추가:example 요소에 special이라는 CSS 클래스 를 추가함 
  });
});

//getElementById('아이디명'); -주어진 ID를 가진 요소를 찾아 해당 요소를 반환 
c