import React from "react";
import styled from "styled-components";
import profile from '../images/ProfilePic.jpg'
import profile2 from '../images/ProfilePic2.JPG'
import profile3 from '../images/ProfilePic3.PNG'
import theweeknd from '../images/TheWeeknd.jpg'
import theweeknd2 from '../images/TheWeeknd2.jpg'
import theweeknd3 from '../images/TheWeeknd3.jpg'
import theweeknd4 from '../images/TheWeeknd4.jpg'

import '../fadeincenter.css'
import '../fadeinleft.css'
import '../fadeinright.css'

//Styled About
export const StyledAbout = styled.div`
    display: flex;
    justify-content: center;
    background-image: radial-gradient(circle, #181818 25%, #13327C 100%);
    padding-left: 5%;
    padding-right: 5%;
    font-size: 150%;
    font-family: verdana;
    color: white;
    line-height: 2.5;

`

//Styled Description
export const StyledDescription = styled.div`
    display: flex;
    justify-content: center;
    padding-left: 10%;
    padding-right: 10%;
    font-size: 115%;
    font-family: verdana;
    color: white;
    line-height: 2.5;
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
                <h1>
                    About
                </h1>
            </StyledAbout>

            <br/><br/>
            <ProfilePic className = "fade-in-center">

                <img src = {profile} alt = "Profile 1" width = "300" height = "400" hspace = "20"/> 
                <img src = {profile3} alt = "Profile 3" width = "400" height = "400"/>
                <img src = {profile2} alt = "Profile 2" width = "310" height = "400" hspace = "20"/>
                <img src = {theweeknd} alt = "The Weeknd" width = "425" height = "400" hspace = "20"/>
                
            </ProfilePic>

            <br/><br/>
            <StyledDescription className = "fade-in-center">
                My name is Saishnu and I'm 20 years old. 
                I'm a Junior transfer student at California State University, Fresno from Kuala Lumpur, Malaysia. 
                I'm aiming to complete my Bachelor's Degree (BSc) in the field of Computer Science in the United States by 2023. 
                This is the first official webpage that I have made from scratch and would be constantly improving and updating it. 
                My current interests in the field are Game Development, Web Development, and Artificial Intelligence/Machine Learning and I hope I could specialize in one of these fields down the line.
            </StyledDescription>
            
            <br/><br/>
            <StyledDescription className = "fade-in-center">
                My passion for Game Development comes from my interest in playing video games ever since I was a child.
                I had always wanted to create and develop a game of my own for others to enjoy playing like how I do even to this day.
                Here are a couple of my favorite video games of all time: Call of Duty: Modern Warfare (2019), Spider-Man (2018), God of War, Rainbow Six Siege, and those are just to name a few.
                I took up the interest in Artificial Intelligence a couple of years ago as I see it being the future like everyone else. 
                Our world is ever-developing therefore we need to keep up with the evolution of humanity.
                Having robots as well as automating numerous amounts of industries like production and manufacturing will help improve the overall efficiency within them.
                Ever since I had wanted to create my own website around 2018, I had an interest in web development because it allows my creativity to flow more as compared to the backend programming that I am currently doing in college.
            </StyledDescription>

            <br/><br/>
            <StyledDescription className = "fade-in-center">
                Other than Computer Science, I enjoy spending my time playing video games, listening to music, and travelling during my holidays.
                During my primary and secondary education, we were taught how to play various instruments.
                Due to that I can play the Piano, Clarinet, and Saxophone but I wouldn't consider myself to be a professional player for either instrument.
                When it comes to music, I enjoy listening to a number of genres. My top three genres I listen to mostly would be Hip-Hop, R&B, and Pop.
                My favorite artist of all time is The Weeknd, also known by his real name, Abel Tesfaye, and I have been listening to him since 2016.
            </StyledDescription>

            <br/><br/>
            <StyledDescription className = "fade-in-center">
                My first spoken language is English as that was what I grew up speaking for my whole life.
                Moreover I can also fairly converse in Tamil and Bahasa Malaysia due to how vastly diverse my home country, Malaysia, is.
                Throughout my education, I have also learned French, Italian as well as Mandarin throughout a big portion of my life.
                But, I would not consider myself to be as fluent in all these languages mentioned above as compared to English.
            </StyledDescription>

            <br/><br/>
            <StyledDescription className = "fade-in-center">
                Nonetheless, I hope you enjoy any forthcoming projects and updates to this website as it will be ever-evolving throughout the years. 
                <br/><br/>
                 Have a good one!
                 <br/>
                 - Saishnu
                 <br/><br/>
            </StyledDescription>

            <ProfilePic>

                <img src = {theweeknd2} alt = "The Weeknd" width = "425" height = "400" hspace = "20"/>
                <img src = {theweeknd3} alt = "The Weeknd" width = "600" height = "400" hspace = "20"/>
                <img src = {theweeknd4} alt = "The Weeknd" width = "420" height = "400" hspace = "20"/>

            </ProfilePic>

            <br/><br/><br/><br/>
            
        </div>

    )

}
