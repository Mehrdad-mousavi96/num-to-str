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

    //////////////////////////////////////////////numbers greater than 1000///////////////////////////////////////////

    else if (num >= 1000) {
        let left = num[0]
        let left1 = num[1]
        let right = num[2]
        let right1 = num[3]
        let mainLeft = left + left1
        let mainRight = right + right1;

        if (num % 1000 == 0) {
            let main = base[left] + `${thousand}`
            return main
        }

        else if (left1 == 0 && right == 0) {
            let main = base[left] + `${thousand}` + `${and}` + base[right1]
            return main
        }

        else if (right == 0 && right1 == 0) {
                let main = base[left] + `${thousand}` + `${and}` + base[left1] + `${hundred}`
                return main
            }
            

        else if (mainLeft % 10 != 0 && mainLeft < 19 && mainRight % 10 != 0 && mainRight < 19) {
            if (mainLeft == 10) {
                let main = base[10] + `${hundred}` + `${and}` + tenth[right] + base[mainRight] 
                return main
            }
            else if (mainRight <= 19 && right == 0) {
                let main = base[mainLeft] + `${hundred}` + `${and}` + base[right1]
                return main
            }
            let main = base[mainLeft] + `${hundred}` + `${and}` + tenth[right] + base[mainRight]
            return main;
        }

            else if (mainLeft % 10 == 0 && mainRight % 10 == 0) {
            if (left == 1 && left1 == 0 && right == 1 && right1 == 0) {
                let main = base[10] + `${hundred}` + `${and}` + base[10]
                return main
            }
            else if (mainRight == 10) {
                let main = tenth[left] + `${hundred}` + `${and}` + base[10]
                return main
            }
            
            else if (left == 1 && right != 1) {
                let main = base[10] + `${hundred}` + `${and}` + tenth[right]
                return main
            }
            let main = tenth[left] + `${hundred}` + `${and}` + tenth[right]
            return main
        }
            
            
        else if (mainLeft % 10 != 0 && mainLeft <= 19 && mainRight % 10 != 0) {
            if (mainRight <= 19) {
                let main = tenth[left] + `${hundred}` + `${and}` + base[mainRight]
                return main
            }
            let main = base[mainLeft] + `${hundred}` + `${and}` + tenth[right] + `${dash}` + base[right1]
            return main;
        }
            

        else if (mainLeft % 10 != 0 && mainLeft > 19 && mainRight % 10 != 0) {
            if (mainRight < 10) {
                let main = tenth[left] + `${dash}` + base[left1]  + `${hundred}` + `${and}` + base[right1]
                return main
            }
            else if (mainRight > 10 && mainRight < 19) {
                let main = tenth[left] + `${dash}` + base[left1]  + `${hundred}` + `${and}` + base[mainRight]
                return main
            }
            let main = tenth[left] + `${dash}` + base[left1]  + `${hundred}` + `${and}` + tenth[right] + `${dash}` + base[right1]
            return main;
        }
            

        else if (mainLeft % 10 != 0 && mainRight % 10 != 0 && mainRight < 19) {
            let main = tenth[left] + `${dash}` + base[left1] + `${hundred}` + base[mainRight]
            return main
        }

        else if (mainLeft > 19 && mainRight % 10 == 0) {
            if (mainRight == 10) {
                let main = tenth[left] + `${dash}` + base[left1] + `${hundred}` + `${and}` + base[10]
                return main
            }
            let main = tenth[left] + `${dash}` + base[left1] + `${hundred}` + `${and}` + tenth[right]
            return main
        }
            
        else if (mainLeft % 10 == 0 && mainRight % 10 != 0) {
            if (left == 1 && mainRight > 19) {
                let main = base[10] + `${hundred}` + `${and}` + tenth[right] + `${dash}` + base[right1]
                return main
            }
            else if (left == 1 && mainRight <= 19) {
                let main = base[10] + `${hundred}` + `${and}` + base[mainRight]
                return main
            }
            else if (mainRight > 19) {
                let main = tenth[left] + `${hundred}` + `${and}` + tenth[right] + `${dash}` + base[right1]
                return main
            }
            else if (mainRight <= 19) {
                let main = tenth[left] + `${hundred}` + `${and}` + base[mainRight]
                return main
            }
            let main = tenth[left] + `${hundred}` + `${and}` + base[mainRight]
            return main
        }
            
            
        else if (mainLeft % 10 != 0 && mainRight % 10 == 0) {
            if (mainRight == 10 && mainLeft <= 19) {
                let main = base[mainLeft] + `${hundred}` + `${and}` + base[10]
                return main
            }
            if (mainLeft > 19 && mainRight == 10) {
                let main = tenth[left] + `${dash}` + base[left1] + `${hundred}` + `${and}` + base[10]
                return main
            }
            else if (mainLeft <= 19 && mainLeft != 10) {
                let main = base[mainLeft] + `${hundred}` + `${and}` + tenth[right]
                return main
            }
            else if (mainLeft <= 19 && mainRight == 10) {
                 let main = base[mainLeft] + `${hundred}` + `${and}` + base[10]
                 return main
            }
            else if (mainLeft > 19 && mainRight == 10) {
                let main = tenth[left] + `${dash}` + base[left1] + `${hundred}` + `${and}` + tenth[right]
                return main
            }
            
         }
    }

    ////////////////////////////////////////greater than 10000/////////////////////////////////////////////////

    else if (num >= 10000) {
        let hi = num * 2
        return hi
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
