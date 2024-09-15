import React from "react";
import UseState01 from "./a_UseState/UseState01";
import UseState02 from "./a_UseState/UseState02";
import UseState03 from "./a_UseState/UseState03";
import UseState04 from "./a_UseState/UseState04";
import UseState05 from "./a_UseState/UseState05";
import ChildComponent from "./a_UseState/ChildComponent";
import UseRef01 from "./b_UseRef/UseRef01";
import UseRef02 from "./b_UseRef/UseRef02";
// import Practice01 from "./a_UseState/Practice01";
import UseRef03 from "./b_UseRef/UseRef03";
import UseEffect01 from "./c_UseEffect/UseEffect01";
import UseEffect02 from "./c_UseEffect/UseEffect02";
// import Practice02 from "./c_UseEffect/Practice02";
import Try01 from "./c_UseEffect/Try01";
import UseMemo01 from "./d_Use_Memo_Callback/UseMemo01";
import UseMemo02 from "./d_Use_Memo_Callback/UseMemo02";
import UseCallBack from "./d_Use_Memo_Callback/UseCallBack";
import UseReducer01 from "./e_UseReducer/UseReducer01";
import UseReducer02 from "./e_UseReducer/UseReducer02"
import Custom01 from "./f_CustomHook/Custom01";
import Custom02 from "./f_CustomHook/Custom02";
import { useLocation } from "react-router-dom";

export default function Index() {
  const location = useLocation();
  const{username} =location.state || {};
  return (
    <div>
      <h2>리액트의 hook</h2>

      <h1 style={{ background: "black", color: "white" }}>리액트 Hooks</h1>
      <h2>리액트 hooks -useState</h2>
      <h2>리액트-훅 커스텀 훅</h2>
      <Custom01/>
      <Custom02/>
      
      
      
      
      <UseState01 />
      <UseState02 />
      <UseState03 />
      <UseState04 />
      <UseState05 />

      <hr />
      <ChildComponent userData={undefined} />
      <hr />
      <UseRef01 />
      <UseRef02 />
      <UseRef03 />
      {/* <Practice01 /> */}
      <UseEffect01 />
      <UseEffect02 />
      {/* <Practice02 /> */}

      <UseMemo01 />
      <UseMemo02 />
      <h2>useCallbakc입니다</h2>
      <UseCallBack />
      <Try01 />
      Reduce 부분
      <UseReducer01 />
      <UseReducer02 />
      
      
    </div>
  );
}
