import React from 'react'
// 랜더링 : 작성한 코드를 화면에 출력하는 기능 
interface Item{
  name: string,
  isPacked: boolean
}
// 조건부 랜더링: 조건을 사용하여 작성한 코드를 화면에 출력하는 기능 
function Item({name,isPacked}: Item){
  // 구조 분해 할당 : 큰 상자에서 작은 상자들을 꺼내는 것 비슷하다 
return(
  <li>
    {/* A&&B= A의 값이 false인경우 B의 값 출력  */}
        {name}{isPacked&&' V'};
      </li>
)
}
//  부모 컴포넌트 
export default function Rendering01() {
  return (
    <div>
      <p>여행짐 목록</p>
      <ul>
        <Item
        name ="감자" isPacked ={true}
        />
      </ul>
      <ul>
        <Item
        name ="김밥" isPacked ={true}
        />
      </ul>
      <ul>
        <Item
        name ="음료수" isPacked ={false}
        />
      </ul>
    </div>
  )
}
