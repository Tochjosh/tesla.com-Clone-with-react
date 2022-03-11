import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Container>
        <a>
            <img src="Tesla Images/images/logo.svg" alt="tesla logo" />
        </a>
        <Menu>
            <a href='#'>Model y</a>
            <a href='#'>Model s</a>
            <a href='#'>Model x</a>
            <a href='#'>Model 3</a>
        </Menu>
        <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Tesla Account</a>
        <a href='#'>Menu</a>
        </RightMenu>
    </Container>
  )
}

export default Header

const Container = styled.div`
min-height: 60px;
position: fixed;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 20px;
top: 0;
left: 0;
right: 0;

`

const Menu = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;

a {
    padding: 0 10px;
    text-transform: uppercase;
    font-weight: 400;
    flex-wrap: nowrap;
    font-size: 14px;
}

@media (max-width: 768px) {
    {
        display: none;
    }
}

`

const RightMenu = styled.div`

display: flex;
align-items: center;

a {
    font-weight: 400;
    text-transform: uppercase;
    margin-right: 10px;
    font-size: 14px;
}

`
