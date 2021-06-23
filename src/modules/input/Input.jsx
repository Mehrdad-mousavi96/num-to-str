import React from 'react'

import { MainInput } from "./InputStyle"



const Input = ({value, setValue}) => {


    const inputHandler = (e) => {
        let numberInput = e.target.value;
        let final = parseInt(numberInput);

        setValue(final);
      
    }

    return (
        <div>
          
            <MainInput onChange={inputHandler}>
                
            </MainInput>
            
        
        </div>
        
    )
}


export default Input
