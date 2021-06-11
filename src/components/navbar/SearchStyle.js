import styled from "styled-components";


export const SearchStyle = styled.section`
 padding: 20px 25px 30px;
 div{display: flex;
    justify-content: space-between;}
  
  img{ width:50px;}
 input {
    outline: none;
    border: none;
  }
  form i{
margin-right:15px;
  }
.fav{
  cursor:pointer;
}
@media (max-width: 280px){
  img{
    width:27px;
  }

  input{
    width:150px;
  }
}
  `;