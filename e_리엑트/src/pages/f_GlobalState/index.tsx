import React from 'react'
import Context from './Context'
import Zustand01 from './Zustand01'
import Zustand02 from './Zustand02'
import { useMemberStore } from '../../store/user.store'

export default function index() {
  const {members} = useMemberStore();
  
  return (
    <div>
     {/* <Context/> */}
    <hr />
     {/* <Zustand01/> */}
     <Zustand02/>
    
    </div>
  )
}
