import React from "react";
import styled from "styled-components";
import profile from '../images/ProfilePic.jpg'

import '../fadeincenter.css'
import '../fadeinleft.css'
import '../fadeinright.css'

//Styled About
export const StyledAbout = styled.div`
    display: flex;
    justify-content: center;
    background-image: radial-gradient(circle, #181818 65%, #2063DC 100%);
    padding-left: 5%;
    padding-right: 5%;
    font-size: 150%;
    font-family: verdana;
    color: white;
    line-height: 2;

`

//Styled Description
export const StyledDescription = styled.div`
    display: flex;
    justify-content: center;
    padding-left: 10%;
    padding-right: 10%;
    font-size: 115%;
    font-family: montserrat;
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
//About Function
export default function About(){
    return(

        <div>
            <StyledAbout className = "fade-in-left">
                <h2>
                    About
                </h2>
            </StyledAbout>

            <br/><br/>
            <ProfilePic className = "fade-in-center">
                 
                <img src = {profile} alt = "Profile" width = "300" height = "400"/>
            </ProfilePic>

            <br/><br/>
            <StyledDescription className = "fade-in-center">
                My name is Saishnu and I'm currently 20 years old. 
                I'm a 1st-year transfer student at California State University, Fresno from Kuala Lumpur, Malaysia. 
                I am currently aiming to complete my Bachelor's Degree (BSc) in the field of Computer Science in the United States. 
                This is the first proper webpage that I have made from scratch and would be constantly improving and updating it. 
                My current interests in the field are Game Development and Artificial Intelligence and I would hope that I could specialize in one of these fields later down the line.
            </StyledDescription>
            
            <br/><br/>
            <StyledDescription className = "fade-in-center">
                My passion for Game Development comes from my interest in playing video games ever since I was a child.
                I had always wanted to create/develop a game of my own for others to enjoy as I did and still do to this day.
                A couple of my favorite video games/franchises would be The Call of Duty Franchise, PlayStation's Spider-Man games, The Mass Effect Trilogy, God of War, and many more.
                I took up the interest in Artificial Intelligence a couple of years ago as I see it being the future like everyone else. 
                Our world is ever-developing therefore we need to keep up with the evolution of humanity.
                Having robots as well as automating numerous amounts of industries like production and manufacturing will help improve the overall efficiency within them.
            </StyledDescription>

            <br/><br/>
            <StyledDescription className = "fade-in-center">
                Other than Computer Science, I spend my time playing video games and listening to music.
                I can also play several instruments, namely the Piano, Clarinet, and Saxophone but I wouldn't consider myself to be a professional in any of them.
                When it comes to music, I enjoy listening to various genres but I would normally listen to R and B, Hip-Hop/Rap or Pop songs.
                My favorite artist of all time would be The Weeknd and I have been listening to him since 2016 ever since his breakout from his 2015 album, Beauty Behind the Madness.
            </StyledDescription>

            <br/><br/>
            <StyledDescription className = "fade-in-center">
                My native/first language would be English but, I can also understand/speak some Tamil and Bahasa Malaysia.
                I have also learned French, Italian as well as Chinese throughout my primary and secondary education. 
                Then again, I would not consider myself to be as fluent in them as compared to English.
            </StyledDescription>

            <br/><br/>
            <StyledDescription className = "fade-in-center">
                Nonetheless, I hope you would enjoy any forthcoming projects and updates to this website as it will be ever-evolving. 
                <br/><br/>
                
                From Saishnu
            </StyledDescription>

            <br/><br/><br/><br/>
            
        </div>

    )

}
