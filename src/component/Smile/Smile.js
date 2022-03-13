import React from 'react'
import styled from "styled-components"
import img from "./img/1.png"
import img2 from "./img/2.png"
import img3 from "./img/3.jpeg"

function Smile() {
  return (
    <div>
     <Container>
       <Wrapper>
          <First>
            <Ggg>
               <Try>
                 <img src={img}/>
               </Try>
               <DivImg>
                  <img src={img3}/>
               </DivImg>
            </Ggg>
           
          </First>
          <You>Your Reason To  <span>Smile</span></You>
          <Second>
              <Ggg1>
               <Try1>
                 <img src={img2}/>
               </Try1>
               <DivImg1>
                  <img src={img3}/>
               </DivImg1>
            </Ggg1>
          </Second>
       </Wrapper>
     </Container>
    </div>
  )
}

export default Smile

const You  = styled.div`
width: 500px;
height: auto;
left: 330px;
position: absolute;
font-weight: 500;
font-size: 55px;
text-align: center;
line-height:52px;
top: 200px;

span{
  color: #4085c7;
}





@media screen and (max-width : 800px){
  width: 300px;
  left: 80px;
  top:380px;
  font-size: 50px;
  
}
@media screen and (max-width : 375px){
  width: 300px;
  left: 40px;
  top:330px;
  font-size: 50px;
}
@media screen and (max-width : 320px){
  width: 300px;
  left: 10px;
  top:320px;
  font-size: 50px;
}
`

const DivImg= styled.div`
height: 230px;
width: 230px;

position: absolute;
top: 150px;
left: 90px;
border-radius:5px 5px 100px 100px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius:5px 5px 100px 100px;
}

/* @media screen and (max-width :768px){
top: 135px;
left: 200px;

} */
@media screen and (max-width :425px){
top: 135px;
left: 70px;
}
@media screen and (max-width :375px){
top: 125px;
left: 70px;
height: 200px;
width: 200px;
}
@media screen and (max-width :320px){
top: 120px;
left: 35px;
height: 200px;
width: 200px;
}

`
const DivImg1 = styled.div`
height: 230px;
width: 230px;
right: 100px;
position: absolute;
top: 150px;
border: 2px solid #d5d9cb;
border-radius:100px 0px 100px 100px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

img{
  width: 100%;
  height: 100%;
  object-fit: cover;
 border-radius:90px 0px 100px 100px;
 /* border: 2px solid #d5d9cb; */
}

/* @media screen and (max-width :768px){
top: 135px;
left: 200px;

} */
@media screen and (max-width :800px){
top: 510px;
left: 110px;

}
@media screen and (max-width :768px){
/* top: 510px;
left: 250px;
height: 330px;
width: 330px; */


}
@media screen and (max-width :425px){
top: 490px;
left: 85px;

}
@media screen and (max-width :375px){
top: 450px;
left: 80px;
height: 200px;
width: 200px;
}
@media screen and (max-width :320px){
top: 450px;
left: 50px;
height: 200px;
width: 200px;
}
`

const Ggg1 = styled.div`
height: 450px;
width: 80%;

/* @media screen and (max-width : 425px){
  margin-top: -50px;
} */
`

const Ggg = styled.div`
height: 450px;
width: 100%;
position: relative;
`


const Try = styled.div`
height: 310px;

/* background-position: center; */
width: 80%;

img{
  height: 100%;
  width: 100%;
}

@media screen and (max-width : 800px){
  width: 100%;
  height: 280px;

  
}

@media screen and (max-width : 375px){
  width: 100%;
  height: 245px;
 
}


`
const Try1 = styled.div`
height: 310px;

/* background-position: center; */
width: 80%;

img{
  height: 100%;
  width: 100%;
}

@media screen and (max-width : 800px){
  width: 100%;
  height: 280px;
  display: none;
}

@media screen and (max-width : 375px){
  width: 100%;
  height: 245px;
  margin-top:-50px;
}


`

const First = styled.div`
height: 450px;
width:50% ;
display: flex;

display: flex;




@media screen and (max-width : 800px){
  width: 90%;
  height: 450px;
}
`
const Second = styled.div`
height: 450px;
width:50% ;
display: flex;
justify-content: center;
align-items: center;





@media screen and (max-width : 800px){
  width: 90%;
  height: 450px;

}
`

const Container = styled.div`
width: 100%;
height: auto;

display: flex;
justify-content: center;
align-items: center;
padding-top: 20px;

`
const Wrapper = styled.div`
width: 90%;
height: 450px;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
position: relative;


@media screen and (max-width : 800px){
  width: 100%;
}

`
