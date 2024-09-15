import React from 'react'
import { NavLink } from 'react-router-dom'
// LINk vs NavLINk 
// a태그와 유사한 동작 
// >> 페이지를 새로고침하지 않고 spa의 다른 경로로 이동 
//>> 해당 링크  클릭 시  어느 경로로 이동할  것인지 to속성에 지정  

// 1) link
//>> 가장 기본적인 페이지 전환 컴포너트 (a태그)

//2) NavLink
// LINK와 유사하지만 현재 활성화된 페이지 경로에 대한 
// 추가적인 스타일 또는 클레스명 적용 가능 
export default function NaviBar() {
  const link =['/',
    'basic' , 'hooks', 'router-component','parent' ,"routerHook ",'axios','globalstate'
  ]
  return (
    <div style={{display: 'flex',
      flexWrap: 'wrap',
      justifyContent : 'space-around',
      margin :'10px',
      padding:'10px 20px'
      ,border : '1px solid black',
       borderRadius: '5px' 
    }}>
      {link.map(link =>(
        <NavLink 
        to={link} 
        key={link}
        style={({isActive}) => ({
            textDecoration:'none',
            color: isActive?'white': 'black',
            backgroundColor : isActive? 'red':'lightgray',
            padding: '10px 20px',
            borderRadius: '5px' 
        })}>
          {link ==='/' ? 'Home':  link}
        </NavLink>
      ))}
    </div>
  )
}
