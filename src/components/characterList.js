import React from "react";
import styled from "styled-components";

    const CharacterCard = styled.div `
        background-color: #fff;
        border: 0;
        box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
        0 2px 4px rgba(0, 0, 0, 0.24);
        padding: 1rem;
        cursor: pointer;
        position: relative;
        margin: 1rem auto;
        `;
    const CharacterName = styled.h2`
    
    `;


const CharacterList = (props) => {
    return (
    <div>
        {props.info.map(info => (
            <CharacterListMaker key ={info.id} info={info}/>
        ))}
    </div>
    )
};

const CharacterListMaker = (props) => {
    return (
        <CharacterCard>
            <CharacterName>{props.info.name}</CharacterName>
        </CharacterCard>
    
       )
};

   export default CharacterList;