import React, { createContext, useState } from 'react'

//! 리액트 '전역' 상태 관리
// : 프로젝트 '전체 영역'에서 데이터를 공유할 수 있는 방법

//# Context API
// : 리액트에서 제공하는 '전역 상태 관리 도구'
// >> 컴포넌트 "트리" 전체에 걸쳐서 데이터를 효율적으로 전달

//? 상태 관리를 활용하는 로직
// : 사용자의 로그인 상태, 테마 설정, 언어 설정, 글꼴 설정

//! Context API의 주요 구성 요소
//? 1) Context 생성 - React.createContext
// - 데이터를 공유하고자 하는 범위에 대한 Context를 생성
// : 해당 객체는 Provider와 Consumer 컴포넌트를 포함

//? 2) Provider
// - Context 객체로부터 생성된 컴포넌트
// : Context를 구독하는 컴포넌트들에게 context의 변화를 알림
// : Provider는 value 속성을 통해 자식 컴포넌트에게 데이터를 전달

//? 3) Consumer
// : Provider로부터 데이터를 받아 사용하는 컴포넌트
// : Context 변화를 구독하는 컴포넌트
// - React에서는 useContext 훅을 사용하여 이 데이터에 접근하는 것이 일반적

// 사용자의 정보를 위한 인터페이스 설정
interface IUser {
  name: string;
}

interface UserContextType {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  // context 영역의 provider에서 관리할 데이터를 명시
  const [user, setUser] = useState<IUser | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default function Context() {
  return (
    <div>

    </div>
  )
}