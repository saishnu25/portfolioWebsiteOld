import React from 'react';
import styled from "styled-components";

import '../fadeincenter.css'
import '../fadeinleft.css'
import '../fadeinright.css'

//Styled Update
export const StyledUpdates = styled.div`
    display: flex;
    justify-content: center;
    background-image: radial-gradient(circle, #181818 50%, #13327C 100%);
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
                    <h3><strong>My Playlists:</strong></h3>
                </p>

            </StyledDescriptionLeft>
            
            <StyledSpotify numberLinks = {10} >
                <ul>

                <a><iframe src="https://open.spotify.com/embed/playlist/1w5Otc9KAYcDjWBivyKEoK?theme=0" width="125%" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe></a>
                &nbsp;
                <a><iframe src="https://open.spotify.com/embed/playlist/771pmJP59aTLQ1oIlCWVgF?utm_source=generator&theme=0" width="125%" height="300" frameBorder="0" allowfullscreen="" allow="encrypted-media"></iframe></a>
                &nbsp;
                <a><iframe src="https://open.spotify.com/embed/playlist/3eoLzCyLavkEqdDAdZSaIG?utm_source=generator&theme=0" width="125%" height="300" frameBorder="0" allowfullscreen="" allow="encrypted-media"></iframe></a>
                &nbsp;
                <a><iframe src="https://open.spotify.com/embed/playlist/6jDIwD5OEpbpKpUkiJtHLg?utm_source=generator&theme=0" width="125%" height="300" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe></a>
                &nbsp;
                <a><iframe src="https://open.spotify.com/embed/playlist/0pwlwVGN9DQv86x2plgx4r?utm_source=generator&theme=0" width="125%" height="300" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe></a>
                &nbsp;
                <a><iframe src="https://open.spotify.com/embed/playlist/19t7rS2AHcrWO6GcQ9TJuZ?utm_source=generator&theme=0" width="125%" height="300" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe></a>
                &nbsp;
                <a><iframe src="https://open.spotify.com/embed/playlist/332L9mlUxdxUKpi31iv0R9?utm_source=generator&theme=0" width="125%" height="300" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe></a>
                &nbsp;
                <a><iframe src="https://open.spotify.com/embed/playlist/6C01VgquarayYLjpqrjKbX?utm_source=generator&theme=0" width="125%" height="300" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe></a>
                &nbsp;
                <a><iframe src="https://open.spotify.com/embed/playlist/2ctgnoikCsenpMPnAAQqmh?utm_source=generator&theme=0" width="125%" height="300" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe></a>
                &nbsp;
                <a><iframe src="https://open.spotify.com/embed/playlist/7kojP4fnG42vJcvMqAPgyO?utm_source=generator&theme=0" width="125%" height="300" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe></a>

                </ul>
            </StyledSpotify>


            
            <br/><br/><br/><br/>

        </div>

    
    )

}