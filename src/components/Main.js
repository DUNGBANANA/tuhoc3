import React from "react";
import styled from "styled-components";
import Input from "./Input";
import vector1 from "../image/undraw_developer_activity_re_39tg 1.png"
import vector2 from "../image/undraw_web_developer_re_h7ie 1.png"
import vector3 from "../image/logo.png"
const main = () => {
  return (
    <Container>
      <Form2>
        <Logo>
        <img src={vector3} alt="" />
        </Logo>
      </Form2>
      <Form1>
        <Input placeholder ="Số điện thoại"/>
        
        <Input type ="text" placeholder="Email"/>
       
        <Input type ="password" placeholder="Mật khẩu" />
      
        <button id="no1">Lấy lại mật khẩu </button>

      </Form1>
      <Vector1>
      <img src ={vector1} alt="" /> 
        
      </Vector1>
      <Vector2>
      <img src ={vector2} alt="" /> 
      </Vector2>

    </Container>
  )
}
const Vector1 = styled.div`
  position: absolute;
  width: 411px;
  height: 317px;
  right: -20px;
  top: 270px;

`
const Vector2 = styled.div`
  position: absolute;
  width: 411px;
  height: 200px;
  left: 0px;
  top: 290px;

`
const Form2 =styled.form`
  position: absolute;
  width: 330px;
  height: 400px;
  left: 550px;
  top: 50px;
  background: #FFFFFF;
  border: 7px solid #FFFFFF;
  box-sizing: border-box;
  box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.51);
  border-radius: 20px; 
`
const Form1 = styled.form`
  position: absolute;
  width: 330px;
  height: 400px;
  left: 550px;
  top: 170px;

  background: #FFFFFF;
  border: 7px solid #FFFFFF;
  box-sizing: border-box;
  box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.51);
  border-radius: 20px; 
  #no1{
    width: 55%;
    height: 40px;
    background: #E42024;
    margin: 1rem 4.2rem;
    border: none;
    color:#FFFFFF;
    font-size: 16px;
    border-radius: 16px; 

 }
`
const Logo = styled.div`
  position: absolute;
  left: 110px;
  top: 10px;
  
`
const Container = styled.div`
`
export default main