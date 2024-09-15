
import React from "react";
import { useInput } from './useInput';
import { timeLog } from "console";
//회원 가입을 버튼을 누르면 동시에 없앤다 
export default function Custom02() {
  // 커스텀 훅을 사용한 input창 상태 관리
  //# 이름 입력에 대한 관리
  const { 
    value: title, 
    bind: titleBind, // value 데이터 값, onChange 변화 함수
    reset: titleReset // 타입 함수 
  } = useInput("");

  //# 이메일 입력에 대한 관리
  const { 
    value: email, 
    bind: emailBind, 
    reset: emailReset 
  } = useInput("");

  const handleSubmit = () => {
    console.log(`회원가입 완료: `);
    titleReset();
    emailReset();
  };

  // useInput에 대한 호출 마다 새로운 데이터가 상태 관리
  // const [value, setValue] = useState(initialValue);

  // const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue(e.target.value);
  // } 

  // const reset = () => {
  //   setValue(initialValue);
  // }

  return (
    <div>
      <input
        type="text"
        name="username"
        placeholder="사용자 이름"
        // UI에 바인딩(적혀)되어 실질적으로 프로세스가 구현
        // value={titleBind.value}
        // onChange={titleBind.onChange}
        {...titleBind}
      />
      <button onClick={titleReset}>초기화</button>
      <input
        type="text"
        name="email"
        placeholder="사용자 이메일"
        {...emailBind}
        // value={emailBind.value}
        // onChange={emailBind.onChange}
      />
      <button onClick={emailReset}>이메일 초기화</button>
      <button onClick={handleSubmit}>회원가입</button>
    </div>
  );
}
