import styled from "styled-components";


export const Container = styled.input`
  width: ${({width})=> width ? width : "100%"};
  padding: var(--btn-middile);
  background-color: var(--shade-1);
  border: 1px solid #E6E9EC;  
  border-radius: 3px;
  font-size: var(--size14);
  &:active {
    border: 1px solid var(--green);  
  }
`;
