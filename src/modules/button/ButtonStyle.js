import styled from "styled-components";

export const MainButton = styled.button`
  width: 5rem;
  height: 2.5rem;
  background: plum;
  margin-left: 0.5rem;
  border: none;
  border-radius: 0.4rem;
  cursor: pointer;
  font-size: 1rem;
  color: Indigo;

  @media only screen and (max-width: 375px) {
    margin-top: .2rem;
  }
`;
