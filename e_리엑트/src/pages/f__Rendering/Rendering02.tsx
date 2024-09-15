import React from 'react'

export default function Rendering02() {
  // 배열(list)랜더링 
  // map ,filter
  const people =['이승아','이도경','윤대휘','정규민','김소빈'];
  const peopleDesctiption =[
    {id:0,
    name: '이승아',
    job: "developer"
},
    {id:1,
    name: '이도경',
    job: "developer"
},
    {id:2,
    name: '윤대휘',
    job: "business"
},
    {id:3,
    name: '정규민',
    job: "developer"
},
    {id:4,
    name: '김소빈',
    job: "developer"
}
];
// map:  콜백 함수를 사용한 배열 랜더링 -전체 출력 
const listItem = people.map((person,index)=>{
  return <li key={index}>{person}</li>
})  
const  businessItem = peopleDesctiption.filter((person)=>// 배열에 필터를 해야한다 잘 보자 !!
person.job ==="business");
// 필터로 인해 나온 값을 다시 map을 사용해서  배열 형태로 표현 
const businessItemReder = businessItem.map((person)=>
<li key={person.id}>{person.name}  {person.job}</li>
)
return(
    <div>
      <h2>Map을 사용한 전체 리스트 랜더링 </h2>
      <ul>{listItem}</ul>
      <h2>filter를 사용한 필터링 배열 랜더링 </h2>
      <ul>{businessItemReder}</ul>
      </div>
)
}