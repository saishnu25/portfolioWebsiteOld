import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from "styled-components";
import { NavbarButton } from "./external-components";

import github from '../images/Github.jpg'; //Github Icon
import instagram from '../images/Instagram.png'; //Instagram Icon
import twitter from '../images/Twitter.png'; //Twitter Icon
import linkedin from '../images/LinkedIn.png'; //LinkedIn Icon
import youtube from '../images/YouTube.png'; //YouTube Icon
import spotify from '../images/Spotify.png' //Spotify Icon
import navbarpic from '../images/NavbarPic.jpg' //Navbar Picture

import '../fadeincenter.css'
import '../fadeinleft.css'
import '../fadeinright.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 2,
  },
}));

export const StyledDiv = styled.div`

    display: flex;
    background-color: #181818;
    background-image: linear-gradient(-160deg, #181818 70%, #13327C 100%);
    display: flex;
    justify-content: left;
    padding-left: 2%;
    font-size: 100%;
    font-family: montserrat;
    color: white;
    align-items: center;

    ul{
        display: grid;
        grid-template-columns: repeat(${(props) => props.numberLinks}, auto);
        grid-gap: 1.5%;
        justify-content: end;
        width: 83vw;
        height: auto;

    }

    a{
        color: inherit;
        transition: 0.25s;
        &:hover{
            transform: scale(1.35);
        }
    }

`

const ButtonLinks = [{name: "Welcome"}, {name: "About"}, {name: "Projects"}, {name: "Updates"}]

export default function Navbar() {

  return (
    <div>
            <StyledDiv numberLinks = {6} className = "fade-in-center">
                <img alt ="Navbar Picture" src = {navbarpic} width = "30" height = "30"></img>
                &nbsp; &nbsp;
                <h4>saishnu25</h4>        
        
                <ul> 
                        {/*{ButtonLinks.map((item) => <NavbarButton  style = {{textTransform: 'none'}} size = "medium">{item.name}</NavbarButton>)}*/}
                        
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

                        <a href= "https://www.youtube.com/user/GhostProtocol2503">
                            <img alt = "YouTube" src = {youtube} width = "20" height = "20"></img></a>
                
                </ul>

            </StyledDiv>

        </div>
  );
}