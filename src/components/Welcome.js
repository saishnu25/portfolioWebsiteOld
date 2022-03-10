import React from "react";
import styled from "styled-components";
import profile1 from '../images/ProfilePic1.jpeg'

import '../fadeincenter.css'
import '../fadeinleft.css'
import '../fadeinright.css'

//Styled Description
export const StyledDescription = styled.div`
    display: flex;
    justify-content: center;
    padding-left: 25%;
    padding-right: 25%;
    font-size: 100%;
    font-family: verdana;
    color: white;
    line-height: 2;
    align-items: center;
`

//Profile Picture Layout
export const ProfilePic = styled.div`
    display: flex;
    justify-content: center;
    padding-left: 15%;
    padding-right: 15%;
    align-items: center;
    float: center;
    
`

//Welcome Function
export default function Welcome(){
    return(

        <div>
            <StyledDescription className = "fade-in-center">
            <h1>Introduction</h1>    
            </StyledDescription>

            <ProfilePic className = "fade-in-center">
                <img src = {profile1} alt = "Profile 1" width = "350" height = "350" hspace = "20"/> 
            </ProfilePic>

            <StyledDescription className = "fade-in-center">
                <br/>
                Hello there! Welcome to my website, my name is Saishnu and I'm currently a senior that's majoring
                in Computer Science at California State University, Fresno. I started this website to showcase about 
                myself and what has been going on throughout my life and my future career. This page will be an all 
                in one stop for my projects, as well as things that peak my interest from time to time. 
            </StyledDescription>

            <StyledDescription className = "fade-in-center">
                <br/>
                I have worked with a number of languages mainly: C++, C, Java, HTML and CSS, React JS, JavaScript, and x86 Assembly.
                I am hoping that I would be able to improve my proficiency in these languages overtime as well. I would also like to 
                learn new languages like Python in the near future too.My current topics of interest in the field would be Game 
                Development, Web Development, as well as Aritifical Intelligence (specifically Machine Language).   
            </StyledDescription>

            <StyledDescription className = "fade-in-center">
                <br/>
                Stay tuned for new and upcoming projects in the future!
                
            </StyledDescription>
            
            <br/><br/><br/><br/><br/>

        </div>
    )
}
