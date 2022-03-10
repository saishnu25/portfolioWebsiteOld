import React from "react";
import styled from "styled-components";
import profile2 from '../images/ProfilePic2.jpg'

import '../fadeincenter.css'
import '../fadeinleft.css'
import '../fadeinright.css'

//Styled About
export const StyledAbout = styled.div`
    display: flex;
    justify-content: center;
    background-image: radial-gradient(circle, #181818 50%, #13327C 100%);
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
    justify-content: left;
    padding-left: 5%;
    padding-right: 5%;
    font-size: 100%;
    font-family: verdana;
    color: white;
    line-height: 2;
    align-items: center;
`

//Profile Picture Layout
export const ProfilePic = styled.div`
    display: flex;
    justify-content: right;
    padding-left: 5%;
    padding-right: 5%;
    align-items: right;
    float: right;
    
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
            <ProfilePic className = "fade-in-right">
                <img src = {profile2} alt = "Profile 1" width = "430" height = "435" hspace = "55"/> 
            </ProfilePic>

            <br/>
            <StyledDescription className = "fade-in-left">
                My name is Saishnu and I'm currently 21 years old. I was born and raised in Kuala Lumpur, Malaysia
                and I graduated high school in August of 2018. Currently, I'm a senior enrolled at California State 
                University, Fresno after transferring colleges from Malaysia to the United States in Spring 2021. 
                I'm aiming to obtain my Bachelor's Degree (BSc) by the end of 2023. During my free time, I enjoy 
                playing video games with my friends over even a story driven game by myself. Besides that I also 
                enjoying listening to music, mainly R and B, Hip-Hop/Rap, but I enjoy most genres nonetheless but 
                my favorite artist I enjoy listening to most of the time would be The Weeknd. I hope that some day, 
                I would be able to create a game of my own and publish it for everyone to enjoy which is why Game 
                Development is one of my interests at the moment. I also enjoy web development
                but I am still brand new to this and hope to learn more overtime. Aritifical Intelligence also peaked my interest in 
                Computer Science as I had a friend who basically showed me how interesting and big the field of AI is, and it is still 
                growing to this day as we keep creating and developing new forms of technology. 
            </StyledDescription>

            <br/>
            <StyledDescription className = "fade-in-left">
                Other than that, I also do enjoying spending my holidays travelling around, whether it be nationally or internationally. 
                Most of the time I travel around the world with my family and once in a while with a couple of friends. A couple of places
                I enjoyed visiting would be Dubai, Amsterdam, Los Angeles, and Bali. Growing up in Malaysia, a good majority of us are multilingual 
                as our national language is Bahasa Malaysia. As for me, I grew up natively speaking English as my first language,
                followed by Bahasa Malaysia as we were taught that in school. During my primary to early-secondary, I also learnt French and for 
                last 3 years of my high school I learnt Italian. I also understand my mother tongue, Tamil, but can't speak it that well
                and I also known a little bit of Mandarin as I have taken classes for that in the past. 
            </StyledDescription>

            <br/>
            <StyledDescription className = "fade-in-left">
                For my entire schooling life, I was in an international school and being in an international school, we were taught to be more well-rounded
                people. I learnt how to play instruments like the piano, clarinet, and saxophone. We were also encouraged to join clubs and participate in 
                sporting events held by the school. During my late secondary school, I was in the Model United Nations club and we attended our biggest conference
                in March 2018 which was hosted in Beijing, China by Harvard University.  
            </StyledDescription>

            <br/>
            <StyledDescription className="fade-in-left">
                That's a little about me!    
            </StyledDescription>

            <br/><br/><br/><br/>
            
        </div>

    )

}
