import { colors } from "@mui/material";
import React from "react";
import { Wrapper } from "../a_basic/d_Props/Props02";
type ChildType = {
  name: string;
};
function ChileComponent(props: { name: string }) {
  return <div> 안녕하세요 {props.name}</div>;
}
type MultiPropsType = {
  name: string;
  colorProps: string;
};
function MultiProps({ name, colorProps }: MultiPropsType) {
  return <div style={{ color: colorProps }}>반갑습니다. {name}님</div>;
}
export default function Props01() {
  const props = {
    colors : 'orange',
    name: "박영준"
  }
  return <div>
    <Wrapper>
      <ChileComponent name="이승아"/>
      <ChileComponent name="이도경"/>
    </Wrapper>
    <MultiProps name ='이기석' colorProps="pink"/>
    <MultiProps colorProps={""} {...props}/>
    <MultiProps colorProps="purple" name={""}/>
  </div>;
}
