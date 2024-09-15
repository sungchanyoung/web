import React from "react";
import { Route, Routes } from "react-router-dom";

//# 고정될 컴포넌트
import NaviBar from "./components/NaviBar";

//# 경로에 따라 바뀌는 컴포넌트
import Basic from "./pages/a_basic";
import Hooks from "./pages/b_hooks";
import RouterComponent from "./pages/c_Router";
import RouterHook from "./pages/d_RouterHook";

import Parent from "./pages/c_Router/Parent";


import Example02 from "./pages/c_Router/Example02";

import Todos01 from "./pages/z_todos";
import index from "./pages/a_basic";
import Axios from "./pages/e_Axios/Axios01";
// import { useCountStore } from "./pages/f_GlobalState/Zustand01";
import GlobalState from "./pages/f_GlobalState/Context";
// import zustand01 from "./pages/f_GlobalState/Zustand01";
import Style from './pages/g_Style/Style01';

//! 리액트 프로젝트 개발 실행 명령어
// npm run start
// : http://localhost:3000 환경에서 실행

function App() {
  // const {count} = useCountStore();
  return (
    <div>
      <h1>React Project</h1>
      <NaviBar />

      {/* Routes태그: Route를 감싸는 컴포넌트 */}
      <Routes>
        {/* Route 태그: 단일 태그 사용 권장 */}
        {/* path속성: 해당 Routes 내에서 사용하는 URL 경로 */}
        {/* element속성: 해당 path속성과 일치할 경우 보여질 컴포넌트 */}
        <Route path="/basic" element={<Basic />} />
        <Route path="/hooks" element={<Hooks />} />

        {/*  
          해당 컴포넌트에 대한 메인경로/*
          >> 위 컴포넌트에서 라우트 경로에 따라 페이지 전환이 일어남을 명시
        */}
        <Route path="/routerComponent/*" element={<RouterComponent />} />

        {/*  
          해당 컴포넌트에 대한 메인경로
          >> 하위 컴포넌트를 추가 경로로 명시
        */}
        <Route path="/parent">
          {/* 
          index 경로를 사용하여 감싸는 Route 컴포넌트의 경로에 기본적으로 렌더링될 컴포넌트를 지정 
          */}
          <Route index element={<Parent />} />

          {/* parent 경로에 추가되는 path에 따라 보여지는 컴포넌트가 달라짐 */}
          <Route path="example02" element={<Example02 />} />
        </Route>

        <Route path="routerHook" element={<RouterHook />} />

        <Route path="axios" element={<Axios />} />
        <Route path="globalstate" element={<GlobalState />} />
        <Route path='style' element={<Style />} />

        {/* 예제 (참고용) */}
        <Route path="/todos01" element={<Todos01 />} />
      </Routes>
    </div>
  );
}

export default App;
