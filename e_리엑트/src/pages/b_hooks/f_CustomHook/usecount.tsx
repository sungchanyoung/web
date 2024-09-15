import { useState } from "react";
// 커스텀 훅 
// 사용되는 컴포넌트에 해당 훅의 기능이 정의된  것처럼 동작 
export function useCount(initialValue : number){
  const[ count,setCount] = useState<number>(initialValue);

  const  Increment = () => {setCount((prevCount) => prevCount + 1)};

  const  Decrement = () => { setCount((prevCount) => prevCount - 1)};
  const reset =() => setCount(initialValue);

  // 개게체 속성1, 메서드 3
  return {count,Increment,Decrement,reset};


}