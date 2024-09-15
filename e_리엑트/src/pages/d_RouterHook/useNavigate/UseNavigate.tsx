import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function UseNavigate() {
  const navigate = useNavigate();
  // 네비케이트라는 이름으로 호출
  // 원하는 경로를 문자열 인수로 전달 하여 이동

  //useNavigate 훅의 옵션
  // state 옵션
  // 네이게이션 (경로)r과 함게 상태 전달이 가능

  //  조건부 네입게이션
  // 조건에 따른 페이지 전환
  //
  const goToParentPage = () => {
    console.log("버튼이 클릭됨 ");
    navigate("/parent", { state: { userId: 12345 } }); // router버튼을 클릭해서 그 페이지로 들어가만 12345가  나오낟
  };
  const goToHooksPage = () => {
    navigate("/hooks", { state: { username: "이승아" } }); // router버튼을 클릭해서 그 페이지로 들어가만 12345가  나오낟
    //경로 지정 시 / 유무의 차이
    // 1) / 작성 : 메인경로 + /경로
    //>> localhost:3000/parent

    //2) 미작성("parent")
    //:현재 경로 +/경로
    // >>localhost:3000/routerHooks/parent
  };
  const goToHomePage = () => {
    navigate("/");
  };
  const goToPrevPage = () => {
    navigate("/");
  };
  const isAuthricated = true;
  const handleSignUp = () => {
    // 로그인 하면 마이페이지 ,안하면 못들감  => 인증이 필요한 페이로 이동하려고 하는경우
    // 마이페이지 리뷰 작성 ,주문 조회등....
    // 인증된 사용자만 홈화면으로 이동 가능

    // 로그인되어 읶지 않으면 로그인 페이지로 이동
    if (isAuthricated) {
      navigate("/");
    }
  };
  // useEffect(() => {
  //   if (!isAuthricated) {
  //     navigate("/login");
  //   }
  // }, [isAuthricated, navigate]);

  // 임의의 버튼 클릭시 b_hooks의 index.tsx로이동
  // 이동시 {username: '이승아'}전달

  //b_hooks의 index.tsx에서 전달된 값을 받아
  // : 화면에 '이승아'출력
  return (
    <div>
      <p>UseeNavigate 페이지입니다 </p>

      <button onClick={goToParentPage}>parent 페이지</button>
      <button onClick={goToHooksPage}>Hooks 페이지</button>
      <button onClick={goToHomePage}>홈 페이지</button>
      <button onClick={goToPrevPage}>이전 페이지</button>
      <button onClick={handleSignUp}>회원가입 </button>
    </div>
  );
}
