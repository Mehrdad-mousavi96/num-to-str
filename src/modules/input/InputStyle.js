import styled from "styled-components";

export const MainInput = styled.input`
  width: 15rem;
  height: 2.5rem;
  background: PaleVioletRed;
  border-radius: 0.5rem;
  outline: none;
  border: none;
  font-size: 1.2rem;
  color: Indigo;
  padding: 0 1.2rem;
  cursor: pointer;

  :focus {
    box-shadow: 1px 2px 1px 1px PeachPuff;
  }
`;
