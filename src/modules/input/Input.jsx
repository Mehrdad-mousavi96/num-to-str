import React from 'react'

import { MainInput } from "./InputStyle"


const numToWord = (num) => {

    /////////////////////////////////////////////main requirements///////////////////////////////////////////////////
    
    const dash = "-"
    const and = " and ";
    const hundred = " hundred ";
    const thousand = " thousand ";
    const million = " million "
    
        let base = ['zero','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ',
    'eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen ']
        
    let tenth = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety']
    
    ///////////////////////////////////////////smaller than 20///////////////////////////////////////////////////////
    
    if (num < 20) {
        for (let a in base) {
            if (num === a) {
                return base[a]
            }
          }
    }

    //////////////////////////////////////////between 20 and 99//////////////////////////////////////////////////////
   
    else if (num >= 20 && num <= 99) {
        let left = num[0]
        let right = num[1]
        if (num % 10 === 0) {
            return tenth[left]
        }
    
            let main = tenth[left] + `${dash}` + base[right]
            return main

    }

    ///////////////////////////////////////////between 100 and 1000//////////////////////////////////////////////////
   
       

    else if (num >= 100 && num <= 999) {

        let left = num[0]
        let middle = num[1]
        let right = num[2]

        if (num % 100 === 0) {
            return base[left] + `${hundred}`
        }

        else if (num % 10 === 0) {
            if (middle == 1) {
                return base[left] + `${hundred}` + `${and}` + base[10]
            }

            return base[left] + `${hundred}` + `${and}` + tenth[middle]

        }

        else if (middle == 1) {

                return base[left] + `${hundred}` + `${and}` + base[middle + right]
        }

        else if (middle == 0) {
            let main = base[left] + `${hundred}` + `${and}` + base[right]
            return main
        }
        
        else {
            let main = base[left] + `${hundred}` + `${and}` + tenth[middle] + `${dash}` + base[right]
            return main
        }

    }

    return num;
}
    


const Input = ({ setValue }) => {

    const inputHandler = (e) => {

        let num = (e.target.value).toString();

        const final = numToWord(num)
        
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
