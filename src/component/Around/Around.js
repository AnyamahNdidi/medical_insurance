import React from 'react'
import styled from "styled-components"
import { AiOutlineArrowRight } from 'react-icons/ai';
import img from "./img/1.png"


function Around() {
  return (
   <Container>
     <Wrapper>
       <First>
            <Title>Amazing Hospitals Around You</Title>
            <Content>Try out amazing hospitals around you, with adequate facilities to provide exellent service and treatment to you when ever you need them</Content>
            <ButtonShow>
                <Button>
                   <Text>check out hospital</Text>
          <Circle>
          <AiOutlineArrowRight/>
          </Circle>
                  </Button>
            </ButtonShow>
       </First>
       <Second>
         <img src={img}/>
       </Second>

     </Wrapper>
   </Container>
  )
}

export default Around

const Text = styled.div`
color: white;
font-size: 17px;
font-weight: 400;
`

const Circle = styled.div`
background-color: #ffffff;
height: 30px;
width: 30px;
border-radius: 50%;
display: flex;
justify-content:center;
align-items: center;
`
const Button = styled.div`
width: 200px;
height: 40px;
background-color:#006de9;
border-radius: 40px;
display: flex;
justify-content: space-around;
align-items: center;
cursor: pointer;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
transform: scale(1);
transition: all 350ms;

:hover{
 transform: scale(1.1);
}


`

const ButtonShow = styled.div`
height: 100px;
width: 100%;

display: flex;
align-items: center;


`

const Content = styled.div`
width: 100%;
font-size: 18px;
margin-top: 25px;
color: #9a9b9d;
`

const Title = styled.div`
width: 100%;
height: auto;
font-size: 65px;
font-weight: 500;
line-height: 75px;
margin-top: 50px;

@media screen and (max-width : 800px){
  font-size: 45px;
  line-height: 50px;
}

`
const First = styled.div`
height: 450px;
width:50% ;
display: flex;

align-items: center;
flex-direction: column;


@media screen and (max-width : 800px){
  width: 90%;
  height: auto;
}
`
const Second = styled.div`
height: 450px;
width:50% ;


img{
  width: 100%;
  height: 100%;
  object-fit: contain;
}

@media screen and (max-width : 800px){
  width: 90%;
  height: auto;
}
`


const Container = styled.div`
width: 100%;
height: auto;
background-color: #f4f7fe;
display: flex;
justify-content: center;
align-items: center;
padding-top: 20px;

`
const Wrapper = styled.div`
width: 90%;
height: auto;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;

@media screen and (max-width : 800px){
  width: 100%;
}

`