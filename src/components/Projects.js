import React from "react";
import styled from "styled-components";
import spaceinvaders from '../images/SpaceInvaders.png'
import menusystem from '../images/MenuSystem.png'
import tesladealership from '../images/TeslaDealership.png'

import '../fadeincenter.css'
import '../fadeinleft.css'
import '../fadeinright.css'

//Styled Project
export const StyledProject = styled.div`
    display: flex;
    justify-content: center;
    background-image: radial-gradient(circle, #181818 65%, #2063DC 100%);
    padding-left: 5%;
    padding-right: 5%;
    font-size: 150%;
    font-family: verdana;
    color: white;
    line-height: 1.5;

`

//Styled Left Description
export const StyledDescriptionLeft = styled.div`
    display: flex;
    justify-content: left;
    padding-left: 5%;
    padding-right: 5%;
    font-size: 125%;
    font-family: montserrat;
    color: white;
    line-height: 2;
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
    font-family: montserrat;
    color: white;
    line-height: 2;
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
    <strong> Note: This project is intended for assignment purposes, none of us are affiliated with Tesla in any way.</strong>
]

//Project Function
export default function Project(){

    return(
        <div>
            <StyledProject className = "fade-in-center">
                <h2>
                    Projects
                </h2>

                <br/><br/>
            </StyledProject>

            {/*SPACE INVADERS*/}

            <ImagesRight>
                <p>
                    <br/>
                     <img style = {{marginRight: "5%"}} src = {spaceinvaders} alt = "SpaceInvaders" width = "430" height = "330"/>
                </p>
               
            </ImagesRight>

            <StyledDescriptionLeft>
                <br/><br/><br/>
                <h3>
                    <a style = {{textDecoration: 'none' }} href = "https://scratch.mit.edu/projects/504725118/"><strong>Space Invaders</strong></a>
                </h3>
            </StyledDescriptionLeft>

            <StyledDescriptionLeft>
                <p>{SpaceInvaders}</p>
            </StyledDescriptionLeft>


            {/*MENU SYSTEM*/}

            <ImagesLeft>
                <p>
                    <br/><br/><br/><br/><br/>
                    <img style = {{marginLeft: "5%"}} src = {menusystem} alt = "MenuSystem" width = "640" height = "390"/>
                </p>
                
            </ImagesLeft>

            <StyledDescriptionRight>
                <br/><br/><br/><br/><br/>
                <h3>
                    <a style = {{textDecoration: 'none' }} href = "https://github.com/saishnu25/Menu_System_Project"><strong>Menu System</strong></a>
                </h3>
            </StyledDescriptionRight>

            <StyledDescriptionRight>
                {MenuSystem}
            </StyledDescriptionRight>


            {/*TESLA DEALERSHIP*/}

            <ImagesRight>
                <p>
                    <br/><br/><br/><br/><br/>
                    <img style = {{marginLeft: "5%"}} src = {tesladealership} alt = "MenuSystem" width = "500" height = "200"/>
                </p>
                
            </ImagesRight>

            <StyledDescriptionLeft>
                <br/><br/><br/>
                <h3>
                    <a style = {{textDecoration: 'none' }} href = "https://github.com/saishnu25/TeslaDealership_Project"><strong>Tesla Dealership (Unofficial)</strong></a>
                </h3>
            </StyledDescriptionLeft>
            
            <StyledDescriptionLeft>
                <p>{TeslaDealership}</p>
            </StyledDescriptionLeft>

            <br/><br/><br/><br/>

        </div>

    )
}