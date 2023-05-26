import styled from "styled-components";

export const Container = styled.div`
height: 100%;
min-height: 100vh;
display: flex;
align-items: center;
flex-direction: column;
background-color: #c1c1c1;
`;

export const Image = styled.img`
width: 150px;
margin: 30px auto 0;
`;

export const FormOrder = styled.div`
background-color: rgba(255, 255, 255, 0.25);
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
margin-bottom: 98px;
`;

export const ContainerOrder = styled.div`
width: 90%;
background: #c1c1c1;
border-radius: 14px;
margin: 0 auto 18px;
display: flex;
justify-content: space-between;
`;

export const Details = styled.div`
display: flex;
flex-direction: column;
justify-content:space-between;
`;

export const LabelOrder = styled.p`
font-weight: 500;
font-size: 18px;
line-height: 21px;
padding: 10px 27px;
`;

export const LabelName = styled.p`
font-weight: 700;
font-size: 18px;
line-height: 21px;
color: #754481;
padding: 10px 27px;
`;

export const BtnTrah = styled.button`
background-color: transparent;
border: none;
cursor: pointer;
width: fit-content;
`;

export const ImageTrash = styled.img`
padding: 10px;
`;
