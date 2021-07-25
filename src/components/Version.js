import React from 'react';
import styled from "styled-components";

import '../fadeincenter.css'
import '../fadeinleft.css'
import '../fadeinright.css'

//Styled Right Description
export const StyledDescriptionRight = styled.div`
    display: flex;
    justify-content: end;
    padding-left: 77%;
    padding-right: 0%;
    font-size: 115%;
    font-family: verdana;
    color: white;
    line-height: 2;
    align-items: center;

`

export default function Version(){
    return(

        <StyledDescriptionRight>   
                <h5>
                    Version 1.3 
                    <br/>
                    *Work in-progress, subject to change*
                </h5>
        </StyledDescriptionRight>

    )
}

