import React from "react";
import styled from "styled-components";

import '../fadeincenter.css'
import '../fadeinleft.css'
import '../fadeinright.css'

//Styled Welcome
export const StyledWelcome = styled.div`
    display: flex;
    justify-content: center;
    font-size: 155%;
    font-family: verdana;
    color: white;
    line-height: 2.5;
`

//Styled Description
export const StyledDescription = styled.div`
    display: flex;
    justify-content: center;
    padding-left: 25%;
    padding-right: 25%;
    font-size: 115%;
    font-family: verdana;
    color: white;
    line-height: 2.5;
    align-items: center;
`

//Welcome Function
export default function Welcome(){
    return(

        <div>
            <StyledWelcome className = "fade-in-center">
                <h1>
                  வரவேற்பு | Bienvenue | Welcome | Selamat Datang | 欢迎   
                </h1>
            </StyledWelcome>

            <StyledDescription className = "fade-in-center">
                <br/>
                Hi there! Welcome to my first ever website created by me, Saishnu!
                I'm a Computer Science major currently enrolled at California State University, Fresno as a Junior.
                This webpage has been made from scratch and I will be constantly updating throughout my life and career.
                This page was created as I wanted to showcase my projects made during my life as a Computer Science major.
                I will also be posting certain things that I enjoy and have a passion for on this website alongside my projects. 
            </StyledDescription>

            <StyledDescription className = "fade-in-center">
                <br/>
                The languages I have worked with during my degree include C++, C, Java, HTML, Scratch, as well as some JavaScript and React.js (like this website!).
                I hope to improve my proficiency in the languages I have learned before as well as learning and improving constantly on other languages I come across in the future.
                My current interest in Computer Science are Game Development, Web Development, and Artificial Intelligence/Machine Learning.   
            </StyledDescription>

            <StyledDescription className = "fade-in-center">
                <br/>
                Be sure to check this page out and my socials for any future updates!
                
            </StyledDescription>
            
            <br/><br/><br/><br/><br/>

        </div>
    )
}
