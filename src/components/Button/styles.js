import styled from "styled-components";

export const Btn = styled.button`
background: ${ props=> props.isBack ? '#0A0A10': '#D93856'} ;
width: 90%;
margin: 35px auto 20px;
padding:24px 0;
border: 0;
color: #FFF;
font-weight: 600;
font-size: 17px;
line-height: 2px;
text-align: center;
`;