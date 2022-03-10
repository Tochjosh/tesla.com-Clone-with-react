import React from 'react'
import styled from 'styled-components'

function Section() {
  return (
    <Wrap>
        <ItemText>
            <h1>Model S</h1>
            <p>Order Online for Touchless Delivery</p>
        </ItemText>
        <Buttons>
        <ButtonGroup>
            <LeftButton>
                Custom Order
            </LeftButton>
            <RightButton>
                Existing Inventory
            </RightButton>
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
background-image: url('Tesla Images/images/model-s.jpg');
align-items: center;
`

const ItemText = styled.div`
text-align: center;
padding-top: 15vh;
`

const ButtonGroup = styled.div`
display: flex;
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
`

const DownArrow = styled.img`
height: 40px;
`

const Buttons = styled.div`
`