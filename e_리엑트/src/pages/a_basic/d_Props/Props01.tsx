import React from 'react'
import { Wrapper } from './Props02'
type ChildType ={
  name: string 
  colorProps : string
}
function ChildCoponent(_props: {name:string}){
  
  return(
    <div>안녕하세여/{_props.name}</div>
  )
}

export default function Props01() {
    const props ={
      colorProps :'red',
      name: "박영준"
    }
  return (
    <div>
      {/* props전달 - 부모 컴포넌트로 부터 데이터를 전달할 떄 사용 
      -props로 전달된 데이터는 자식 컴포넌트에서 readonly처럼 사용 
      */}
      <Wrapper>
        <ChildCoponent name="성찬영"/>
        <ChildCoponent name="이승아"/>

      </Wrapper>
    </div>
  )
}
