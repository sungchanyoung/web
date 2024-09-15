import React, { useState } from "react";
import { useMemberStore } from "../../store/user.store";
import { useAuthStore } from "../../store/auth.store";

export default function Zustand02() {
  const { members, addMember } = useMemberStore();
  const { user, logout } = useAuthStore();
  const handelCreate = () => {
    addMember({
      id: 1,
      name: "이승아",
    });
  };
  return (
    // 원인 데이터는 바로 보여지는 게 아니라서 funtion이 의해 호출 되어야만 보여질수 있게 때문에  돌면서 user 끼리 서로 충돌
    <div>
      {members.map((user) => (
        <div >
          <p>
            {user.id}/{user.name}
          </p>
          <button onClick={() => handelCreate()}>추가</button>
          <hr />
          <Login />
          <button onClick={logout}>로그아웃</button>
      
        </div>
      ))}
      <p>Welcome {user}</p>
    </div>
  );
}
const Login = () => {
  const [username, setUserName] = useState("");
  const { login } = useAuthStore();
  return (
    <>
      <input
        type="text"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={() => login(username)}>로그인</button>
    </>
  );
};

