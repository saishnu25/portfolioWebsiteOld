import React from "react";
import styled from "styled-components";
import spaceinvaders from '../images/SpaceInvaders.png'
import menusystem from '../images/MenuSystem.png'
import tesladealership from '../images/TeslaDealership.png'
import walkabout from '../images/WalkAbout.png'

import '../fadeincenter.css'
import '../fadeinleft.css'
import '../fadeinright.css'

//Styled Project
export const StyledProject = styled.div`
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

//Styled Left Description
export const StyledDescriptionLeft = styled.div`
    display: flex;
    justify-content: left;
    padding-left: 5%;
    padding-right: 5%;
    font-size: 125%;
    font-family: verdana;
    color: white;
    line-height: 2.5;
    align-items: center;

    a{
        color: lightblue;
        transition: 0.25s;
        &:hover{
            background-color: #606163;
        }
    }

`

//Image Left Layout
export const ImagesLeft = styled.div`
    display: flex;
    justify-content: left;
    padding-left: 5%;
    padding-right: 10%;
    align-items: left;
    float: left;
    
`

//Styled Right Description
export const StyledDescriptionRight = styled.div`
    display: flex;
    justify-content: right;
    padding-left: 5%;
    padding-right: 10%;
    font-size: 125%;
    font-family: verdana;
    color: white;
    line-height: 2.5;
    align-items: center;

    a{
        color: lightblue;
        transition: 0.25s;
        &:hover{
            background-color: #606163;
        }
    }

`

//Image Right Layout
export const ImagesRight = styled.div`
    display: flex;
    justify-content: right;
    padding-left: 5%;
    padding-right: 10%;
    align-items: right;
    float: right;
    
`

const SpaceInvaders = [
    "This game basically works the same as the classic game, Space Invaders. I used the resources provided by Scratch to create this game where the player only has 3 lives and would need to shoot all the aliens to win the game.",
    " Get hit by a bomb, you lose a life it's really simple."
]

const MenuSystem = [
    "In this project, I created a Netflix-like Streaming System where the user would be able to interact with the program.",
    " By using nodes and various linked list methods, this C++ program is intended to let the user to add, remove, and even categorize the movies they would be inputting to their program."
]

const TeslaDealership = [
    "A couple of my friends and I decided to create a Tesla Dealership program using Java for an assignment.",
    " The user would be able to select the various list of Tesla Models offered as of 2020 and would also be able to receive a receipt of their purchase.",
    " We have used the inheritance feature that is avaiable in Object Oriented Programming Languages like Java, hence there are a number of Java files spilt and are all called into the TeslaMain file.",
    " Note: This project is intended for assignment purposes, none of us are affiliated with Tesla in any way."
]

const WalkAbout = [
    "This is a small and short game that I created that is inspired by the famous text-based game, Zork.",
    " The game is really straightforward where the user would need to enter the numbers either 1 or 2 to pick their choices."
]

//Project Function
export default function Project(){

    return(
        <div>
            <StyledProject className = "fade-in-center">
                <h1>
                    Projects
                </h1>

                <br/><br/>
            </StyledProject>

            {/*SPACE INVADERS*/}

            <ImagesRight className = "fade-in-right">
                <p>
                    <br/>
                     <img style = {{marginRight: "5%"}} src = {spaceinvaders} alt = "SpaceInvaders" width = "500" height = "370"/>
                </p>
               
            </ImagesRight>

            <StyledDescriptionLeft className = "fade-in-left">
                <br/><br/><br/><br/>
                <h3>
                    <a style = {{textDecoration: 'none' }} href = "https://scratch.mit.edu/projects/504725118/"><strong>Space Invaders</strong></a>
                </h3>
            </StyledDescriptionLeft>

            <StyledDescriptionLeft className = "fade-in-left">
                <p>{SpaceInvaders}</p>
            </StyledDescriptionLeft>


            {/*MENU SYSTEM*/}

            <ImagesLeft className = "fade-in-left">
                <p>
                    <br/><br/><br/><br/><br/>
                    <img style = {{marginLeft: "5%"}} src = {menusystem} alt = "MenuSystem" width = "740" height = "490"/>
                </p>
                
            </ImagesLeft>

            <StyledDescriptionLeft className = "fade-in-right">
                <br/><br/><br/><br/><br/>
                <h3>
                    <a style = {{textDecoration: 'none' }} href = "https://github.com/saishnu25/Menu_System_Project"><strong>Menu System</strong></a>
                </h3>
            </StyledDescriptionLeft>

            <StyledDescriptionRight className = "fade-in-left">
                {MenuSystem}
            </StyledDescriptionRight>


            {/*TESLA DEALERSHIP*/}

            <ImagesRight className = "fade-in-right">
                <p>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <img style = {{marginLeft: "5%"}} src = {tesladealership} alt = "TeslaDealership" width = "550" height = "250"/>
                </p>
                
            </ImagesRight>

            <StyledDescriptionLeft className = "fade-in-left">
                <br/><br/><br/><br/><br/>
                <h3>
                    <a style = {{textDecoration: 'none' }} href = "https://github.com/saishnu25/TeslaDealership_Project"><strong>Unofficial Tesla Dealership</strong></a>
                </h3>
            </StyledDescriptionLeft>
            
            <StyledDescriptionLeft className = "fade-in-left">
                <p>{TeslaDealership}</p>
            </StyledDescriptionLeft>

            {/*WALKABOUT*/}

            <ImagesLeft className = "fade-in-left">
                <p>
                    <br/><br/><br/><br/>
                    <img style = {{marginLeft: "5%"}} src = {walkabout} alt = "WalkAbout" width = "650" height = "250"/>
                </p>
            </ImagesLeft>

            <StyledDescriptionLeft className = "fade-in-right">
                <br/><br/><br/><br/>
                <h3>
                    <a style = {{textDecoration: 'none' }} href = "https://github.com/saishnu25/WalkAbout"><strong>WalkAbout</strong></a>
                </h3>
            </StyledDescriptionLeft>

            <StyledDescriptionRight className = "fade-in-left">
                <p>{WalkAbout}</p>
            </StyledDescriptionRight>

            <br/><br/><br/><br/><br/><br/>

        </div>

    )
}