import styled from "styled-components";

export const MainInput = styled.input.attrs({
  placeholder: "Enter a Number",
  type: 'number'
})`
  width: 15rem;
  height: 2.5rem;
  background: lightblue;
  border-radius: 0.4rem;
  border: none;
  outline: none;
  font-size: 1.2rem;
  color: Indigo;
  padding: 0 1.2rem;
  cursor: text;
  display: flex;
  text-align: center;


  &::placeholder {
    color: black;
    font-size: 1.2rem;
    
  }

  :focus {
  }

  @media only screen and (max-width: 375px) {
    margin-top: 2rem;
  }
`;
