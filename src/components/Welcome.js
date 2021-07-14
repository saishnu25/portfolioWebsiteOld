import React from "react";
import styled from "styled-components";

import '../fadeincenter.css'
import '../fadeinleft.css'
import '../fadeinright.css'

//Styled Welcome
export const StyledWelcome = styled.div`
    display: flex;
    justify-content: center;
    font-size: 150%;
    font-family: verdana;
    color: white;
    line-height: 2;
`

//Styled Description
export const StyledDescription = styled.div`
    display: flex;
    justify-content: center;
    padding-left: 15%;
    padding-right: 15%;
    font-size: 115%;
    font-family: montserrat;
    color: white;
    line-height: 2;
    align-items: center;
`

//Welcome Function
export default function Welcome(){
    return(

        <div>
            <StyledWelcome className = "fade-in-center">
                <h1>
                    Welcome
                </h1>
            </StyledWelcome>

            <StyledDescription className = "fade-in-center">
                <br/>
                Hello there and welcome to my first ever website created by me, Saishnu!
                I'm a Computer Science major enrolled at California State University, Fresno.
                This webpage has been made from scratch and it will be constantly updated throughout my life and career.
                I created this page as I wanted to showcase a number of my projects/assignments made during my life as a Computer Scientist.
            </StyledDescription>

            <StyledDescription className = "fade-in-center">
                <br/>
                The languages I have worked with include C, C++, and Java.
                I have also had some experience with HTML and Scratch.
                I hope to become more fluent in the languages I have learned before as well as learning and improving constantly on other languages I come across in my studies and future work.
                Currently, my interest in the field of Computer Science are Game Development and Artificial Intelligence.   
            </StyledDescription>

            <StyledDescription className = "fade-in-center">
                <br/>
                I hope that I can accomplish my goal of creating this website and that you would stick around for the ride.
                For any future updates, be sure to check this page out!
                
            </StyledDescription>
            
            <br/><br/><br/><br/>

        </div>
    )
}
