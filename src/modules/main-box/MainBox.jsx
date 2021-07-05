import React, {useContext} from 'react'
// import { ValueContext } from '../core/context/Provider';

import { Container, Content } from "./MainBoxStyle"

const MainBox = ({value}) => {
    return (
        <Container>
            
            <Content>
                {value}
            </Content>
            
        </Container>
    )
}

export default MainBox
