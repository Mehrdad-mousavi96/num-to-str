import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center;
`;

export const Top = styled.div`
    width: 100%;
    height: 25vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    @media only screen and (max-width: 375px) {
        display: grid;
        place-items: center;
    }
`;

export const Bottom = styled.div`
  width: 100%;
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;

`;