import styled from 'styled-components';

export const HeoreCard =  styled.div `
width: 246px;
height: 370px;
box-shadow: 8px 8px 10px rgba(47,49,49,1);
margin: 10px;
display: flex;
align-items: flex-end;
img {
  cursor:pointer;
  object-fit: cover;
  width: 246px;
  height: 370px;
}
h1 {
  position: absolute;
  margin-bottom:0;
  color: white;
  background-color: grey;
  width: 246px;
  text-align:center;
}
&:hover {
  box-shadow: 5px 8px 5px rgba(47,49,49,1);
}
i{
  cursor:pointer;
  margin-bottom:349px;
  margin-left:-18px;
}

`;