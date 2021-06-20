import React from "react";
import Input from "../input/Input"
import Button from "../button/Button"
import MainBox from "../main-box/MainBox"

import { Container, Top, Bottom } from "./AppStyle"

const App = () => {
  return (
    <Container>

      <Top>
        <Input />
        <Button />
      </Top>

      <Bottom>
        <MainBox />
      </Bottom>

    </Container>
  );
}

export default App;





