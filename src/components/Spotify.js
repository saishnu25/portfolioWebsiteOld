import React from 'react';
import styled from "styled-components";

import '../fadeincenter.css'
import '../fadeinleft.css'
import '../fadeinright.css'

//Styled Update
export const StyledUpdates = styled.div`
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
    font-size: 115%;
    font-family: verdana;
    color: white;
    line-height: 2.5;
    align-items: center;

    a{
        color: lightblue;
        transition: 0.25s;
        &:hover{
            background-color: gray;
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
    font-size: 115%;
    font-family: montserrat;
    color: white;
    line-height: 2.5;
    align-items: center;

    ul{
        display: grid;
        grid-template-columns: repeat(${(props) => props.numberLinks}, auto);
        grid-gap: 3%;
        justify-content: center;
        width: 80vw;
    }

    a{
        color: lightblue;
        transition: 0.25s;
        &:hover{
            transform: color;     
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

//Styled Spotify
export const StyledSpotify = styled.div`
    display: flex;
    justify-content: center;
    padding-left: 5%;
    padding-right: 10%;
    line-height: 2.5;
    align-items: center;

    ul{
        display: grid;
        grid-template-columns: repeat(${(props) => props.numberLinks}, auto);
        grid-gap: 3%;
        justify-content: center;
        width: 80vw;
    }

    a{
        color: lightblue;
        transition: 0.25s;
        &:hover{
            transform: color;
            transform: scale(1.1);
        }
    }

`

//Updates Function
export default function Updates(){

    return(
        <div>
            <StyledUpdates className = "fade-in-center">
            <h1>
                Spotify
            </h1>
            </StyledUpdates>

            <StyledDescriptionLeft className = "fade-in-left">
                <p>
                    <br/>
                    <h3><strong>Sneak peak to my playlists:</strong></h3>
                </p>

            </StyledDescriptionLeft>

            <StyledDescriptionLeft>
                <p>
                    These are some of the playlists that I have made with curated songs that I listen to on a daily basis and songs that keep me focused and motivated throughout the days, weeks, and months.
                    If you would like to explore more of what I listen to, hit the link above to check out my Spotify profile. 
                </p>
            </StyledDescriptionLeft>
            
            <StyledSpotify numberLinks = {5} >
                <ul>
                <a><iframe src="https://open.spotify.com/embed/playlist/1w5Otc9KAYcDjWBivyKEoK?theme=0" width="110%" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe></a>

                <a><iframe src="https://open.spotify.com/embed/playlist/332L9mlUxdxUKpi31iv0R9" width="110%" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe></a>

                <a><iframe src="https://open.spotify.com/embed/playlist/7kojP4fnG42vJcvMqAPgyO?theme=0" width="110%" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe></a>
                
                <a><iframe src="https://open.spotify.com/embed/playlist/6C01VgquarayYLjpqrjKbX" width="110%" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe></a>

                <a><iframe src="https://open.spotify.com/embed/playlist/0pwlwVGN9DQv86x2plgx4r?theme=0" width="110%" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe></a>
                </ul>
            </StyledSpotify>
            
            <br/><br/><br/><br/>

        </div>

    
    )

}