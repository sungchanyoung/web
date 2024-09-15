import React, { Children } from 'react'
//React  입네트 핸들러 (handlle 다루다)
//사용자와의 상호 작용을 처리하기위한 함수 

// UI(사용자 인터페이스)에서 발생하는 입네트에 반응하여 , 동작되는 기능을 정의 

// #이벤트 핸들러 예시 
// 버튼 클릭시 >>console 창에 버튼클릭하셨습니다 

//이벤트 핸들러 전달  데이터 전달 
interface ConsoleProps {
  message:  string;
  children: React.ReactNode
}

function ConsoleButton({message,children} : ConsoleProps){
  return(
    <button onClick={() =>{console.log(-`${message}`)}}>
      {children}
    </button>
  )
}

export default function Handler01() {
  function handleButtonClick(){
    console.log('버튼을 클릭 하셨습니다')
  }
  return (
    <div>
      <button onClick={handleButtonClick}>클릭</button>
      <ConsoleButton message ='A를 동작'>
      A를 동작시키는 버튼   
      </ConsoleButton>
    </div>

  )
}
