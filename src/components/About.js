import React from "react";
import styled from "styled-components";
import profile from '../images/WebsiteProfilePic.jpeg'
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
    line-height: 1.5;

`

//Styled About
export const StyledAbout = styled.div`
    display: flex;
    justify-content: left;
    padding-left: 5%;
    padding-right: 5%;
    font-size: 130%;
    font-family: roboto;
    color: white;
    line-height: 1.5;

`
//Styled Description
export const StyledDescription = styled.div`
    display: flex;
    justify-content: left;
    padding-left: 5%;
    padding-right: 5%;
    font-size: 100%;
    font-family: roboto;
    color: white;
    line-height: 2;
    align-items: center;
`

//Profile Picture Layout
export const ProfilePic = styled.div`
    display: flex;
    justify-content: right;
    padding-left: 5%;
    padding-right: 10%;
    align-items: right;
    float: right;
    
`
//About Function
export default function About(){
    return(

        <div>
            <StyledWelcome className = "fade-in-center">
                <h1>
                    Welcome
                </h1>
            </StyledWelcome>

            <StyledAbout className = "fade-in-left">
                <h2>
                    About
                </h2>
            </StyledAbout>

            <ProfilePic className = "fade-in-right"> 
                <img style = {{marginRight: "5%"}} src = {profile} alt = "Profile" width = "300" height = "400"/>
            </ProfilePic>

            <StyledDescription className = "fade-in-left">
                Hello, welcome to my website! My name is Saishnu and I'm currently 20 years old. 
                I'm a 1st-year transfer student at California State University, Fresno from Kuala Lumpur, Malaysia. 
                I am currently aiming to complete my Bachelor's Degree (BSc) in the field of Computer Science in the United States. 
                This is the first proper webpage that I have made from scratch and would be attempting to constantly improve and update this as I progress throughout my career. 
                My current interests in the field are Game Development and Artificial Intelligence and I would hope that I could specialize in one of these fields later down the line.
            </StyledDescription>
            
            <br/><br/>
            <StyledDescription className = "fade-in-left">
                Other than Computer Science, I also enjoy playing video games and listening to music. 
                I can also play several instruments, namely: Piano, Clarinet, and Saxophone but I wouldn't consider myself to be a professional player in any of them. 
                My passion for playing video games comes from me just being able to relax and get immersed in what I play. 
                When it comes to music, I enjoy listening to various genres but the genres I listen to the most are R and B, Hip-Hop/Rap, as well as Pop. 
                My favorite artist of all time would be The Weeknd and I have been listening to him since 2016.
            </StyledDescription>

            <br/><br/>
            <StyledDescription className = "fade-in-left">
                I created this webpage as I wanted to post parts of my life and career and by creating this website, I hope I can accomplish this. <br/>
                I hope you would enjoy any future content on this page and stay tuned for future updates!
                <br/><br/>
                
                - Saishnu
            </StyledDescription>

            <br/><br/><br/><br/>
            
        </div>

    )

}
