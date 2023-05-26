import styled from "styled-components";

export const Container = styled.div`
background-color: #c1c1c1;
height: 100%;
min-height: 100vh;
display: flex;
align-items: center;
flex-direction: column;
`;

export const Image = styled.img`
width: 250px;
margin: 30px auto;
`;

export const FormOrder = styled.div`
background-color: #c4c4c4;
display: flex;
flex-direction: column;
padding: 10px;
margin: 20px 0;
width: 414px;
border-radius: 0px 20px 20px 0px;
box-shadow: 26px 20px 14px -3px rgba(0,0,0,0.4);
@media (max-width: 420px) {
  width: 100%;
  margin: 0;
  border-radius: 0;
  height: 100%;
  min-height: 100vh;
}
`;

export const Title = styled.h1`
font-weight: 700;
font-size: 28px;
line-height: 33px;
text-align: center;
color: #754481;
margin-bottom: 98px;
`;

export const Label = styled.p`
font-weight: 700;
font-size: 18px;
line-height: 22px;
letter-spacing: -0.408px;
color: #754481;
margin-left: 35px;
padding-bottom: 10px;
`;

export const Input = styled.input`
border: none;
width: 90%;
margin: 0 auto;
border-radius: 8px;
background: rgba(255, 255, 255, 0.25);
padding: 12px 8px;
margin-bottom: 35px;
color: #3d3b3b;
font-size: 16px;
outline: none;
`;

