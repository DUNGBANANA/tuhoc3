import React from "react";
import styled from "styled-components";

const input = ({type, placeholder}) => {
  return (
    <Containner>
      <StyledInput 
      placeholder={placeholder && placeholder} 
      type ={type ? type:"text"}
      required
      autoComplete="off"
      />
    </Containner>
  )
}
const StyledInput = styled.input`
  font-size: 16px;
  color: #E42024;
  width: 68%;
  height: 50px;
  background: #d8d0d1;
  border-radius: 16px;
  border: none;
  margin: 1.4rem 0 ;
  padding: 0 1.5rem;
  transition: all 0.2s ease-in;
  &:hover{
    transform: translateY(-3px);
  }
`
const Containner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

`
export default input