import React, { useContext, useState } from "react";
import Input from "../input/Input"
import MainBox from "../main-box/MainBox"

import { inputHandler } from "../input/Input"
import { Container, Top, Bottom } from "./AppStyle"
const App = () => {
  const [value, setValue] = useState('');

 

  return (
        <Container>

            <Top>
        <Input value={value} setValue={setValue}/>
            </Top>
        
          
          <Bottom>
            <MainBox value={value} />
          </Bottom>

        </Container>
  );
}

export default App;





