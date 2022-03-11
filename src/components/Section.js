import React from 'react';
import styled from 'styled-components';

function Section({title, description, backgroundImage, leftButton, rightButton}) {
  return (
    <Wrap img={backgroundImage}>
        <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
        </ItemText>
        <Buttons>
        <ButtonGroup>
            <LeftButton>
                {leftButton}
            </LeftButton>
            {rightButton && 
            <RightButton>
                {rightButton}
            </RightButton> 
            }
        </ButtonGroup>
        <DownArrow src='Tesla Images/images/down-arrow.svg'/>
        </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
width: 100vw;
height: 100vh;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
justify-content: space-between;
background-image: ${props => `url("Tesla Images/images/${props.img}")`};
align-items: center;
`

const ItemText = styled.div`
text-align: center;
padding-top: 15vh;
`

const ButtonGroup = styled.div`
display: flex;
@media (max-width: 768px) {
    flex-direction: column;
}
`

const LeftButton = styled.div`
background-color: rgba(23, 26, 32, 0.8);
height: 40px;
width: 256px;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
margin: 0 10px 30px 10px;
opacity: 0.85;
text-transform: uppercase;
cursor: pointer;

`

const RightButton = styled(LeftButton)`
background: white;
color: black;
opacity: 0.65
`

const DownArrow = styled.img`
height: 40px;
animation: animateDown infinite 1.5s;
overflow-x: hidden;
`

const Buttons = styled.div`
`