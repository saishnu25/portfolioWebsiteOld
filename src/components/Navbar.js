import React from "react";
import styled from "styled-components";
import '../fadeincenter.css'
import '../fadeinleft.css'
import '../fadeinright.css'
import github from '../images/Github.jpg' //Github Icon
import linkedin from '../images/LinkedIn.png' //LinkedIn Icon
import instagram from '../images/Instagram.png' //Instagram Icon
import twitter from '../images/Twitter.png' //Twitter Icon
import spotify from '../images/Spotify.png' //Spotify Icon
import navbarpic from '../images/NavbarPic.jpg' //Navbar Picture

export const StyledDiv = styled.div`
    display: flex;
    background-color: #181818;
    background-image: linear-gradient(-160deg, #181818 70%, #13327C 100%);
    display: flex;
    justify-content: left;
    padding-left: 2.5%;
    font-size: 100%;
    font-family: verdana;
    color: white;
    align-items: center;

    ul{
        display: grid;
        grid-template-columns: repeat(${(props) => props.numberLinks}, auto);
        grid-gap: 2%;
        justify-content: end;
        width: 80vw;
    }

    a{
        color: inherit;
        transition: 0.25s;
        &:hover{
            transform: scale(1.25);
        }
    }

`

export default function Navbar(){

    return(
        <StyledDiv numberLinks = {5} className = "fade-in-center">
            <img alt ="Navbar Picture" src = {navbarpic} width = "30" height = "30"></img>
            &nbsp;
            <h3>saishnu25</h3>

            <ul>
                <a href = "https://github.com/saishnu25">
                    <img alt = "Github" src = {github} width = "20" height = "20"></img></a>

                <a href = "https://www.linkedin.com/in/saishnu25/">
                    <img alt = "LinkedIn" src = {linkedin} width = "20" height = "20"></img></a>

                <a href = "https://www.instagram.com/saishnu25/">
                    <img alt = "Instagram" src = {instagram} width = "20" height = "20"></img></a>

                <a href = "https://twitter.com/saishnu25">
                    <img alt = "Twitter" src = {twitter} width = "20" height = "20"></img></a>

                <a href = "https://open.spotify.com/user/12172915896">
                    <img alt = "Spotify" src = {spotify} width = "20" height = "20"></img></a>
                
            </ul>

        </StyledDiv>
    )
}